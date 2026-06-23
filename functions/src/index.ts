import { initializeApp } from "firebase-admin/app";
import { getRemoteConfig } from "firebase-admin/remote-config";
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { Resend } from "resend";
import { z } from "zod";

initializeApp();

const resendApiKey = defineSecret("RESEND_API_KEY");

const FROM_ADDRESS = "RZest Engineers <hello@rzestengineers.com>";
const FALLBACK_RECIPIENT_EMAIL = "fahad.ahmed@me.com";
const RECIPIENT_CACHE_TTL_MS = 5 * 60 * 1000;

let cachedRecipient: { value: string; expiresAt: number } | null = null;

async function getRecipientEmail(): Promise<string> {
  if (cachedRecipient && cachedRecipient.expiresAt > Date.now()) {
    return cachedRecipient.value;
  }

  try {
    const template = await getRemoteConfig().getTemplate();
    const param = template.parameters["contact_recipient_email"];
    const defaultValue = param?.defaultValue;
    const value =
      defaultValue && "value" in defaultValue ? defaultValue.value : FALLBACK_RECIPIENT_EMAIL;
    cachedRecipient = { value, expiresAt: Date.now() + RECIPIENT_CACHE_TTL_MS };
    return value;
  } catch (err) {
    console.error("Failed to fetch contact_recipient_email from Remote Config:", err);
    return FALLBACK_RECIPIENT_EMAIL;
  }
}

const contactSubmissionSchema = z.object({
  name: z.string().trim().min(1),
  email: z.email().trim(),
  company: z.string().trim().optional(),
  sector: z.string().trim().optional(),
  brief: z.string().trim().min(1),
});

type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const contactSubmission = onRequest(
  { secrets: [resendApiKey], cors: true, region: "asia-south1" },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    const parsed = contactSubmissionSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Missing or invalid required fields" });
      return;
    }

    const { name, email, company, sector, brief }: ContactSubmission = parsed.data;

    const resend = new Resend(resendApiKey.value());

    try {
      const { error } = await resend.emails.send({
        from: FROM_ADDRESS,
        to: await getRecipientEmail(),
        replyTo: email,
        subject: `New project brief from ${name}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company ?? "—")}</p>
          <p><strong>Sector:</strong> ${escapeHtml(sector ?? "—")}</p>
          <p><strong>Brief:</strong></p>
          <p>${escapeHtml(brief).replace(/\n/g, "<br>")}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        res.status(502).json({ error: "Failed to send message" });
        return;
      }

      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Contact submission failed:", err);
      res.status(500).json({ error: "Failed to send message" });
    }
  },
);

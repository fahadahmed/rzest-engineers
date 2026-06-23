import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";

const datoWebhookSecret = defineSecret("DATO_WEBHOOK_SECRET");
const githubDispatchToken = defineSecret("GITHUB_DISPATCH_TOKEN");

const GITHUB_REPO = "fahadahmed/rzest-engineers";
const DISPATCH_EVENT_TYPE = "dato-publish";

export const datoDeployWebhook = onRequest(
  { secrets: [datoWebhookSecret, githubDispatchToken], region: "asia-south1" },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method not allowed");
      return;
    }

    const providedSecret = req.get("X-Dato-Webhook-Secret");
    if (providedSecret !== datoWebhookSecret.value()) {
      res.status(401).send("Invalid webhook secret");
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/dispatches`, {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubDispatchToken.value()}`,
          "Content-Type": "application/json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        body: JSON.stringify({ event_type: DISPATCH_EVENT_TYPE }),
      });

      if (!response.ok) {
        console.error("GitHub dispatch failed:", response.status, await response.text());
        res.status(502).send("Failed to trigger deploy");
        return;
      }

      res.status(204).send();
    } catch (err) {
      console.error("Dato deploy webhook failed:", err);
      res.status(500).send("Failed to trigger deploy");
    }
  },
);

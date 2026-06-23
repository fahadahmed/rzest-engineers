import { useState, type SubmitEvent } from "react";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";
import { Avatar } from "../../atoms/Avatar/Avatar";
import "./ContactForm.css";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  sector: string;
  brief: string;
}

export interface ContactFormProps {
  sectors: string[];
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
  submitLabel?: string;
  thanksTitle?: string;
  thanksDescription?: string;
}

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  sectors,
  onSubmit,
  submitLabel = "Send message",
  thanksTitle = "Message sent — thank you.",
  thanksDescription = "A member of the RZest engineering team will be in touch shortly.",
}: ContactFormProps) {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (status === "success") {
    return (
      <div className="thanks">
        <Avatar initials="✓" signal size="lg" style={{ margin: "0 auto var(--s-4)" }} />
        <h3 className="display" style={{ fontSize: "var(--t-xl)" }}>
          {thanksTitle}
        </h3>
        <p style={{ maxWidth: "38ch", margin: "var(--s-3) auto 0" }}>{thanksDescription}</p>
      </div>
    );
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: ContactFormData = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      sector: String(formData.get("sector") ?? ""),
      brief: String(formData.get("brief") ?? ""),
    };

    setStatus("submitting");
    setErrorMessage(null);

    try {
      await onSubmit?.(data);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-2">
        <FormField label="Full name" name="name" required placeholder="Jane Doe" />
        <FormField label="Email" name="email" type="email" required placeholder="you@company.com" />
        <FormField label="Company" name="company" placeholder="Developer / firm" />
        <FormField
          as="select"
          label="Sector"
          name="sector"
          options={sectors.map((sector) => ({ label: sector, value: sector }))}
        />
      </div>
      <div style={{ marginTop: "var(--s-5)" }}>
        <FormField
          as="textarea"
          label="Project brief"
          name="brief"
          required
          placeholder="Tell us about the structure, scale, location and timeline…"
        />
      </div>
      {status === "error" && errorMessage && (
        <p role="alert" style={{ color: "var(--signal-deep)", marginTop: "var(--s-3)" }}>
          {errorMessage}
        </p>
      )}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        showArrow
        disabled={status === "submitting"}
        style={{ marginTop: "var(--s-5)" }}
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}

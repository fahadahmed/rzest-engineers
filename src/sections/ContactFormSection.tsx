import { ContactForm, type ContactFormData } from "../components/organisms/ContactForm/ContactForm";

/**
 * Thin page-glue wrapper: owns the actual submission behavior so the
 * ContactForm organism itself stays pure/presentational.
 */
export function ContactFormSection() {
  async function handleSubmit(data: ContactFormData) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Contact form submission failed");
    }
  }

  return (
    <ContactForm
      sectors={["Commercial", "Residential", "Institutional", "Industrial", "Hospitality"]}
      onSubmit={handleSubmit}
    />
  );
}

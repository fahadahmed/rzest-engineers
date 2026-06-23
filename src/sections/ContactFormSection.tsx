import { ContactForm, type ContactFormData } from "../components/organisms/ContactForm/ContactForm";

/**
 * Thin page-glue wrapper: owns the actual submission behavior so the
 * ContactForm organism itself stays pure/presentational. Replace the body
 * of handleSubmit with a real call to the Cloud Function once #13 lands —
 * nothing in src/components should need to change when that happens.
 */
export function ContactFormSection() {
  async function handleSubmit(data: ContactFormData) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Contact form submission (stub, not yet sent anywhere):", data);
  }

  return (
    <ContactForm
      sectors={["Commercial", "Residential", "Institutional", "Industrial", "Hospitality"]}
      onSubmit={handleSubmit}
    />
  );
}

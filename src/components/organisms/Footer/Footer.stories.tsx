import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  args: {
    brandLabel: "RZest Engineers",
    tagline: "Full-service structural engineering and project delivery consultancy.",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact",
    companyLinks: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
    contactLinks: [
      { label: "rzest@engineers.com", href: "mailto:rzest@engineers.com" },
      { label: "+92 99065 4171", href: "tel:+92990654171" },
      { label: "LinkedIn →" },
    ],
    copyrightLine: "© 2026 RZest Engineers. All rights reserved.",
    addressLine: "48-A/21, Nadia Sector A/2, Umar Kot — 69100",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

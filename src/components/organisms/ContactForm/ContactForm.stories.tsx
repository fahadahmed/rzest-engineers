import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactForm } from "./ContactForm";

const meta: Meta<typeof ContactForm> = {
  title: "Organisms/ContactForm",
  component: ContactForm,
  args: {
    sectors: ["Commercial", "Residential", "Institutional", "Industrial", "Hospitality"],
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./FormField";

const meta: Meta<typeof FormField> = {
  title: "Molecules/FormField",
  component: FormField,
  render: (args) => (
    <div style={{ width: 280 }}>
      <FormField {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const TextInput: Story = {
  args: { label: "Full name", name: "name", placeholder: "Jane Doe" },
};

export const EmailInput: Story = {
  args: { label: "Email", name: "email", type: "email", placeholder: "you@company.com" },
};

export const Textarea: Story = {
  args: {
    as: "textarea",
    label: "Project brief",
    name: "brief",
    placeholder: "Tell us about the structure, scale, location and timeline…",
  },
};

export const Select: Story = {
  args: {
    as: "select",
    label: "Sector",
    name: "sector",
    options: [
      { label: "Commercial", value: "commercial" },
      { label: "Residential", value: "residential" },
      { label: "Institutional", value: "institutional" },
    ],
  },
};

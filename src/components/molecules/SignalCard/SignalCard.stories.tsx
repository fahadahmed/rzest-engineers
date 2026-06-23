import type { Meta, StoryObj } from "@storybook/react-vite";
import { SignalCard } from "./SignalCard";

const meta: Meta<typeof SignalCard> = {
  title: "Molecules/SignalCard",
  component: SignalCard,
  args: {
    eyebrow: "Structural / Project",
    title: "Engineering the load path from concept to completion.",
  },
  render: (args) => (
    <div style={{ maxWidth: 340 }}>
      <SignalCard {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof SignalCard>;

export const Decorative: Story = {};

export const WithDescription: Story = {
  args: {
    description: "A full-service structural engineering and project delivery consultancy.",
  },
};

export const WithCornerLink: Story = {
  args: {
    cornerHref: "/services",
    cornerLabel: "View services",
  },
};

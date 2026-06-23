import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
  args: {
    "aria-label": "Open",
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: { children: "↗" },
};

export const Accent: Story = {
  args: { variant: "accent", children: "↗" },
};

export const AsLink: Story = {
  args: { href: "/services", "aria-label": "Go to services", children: "↗" },
};

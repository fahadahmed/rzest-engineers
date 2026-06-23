import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Start a Conversation",
    showArrow: true,
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "accent", "outline", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Accent: Story = {
  args: { variant: "accent" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "View Projects", showArrow: false },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Learn More", showArrow: false },
};

export const Small: Story = {
  args: { variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { variant: "accent", size: "lg" },
};

export const AsLink: Story = {
  args: { href: "/contact", children: "Start a Conversation" },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  args: {
    initials: "RA",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Large: Story = {
  args: { size: "lg" },
};

export const Signal: Story = {
  args: { signal: true },
};

export const LargeSignal: Story = {
  args: { size: "lg", signal: true },
};

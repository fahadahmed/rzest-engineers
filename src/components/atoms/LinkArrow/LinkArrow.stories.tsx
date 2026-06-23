import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkArrow } from "./LinkArrow";

const meta: Meta<typeof LinkArrow> = {
  title: "Atoms/LinkArrow",
  component: LinkArrow,
  args: {
    href: "/projects",
    children: "View projects",
  },
};

export default meta;
type Story = StoryObj<typeof LinkArrow>;

export const Default: Story = {};

export const WithoutArrow: Story = {
  args: { showArrow: false },
};

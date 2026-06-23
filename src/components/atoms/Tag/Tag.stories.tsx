import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Atoms/Tag",
  component: Tag,
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "signal", "ghost", "badge"] },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { children: "Structural" },
};

export const Solid: Story = {
  args: { variant: "solid", children: "Commercial" },
};

export const Signal: Story = {
  args: { variant: "signal", children: "Residential" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Institutional" },
};

export const Badge: Story = {
  args: { variant: "badge", children: "Industrial" },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Eyebrow } from "./Eyebrow";

const meta: Meta<typeof Eyebrow> = {
  title: "Atoms/Eyebrow",
  component: Eyebrow,
  args: {
    children: "About RZest Engineers",
  },
};

export default meta;
type Story = StoryObj<typeof Eyebrow>;

export const Default: Story = {};

export const Plain: Story = {
  args: { plain: true, children: "Company Story" },
};

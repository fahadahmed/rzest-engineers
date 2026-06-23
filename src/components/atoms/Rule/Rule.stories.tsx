import type { Meta, StoryObj } from "@storybook/react-vite";
import { Rule } from "./Rule";

const meta: Meta<typeof Rule> = {
  title: "Atoms/Rule",
  component: Rule,
};

export default meta;
type Story = StoryObj<typeof Rule>;

export const Dashed: Story = {
  args: { variant: "dashed" },
  render: (args) => (
    <div style={{ width: 320 }}>
      <Rule {...args} />
    </div>
  ),
};

export const Solid: Story = {
  args: { variant: "solid" },
  render: (args) => (
    <div style={{ width: 320 }}>
      <Rule {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical", height: 64 },
  render: (args) => (
    <div style={{ display: "flex", height: 64 }}>
      <Rule {...args} />
    </div>
  ),
};

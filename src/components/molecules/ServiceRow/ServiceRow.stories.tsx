import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServiceRow } from "./ServiceRow";

const meta: Meta<typeof ServiceRow> = {
  title: "Molecules/ServiceRow",
  component: ServiceRow,
  args: {
    index: "01",
    name: "Structural Design & Analysis",
  },
  render: (args) => (
    <div style={{ width: 360 }}>
      <ServiceRow {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ServiceRow>;

export const Default: Story = {};

export const Active: Story = {
  args: { active: true },
};

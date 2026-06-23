import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatStrip } from "./StatStrip";

const meta: Meta<typeof StatStrip> = {
  title: "Molecules/StatStrip",
  component: StatStrip,
  args: {
    stats: [
      { value: "100", unit: "+", label: "Projects Delivered" },
      { value: "11", unit: "+", label: "Years Engineering Expertise" },
      { value: "Multi-Sector", label: "Project Portfolio" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof StatStrip>;

export const Default: Story = {};

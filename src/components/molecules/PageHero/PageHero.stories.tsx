import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHero } from "./PageHero";
import { StatStrip } from "../StatStrip/StatStrip";

const meta: Meta<typeof PageHero> = {
  title: "Molecules/PageHero",
  component: PageHero,
  args: {
    eyebrow: "About RZest Engineers",
    title: "Engineering built on integrity, precision and experience.",
    description:
      "RZest Engineers delivers integrated structural engineering and project consultancy services.",
  },
};

export default meta;
type Story = StoryObj<typeof PageHero>;

export const Default: Story = {};

export const WithAccentText: Story = {
  args: {
    accentText: "precision",
  },
};

export const WithStats: Story = {
  args: {
    children: (
      <StatStrip
        stats={[
          { value: "100", unit: "+", label: "Projects Delivered" },
          { value: "11", unit: "+", label: "Years Engineering Expertise" },
        ]}
      />
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { CtaBand } from "./CtaBand";

const meta: Meta<typeof CtaBand> = {
  title: "Organisms/CtaBand",
  component: CtaBand,
  args: {
    title: "Let's Build with Confidence",
    description:
      "Partner with RZest Engineers for solutions that combine precision, performance and long-term value.",
    buttonLabel: "Start a Conversation",
    buttonHref: "/contact",
  },
};

export default meta;
type Story = StoryObj<typeof CtaBand>;

export const Signal: Story = {};

export const Ink: Story = {
  args: {
    variant: "ink",
    title: "Engineering Structures. Enabling Vision.",
    buttonLabel: "View Projects",
    buttonHref: "/projects",
    description: undefined,
  },
};

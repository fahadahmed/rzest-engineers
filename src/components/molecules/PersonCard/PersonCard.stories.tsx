import type { Meta, StoryObj } from "@storybook/react-vite";
import { PersonCard } from "./PersonCard";

const meta: Meta<typeof PersonCard> = {
  title: "Molecules/PersonCard",
  component: PersonCard,
  args: {
    name: "Jay Kishan",
    role: "Director & Principal Engineer",
    initials: "JK",
  },
};

export default meta;
type Story = StoryObj<typeof PersonCard>;

export const Default: Story = {};

export const Signal: Story = {
  args: {
    name: "Rabi Akhtar",
    role: "Managing Director",
    initials: "RA",
    signal: true,
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarStack } from "./AvatarStack";

const meta: Meta<typeof AvatarStack> = {
  title: "Molecules/AvatarStack",
  component: AvatarStack,
};

export default meta;
type Story = StoryObj<typeof AvatarStack>;

export const Default: Story = {
  args: {
    people: [{ initials: "RA" }, { initials: "JK" }, { initials: "SA" }],
  },
};

export const WithOverflow: Story = {
  args: {
    people: [
      { initials: "RA" },
      { initials: "JK" },
      { initials: "SA" },
      { initials: "SB" },
      { initials: "FB" },
    ],
    maxVisible: 3,
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { PartnerCard } from "./PartnerCard";

const meta: Meta<typeof PartnerCard> = {
  title: "Molecules/PartnerCard",
  component: PartnerCard,
  args: {
    tagLabel: "Architecture",
    name: "Studio Forma",
    meta: "Architecture & Interior · Karachi",
  },
  render: (args) => (
    <div style={{ maxWidth: 280 }}>
      <PartnerCard {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof PartnerCard>;

export const Default: Story = {};

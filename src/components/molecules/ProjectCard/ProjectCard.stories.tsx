import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectCard } from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Molecules/ProjectCard",
  component: ProjectCard,
  args: {
    href: "/projects/gulshan-one29",
    title: "Gulshan One29 Mall",
    meta: "Commercial · Muzza View",
    sector: "commercial",
  },
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <ProjectCard {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const WithThumbnail: Story = {
  args: {
    thumbnailSrc:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&q=80&auto=format&fit=crop",
  },
};

export const WithoutThumbnail: Story = {};

export const Residential: Story = {
  args: {
    href: "/projects/strata-estate",
    title: "Strata Estate",
    meta: "Residential · Strata Dev.",
    sector: "residential",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&q=80&auto=format&fit=crop",
  },
};

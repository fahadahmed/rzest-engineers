import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectsFilter } from "./ProjectsFilter";

const projects = [
  {
    id: "1",
    href: "/projects/gulshan-one29",
    title: "Gulshan One29 Mall",
    meta: "Commercial · Muzza View",
    sector: "commercial",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&q=80&auto=format&fit=crop",
  },
  {
    id: "2",
    href: "/projects/world-trade-center",
    title: "World Trade Center",
    meta: "Commercial · WTC Holdings",
    sector: "commercial",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    href: "/projects/strata-estate",
    title: "Strata Estate",
    meta: "Residential · Strata Dev.",
    sector: "residential",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    href: "/projects/medical-college",
    title: "Medical College & Hospital",
    meta: "Institutional · Healthcare Trust",
    sector: "institutional",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80&auto=format&fit=crop",
  },
];

const sectors = [
  { label: "Commercial", value: "commercial" },
  { label: "Residential", value: "residential" },
  { label: "Institutional", value: "institutional" },
  { label: "Industrial", value: "industrial" },
];

const meta: Meta<typeof ProjectsFilter> = {
  title: "Organisms/ProjectsFilter",
  component: ProjectsFilter,
  args: {
    projects,
    sectors,
  },
};

export default meta;
type Story = StoryObj<typeof ProjectsFilter>;

export const Default: Story = {};

export const NoResultsForSector: Story = {
  args: {
    projects: [],
    noResultsMessage: "No projects in this sector yet.",
  },
};

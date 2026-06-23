import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServicesShowcase } from "./ServicesShowcase";

const services = [
  {
    id: "design",
    index: "01",
    name: "Structural Design & Analysis",
    description:
      "We perform analysis for gravity, lateral, seismic and wind loads to ensure safety, efficiency and constructability at every scale.",
  },
  {
    id: "feasibility",
    index: "02",
    name: "Feasibility & Planning",
    description:
      "Early-stage structural feasibility, scheme options and constructability review to de-risk decisions before design begins.",
  },
  {
    id: "detailed",
    index: "03",
    name: "Detailed Engineering",
    description:
      "Coordinated detailed design and BIM modelling across disciplines, resolved to fabrication-ready precision.",
  },
  {
    id: "tender",
    index: "04",
    name: "Tender & Documentation",
    description:
      "Complete drawing sets, specifications and BOQs that translate intent into accountable, biddable scope.",
  },
];

const meta: Meta<typeof ServicesShowcase> = {
  title: "Organisms/ServicesShowcase",
  component: ServicesShowcase,
  args: {
    services,
    viewAllHref: "/services",
  },
};

export default meta;
type Story = StoryObj<typeof ServicesShowcase>;

export const Default: Story = {};

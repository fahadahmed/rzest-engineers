import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectFacts } from "./ProjectFacts";

const meta: Meta<typeof ProjectFacts> = {
  title: "Molecules/ProjectFacts",
  component: ProjectFacts,
  args: {
    facts: [
      { key: "Client", value: "Muzza View Development" },
      { key: "Sector", value: "Commercial" },
      { key: "Type", value: "Mixed-Use Retail" },
      { key: "Location", value: "Gulshan, Note Sector 129" },
      { key: "Role", value: "Structural Engineer" },
      { key: "Status", value: "Delivered" },
    ],
  },
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <ProjectFacts {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ProjectFacts>;

export const Default: Story = {};

export const WithCta: Story = {
  args: {
    ctaLabel: "Discuss a similar project",
    ctaHref: "/contact",
  },
};

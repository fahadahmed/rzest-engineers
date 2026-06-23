import type { Meta, StoryObj } from "@storybook/react-vite";
import { Placeholder } from "./Placeholder";

const meta: Meta<typeof Placeholder> = {
  title: "Atoms/Placeholder",
  component: Placeholder,
  args: {
    label: "Site photo",
    height: 200,
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <Placeholder {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

export const Empty: Story = {};

export const WithImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80&auto=format&fit=crop",
    alt: "Hero render",
    label: "Hero render",
  },
};

export const BrokenImageFallsBackToLabel: Story = {
  args: {
    src: "https://example.invalid/broken.jpg",
    alt: "Broken",
    label: "Project photo",
  },
};

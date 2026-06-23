import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  args: {
    brandLabel: "RZest Engineers",
    brandHref: "/",
    navItems,
    currentPath: "/",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const ActiveAboutPage: Story = {
  args: { currentPath: "/about" },
};

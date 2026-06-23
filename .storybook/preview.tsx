import { useEffect, type ReactNode } from "react";
import type { Decorator, Preview } from "@storybook/react-vite";
import "../src/styles/rzest-ds.css";

function ThemeDecorator({ theme, children }: { theme: string; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <div style={{ minHeight: "100vh", padding: "var(--s-6)" }}>{children}</div>;
}

const withTheme: Decorator = (Story, context) => (
  <ThemeDecorator theme={context.globals.theme ?? "light"}>
    <Story />
  </ThemeDecorator>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Light / dark theme (data-theme)",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;

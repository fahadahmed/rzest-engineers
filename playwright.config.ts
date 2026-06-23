import { defineConfig, devices } from "@playwright/test";
import { STORYBOOK_PORT, STORYBOOK_URL } from "./tests/visual/storybook-url";

const baseURL = STORYBOOK_URL;

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: `pnpm build-storybook --quiet && pnpm exec http-server storybook-static -p ${STORYBOOK_PORT} -c-1 --silent`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});

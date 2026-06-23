import { test, expect } from "@playwright/test";
import { STORYBOOK_URL } from "./storybook-url";

interface StoryIndexEntry {
  id: string;
  type: string;
  title: string;
  name: string;
}

interface StoryIndex {
  entries: Record<string, StoryIndexEntry>;
}

async function getStoryEntries(): Promise<StoryIndexEntry[]> {
  const res = await fetch(`${STORYBOOK_URL}/index.json`);
  const index = (await res.json()) as StoryIndex;
  return Object.values(index.entries).filter((entry) => entry.type === "story");
}

const storyEntries = await getStoryEntries();

for (const theme of ["light", "dark"] as const) {
  test.describe(`${theme} theme`, () => {
    for (const entry of storyEntries) {
      test(`${entry.title} / ${entry.name}`, async ({ page }) => {
        await page.goto(`/iframe.html?id=${entry.id}&viewMode=story&globals=theme:${theme}`, {
          waitUntil: "networkidle",
        });
        const root = page.locator("#storybook-root");
        await expect(root).toBeVisible();
        await expect(page).toHaveScreenshot(`${entry.id}-${theme}.png`, {
          maxDiffPixelRatio: 0.02,
        });
      });
    }
  });
}

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageHero } from "./PageHero";

describe("PageHero", () => {
  it("includes the wrap class so its content aligns with the rest of the page", () => {
    const { container } = render(
      <PageHero eyebrow="About RZest Engineers" title="Engineering built on integrity" />,
    );
    expect(container.firstChild).toHaveClass("wrap", "page-hero");
  });

  it("renders eyebrow, title and description", () => {
    render(
      <PageHero
        eyebrow="About RZest Engineers"
        title="Engineering built on integrity"
        description="Delivering precision and trust."
      />,
    );
    expect(screen.getByText("About RZest Engineers")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Engineering built on integrity" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Delivering precision and trust.")).toBeInTheDocument();
  });

  it("applies a custom title max-width when given (each mockup wraps its h1 differently)", () => {
    render(<PageHero eyebrow="Contact" title="Let's start a conversation." titleMaxWidth="14ch" />);
    expect(screen.getByRole("heading")).toHaveStyle({ maxWidth: "14ch" });
  });

  it("colors the accentText substring within the title (mockups highlight a phrase per page)", () => {
    render(
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation."
        accentText="conversation."
        accentColor="var(--signal-deep)"
      />,
    );
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Let's start a conversation.");
    const accentSpan = screen.getByText("conversation.");
    expect(accentSpan.tagName).toBe("SPAN");
    expect(accentSpan).toHaveStyle({ color: "var(--signal-deep)" });
  });

  it("renders children between the rules (e.g. a stat strip)", () => {
    render(
      <PageHero eyebrow="Projects" title="Projects across diverse sectors">
        <div data-testid="stats">stats go here</div>
      </PageHero>,
    );
    expect(screen.getByTestId("stats")).toBeInTheDocument();
  });
});

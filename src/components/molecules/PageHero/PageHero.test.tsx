import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageHero } from "./PageHero";

describe("PageHero", () => {
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

  it("renders children between the rules (e.g. a stat strip)", () => {
    render(
      <PageHero eyebrow="Projects" title="Projects across diverse sectors">
        <div data-testid="stats">stats go here</div>
      </PageHero>,
    );
    expect(screen.getByTestId("stats")).toBeInTheDocument();
  });
});

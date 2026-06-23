import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { CtaBand } from "./CtaBand";

describe("CtaBand", () => {
  it("renders the signal variant by default", () => {
    const { container } = render(
      <CtaBand
        title="Let's Build with Confidence"
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />,
    );
    expect(container.firstChild).toHaveClass("cta-band");
    expect(container.firstChild).not.toHaveClass("cta-band--ink");
  });

  it("renders the ink variant when requested", () => {
    const { container } = render(
      <CtaBand
        variant="ink"
        title="Engineering Structures."
        buttonLabel="View Projects"
        buttonHref="/projects"
      />,
    );
    expect(container.firstChild).toHaveClass("cta-band--ink");
    expect(screen.getByRole("link")).toHaveClass("btn--accent");
  });

  it("renders the description when provided", () => {
    render(
      <CtaBand title="Title" description="Partner with us." buttonLabel="Go" buttonHref="/go" />,
    );
    expect(screen.getByText("Partner with us.")).toBeInTheDocument();
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LinkArrow } from "./LinkArrow";

describe("LinkArrow", () => {
  it("renders the label and arrow glyph", () => {
    render(<LinkArrow href="/projects">View projects</LinkArrow>);
    const link = screen.getByRole("link", { name: /View projects/ });
    expect(link).toHaveClass("link-arrow");
    expect(link).toHaveTextContent("→");
  });

  it("omits the arrow glyph when showArrow is false", () => {
    render(
      <LinkArrow href="/projects" showArrow={false}>
        View projects
      </LinkArrow>,
    );
    expect(screen.getByRole("link")).not.toHaveTextContent("→");
  });
});

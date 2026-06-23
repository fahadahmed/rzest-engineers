import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("requires and renders an aria-label", () => {
    render(<IconButton aria-label="Open menu" />);
    expect(screen.getByRole("button", { name: "Open menu" })).toBeInTheDocument();
  });

  it("renders as a link when href is given", () => {
    render(
      <IconButton aria-label="Go to contact" href="/contact">
        ↗
      </IconButton>,
    );
    expect(screen.getByRole("link", { name: "Go to contact" })).toHaveAttribute("href", "/contact");
  });

  it("applies the accent variant class", () => {
    render(<IconButton aria-label="Accent" variant="accent" />);
    expect(screen.getByRole("button")).toHaveClass("icon-btn--accent");
  });

  it("defaults to an arrow glyph", () => {
    render(<IconButton aria-label="Default" />);
    expect(screen.getByRole("button")).toHaveTextContent("↗");
  });
});

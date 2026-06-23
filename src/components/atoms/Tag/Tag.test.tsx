import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders the default variant as .tag", () => {
    render(<Tag>Structural</Tag>);
    expect(screen.getByText("Structural")).toHaveClass("tag");
  });

  it("renders the solid variant", () => {
    render(<Tag variant="solid">Commercial</Tag>);
    expect(screen.getByText("Commercial")).toHaveClass("tag", "tag--solid");
  });

  it("renders the badge variant with its own class, not .tag", () => {
    render(<Tag variant="badge">Industrial</Tag>);
    const el = screen.getByText("Industrial");
    expect(el).toHaveClass("badge");
    expect(el).not.toHaveClass("tag");
  });
});

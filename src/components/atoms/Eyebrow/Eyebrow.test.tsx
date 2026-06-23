import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Eyebrow } from "./Eyebrow";

describe("Eyebrow", () => {
  it("renders the default (dotted) variant", () => {
    render(<Eyebrow>About RZest</Eyebrow>);
    const el = screen.getByText("About RZest");
    expect(el).toHaveClass("eyebrow");
    expect(el).not.toHaveClass("eyebrow--plain");
  });

  it("renders the plain variant when requested", () => {
    render(<Eyebrow plain>Company Story</Eyebrow>);
    expect(screen.getByText("Company Story")).toHaveClass("eyebrow--plain");
  });
});

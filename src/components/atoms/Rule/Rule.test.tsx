import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Rule } from "./Rule";

describe("Rule", () => {
  it("renders a dashed horizontal rule by default", () => {
    const { container } = render(<Rule />);
    const hr = container.querySelector("hr");
    expect(hr).toHaveClass("rule");
  });

  it("renders a solid horizontal rule when requested", () => {
    const { container } = render(<Rule variant="solid" />);
    expect(container.querySelector("hr")).toHaveClass("rule-solid");
  });

  it("renders a vertical divider with the given height", () => {
    const { container } = render(<Rule orientation="vertical" height={64} />);
    const vrule = container.querySelector(".vrule");
    expect(vrule).toBeInTheDocument();
    expect(vrule).toHaveStyle({ height: "64px" });
  });
});

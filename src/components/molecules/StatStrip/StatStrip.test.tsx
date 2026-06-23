import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatStrip } from "./StatStrip";

describe("StatStrip", () => {
  it("renders each stat's value, unit, and label", () => {
    render(
      <StatStrip
        stats={[
          { value: "100", unit: "+", label: "Projects Delivered" },
          { value: "11", unit: "+", label: "Years Engineering Expertise" },
        ]}
      />,
    );
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("Projects Delivered")).toBeInTheDocument();
    expect(screen.getByText("Years Engineering Expertise")).toBeInTheDocument();
  });

  it("renders one fewer divider than the number of stats", () => {
    const { container } = render(
      <StatStrip
        stats={[
          { value: "100", label: "Projects" },
          { value: "11", label: "Years" },
          { value: "Multi-Sector", label: "Portfolio" },
        ]}
      />,
    );
    expect(container.querySelectorAll(".vrule")).toHaveLength(2);
  });
});

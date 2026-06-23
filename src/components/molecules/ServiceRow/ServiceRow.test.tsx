import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ServiceRow } from "./ServiceRow";

describe("ServiceRow", () => {
  it("renders index and name", () => {
    render(<ServiceRow index="01" name="Structural Design & Analysis" />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("Structural Design & Analysis")).toBeInTheDocument();
  });

  it("applies is-active and aria-pressed when active", () => {
    render(<ServiceRow index="01" name="Structural Design" active />);
    const row = screen.getByRole("button");
    expect(row).toHaveClass("is-active");
    expect(row).toHaveAttribute("aria-pressed", "true");
  });

  it("calls onSelect on click and on Enter key", async () => {
    const onSelect = vi.fn();
    render(<ServiceRow index="02" name="Feasibility & Planning" onSelect={onSelect} />);
    const row = screen.getByRole("button");
    await userEvent.click(row);
    row.focus();
    await userEvent.keyboard("{Enter}");
    expect(onSelect).toHaveBeenCalledTimes(2);
  });
});

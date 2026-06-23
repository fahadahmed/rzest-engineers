import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignalCard } from "./SignalCard";

describe("SignalCard", () => {
  it("renders eyebrow, title and description", () => {
    render(
      <SignalCard
        eyebrow="Structural / Project"
        title="Engineering the load path"
        description="From concept to completion."
      />,
    );
    expect(screen.getByText("Structural / Project")).toBeInTheDocument();
    expect(screen.getByText("Engineering the load path")).toBeInTheDocument();
    expect(screen.getByText("From concept to completion.")).toBeInTheDocument();
  });

  it("fires onCornerClick when the corner icon button is clicked", async () => {
    const onCornerClick = vi.fn();
    render(
      <SignalCard
        eyebrow="End to end"
        title="Feasibility to handover"
        cornerLabel="Open services"
        onCornerClick={onCornerClick}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Open services" }));
    expect(onCornerClick).toHaveBeenCalledTimes(1);
  });
});

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

  it("renders the corner arrow as non-interactive decoration when neither onCornerClick nor cornerHref is given", () => {
    const { container } = render(
      <SignalCard eyebrow="End to end" title="Feasibility to handover" />,
    );
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(container.querySelector(".corner [aria-hidden='true']")).toBeInTheDocument();
  });

  it("renders the corner control as a link when cornerHref is given", () => {
    render(
      <SignalCard
        eyebrow="End to end"
        title="Feasibility to handover"
        cornerLabel="View services"
        cornerHref="/services"
      />,
    );
    expect(screen.getByRole("link", { name: "View services" })).toHaveAttribute(
      "href",
      "/services",
    );
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

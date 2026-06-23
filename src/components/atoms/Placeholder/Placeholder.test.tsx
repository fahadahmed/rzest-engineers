import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Placeholder } from "./Placeholder";

describe("Placeholder", () => {
  it("shows the label and no image when no src is given", () => {
    render(<Placeholder label="Site photo" />);
    expect(screen.getByText("Site photo")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("shows the image and hides the label when src is given", () => {
    render(<Placeholder src="/hero.jpg" alt="Hero" label="Hero render" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/hero.jpg");
    expect(screen.queryByText("Hero render")).not.toBeInTheDocument();
  });

  it("falls back to the label if the image fails to load", () => {
    render(<Placeholder src="/broken.jpg" alt="Broken" label="Project photo" />);
    fireEvent.error(screen.getByRole("img"));
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("Project photo")).toBeInTheDocument();
  });
});

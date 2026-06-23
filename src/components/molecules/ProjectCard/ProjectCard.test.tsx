import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";

describe("ProjectCard", () => {
  it("renders as a link with title and meta", () => {
    render(
      <ProjectCard
        href="/projects/gulshan-one29"
        title="Gulshan One29 Mall"
        meta="Commercial · Muzza View"
        sector="commercial"
      />,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/projects/gulshan-one29");
    expect(link).toHaveAttribute("data-sector", "commercial");
    expect(screen.getByText("Gulshan One29 Mall")).toBeInTheDocument();
    expect(screen.getByText("Commercial · Muzza View")).toBeInTheDocument();
  });

  it("falls back to the placeholder label when no thumbnail is given", () => {
    render(<ProjectCard href="/projects/x" title="X" meta="Y" />);
    expect(screen.getByText("Project photo")).toBeInTheDocument();
  });
});

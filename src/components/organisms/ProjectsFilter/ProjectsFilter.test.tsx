import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectsFilter } from "./ProjectsFilter";

const projects = [
  {
    id: "1",
    href: "/projects/1",
    title: "Gulshan One29 Mall",
    meta: "Commercial · Muzza View",
    sector: "commercial",
  },
  {
    id: "2",
    href: "/projects/2",
    title: "Strata Estate",
    meta: "Residential · Strata Dev.",
    sector: "residential",
  },
];

const sectors = [
  { label: "Commercial", value: "commercial" },
  { label: "Residential", value: "residential" },
  { label: "Industrial", value: "industrial" },
];

describe("ProjectsFilter", () => {
  it("shows all projects by default with the All chip active", () => {
    render(<ProjectsFilter projects={projects} sectors={sectors} />);
    expect(screen.getByText("Gulshan One29 Mall")).toBeInTheDocument();
    expect(screen.getByText("Strata Estate")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "All Projects" })).toHaveClass("is-active");
  });

  it("filters to the selected sector", async () => {
    render(<ProjectsFilter projects={projects} sectors={sectors} />);
    await userEvent.click(screen.getByRole("button", { name: "Commercial" }));
    expect(screen.getByText("Gulshan One29 Mall")).toBeInTheDocument();
    expect(screen.queryByText("Strata Estate")).not.toBeInTheDocument();
  });

  it("shows the no-results message when a sector has no matches", async () => {
    render(
      <ProjectsFilter
        projects={projects}
        sectors={sectors}
        noResultsMessage="No projects in this sector yet."
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Industrial" }));
    expect(screen.getByText("No projects in this sector yet.")).toBeInTheDocument();
  });
});

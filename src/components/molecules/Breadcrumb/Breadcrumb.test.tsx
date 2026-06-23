import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("renders linked items and a plain current item", () => {
    render(
      <Breadcrumb
        items={[{ label: "Projects", href: "/projects" }, { label: "Gulshan One29 Mall" }]}
      />,
    );
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
    expect(screen.getByText("Gulshan One29 Mall")).toBeInTheDocument();
  });

  it("renders separators between items but not after the last", () => {
    render(<Breadcrumb items={[{ label: "Projects", href: "/projects" }, { label: "Detail" }]} />);
    expect(screen.getAllByText("/")).toHaveLength(1);
  });
});

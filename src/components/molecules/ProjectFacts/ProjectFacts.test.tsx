import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectFacts } from "./ProjectFacts";

describe("ProjectFacts", () => {
  const facts = [
    { key: "Client", value: "Muzza View Development" },
    { key: "Sector", value: "Commercial" },
  ];

  it("renders each fact's key and value", () => {
    render(<ProjectFacts facts={facts} />);
    expect(screen.getByText("Client")).toBeInTheDocument();
    expect(screen.getByText("Muzza View Development")).toBeInTheDocument();
    expect(screen.getByText("Sector")).toBeInTheDocument();
  });

  it("renders the CTA button only when both label and href are given", () => {
    const { rerender } = render(<ProjectFacts facts={facts} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();

    rerender(
      <ProjectFacts facts={facts} ctaLabel="Discuss a similar project" ctaHref="/contact" />,
    );
    expect(screen.getByRole("link", { name: /Discuss a similar project/ })).toHaveAttribute(
      "href",
      "/contact",
    );
  });
});

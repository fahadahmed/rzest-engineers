import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ServicesShowcase } from "./ServicesShowcase";

const services = [
  {
    id: "design",
    index: "01",
    name: "Structural Design & Analysis",
    description: "Gravity, lateral, seismic and wind loads.",
  },
  {
    id: "feasibility",
    index: "02",
    name: "Feasibility & Planning",
    description: "De-risk decisions before design begins.",
  },
];

describe("ServicesShowcase", () => {
  it("defaults to the first service active in the panel", () => {
    render(<ServicesShowcase services={services} />);
    expect(screen.getByText("Gravity, lateral, seismic and wind loads.")).toBeInTheDocument();
  });

  it("switches the detail panel when a different row is selected", async () => {
    render(<ServicesShowcase services={services} />);
    await userEvent.click(screen.getByText("Feasibility & Planning"));
    expect(screen.getByText("De-risk decisions before design begins.")).toBeInTheDocument();
    expect(screen.queryByText("Gravity, lateral, seismic and wind loads.")).not.toBeInTheDocument();
  });

  it("renders the view-all link when viewAllHref is given", () => {
    render(
      <ServicesShowcase
        services={services}
        viewAllHref="/services"
        viewAllLabel="View all services"
      />,
    );
    expect(screen.getByRole("link", { name: /View all services/ })).toHaveAttribute(
      "href",
      "/services",
    );
  });
});

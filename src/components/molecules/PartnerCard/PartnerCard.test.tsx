import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PartnerCard } from "./PartnerCard";

describe("PartnerCard", () => {
  it("renders the tag label, partner name, and meta line", () => {
    render(
      <PartnerCard
        tagLabel="Architecture"
        name="Studio Forma"
        meta="Architecture & Interior · Karachi"
      />,
    );
    expect(screen.getByText("Architecture")).toBeInTheDocument();
    expect(screen.getByText("Studio Forma")).toBeInTheDocument();
    expect(screen.getByText("Architecture & Interior · Karachi")).toBeInTheDocument();
  });
});

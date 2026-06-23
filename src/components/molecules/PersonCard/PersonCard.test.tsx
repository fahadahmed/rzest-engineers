import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PersonCard } from "./PersonCard";

describe("PersonCard", () => {
  it("renders the avatar initials, name and role", () => {
    render(<PersonCard name="Jay Kishan" role="Director & Principal Engineer" initials="JK" />);
    expect(screen.getByText("JK")).toBeInTheDocument();
    expect(screen.getByText("Jay Kishan")).toBeInTheDocument();
    expect(screen.getByText("Director & Principal Engineer")).toBeInTheDocument();
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials by default", () => {
    render(<Avatar initials="RA" />);
    expect(screen.getByText("RA")).toHaveClass("avatar");
  });

  it("applies the lg size and signal variant classes", () => {
    render(<Avatar initials="JK" size="lg" signal />);
    expect(screen.getByText("JK")).toHaveClass("avatar--lg", "avatar--signal");
  });

  it("renders a photo image instead of initials when photoSrc is given", () => {
    render(<Avatar initials="SA" photoSrc="/team/sa.jpg" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/team/sa.jpg");
    expect(screen.queryByText("SA")).not.toBeInTheDocument();
  });
});

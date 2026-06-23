import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders an anchor when href is provided", () => {
    render(<Button href="/contact">Start a conversation</Button>);
    const link = screen.getByRole("link", { name: "Start a conversation" });
    expect(link).toHaveAttribute("href", "/contact");
    expect(link).toHaveClass("btn", "btn--primary");
  });

  it("renders a button element when no href is provided", () => {
    render(<Button variant="accent">Send message</Button>);
    const button = screen.getByRole("button", { name: "Send message" });
    expect(button).toHaveClass("btn--accent");
    expect(button).toHaveAttribute("type", "button");
  });

  it("shows the arrow glyph when showArrow is set", () => {
    render(<Button showArrow>Explore Services</Button>);
    expect(screen.getByText("→")).toBeInTheDocument();
  });

  it("fires onClick for button variants", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies the size modifier class", () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn--lg");
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

describe("Header", () => {
  it("renders the brand and nav items, marking the current page active", () => {
    render(
      <Header
        brandLabel="RZest Engineers"
        brandHref="/"
        navItems={navItems}
        currentPath="/about"
        ctaLabel="Start a Conversation"
        ctaHref="/contact"
      />,
    );
    expect(screen.getByText("RZest Engineers")).toBeInTheDocument();
    const aboutLinks = screen.getAllByRole("link", { name: "About" });
    expect(aboutLinks).toHaveLength(2);
    expect(aboutLinks[0]).toHaveClass("is-active");
    expect(aboutLinks[1]).toHaveClass("is-active");
  });

  it("opens and closes the mobile menu, with aria-controls pointing at it", async () => {
    render(
      <Header
        brandLabel="RZest Engineers"
        brandHref="/"
        navItems={navItems}
        currentPath="/"
        ctaLabel="Start a Conversation"
        ctaHref="/contact"
      />,
    );
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-controls", "mobile-menu");

    await userEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
    expect(document.getElementById("mobile-menu")).toHaveClass("is-open");
  });

  it("renders the CTA button pointing at ctaHref", () => {
    render(
      <Header
        brandLabel="RZest Engineers"
        brandHref="/"
        navItems={navItems}
        currentPath="/"
        ctaLabel="Start a Conversation"
        ctaHref="/contact"
      />,
    );
    const ctaLinks = screen.getAllByRole("link", { name: /Start a Conversation/ });
    expect(ctaLinks[0]).toHaveAttribute("href", "/contact");
  });
});

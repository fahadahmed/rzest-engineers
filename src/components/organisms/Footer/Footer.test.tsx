import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders brand, tagline, CTA, and link groups", () => {
    render(
      <Footer
        brandLabel="RZest Engineers"
        tagline="Full-service structural engineering and project delivery consultancy."
        ctaLabel="Start a Conversation"
        ctaHref="/contact"
        companyLinks={[
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
        ]}
        contactLinks={[{ label: "rzest@engineers.com", href: "mailto:rzest@engineers.com" }]}
        copyrightLine="© 2026 RZest Engineers. All rights reserved."
        addressLine="48-A/21, Nadia Sector A/2, Umar Kot — 69100"
      />,
    );
    expect(screen.getByText("RZest Engineers")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Start a Conversation/ })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "rzest@engineers.com" })).toHaveAttribute(
      "href",
      "mailto:rzest@engineers.com",
    );
    expect(screen.getByText("© 2026 RZest Engineers. All rights reserved.")).toBeInTheDocument();
  });

  it("renders a link without an href as plain text, not an invalid anchor", () => {
    render(
      <Footer
        brandLabel="RZest Engineers"
        tagline="Full-service structural engineering and project delivery consultancy."
        ctaLabel="Start a Conversation"
        ctaHref="/contact"
        companyLinks={[{ label: "About", href: "/about" }]}
        contactLinks={[{ label: "LinkedIn →" }]}
        copyrightLine="© 2026 RZest Engineers. All rights reserved."
        addressLine="48-A/21, Nadia Sector A/2, Umar Kot — 69100"
      />,
    );
    expect(screen.getByText("LinkedIn →")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "LinkedIn →" })).not.toBeInTheDocument();
  });
});

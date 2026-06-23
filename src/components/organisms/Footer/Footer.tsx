import { Button } from "../../atoms/Button/Button";
import { Rule } from "../../atoms/Rule/Rule";

export interface FooterLink {
  label: string;
  href?: string;
}

export interface FooterProps {
  brandLabel: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  companyLinks: FooterLink[];
  contactLinks: FooterLink[];
  copyrightLine: string;
  addressLine: string;
}

export function Footer({
  brandLabel,
  tagline,
  ctaLabel,
  ctaHref,
  companyLinks,
  contactLinks,
  copyrightLine,
  addressLine,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="wrap section" style={{ paddingBlock: "var(--s-8)" }}>
        <div className="f-grid">
          <div>
            <div className="brand" style={{ color: "var(--bg)" }}>
              <span className="mark">{brandLabel.charAt(0)}</span> {brandLabel}
            </div>
            <p
              style={{
                color: "color-mix(in srgb, var(--bg) 70%, transparent)",
                marginTop: "var(--s-4)",
                maxWidth: "34ch",
              }}
            >
              {tagline}
            </p>
            <Button href={ctaHref} variant="accent" showArrow style={{ marginTop: "var(--s-5)" }}>
              {ctaLabel}
            </Button>
          </div>
          <div>
            <div className="f-head">Company</div>
            <div className="stack" style={{ gap: "10px", marginTop: "var(--s-4)" }}>
              {companyLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="f-head">Contact</div>
            <div className="stack" style={{ gap: "10px", marginTop: "var(--s-4)" }}>
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Rule
          variant="solid"
          style={{
            borderColor: "color-mix(in srgb, var(--bg) 22%, transparent)",
            marginBlock: "var(--s-6)",
          }}
        />
        <div className="f-bottom">
          <span className="f-head" style={{ textTransform: "none", letterSpacing: ".04em" }}>
            {copyrightLine}
          </span>
          <span className="f-head" style={{ textTransform: "none", letterSpacing: ".04em" }}>
            {addressLine}
          </span>
        </div>
      </div>
    </footer>
  );
}

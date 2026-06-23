import { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { IconButton } from "../../atoms/IconButton/IconButton";
import { ThemeToggle } from "../../atoms/ThemeToggle/ThemeToggle";
import "./Header.css";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  brandLabel: string;
  brandHref: string;
  navItems: NavItem[];
  currentPath: string;
  ctaLabel: string;
  ctaHref: string;
}

export function Header({
  brandLabel,
  brandHref,
  navItems,
  currentPath,
  ctaLabel,
  ctaHref,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-head">
      <div className="wrap" style={{ paddingBlock: 0 }}>
        <div className="nav">
          <a className="brand" href={brandHref}>
            <span className="mark">{brandLabel.charAt(0)}</span> {brandLabel}
          </a>
          <div className="links links--main">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={item.href === currentPath ? "is-active" : ""}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="row" style={{ gap: "var(--s-3)" }}>
            <ThemeToggle />
            <Button href={ctaHref} variant="primary" size="sm" showArrow className="nav-cta">
              {ctaLabel}
            </Button>
            <IconButton
              className="nav-burger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? "✕" : "☰"}
            </IconButton>
          </div>
        </div>
        <nav id="mobile-menu" className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === currentPath ? "is-active" : ""}
            >
              {item.label}
            </a>
          ))}
          <Button
            href={ctaHref}
            variant="primary"
            size="sm"
            showArrow
            style={{ marginTop: "var(--s-3)", alignSelf: "flex-start" }}
          >
            {ctaLabel}
          </Button>
        </nav>
      </div>
    </header>
  );
}

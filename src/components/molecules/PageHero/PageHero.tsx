import type { ReactNode } from "react";
import { Eyebrow } from "../../atoms/Eyebrow/Eyebrow";
import { Rule } from "../../atoms/Rule/Rule";
import "./PageHero.css";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  /** Overrides the default 18ch heading max-width — each mockup wraps its h1 at a different width. */
  titleMaxWidth?: string;
  /** A substring of `title` to render in `accentColor` (each mockup highlights a different phrase). */
  accentText?: string;
  /** CSS color value for accentText — mockups use both var(--signal-deep) and var(--ink-3). */
  accentColor?: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  titleMaxWidth,
  accentText,
  accentColor = "var(--signal-deep)",
  description,
  children,
  className = "",
}: PageHeroProps) {
  const classes = ["wrap", "page-hero", className].filter(Boolean).join(" ");

  const titleContent = accentText
    ? title.split(accentText).reduce<ReactNode[]>((acc, part, index) => {
        if (index > 0) {
          acc.push(
            <span key={index} style={{ color: accentColor }}>
              {accentText}
            </span>,
          );
        }
        acc.push(part);
        return acc;
      }, [])
    : title;

  return (
    <section className={classes}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="display" style={titleMaxWidth ? { maxWidth: titleMaxWidth } : undefined}>
        {titleContent}
      </h1>
      {description && <p className="lede">{description}</p>}
      <Rule />
      {children}
      <Rule />
    </section>
  );
}

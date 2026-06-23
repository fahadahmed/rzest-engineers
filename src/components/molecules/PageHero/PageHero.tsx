import type { ReactNode } from "react";
import { Eyebrow } from "../../atoms/Eyebrow/Eyebrow";
import { Rule } from "../../atoms/Rule/Rule";
import "./PageHero.css";

export interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ eyebrow, title, description, children, className = "" }: PageHeroProps) {
  const classes = ["wrap", "page-hero", className].filter(Boolean).join(" ");

  return (
    <section className={classes}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="display">{title}</h1>
      {description && <p className="lede">{description}</p>}
      <Rule />
      {children}
      <Rule />
    </section>
  );
}

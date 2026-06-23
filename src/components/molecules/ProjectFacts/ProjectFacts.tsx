import { Eyebrow } from "../../atoms/Eyebrow/Eyebrow";
import { Button } from "../../atoms/Button/Button";
import "./ProjectFacts.css";

export interface ProjectFact {
  key: string;
  value: string;
}

export interface ProjectFactsProps {
  facts: ProjectFact[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function ProjectFacts({ facts, ctaLabel, ctaHref, className = "" }: ProjectFactsProps) {
  const classes = ["facts", className].filter(Boolean).join(" ");

  return (
    <aside className={classes}>
      <Eyebrow>Project Facts</Eyebrow>
      <div style={{ marginTop: "var(--s-5)" }}>
        {facts.map((fact) => (
          <div key={fact.key} className="fact">
            <span className="k">{fact.key}</span>
            <span className="v">{fact.value}</span>
          </div>
        ))}
      </div>
      {ctaLabel && ctaHref && (
        <Button
          href={ctaHref}
          variant="accent"
          showArrow
          style={{ marginTop: "var(--s-6)", width: "100%", justifyContent: "center" }}
        >
          {ctaLabel}
        </Button>
      )}
    </aside>
  );
}

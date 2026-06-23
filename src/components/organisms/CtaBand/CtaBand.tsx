import type { ReactNode } from "react";
import { Button } from "../../atoms/Button/Button";
import { Eyebrow } from "../../atoms/Eyebrow/Eyebrow";

export interface CtaBandProps {
  eyebrowLabel?: string;
  title: ReactNode;
  description?: ReactNode;
  buttonLabel: string;
  buttonHref: string;
  variant?: "signal" | "ink";
}

export function CtaBand({
  eyebrowLabel = "Let's build",
  title,
  description,
  buttonLabel,
  buttonHref,
  variant = "signal",
}: CtaBandProps) {
  const classes = ["cta-band", variant === "ink" ? "cta-band--ink" : ""].filter(Boolean).join(" ");
  const buttonVariant = variant === "ink" ? "accent" : "primary";

  return (
    <div className={classes}>
      <Eyebrow style={{ justifyContent: "center" }}>{eyebrowLabel}</Eyebrow>
      <h2
        className="display"
        style={{ fontSize: "clamp(2rem, 6vw, 4rem)", margin: "var(--s-5) 0" }}
      >
        {title}
      </h2>
      {description && (
        <p style={{ opacity: 0.85, maxWidth: "46ch", margin: "0 auto var(--s-6)" }}>
          {description}
        </p>
      )}
      <Button href={buttonHref} variant={buttonVariant} size="lg" showArrow>
        {buttonLabel}
      </Button>
    </div>
  );
}

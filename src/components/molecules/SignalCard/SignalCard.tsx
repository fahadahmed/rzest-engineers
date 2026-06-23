import type { HTMLAttributes, ReactNode } from "react";
import { Eyebrow } from "../../atoms/Eyebrow/Eyebrow";
import { IconButton } from "../../atoms/IconButton/IconButton";

export interface SignalCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  cornerLabel?: string;
  onCornerClick?: () => void;
  footer?: ReactNode;
}

export function SignalCard({
  eyebrow,
  title,
  description,
  cornerLabel = "Open",
  onCornerClick,
  footer,
  className = "",
  ...rest
}: SignalCardProps) {
  const classes = ["signal-card", className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...rest}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 style={{ margin: "var(--s-4) 0 var(--s-3)", fontSize: "var(--t-lg)" }}>{title}</h3>
      {description && <p style={{ color: "var(--on-signal)", opacity: 0.85 }}>{description}</p>}
      <div className="corner">
        <IconButton variant="accent" aria-label={cornerLabel} onClick={onCornerClick}>
          →
        </IconButton>
      </div>
      {footer}
    </div>
  );
}

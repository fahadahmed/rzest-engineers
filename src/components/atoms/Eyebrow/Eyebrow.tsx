import type { HTMLAttributes, ReactNode } from "react";

export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  plain?: boolean;
}

export function Eyebrow({ children, plain = false, className = "", ...rest }: EyebrowProps) {
  const classes = ["eyebrow", plain ? "eyebrow--plain" : "", className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}

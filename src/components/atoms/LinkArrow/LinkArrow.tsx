import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface LinkArrowProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  showArrow?: boolean;
}

export function LinkArrow({ children, showArrow = true, className = "", ...rest }: LinkArrowProps) {
  const classes = ["link-arrow", className].filter(Boolean).join(" ");
  return (
    <a className={classes} {...rest}>
      <span>{children}</span>
      {showArrow && <span>↗</span>}
    </a>
  );
}

import type { HTMLAttributes, ReactNode } from "react";

export type TagVariant = "default" | "solid" | "signal" | "ghost" | "badge";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  children: ReactNode;
}

const variantClass: Record<TagVariant, string> = {
  default: "tag",
  solid: "tag tag--solid",
  signal: "tag tag--signal",
  ghost: "tag tag--ghost",
  badge: "badge",
};

export function Tag({ variant = "default", className = "", children, ...rest }: TagProps) {
  const classes = [variantClass[variant], className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}

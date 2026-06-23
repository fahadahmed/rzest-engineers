import type { CSSProperties, HTMLAttributes } from "react";

export type RuleVariant = "dashed" | "solid";

export interface RuleProps extends HTMLAttributes<HTMLElement> {
  variant?: RuleVariant;
  orientation?: "horizontal" | "vertical";
  height?: number | string;
}

export function Rule({
  variant = "dashed",
  orientation = "horizontal",
  height,
  className = "",
  style,
  ...rest
}: RuleProps) {
  if (orientation === "vertical") {
    const classes = ["vrule", className].filter(Boolean).join(" ");
    const mergedStyle: CSSProperties = { height, ...style };
    return <span className={classes} style={mergedStyle} {...rest} />;
  }

  const classes = [variant === "solid" ? "rule-solid" : "rule", className]
    .filter(Boolean)
    .join(" ");
  return <hr className={classes} style={style} {...rest} />;
}

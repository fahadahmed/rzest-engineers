import type { HTMLAttributes } from "react";

export type AvatarSize = "md" | "lg";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  initials: string;
  size?: AvatarSize;
  signal?: boolean;
  photoSrc?: string;
  photoAlt?: string;
}

export function Avatar({
  initials,
  size = "md",
  signal = false,
  photoSrc,
  photoAlt,
  className = "",
  ...rest
}: AvatarProps) {
  const classes = [
    "avatar",
    size === "lg" ? "avatar--lg" : "",
    signal ? "avatar--signal" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (photoSrc) {
    return (
      <div className={classes} {...rest}>
        <img
          src={photoSrc}
          alt={photoAlt ?? initials}
          style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <div className={classes} {...rest}>
      {initials}
    </div>
  );
}

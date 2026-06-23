import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type IconButtonVariant = "default" | "accent";

type CommonProps = {
  variant?: IconButtonVariant;
  className?: string;
  "aria-label": string;
  children?: ReactNode;
};

type IconButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type IconButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type IconButtonProps = IconButtonAsLink | IconButtonAsButton;

export function IconButton(props: IconButtonProps) {
  const { variant = "default", className = "", children = "↗", ...rest } = props;
  const classes = ["icon-btn", variant === "accent" ? "icon-btn--accent" : "", className]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a className={classes} href={href} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type={buttonRest.type ?? "button"} {...buttonRest}>
      {children}
    </button>
  );
}

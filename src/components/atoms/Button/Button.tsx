import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "accent" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const sizeClass: Record<ButtonSize, string> = {
  sm: "btn--sm",
  md: "",
  lg: "btn--lg",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    showArrow = false,
    className = "",
    children,
    ...rest
  } = props;

  const classes = ["btn", `btn--${variant}`, sizeClass[size], className].filter(Boolean).join(" ");

  const content = (
    <>
      {children}
      {showArrow && <span className="arr"> ↗</span>}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a className={classes} href={href} {...anchorRest}>
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type={buttonRest.type ?? "button"} {...buttonRest}>
      {content}
    </button>
  );
}

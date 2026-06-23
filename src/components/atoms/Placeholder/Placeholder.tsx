import { useState, type CSSProperties, type HTMLAttributes } from "react";

export interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  label: string;
  height?: number | string;
  rounded?: "md" | "lg";
}

export function Placeholder({
  src,
  alt = "",
  label,
  height,
  rounded = "md",
  className = "",
  style,
  ...rest
}: PlaceholderProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(src) && !imageFailed;

  const classes = ["placeholder", className].filter(Boolean).join(" ");
  const mergedStyle: CSSProperties = {
    height,
    borderRadius: rounded === "lg" ? "var(--r-lg)" : undefined,
    ...style,
  };

  return (
    <div className={classes} style={mergedStyle} {...rest}>
      {showImage && (
        <img className="img" src={src} alt={alt} onError={() => setImageFailed(true)} />
      )}
      {!showImage && <span className="ph-label">{label}</span>}
    </div>
  );
}

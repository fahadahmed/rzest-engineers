import { Tag } from "../../atoms/Tag/Tag";

export interface PartnerCardProps {
  tagLabel: string;
  name: string;
  meta: string;
  className?: string;
}

export function PartnerCard({ tagLabel, name, meta, className = "" }: PartnerCardProps) {
  const classes = ["card", "card--flat", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <Tag variant="ghost" style={{ border: 0, padding: 0 }}>
        {tagLabel}
      </Tag>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "var(--t-lg)",
          margin: "var(--s-3) 0 6px",
        }}
      >
        {name}
      </div>
      <div className="p-role">{meta}</div>
    </div>
  );
}

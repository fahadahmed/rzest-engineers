import { Avatar } from "../../atoms/Avatar/Avatar";

export interface PersonCardProps {
  name: string;
  role: string;
  initials: string;
  photoSrc?: string;
  signal?: boolean;
  className?: string;
}

export function PersonCard({
  name,
  role,
  initials,
  photoSrc,
  signal = false,
  className = "",
}: PersonCardProps) {
  const classes = ["person", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <Avatar initials={initials} photoSrc={photoSrc} photoAlt={name} signal={signal} />
      <div>
        <div className="p-name">{name}</div>
        <div className="p-role">{role}</div>
      </div>
    </div>
  );
}

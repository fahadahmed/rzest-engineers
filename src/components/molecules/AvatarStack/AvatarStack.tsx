import { Avatar } from "../../atoms/Avatar/Avatar";

export interface AvatarStackPerson {
  initials: string;
  photoSrc?: string;
  photoAlt?: string;
}

export interface AvatarStackProps {
  people: AvatarStackPerson[];
  maxVisible?: number;
  className?: string;
}

export function AvatarStack({ people, maxVisible = 3, className = "" }: AvatarStackProps) {
  const visible = people.slice(0, maxVisible);
  const overflow = people.length - visible.length;

  const classes = ["avatar-stack", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {visible.map((person, idx) => (
        <Avatar
          key={`${person.initials}-${idx}`}
          initials={person.initials}
          photoSrc={person.photoSrc}
          photoAlt={person.photoAlt}
        />
      ))}
      {overflow > 0 && <Avatar initials={`+${overflow}`} signal />}
    </div>
  );
}

export interface ServiceRowProps {
  index: string;
  name: string;
  active?: boolean;
  onSelect?: () => void;
  className?: string;
}

export function ServiceRow({
  index,
  name,
  active = false,
  onSelect,
  className = "",
}: ServiceRowProps) {
  const classes = ["service-row", active ? "is-active" : "", className].filter(Boolean).join(" ");

  return (
    <div
      className={classes}
      role="button"
      tabIndex={0}
      aria-pressed={active}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect?.();
        }
      }}
    >
      <span className="idx">{index}</span>
      <span className="name">{name}</span>
      <span className="arr">→</span>
    </div>
  );
}

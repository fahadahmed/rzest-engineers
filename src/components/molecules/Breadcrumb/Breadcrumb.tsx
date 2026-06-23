export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const classes = ["crumb", className].filter(Boolean).join(" ");

  return (
    <nav className={classes} aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={item.label} style={{ display: "contents" }}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span style={{ color: "var(--ink)" }}>{item.label}</span>
          )}
          {idx < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}

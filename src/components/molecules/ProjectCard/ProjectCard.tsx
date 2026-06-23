import { Placeholder } from "../../atoms/Placeholder/Placeholder";

export interface ProjectCardProps {
  href: string;
  title: string;
  meta: string;
  thumbnailSrc?: string;
  sector?: string;
  className?: string;
}

export function ProjectCard({
  href,
  title,
  meta,
  thumbnailSrc,
  sector,
  className = "",
}: ProjectCardProps) {
  const classes = ["project-card", className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href} data-sector={sector}>
      <Placeholder src={thumbnailSrc} alt={title} label="Project photo" className="pc-media" />
      <div className="pc-body">
        <div>
          <div className="pc-title">{title}</div>
          <div className="pc-meta">{meta}</div>
        </div>
        <span className="icon-btn" aria-hidden="true">
          →
        </span>
      </div>
    </a>
  );
}

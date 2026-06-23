import { useMemo, useState } from "react";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";
import "./ProjectsFilter.css";

export interface FilterableProject {
  id: string;
  href: string;
  title: string;
  meta: string;
  sector: string;
  thumbnailSrc?: string;
}

export interface ProjectSectorFilter {
  label: string;
  value: string;
}

export interface ProjectsFilterProps {
  projects: FilterableProject[];
  sectors: ProjectSectorFilter[];
  allLabel?: string;
  noResultsMessage?: string;
}

export function ProjectsFilter({
  projects,
  sectors,
  allLabel = "All Projects",
  noResultsMessage = "No projects in this sector yet.",
}: ProjectsFilterProps) {
  const [activeSector, setActiveSector] = useState("all");

  const visibleProjects = useMemo(
    () =>
      activeSector === "all"
        ? projects
        : projects.filter((project) => project.sector === activeSector),
    [projects, activeSector],
  );

  return (
    <div>
      <div className="filters">
        <button
          type="button"
          className={`chip${activeSector === "all" ? " is-active" : ""}`}
          onClick={() => setActiveSector("all")}
        >
          {allLabel}
        </button>
        {sectors.map((sector) => (
          <button
            key={sector.value}
            type="button"
            className={`chip${activeSector === sector.value ? " is-active" : ""}`}
            onClick={() => setActiveSector(sector.value)}
          >
            {sector.label}
          </button>
        ))}
      </div>
      <div className="proj-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            href={project.href}
            title={project.title}
            meta={project.meta}
            sector={project.sector}
            thumbnailSrc={project.thumbnailSrc}
          />
        ))}
      </div>
      {visibleProjects.length === 0 && <p className="no-results">{noResultsMessage}</p>}
    </div>
  );
}

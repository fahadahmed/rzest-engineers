import { useState } from "react";
import { ServiceRow } from "../../molecules/ServiceRow/ServiceRow";
import { SignalCard } from "../../molecules/SignalCard/SignalCard";
import { LinkArrow } from "../../atoms/LinkArrow/LinkArrow";
import "./ServicesShowcase.css";

export interface ServiceShowcaseItem {
  id: string;
  index: string;
  name: string;
  description: string;
}

export interface ServicesShowcaseProps {
  services: ServiceShowcaseItem[];
  viewAllLabel?: string;
  viewAllHref?: string;
}

export function ServicesShowcase({
  services,
  viewAllLabel = "View all services",
  viewAllHref,
}: ServicesShowcaseProps) {
  const [activeId, setActiveId] = useState(services[0]?.id);
  const active = services.find((service) => service.id === activeId) ?? services[0];

  if (!active) return null;

  return (
    <div className="svc-layout">
      <div>
        {services.map((service) => (
          <ServiceRow
            key={service.id}
            index={service.index}
            name={service.name}
            active={service.id === active.id}
            onSelect={() => setActiveId(service.id)}
          />
        ))}
        {viewAllHref && (
          <LinkArrow href={viewAllHref} style={{ marginTop: "var(--s-5)" }}>
            {viewAllLabel}
          </LinkArrow>
        )}
      </div>
      <SignalCard
        eyebrow={`${active.index} / ${services.length.toString().padStart(2, "0")}`}
        title={active.name}
        description={active.description}
      />
    </div>
  );
}

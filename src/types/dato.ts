/**
 * Mirrors the eventual DatoCMS model shapes so swapping src/data/mock.ts for
 * live GraphQL queries later doesn't require reshaping consumers.
 */

export interface DatoImage {
  url: string;
  alt: string;
}

export interface SiteConfig {
  brandLabel: string;
  tagline: string;
  email: string;
  phone1: string;
  phone2: string;
  address: string;
  linkedinLabel: string;
  linkedinHref?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  unit?: string;
  label: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  isManagingDirector?: boolean;
  photo?: DatoImage;
}

export interface ServiceItem {
  id: string;
  slug: string;
  index: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
}

export interface ProcessStep {
  number: string;
  label: string;
}

export type ProjectSector =
  | "commercial"
  | "residential"
  | "institutional"
  | "industrial"
  | "hospitality";

export interface ProjectFact {
  key: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  sector: ProjectSector;
  sectorLabel: string;
  client: string;
  location: string;
  type: string;
  role: string;
  status: string;
  featured?: boolean;
  thumbnail: DatoImage;
  heroImage: DatoImage;
  gallery: DatoImage[];
  tagline: string;
  overview: string[];
  scopeItems: string[];
  caseStudyTag: string;
  caseStudyTitle: string;
  caseStudyBody: string;
}

export interface Partner {
  tagLabel: string;
  name: string;
  meta: string;
}

export interface HomeHero {
  signalEyebrow: string;
  signalTitle: string;
  microcopy: string;
  heroImage: DatoImage;
  leadTitle: string;
  leadAccent: string;
  leadBody: string;
  thumbImages: DatoImage[];
  trustLabel: string;
  trustStat: StatItem;
  trustBody: string;
  trustImage: DatoImage;
}

export interface AboutPreview {
  eyebrow: string;
  title: string;
  titleAccent: string;
  body: string;
  linkLabel: string;
  linkHref: string;
  image: DatoImage;
}

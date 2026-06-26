export const PROJECTS_PAGE_QUERY = /* GraphQL */ `
  query ProjectsPage {
    projectsPage {
      eyebrow
      title
      accentText
      description
      featuredCaseStudyEyebrow
    }

    siteConfig {
      ctaBandTitle
      ctaBandDescription
      ctaBandButtonLabel
      globalStats {
        value
        unit
        label
      }
    }
  }
`;

export interface ProjectsPageData {
  projectsPage: {
    eyebrow: string;
    title: string;
    accentText: string;
    description: string;
    featuredCaseStudyEyebrow: string;
  };
  siteConfig: {
    ctaBandTitle: string;
    ctaBandDescription: string;
    ctaBandButtonLabel: string;
    globalStats: { value: string; unit: string | null; label: string }[];
  };
}

/**
 * Not wired into any page yet — the Project model's fields
 * (sectorLabel, type, status, thumbnail, overview, scopeItems,
 * caseStudy*) are still being built out in DatoCMS. Kept here ready
 * for when that content lands.
 */
export const ALL_PROJECTS_QUERY = /* GraphQL */ `
  query AllProjects {
    allProjects {
      id
      slug
      title
      sector
      sectorLabel
      client
      location
      type
      role
      status
      featured
      thumbnail {
        url
        alt
      }
      heroImage {
        url
        alt
      }
      gallery {
        url
        alt
      }
      tagline
      overview {
        text
      }
      scopeItems {
        field
      }
      caseStudyTag
      caseStudyTitle
      caseStudyBody
    }
  }
`;

export interface AllProjectsData {
  allProjects: ProjectRecord[];
}

export interface ProjectRecord {
  id: string;
  slug: string;
  title: string;
  sector: string;
  sectorLabel: string;
  client: string;
  location: string;
  type: string;
  role: string;
  status: string;
  featured: boolean;
  thumbnail: { url: string; alt: string | null };
  heroImage: { url: string; alt: string | null };
  gallery: { url: string; alt: string | null }[];
  tagline: string;
  overview: { text: string }[];
  scopeItems: { field: string }[];
  caseStudyTag: string;
  caseStudyTitle: string;
  caseStudyBody: string;
}

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

export const ALL_PROJECTS_QUERY = /* GraphQL */ `
  query AllProjects {
    allProjects(orderBy: _createdAt_ASC) {
      id
      slug
      title
      sector
      sectorLabel
      client
      location
      projectType
      role
      projectStatus
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
      overview
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
  projectType: string;
  role: string;
  projectStatus: string;
  featured: boolean;
  thumbnail: { url: string; alt: string | null };
  heroImage: { url: string; alt: string | null };
  gallery: { url: string; alt: string | null }[];
  tagline: string;
  overview: string;
  scopeItems: { field: string }[];
  caseStudyTag: string;
  caseStudyTitle: string;
  caseStudyBody: string;
}

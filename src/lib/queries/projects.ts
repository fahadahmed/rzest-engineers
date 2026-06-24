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

    allProjects(orderBy: position_ASC) {
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
      thumbnail { url }
      heroImage { url }
      gallery { url }
      tagline
      overview {
        text
      }
      scopeItems {
        text
      }
      caseStudyTag
      caseStudyTitle
      caseStudyBody
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
  thumbnail: { url: string };
  heroImage: { url: string };
  gallery: { url: string }[];
  tagline: string;
  overview: { text: string }[];
  scopeItems: { text: string }[];
  caseStudyTag: string;
  caseStudyTitle: string;
  caseStudyBody: string;
}

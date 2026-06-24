export const HOME_PAGE_QUERY = /* GraphQL */ `
  query HomePage {
    homePage {
      aboutSectionDesc
      servicesSectionHeading
      servicesSectionDesc
      projectsSectionHeading
      projectsSectionDesc
      leadershipSectionDesc

      hero {
        signalEyebrow
        signalTitle
        microcopy
        heroImage { url }
        leadTitle
        leadAccent
        leadBody
        thumbImages { url }
        trustLabel
        trustStatValue
        trustStatUnit
        trustStatLabel
        trustBody
        trustImage { url }
      }
      aboutPreview {
        eyebrow
        title
        titleAccent
        body
        linkLabel
        linkHref
        image { url }
      }
    }

    siteConfig {
      leadershipBody
      ctaBandTitle
      ctaBandDescription
      ctaBandButtonLabel
      globalStats {
        value
        unit
        label
      }
    }

    allServices(orderBy: position_ASC) {
      id
      index
      name
      fullDescription
    }

    allProjects(filter: { featured: { eq: true } }, orderBy: position_ASC, first: 4) {
      id
      slug
      title
      sectorLabel
      sector
      thumbnail { url }
    }

    allTeamMembers(orderBy: position_ASC) {
      id
      name
      role
      initials
      isManagingDirector
    }
  }
`;

export interface HomePageData {
  homePage: {
    aboutSectionDesc: string;
    servicesSectionHeading: string;
    servicesSectionDesc: string;
    projectsSectionHeading: string;
    projectsSectionDesc: string;
    leadershipSectionDesc: string;
    hero: {
      signalEyebrow: string;
      signalTitle: string;
      microcopy: string;
      heroImage: { url: string };
      leadTitle: string;
      leadAccent: string;
      leadBody: string;
      thumbImages: { url: string }[];
      trustLabel: string;
      trustStatValue: string;
      trustStatUnit: string | null;
      trustStatLabel: string;
      trustBody: string;
      trustImage: { url: string };
    };
    aboutPreview: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      body: string;
      linkLabel: string;
      linkHref: string;
      image: { url: string };
    };
  };
  siteConfig: {
    leadershipBody: string;
    ctaBandTitle: string;
    ctaBandDescription: string;
    ctaBandButtonLabel: string;
    globalStats: { value: string; unit: string | null; label: string }[];
  };
  allServices: { id: string; index: string; name: string; fullDescription: string }[];
  allProjects: {
    id: string;
    slug: string;
    title: string;
    sectorLabel: string;
    sector: string;
    thumbnail: { url: string };
  }[];
  allTeamMembers: {
    id: string;
    name: string;
    role: string;
    initials: string;
    isManagingDirector: boolean;
  }[];
}

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
        heroImage {
          url
          alt
        }
        leadTitle
        leadAccent
        leadBody
        thumbImages {
          url
          alt
        }
        trustLabel
        trustStat {
          value
          unit
          label
        }
        trustBody
        trustImage {
          url
          alt
        }
      }
      aboutPreview {
        eyebrow
        title
        titleAccent
        body
        linkLabel
        linkHref
        image {
          url
          alt
        }
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

    allServices {
      id
      index
      name
      fullDescription
    }

    allProjects(filter: { featured: { eq: true } }, first: 4) {
      id
      slug
      title
      sectorLabel
      sector
      thumbnail {
        url
        alt
      }
    }

    allTeamMembers {
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
      heroImage: { url: string; alt: string | null };
      leadTitle: string;
      leadAccent: string;
      leadBody: string;
      thumbImages: { url: string; alt: string | null }[];
      trustLabel: string;
      trustStat: { value: string; unit: string | null; label: string };
      trustBody: string;
      trustImage: { url: string; alt: string | null };
    };
    aboutPreview: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      body: string;
      linkLabel: string;
      linkHref: string;
      image: { url: string; alt: string | null };
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
    thumbnail: { url: string; alt: string | null };
  }[];
  allTeamMembers: {
    id: string;
    name: string;
    role: string;
    initials: string;
    isManagingDirector: boolean;
  }[];
}

export const ABOUT_PAGE_QUERY = /* GraphQL */ `
  query AboutPage {
    aboutPage {
      eyebrow
      title
      accent
      lede
      storyTitle
      storyBody
      visionTitle
      visionBody
      leadershipEyebrow
      leadershipSectionDesc
      teamEyebrow
      teamSectionDesc
      partnersEyebrow
      partnersSectionDesc
      partnersHeading
      partners {
        tagLabel
        name
        subtitle
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

    allTeamMembers {
      id
      name
      role
      initials
      isManagingDirector
    }
  }
`;

export interface AboutPageData {
  aboutPage: {
    eyebrow: string;
    title: string;
    accent: string;
    lede: string;
    storyTitle: string;
    storyBody: string;
    visionTitle: string;
    visionBody: string;
    leadershipEyebrow: string;
    leadershipSectionDesc: string;
    teamEyebrow: string;
    teamSectionDesc: string;
    partnersEyebrow: string;
    partnersSectionDesc: string;
    partnersHeading: string;
    partners: { tagLabel: string; name: string; subtitle: string }[];
  };
  siteConfig: {
    leadershipBody: string;
    ctaBandTitle: string;
    ctaBandDescription: string;
    ctaBandButtonLabel: string;
    globalStats: { value: string; unit: string | null; label: string }[];
  };
  allTeamMembers: {
    id: string;
    name: string;
    role: string;
    initials: string;
    isManagingDirector: boolean;
  }[];
}

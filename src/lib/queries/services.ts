export const SERVICES_PAGE_QUERY = /* GraphQL */ `
  query ServicesPage {
    servicesPage {
      eyebrow
      title
      accentText
      lede
      introTitle
      introBody
      signalEyebrow
      signalTitle
      whatWeDoEyebrow
      whatWeDoSectionDesc
      processTitle
      approachEyebrow
      approachSectionDesc
      processSteps {
        number
        label
      }
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

    allServices {
      id
      index
      name
      shortDescription
      fullDescription
    }
  }
`;

export interface ServicesPageData {
  servicesPage: {
    eyebrow: string;
    title: string;
    accentText: string;
    lede: string;
    introTitle: string;
    introBody: string;
    signalEyebrow: string;
    signalTitle: string;
    whatWeDoEyebrow: string;
    whatWeDoSectionDesc: string;
    processTitle: string;
    approachEyebrow: string;
    approachSectionDesc: string;
    processSteps: { number: string; label: string }[];
  };
  siteConfig: {
    ctaBandTitle: string;
    ctaBandDescription: string;
    ctaBandButtonLabel: string;
    globalStats: { value: string; unit: string | null; label: string }[];
  };
  allServices: {
    id: string;
    index: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
  }[];
}

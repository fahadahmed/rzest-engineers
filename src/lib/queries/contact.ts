export const CONTACT_PAGE_QUERY = /* GraphQL */ `
  query ContactPage {
    contactPage {
      eyebrow
      title
      accent
      lede
    }

    siteConfig {
      email
      phone1
      phone2
      address
      linkedinLabel
    }
  }
`;

export interface ContactPageData {
  contactPage: {
    eyebrow: string;
    title: string;
    accent: string;
    lede: string;
  };
  siteConfig: {
    email: string;
    phone1: string;
    phone2: string;
    address: string;
    linkedinLabel: string;
  };
}

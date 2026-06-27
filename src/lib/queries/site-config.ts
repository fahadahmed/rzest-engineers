export const SITE_CONFIG_QUERY = /* GraphQL */ `
  query SiteConfig {
    siteConfig {
      brandLabel
      tagline
      email
      phone1
      phone2
      address
      linkedinLabel
      linkedinHref
    }
  }
`;

export interface SiteConfigData {
  siteConfig: {
    brandLabel: string;
    tagline: string;
    email: string;
    phone1: string;
    phone2: string;
    address: string;
    linkedinLabel: string;
    linkedinHref: string | null;
  };
}

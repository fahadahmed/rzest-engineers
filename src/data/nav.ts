export interface NavItem {
  label: string;
  href: string;
}

/**
 * Site navigation is tightly coupled to actual page routes, so it stays
 * hardcoded here rather than being CMS-editable — letting an editor add a
 * nav link to a route that doesn't exist isn't a risk worth taking.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

/**
 * Mock content layer standing in for DatoCMS.
 *
 * To swap in real content later:
 * 1. Add a DATO_API_TOKEN to .env
 * 2. Replace each export below with a fetch() against
 *    https://graphql.datocms.com/ using DatoCMS's GraphQL API
 * 3. Match the shapes in src/types/dato.ts (use the DatoCMS query
 *    explorer to build queries that return these same fields)
 *
 * Pages import from here, not from rest of the app — components never
 * import this file directly, keeping them pure/presentational.
 */

import type {
  AboutPreview,
  HomeHero,
  NavItem,
  Partner,
  Project,
  ProcessStep,
  ServiceItem,
  SiteConfig,
  StatItem,
  TeamMember,
} from "../types/dato";

export const siteConfig: SiteConfig = {
  brandLabel: "RZest Engineers",
  tagline: "Full-service structural engineering and project delivery consultancy.",
  email: "rzest@engineers.com",
  phone1: "+92 99065 4171",
  phone2: "+92 99065 0072",
  address: "48-A/21, Nadia Sector A/2, Umar Kot – 69100",
  linkedinLabel: "LinkedIn ↗",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const globalStats: StatItem[] = [
  { value: "100", unit: "+", label: "Projects Delivered" },
  { value: "11", unit: "+", label: "Years Engineering Expertise" },
  { value: "Multi-Sector", label: "Project Portfolio" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "ra",
    name: "Rabi Akhtar",
    role: "Managing Director",
    initials: "RA",
    isManagingDirector: true,
  },
  { id: "jk", name: "Jay Kishan", role: "Director & Principal Engineer", initials: "JK" },
  { id: "sa", name: "Sohail Akhtar", role: "Senior Structural Engineer", initials: "SA" },
  { id: "sb", name: "Sharib Rehmani", role: "Project Engineer", initials: "SB" },
  { id: "fb", name: "Faiz Bari", role: "Project Manager", initials: "FB" },
  { id: "na", name: "Nadir Ali", role: "Structural Engineer", initials: "NA" },
  { id: "tz", name: "Taufiquzzaman", role: "Site Engineer", initials: "TZ" },
];

export const services: ServiceItem[] = [
  {
    id: "structural-design",
    slug: "structural-design-analysis",
    index: "01",
    name: "Structural Design & Analysis",
    shortDescription:
      "We perform analysis for gravity, lateral, seismic, and wind loads to ensure safety, efficiency, and constructability at every scale.",
    fullDescription:
      "We perform analysis for gravity, lateral, seismic and wind loads to ensure safety, efficiency and constructability at every scale.",
  },
  {
    id: "feasibility-planning",
    slug: "feasibility-planning",
    index: "02",
    name: "Feasibility & Planning",
    shortDescription:
      "Structural system selection and planning support to validate project viability, define scope, and inform design decisions before commitment.",
    fullDescription:
      "Early-stage feasibility, scheme options and constructability review to de-risk decisions before design begins.",
  },
  {
    id: "detailed-engineering",
    slug: "detailed-engineering",
    index: "03",
    name: "Detailed Engineering",
    shortDescription:
      "Production of complete construction documentation packages including structural drawings, specifications, schedules, and Bills of Quantities.",
    fullDescription:
      "Coordinated detailed design and BIM modelling across disciplines, resolved to fabrication-ready precision.",
  },
  {
    id: "tender-documentation",
    slug: "tender-documentation",
    index: "04",
    name: "Tender & Documentation",
    shortDescription:
      "Preparation of tender packages, contract documentation, and procurement support. We help clients select contractors and establish clear frameworks.",
    fullDescription:
      "Complete drawing sets, specifications and BOQs that translate intent into accountable, biddable scope.",
  },
  {
    id: "site-supervision",
    slug: "site-supervision",
    index: "05",
    name: "Site Supervision",
    shortDescription:
      "Resident and periodic engineering supervision ensuring construction conforms to design intent, specification, and quality standards throughout.",
    fullDescription:
      "On-site engineering oversight, inspection and quality assurance to keep execution aligned with design intent.",
  },
  {
    id: "project-management",
    slug: "project-management",
    index: "06",
    name: "Project Management",
    shortDescription:
      "Integrated project management covering programme, cost, quality, and risk. Our PMs act as the client's representative, coordinating all stakeholders.",
    fullDescription:
      "Programme, cost and coordination management that holds complex developments together end to end.",
  },
];

export const processSteps: ProcessStep[] = [
  { number: "01", label: "Discover" },
  { number: "02", label: "Define" },
  { number: "03", label: "Design" },
  { number: "04", label: "Detail" },
  { number: "05", label: "Deliver" },
  { number: "06", label: "Close" },
  { number: "07", label: "Review" },
];

export const partners: Partner[] = [
  { tagLabel: "● Architecture", name: "Studio Forma", meta: "Architecture & Interior · Karachi" },
  { tagLabel: "● Urban", name: "Axis Architects", meta: "Urban & Institutional · Lahore" },
  {
    tagLabel: "● Commercial",
    name: "Meridian Design Group",
    meta: "Commercial & Hospitality · Dubai",
  },
];

export const projects: Project[] = [
  {
    id: "gulshan-one29-mall",
    slug: "gulshan-one29-mall",
    title: "Gulshan One29 Mall",
    sector: "commercial",
    sectorLabel: "Commercial",
    client: "Muzza View Development",
    location: "Gulshan, Note Sector 129",
    type: "Mixed-Use Retail",
    role: "Structural Engineer",
    status: "Delivered",
    featured: true,
    thumbnail: {
      url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&q=80&auto=format&fit=crop",
      alt: "Gulshan One29 Mall",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1100&q=80&auto=format&fit=crop",
      alt: "Gulshan One29 Mall",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80&auto=format&fit=crop",
        alt: "Structure",
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80&auto=format&fit=crop",
        alt: "Site",
      },
      {
        url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&q=80&auto=format&fit=crop",
        alt: "Facade",
      },
    ],
    tagline:
      "A landmark commercial mixed-use development in Gulshan — Muzza View Development, Note Sector 129.",
    overview: [
      "RZest Engineers provided full structural engineering services for this prominent commercial development, including structural design, documentation, and construction supervision.",
      "The project required innovative structural solutions to accommodate complex massing, basement carparking, and mixed-use loading conditions. Our team coordinated closely with the architectural and MEP disciplines to resolve transfer structures, long-span retail floor plates, and a deep basement substructure within a constrained urban site.",
      "From early scheme options through to on-site supervision, RZest acted as a single point of engineering accountability — delivering a safe, efficient and buildable structure aligned to the developer's commercial programme.",
    ],
    scopeItems: [
      "Structural Design",
      "Detailed Documentation",
      "Basement Substructure",
      "Transfer Structures",
      "Construction Supervision",
    ],
    caseStudyTag: "Commercial",
    caseStudyTitle: "A landmark commercial mixed-use development in Gulshan",
    caseStudyBody:
      "RZest Engineers provided full structural engineering services for this prominent development — structural design, documentation, and construction supervision — with innovative solutions for complex massing, basement carparking, and mixed-use loading conditions.",
  },
  {
    id: "world-trade-center",
    slug: "world-trade-center",
    title: "World Trade Center",
    sector: "commercial",
    sectorLabel: "Commercial",
    client: "WTC Holdings",
    location: "Karachi Business District",
    type: "Commercial Tower",
    role: "Structural Engineer",
    status: "Delivered",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80&auto=format&fit=crop",
      alt: "World Trade Center",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1100&q=80&auto=format&fit=crop",
      alt: "World Trade Center",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80&auto=format&fit=crop",
        alt: "Structure",
      },
      {
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80&auto=format&fit=crop",
        alt: "Site",
      },
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80&auto=format&fit=crop",
        alt: "Facade",
      },
    ],
    tagline: "A high-rise commercial tower anchoring Karachi's business district for WTC Holdings.",
    overview: [
      "RZest Engineers led the structural design for this landmark commercial tower, working closely with the developer and architectural team from concept through completion.",
      "The design resolved a high-rise lateral system for wind and seismic loads, alongside efficient long-span office floor plates and a multi-level basement carpark.",
      "Our team provided full construction-phase supervision, ensuring the structure was delivered safely, efficiently and to programme.",
    ],
    scopeItems: [
      "Structural Design",
      "Lateral System Design",
      "Basement Substructure",
      "Construction Supervision",
    ],
    caseStudyTag: "Commercial",
    caseStudyTitle: "A high-rise commercial tower for WTC Holdings",
    caseStudyBody:
      "Full structural design and supervision for a landmark commercial tower, resolving high-rise lateral systems alongside efficient office floor plates and basement parking.",
  },
  {
    id: "strata-estate",
    slug: "strata-estate",
    title: "Strata Estate",
    sector: "residential",
    sectorLabel: "Residential",
    client: "Strata Dev.",
    location: "DHA, Karachi",
    type: "Residential Towers",
    role: "Structural Engineer",
    status: "Delivered",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&q=80&auto=format&fit=crop",
      alt: "Strata Estate",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1100&q=80&auto=format&fit=crop",
      alt: "Strata Estate",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80&auto=format&fit=crop",
        alt: "Structure",
      },
      {
        url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&q=80&auto=format&fit=crop",
        alt: "Site",
      },
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80&auto=format&fit=crop",
        alt: "Facade",
      },
    ],
    tagline: "A multi-tower residential development for Strata Dev. in DHA, Karachi.",
    overview: [
      "RZest Engineers delivered structural design for this residential development, comprising multiple towers over a shared podium and basement.",
      "Repetitive floor plates were optimised for cost-efficient formwork cycles, while transfer structures at the podium level resolved column relocations between the basement parking and the towers above.",
      "Our team supported the developer through design, documentation and construction supervision, maintaining quality and programme across all towers.",
    ],
    scopeItems: [
      "Structural Design",
      "Transfer Structures",
      "Podium & Basement",
      "Construction Supervision",
    ],
    caseStudyTag: "Residential",
    caseStudyTitle: "A multi-tower residential development in DHA",
    caseStudyBody:
      "Structural design across multiple residential towers on a shared podium and basement, with optimised repetitive floor plates and podium-level transfer structures.",
  },
  {
    id: "medical-college-hospital",
    slug: "medical-college-hospital",
    title: "Medical College & Hospital",
    sector: "institutional",
    sectorLabel: "Institutional",
    client: "Healthcare Trust",
    location: "Hyderabad",
    type: "Healthcare & Education",
    role: "Structural Engineer",
    status: "Delivered",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80&auto=format&fit=crop",
      alt: "Medical College & Hospital",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1100&q=80&auto=format&fit=crop",
      alt: "Medical College & Hospital",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80&auto=format&fit=crop",
        alt: "Structure",
      },
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80&auto=format&fit=crop",
        alt: "Site",
      },
      {
        url: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&q=80&auto=format&fit=crop",
        alt: "Facade",
      },
    ],
    tagline:
      "A combined medical college and teaching hospital campus for a regional healthcare trust.",
    overview: [
      "RZest Engineers provided structural engineering services for this combined medical college and teaching hospital campus, spanning academic blocks, wards and diagnostic facilities.",
      "The brief demanded long-span, vibration-sensitive floor plates for diagnostic and laboratory equipment, alongside robust services coordination across a dense institutional programme.",
      "Our team worked alongside the architect and MEP consultants throughout design and construction to deliver a resilient, future-adaptable campus.",
    ],
    scopeItems: [
      "Structural Design",
      "Detailed Documentation",
      "Services Coordination",
      "Construction Supervision",
    ],
    caseStudyTag: "Institutional",
    caseStudyTitle: "A medical college and teaching hospital campus",
    caseStudyBody:
      "Structural engineering for a combined medical college and teaching hospital, balancing long-span diagnostic floor plates with dense institutional services coordination.",
  },
  {
    id: "gulshan-one29-phase-b",
    slug: "gulshan-one29-phase-b",
    title: "Gulshan One29 — Phase B",
    sector: "commercial",
    sectorLabel: "Commercial",
    client: "Muzza View Development",
    location: "Gulshan, Note Sector 129",
    type: "Mixed-Use Retail",
    role: "Structural Engineer",
    status: "In Progress",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=500&q=80&auto=format&fit=crop",
      alt: "Gulshan One29 — Phase B",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=1100&q=80&auto=format&fit=crop",
      alt: "Gulshan One29 — Phase B",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&q=80&auto=format&fit=crop",
        alt: "Structure",
      },
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop",
        alt: "Site",
      },
      {
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80&auto=format&fit=crop",
        alt: "Facade",
      },
    ],
    tagline:
      "The second phase of the Gulshan One29 mixed-use development, extending the original mall.",
    overview: [
      "Following the success of Gulshan One29 Mall, RZest Engineers is delivering structural engineering for the adjoining Phase B expansion.",
      "Phase B introduces additional retail floor plates and a connecting structure to the existing mall, requiring careful sequencing to maintain operations in the live building.",
      "Our team is providing structural design, documentation and phased construction supervision through to handover.",
    ],
    scopeItems: [
      "Structural Design",
      "Phased Construction Supervision",
      "Connecting Structure",
      "Detailed Documentation",
    ],
    caseStudyTag: "Commercial",
    caseStudyTitle: "Extending Gulshan One29 with a second retail phase",
    caseStudyBody:
      "Structural design and phased construction supervision for the Phase B expansion of Gulshan One29, connecting new retail floor plates to the live, operating mall.",
  },
  {
    id: "allied-health-institute",
    slug: "allied-health-institute",
    title: "Allied Health Institute",
    sector: "institutional",
    sectorLabel: "Institutional",
    client: "Allied Health",
    location: "Hyderabad",
    type: "Institutional Campus",
    role: "Structural Engineer",
    status: "Delivered",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80&auto=format&fit=crop",
      alt: "Allied Health Institute",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1100&q=80&auto=format&fit=crop",
      alt: "Allied Health Institute",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80&auto=format&fit=crop",
        alt: "Structure",
      },
      {
        url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&q=80&auto=format&fit=crop",
        alt: "Site",
      },
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80&auto=format&fit=crop",
        alt: "Facade",
      },
    ],
    tagline:
      "A teaching campus for allied health professions, delivered for the Allied Health trust.",
    overview: [
      "RZest Engineers delivered full structural engineering services for this allied health teaching campus, comprising lecture halls, laboratories and administrative blocks.",
      "The design balanced flexible, column-light teaching spaces with the technical demands of specialist laboratory fit-outs.",
      "RZest supported the project from feasibility through to construction completion and handover.",
    ],
    scopeItems: [
      "Feasibility & Planning",
      "Structural Design",
      "Detailed Documentation",
      "Construction Supervision",
    ],
    caseStudyTag: "Institutional",
    caseStudyTitle: "A teaching campus for allied health professions",
    caseStudyBody:
      "Full structural engineering services for an allied health teaching campus, balancing flexible teaching spaces with specialist laboratory requirements.",
  },
  {
    id: "strata-estate-phase-ii",
    slug: "strata-estate-phase-ii",
    title: "Strata Estate Phase II",
    sector: "residential",
    sectorLabel: "Residential",
    client: "Strata Dev.",
    location: "DHA, Karachi",
    type: "Residential Towers",
    role: "Structural Engineer",
    status: "In Progress",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500&q=80&auto=format&fit=crop",
      alt: "Strata Estate Phase II",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1100&q=80&auto=format&fit=crop",
      alt: "Strata Estate Phase II",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&q=80&auto=format&fit=crop",
        alt: "Structure",
      },
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80&auto=format&fit=crop",
        alt: "Site",
      },
      {
        url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&q=80&auto=format&fit=crop",
        alt: "Facade",
      },
    ],
    tagline: "The second phase of the Strata Estate residential development in DHA, Karachi.",
    overview: [
      "Building on Phase I, RZest Engineers is delivering structural design for the second phase of the Strata Estate development.",
      "Phase II introduces an additional residential tower with an upgraded amenity podium, coordinated with the existing Phase I structure and services.",
      "Our team is carrying the project through detailed design and into construction supervision.",
    ],
    scopeItems: [
      "Structural Design",
      "Podium & Amenity Deck",
      "Detailed Documentation",
      "Construction Supervision",
    ],
    caseStudyTag: "Residential",
    caseStudyTitle: "Phase II of the Strata Estate residential development",
    caseStudyBody:
      "Structural design for the second residential tower and amenity podium of the Strata Estate development, coordinated with the existing Phase I structure.",
  },
  {
    id: "world-trade-center-ii",
    slug: "world-trade-center-ii",
    title: "World Trade Center II",
    sector: "commercial",
    sectorLabel: "Commercial",
    client: "WTC Holdings",
    location: "Karachi Business District",
    type: "Commercial Tower",
    role: "Structural Engineer",
    status: "In Progress",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80&auto=format&fit=crop",
      alt: "World Trade Center II",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1100&q=80&auto=format&fit=crop",
      alt: "World Trade Center II",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop",
        alt: "Structure",
      },
      {
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80&auto=format&fit=crop",
        alt: "Site",
      },
      {
        url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&q=80&auto=format&fit=crop",
        alt: "Facade",
      },
    ],
    tagline:
      "A second commercial tower for WTC Holdings, adjoining the original World Trade Center.",
    overview: [
      "Following the original World Trade Center tower, RZest Engineers is delivering structural design for a second adjoining commercial tower for WTC Holdings.",
      "The design extends the shared basement and podium infrastructure while introducing an independent lateral system for the new tower.",
      "RZest is providing structural design, documentation and construction-phase supervision through to completion.",
    ],
    scopeItems: [
      "Structural Design",
      "Lateral System Design",
      "Shared Basement Integration",
      "Construction Supervision",
    ],
    caseStudyTag: "Commercial",
    caseStudyTitle: "A second commercial tower for WTC Holdings",
    caseStudyBody:
      "Structural design for a second commercial tower adjoining the original World Trade Center, extending shared basement infrastructure with an independent lateral system.",
  },
];

export const homeHero: HomeHero = {
  signalEyebrow: "Structural / Project",
  signalTitle: "Engineering the load path from concept to completion.",
  microcopy:
    "Delivering certainty for residential, commercial, industrial, hospitality & institutional developers.",
  heroImage: {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=720&q=80&auto=format&fit=crop",
    alt: "Structural engineering site",
  },
  leadTitle: "Engineering Structures.",
  leadAccent: "Enabling Vision.",
  leadBody:
    "A full-service structural engineering and project delivery consultancy — integrated planning, design and execution support.",
  thumbImages: [
    {
      url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80&auto=format&fit=crop",
      alt: "Detail",
    },
    {
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80&auto=format&fit=crop",
      alt: "Structure",
    },
    {
      url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&q=80&auto=format&fit=crop",
      alt: "Facade",
    },
  ],
  trustLabel: "Multidisciplinary Team",
  trustStat: { value: "100", unit: "+", label: "" },
  trustBody: "Projects delivered across diverse sectors with engineering precision and trust.",
  trustImage: {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80&auto=format&fit=crop",
    alt: "Tower",
  },
};

export const homeAboutPreview: AboutPreview = {
  eyebrow: "About RZest",
  title: "Engineering excellence built on",
  titleAccent: "precision",
  body: "RZest Engineers delivers integrated structural engineering and project consultancy with a commitment to technical excellence, collaboration and long-term value.",
  linkLabel: "Learn More About Us",
  linkHref: "/about",
  image: {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80&auto=format&fit=crop",
    alt: "Modern engineering building",
  },
};

export const aboutStory = {
  title: "Engineering built on integrity, precision and experience.",
  accent: "precision",
  lede: "RZest Engineers delivers integrated structural engineering and project consultancy services with a commitment to technical excellence, collaborative practice, and long-term value.",
  storyTitle: "Company Story",
  storyBody:
    "RZest Engineers was founded on the belief that engineering excellence is built through precision, trust, and a relentless commitment to delivering value. Over more than a decade, we have grown into a full-service structural engineering and project consultancy serving residential, commercial, industrial, hospitality, and institutional sectors.",
  visionTitle: "Our Vision",
  visionBody:
    "To be the engineering partner of choice for developers and institutions who demand technical rigour, creative problem-solving, and accountable project delivery. We embed ourselves in our clients' goals, aligning our expertise to their outcomes.",
  leadershipBody:
    "Led by Managing Director Rabi Akhtar, RZest Engineers combines technical depth with practical execution experience to deliver reliable engineering outcomes across complex developments — supported by a multidisciplinary team of structural engineers, BIM specialists, and draughtsmen, with a strong focus on quality, coordination, and delivery excellence.",
};

export const servicesIntro = {
  title: "Integrated Structural Engineering & Project Consultancy",
  lede: "Comprehensive engineering services covering planning, structural analysis, detailed design, documentation, supervision, and project management.",
  introTitle: "A single point of accountability across all engineering disciplines.",
  introBody:
    "From early feasibility through to construction completion, our multidisciplinary team works collaboratively to deliver technical excellence and project certainty — tailored to the complexity and scale of each project.",
  signalEyebrow: "End to end",
  signalTitle: "Feasibility → design → documentation → supervision → handover.",
  processTitle: "A disciplined seven-stage delivery method.",
};

export const contactPageCopy = {
  title: "Let's start a",
  accent: "conversation.",
  lede: "Tell us about your structure, programme and goals. Our team will respond with how RZest can support your project — from feasibility through to handover.",
};

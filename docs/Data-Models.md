# DatoCMS Data Models

Content lives in DatoCMS and is fetched over the GraphQL Content Delivery API at build time (see [`lib/datocms.ts`](../src/lib/datocms.ts)). Each page has one query module under [`lib/queries/`](../src/lib/queries/) that pairs a GraphQL query string with its TypeScript response type — that's the source of truth for what each model contains; this page is a derived summary.

There is no runtime CMS access from the browser — the API token is build-time only.

## Shared fragments

Used across multiple models:

| Fragment | Shape                                                    |
| -------- | -------------------------------------------------------- |
| Image    | `{ url: string, alt: string \| null }`                   |
| Stat     | `{ value: string, unit: string \| null, label: string }` |

## Singleton models (one record each)

These back exactly one page's unique content, queried by name (no `all`/list prefix).

| Model         | Queried as     | Key fields                                                                                                                                                                                                                                                                 | Used by                                                                  |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Site config   | `siteConfig`   | `brandLabel`, `tagline`, `email`, `phone1`, `phone2`, `address`, `linkedinLabel`, `linkedinHref`, `leadershipBody`, `ctaBandTitle/Description/ButtonLabel`, `globalStats[]`                                                                                                | every page (via `Base.astro`), plus home/about/services/projects/contact |
| Home page     | `homePage`     | `hero { signalEyebrow, signalTitle, microcopy, heroImage, leadTitle, leadAccent, leadBody, thumbImages[], trustLabel, trustStat, trustBody, trustImage }`, `aboutPreview { eyebrow, title, titleAccent, body, linkLabel, linkHref, image }`, section headings/descriptions | [`index.astro`](../src/pages/index.astro)                                |
| About page    | `aboutPage`    | `eyebrow`, `title`, `accent`, `lede`, `storyTitle/Body`, `visionTitle/Body`, `leadershipEyebrow`, `teamEyebrow`, `partnersEyebrow/Heading`, `partners[] { tagLabel, name, subtitle }`                                                                                      | [`about.astro`](../src/pages/about.astro)                                |
| Services page | `servicesPage` | `eyebrow`, `title`, `accentText`, `lede`, `introTitle/Body`, `signalEyebrow/Title`, `whatWeDoEyebrow`, `processTitle`, `approachEyebrow`, `processSteps[] { number, label }`                                                                                               | [`services.astro`](../src/pages/services.astro)                          |
| Projects page | `projectsPage` | `eyebrow`, `title`, `accentText`, `description`, `featuredCaseStudyEyebrow`                                                                                                                                                                                                | [`projects/index.astro`](../src/pages/projects/index.astro)              |
| Contact page  | `contactPage`  | `eyebrow`, `title`, `accent`, `lede`                                                                                                                                                                                                                                       | [`contact.astro`](../src/pages/contact.astro)                            |

## Collection models (lists, queried as `allX`)

| Model       | Queried as       | Key fields                                                                                                                                                                                                                                  | Notes                                                                                                                                           |
| ----------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Service     | `allServices`    | `id`, `index`, `name`, `shortDescription`, `fullDescription`                                                                                                                                                                                | Listed in full on Services; summarized (id/index/name/fullDescription) on Home                                                                  |
| Project     | `allProjects`    | `id`, `slug`, `title`, `sector`, `sectorLabel`, `client`, `location`, `projectType`, `role`, `projectStatus`, `featured`, `thumbnail`, `heroImage`, `gallery[]`, `tagline`, `overview`, `scopeItems[] { field }`, `caseStudyTag/Title/Body` | `slug` drives the dynamic route `projects/[slug].astro`. Home queries a filtered/limited subset: `filter: { featured: { eq: true } }, first: 4` |
| Team member | `allTeamMembers` | `id`, `name`, `role`, `initials`, `isManagingDirector`                                                                                                                                                                                      | Home/About split the managing director out of the list client-side (`.find(isManagingDirector)` / `.filter(!isManagingDirector)`)               |

## Notes for editors

- `slug` on Project is the only field that affects routing — changing it changes the project's URL (and breaks existing links/SEO until redirects are added, which the site doesn't currently do).
- Every field above is read once per build, not per page view — publishing a change in DatoCMS only reaches the live site after the publish webhook triggers a rebuild (see [[Sequence-Diagrams]] §4) or a manual deploy.

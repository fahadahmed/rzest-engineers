# Sitemap

## Routes

| Path               | File                                                                | Rendering                                                | Notes                                                                                   |
| ------------------ | ------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `/`                | [`pages/index.astro`](../src/pages/index.astro)                     | Static, prerendered                                      | Home — hero, about preview, services, featured projects, leadership, CTA                |
| `/about`           | [`pages/about.astro`](../src/pages/about.astro)                     | Static, prerendered                                      | Story, vision, leadership, team, partners                                               |
| `/services`        | [`pages/services.astro`](../src/pages/services.astro)               | Static, prerendered                                      | Full service list, process steps                                                        |
| `/projects`        | [`pages/projects/index.astro`](../src/pages/projects/index.astro)   | Static, prerendered                                      | All projects, ordered by creation date                                                  |
| `/projects/[slug]` | [`pages/projects/[slug].astro`](../src/pages/projects/[slug].astro) | Static, prerendered (one page per project at build time) | Project case study; `slug` comes from the Project model in DatoCMS                      |
| `/contact`         | [`pages/contact.astro`](../src/pages/contact.astro)                 | Static, prerendered                                      | Contact form (submits to `/api/contact`)                                                |
| `/api/contact`     | n/a — Firebase Hosting rewrite                                      | Runtime                                                  | Not a page; rewrites to the `contactSubmission` function (see [[Sequence-Diagrams]] §3) |

Primary navigation (`src/data/nav.ts`) covers `/`, `/about`, `/services`, `/projects`, `/contact` — kept hardcoded rather than CMS-editable so an editor can't link to a route that doesn't exist.

## XML sitemap

Generated automatically at build time by the `@astrojs/sitemap` integration (configured in [`astro.config.mjs`](../astro.config.mjs) with `site: "https://rzestengineers.com"`), covering every static route above including one entry per project slug. Output as `sitemap-index.xml` / `sitemap-0.xml` in `dist/`, deployed alongside the rest of the static site.

# RZest Engineers

Marketing site for RZest Engineers, a structural engineering and project consultancy. Statically generated with [Astro](https://astro.build) and [React](https://react.dev) islands, content managed in [DatoCMS](https://www.datocms.com), hosted on Firebase.

For architecture, data models, sequence diagrams, and the deployment/release strategy, see the [project wiki](../../wiki).

## Stack

- **Astro 6** — static site generation; every page is prerendered at build time
- **React** — interactive components only (`client:load` islands), e.g. the header nav, services showcase, and contact form
- **DatoCMS** — all page copy and content, fetched via GraphQL at build time (no runtime CMS calls)
- **Firebase Hosting** — serves the built static site
- **Firebase Functions** (`asia-south1`) — two narrowly-scoped functions: forwarding contact form submissions to email via [Resend](https://resend.com), and triggering a rebuild when content is published in DatoCMS
- **Firebase Remote Config** — used only for the one value read at runtime (`contact_recipient_email`)

## Getting started

Requires Node `>=22.12.0` and `pnpm` (see `packageManager` in `package.json`).

```sh
pnpm install
cp .env.example .env   # then fill in DATOCMS_API_TOKEN
pnpm dev                # http://localhost:4321
```

### Environment variables

| Variable              | Required | Notes                                                                                                   |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `DATOCMS_API_TOKEN`   | Yes      | DatoCMS Content Delivery API token. Without it, the build fails immediately (see `src/lib/datocms.ts`). |
| `DATOCMS_ENVIRONMENT` | No       | Only needed to point at a non-primary DatoCMS environment (e.g. a sandbox before promoting to primary). |

In CI, these are supplied as GitHub repo secrets rather than committed.

## Commands

| Command                                                | Action                                          |
| ------------------------------------------------------ | ----------------------------------------------- |
| `pnpm dev`                                             | Start the local dev server                      |
| `pnpm build`                                           | Build the production site to `./dist/`          |
| `pnpm preview`                                         | Preview the production build locally            |
| `pnpm test` / `pnpm test:watch` / `pnpm test:coverage` | Run unit tests (Vitest)                         |
| `pnpm test:visual` / `pnpm test:visual:update`         | Run / update Playwright visual regression tests |
| `pnpm lint` / `pnpm lint:fix`                          | Lint (ESLint)                                   |
| `pnpm format` / `pnpm format:check`                    | Format (Prettier)                               |
| `pnpm storybook`                                       | Start Storybook at `localhost:6006`             |
| `pnpm build-storybook`                                 | Build the static Storybook site                 |
| `pnpm astro check`                                     | Type-check `.astro` files                       |

## Project structure

```text
src/
├── pages/             # routes — one .astro file per page
├── layouts/           # Base.astro: shared <head>, header/footer, GA4
├── components/        # atoms/ → molecules/ → organisms/
├── sections/           # page-glue components (e.g. ContactFormSection)
├── lib/
│   ├── datocms.ts      # fetchDato() — build-time GraphQL client
│   └── queries/        # one query module per page (query + response type)
└── data/               # hardcoded, non-CMS config (e.g. nav items)

functions/src/          # Firebase Functions: contact form, DatoCMS webhook
docs/                    # source of truth for the project wiki
```

## Deployment

Pushing to `main` builds and deploys to Firebase Hosting automatically; pull requests get their own preview channel. Publishing in DatoCMS triggers an automatic rebuild via a webhook. Full details, including the CI/CD pipeline and rollback strategy, are in the [Deployment wiki page](../../wiki/Deployment).

# RZest Engineers — Project Wiki

This wiki documents the architecture, data model, and operational setup of the RZest Engineers marketing site.

It's generated from `docs/` in the main repo and kept in sync automatically — see [[Wiki-Maintenance]] for how that works.

## Contents

- [[Architecture]] — conceptual and component-level view of the system
- [[Sequence-Diagrams]] — request/build flows: page render, contact form, CMS publish → redeploy
- [[Data-Models]] — DatoCMS content models and the GraphQL queries that read them
- [[Sitemap]] — site routes and how each is rendered
- [[Deployment]] — environments, release strategy, and the CI/CD pipeline
- [[Wiki-Maintenance]] — how this wiki is authored and kept up to date

## At a glance

- **Stack**: [Astro 6](https://astro.build) (static site generation) with [React](https://react.dev) islands for interactive components
- **Content**: [DatoCMS](https://www.datocms.com) via GraphQL Content Delivery API, fetched at build time
- **Hosting**: Firebase Hosting (static `dist/`) + Firebase Functions (`asia-south1`) for the contact form and CMS webhook
- **CI/CD**: GitHub Actions — build/deploy on push to `main`, PR preview channels, and a `repository_dispatch` rebuild triggered by DatoCMS publishes

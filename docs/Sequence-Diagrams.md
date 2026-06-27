# Sequence Diagrams

## 1. Page build (every deploy)

Runs once per build in CI, not per visitor request.

```mermaid
sequenceDiagram
    participant CI as GitHub Actions
    participant Astro as astro build
    participant Page as *.astro page
    participant Dato as DatoCMS GraphQL API

    CI->>Astro: pnpm run build
    Astro->>Page: evaluate frontmatter
    Page->>Dato: fetchDato(QUERY) [page-specific query]
    Dato-->>Page: JSON content
    Page->>Page: render HTML (incl. nested components)
    Astro->>Astro: emit static files to dist/
    CI->>CI: deploy dist/ to Firebase Hosting
```

## 2. Visitor page load

```mermaid
sequenceDiagram
    participant Browser
    participant Hosting as Firebase Hosting
    participant GA4

    Browser->>Hosting: GET /about
    Hosting-->>Browser: prebuilt HTML, CSS, JS
    Browser->>Browser: hydrate client:load islands (Header, etc.)
    Browser->>GA4: load gtag.js, fire page_view
    Browser->>Browser: attach delegated click listener (tel/mailto/LinkedIn)
```

## 3. Contact form submission

```mermaid
sequenceDiagram
    participant Browser
    participant Section as ContactFormSection.tsx
    participant Hosting as Firebase Hosting (rewrite)
    participant Fn as contactSubmission function
    participant RC as Remote Config
    participant Resend

    Browser->>Section: submit form
    Section->>Hosting: POST /api/contact
    Hosting->>Fn: rewrite to contactSubmission (asia-south1)
    Fn->>Fn: validate body (zod schema)
    Fn->>RC: getRecipientEmail() [cached 5 min]
    RC-->>Fn: contact_recipient_email
    Fn->>Resend: send email (reply-to: submitter)
    Resend-->>Fn: success/error
    Fn-->>Section: 200 / 4xx / 5xx
    Section->>Browser: trackEvent("contact_form_submit", {status})
```

## 4. DatoCMS publish → automatic rebuild

```mermaid
sequenceDiagram
    participant Editor
    participant Dato as DatoCMS
    participant Webhook as datoDeployWebhook function
    participant GitHub as GitHub API
    participant Actions as GitHub Actions (firebase-hosting-merge.yml)
    participant Hosting as Firebase Hosting

    Editor->>Dato: publish content change
    Dato->>Webhook: POST webhook (X-Dato-Webhook-Secret)
    Webhook->>Webhook: verify secret
    Webhook->>GitHub: POST /repos/.../dispatches (event_type: dato-publish)
    GitHub->>Actions: repository_dispatch: dato-publish
    Actions->>Actions: pnpm run build (fetches fresh content)
    Actions->>Hosting: deploy dist/ (channel: live)
```

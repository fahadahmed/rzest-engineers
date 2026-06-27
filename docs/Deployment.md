# Deployment Plan & Release Strategy

## Environments

| Environment | Purpose                                | Trigger                                    | Firebase project                                    |
| ----------- | -------------------------------------- | ------------------------------------------ | --------------------------------------------------- |
| PR preview  | Review a branch's changes before merge | Any pull request (same-repo only)          | `rzest-engineers-prd` (preview channel, not `live`) |
| Production  | Live site                              | Push to `main`, or `dato-publish` dispatch | `rzest-engineers-prd` (`live` channel)              |

There is no separate staging Firebase project — PR preview channels serve that purpose, scoped per-PR and auto-expiring.

## Pipelines

### `firebase-hosting-pull-request.yml`

On every PR from a branch in the same repo (forks are excluded — they don't have access to deploy secrets):

1. Install deps (`pnpm install --frozen-lockfile`), build (`astro build`) with `DATOCMS_API_TOKEN`/`DATOCMS_ENVIRONMENT` from secrets.
2. Deploy `dist/` to a PR-scoped preview channel via `FirebaseExtended/action-hosting-deploy`.
3. If the action reports failure, verify against the actual preview channel URL before failing the job — a known firebase-tools retry/network issue (see issue #40) can report failure on a deploy that actually succeeded. If verified live, the job also patches the action's own "Deploy Preview" check run so the PR doesn't show a stale failure.

### `firebase-hosting-merge.yml`

Triggered by push to `main`, **or** by a `repository_dispatch` event of type `dato-publish` (see below). Same build steps as above, but deploys straight to the `live` channel. Same failure-verification logic applies, checked against the production URL.

### `sync-wiki.yml`

Triggered by any push to `main` that touches `docs/**`. Mirrors `docs/` into the repo's GitHub Wiki (`rsync --delete`, preserving the wiki's own `.git`), committed as `github-actions[bot]`. This is how this wiki stays in sync with the docs in version control — edit `docs/`, open a PR, merge, and the wiki updates itself.

## Content-driven redeploys

Publishing in DatoCMS doesn't update the live site by itself — the site is static. The flow:

1. Editor publishes in DatoCMS.
2. DatoCMS calls the `datoDeployWebhook` function (secret-verified via `X-Dato-Webhook-Secret`).
3. The function dispatches a `dato-publish` `repository_dispatch` event to GitHub via the API.
4. `firebase-hosting-merge.yml` picks that event up and runs a full rebuild + deploy, fetching the newly-published content.

This means a content change typically takes a few minutes (CI build time) to appear live, not instantly.

## Release strategy

- **Trunk-based**: all work merges to `main` via PR; `main` is always deployable and every merge auto-deploys to production.
- **No manual release/tagging step** — there's no versioned release process beyond the deploy history in Firebase Hosting (which supports rollback to a prior release via the Firebase console/CLI if needed).
- **Rollback**: revert the offending PR (or `firebase hosting:rollback` to a previous hosting release) rather than reverting forward — keeps `main` and production in sync.
- **Secrets** (`DATOCMS_API_TOKEN`, `DATOCMS_ENVIRONMENT`, `FIREBASE_SERVICE_ACCOUNT_RZEST_ENGINEERS_PRD`, function secrets `RESEND_API_KEY`/`DATO_WEBHOOK_SECRET`/`GITHUB_DISPATCH_TOKEN`) are stored as GitHub repo secrets and Firebase Functions secrets respectively — never committed (see `.env.example` for the local-dev shape).
- **Runtime config that can change without a redeploy** goes through Firebase Remote Config (currently just `contact_recipient_email`, read inside `contactSubmission` on every invocation, 5-minute in-memory cache). Anything baked into the static build (GA measurement ID, nav items, all DatoCMS content) requires a rebuild to change, regardless of where it's stored — see [[Architecture]].

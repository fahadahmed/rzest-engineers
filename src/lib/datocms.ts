import { GraphQLClient } from "graphql-request";

const apiToken = import.meta.env.DATOCMS_API_TOKEN;

if (!apiToken) {
  throw new Error(
    "DATOCMS_API_TOKEN is not set. Add it to .env locally, or as a repo secret for the build in CI.",
  );
}

const client = new GraphQLClient("https://graphql.datocms.com/", {
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});

/**
 * Runs a single named GraphQL query against the DatoCMS Content Delivery
 * API. Called at build time only (Astro frontmatter), never from the
 * browser — the token must never ship to the client.
 */
export async function fetchDato<TData, TVariables extends object = Record<string, never>>(
  query: string,
  variables?: TVariables,
): Promise<TData> {
  return client.request<TData>(query, variables);
}

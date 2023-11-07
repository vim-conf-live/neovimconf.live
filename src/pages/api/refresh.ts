import { purgeCache } from "@netlify/functions";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, params, cookies }) => {
  const url = new URL(request.url);
  const cacheTag = url.searchParams.get("tag");
  const tags = cacheTag ? [cacheTag] : undefined;

  await purgeCache({
    tags,
    token: import.meta.env.NETLIFY_PURGE_TOKEN
  });

  return new Response("Purged!", { status: 202 })
};

// purge a cache tag passed by query parameter across all deploys of a site
// no need to specify site ID as it is passed automatically by the purgeCache helper 

import { purgeCache } from "@netlify/functions";
import type { APIRoute } from "astro";

export const prerender = false

export const GET: APIRoute = async ({ request, params, cookies }) => {
  const url = new URL(request.url);
  const cacheTag = url.searchParams.get("tag");
  const tags = cacheTag ? [cacheTag] : undefined;

  try {
    await purgeCache({
      tags,
      token: import.meta.env.NETLIFY_PURGE_TOKEN
    });
  } catch(e) {

  }

  return new Response("Purged!", { status: 202 })
};

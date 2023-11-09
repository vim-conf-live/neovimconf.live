// purge a cache tag passed by query parameter across all deploys of a site
// no need to specify site ID as it is passed automatically by the purgeCache helper 

import { purgeCache, Config } from "@netlify/functions";

export default async (req: Request) => {
  const url = new URL(req.url);
  const cacheTag = url.searchParams.get("tag");
  const tags = cacheTag ? [cacheTag] : undefined;

  console.log("Purging tag: ", cacheTag);

  await purgeCache({
    tags
  });

  return new Response("Purged!", { status: 202 })
};

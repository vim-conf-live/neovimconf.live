import {purgeCache,} from "@netlify/functions"
import type { APIRoute } from "astro"

export const prerender = false;

export const GET: APIRoute = async ({ request, params, cookies }) => {
  await purgeCache({
    tags: [`ticket-${params.id}`]
  })

  return {
    body: "Purged!",
    statusCode: 202
  }
}

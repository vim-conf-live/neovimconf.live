import { createClient } from "./deps.ts";
import { Database } from "./types.ts";

export const supabase = createClient<Database>(
  Deno.env.get("PUBLIC_SUPABASE_URL")!,
  Deno.env.get("SERVICE_KEY")!
);

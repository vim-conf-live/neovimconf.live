import { createClient } from "npm:@supabase/supabase-js";
import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { Database } from "./types.ts";
const env = await load();

export const supabase = createClient<Database>(
  env["PUBLIC_SUPABASE_URL"],
  env["SERVICE_KEY"]
);

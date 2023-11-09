import { createClient } from "npm:@supabase/supabase-js";
import { Database } from "./types.ts";

export const supabase = createClient<Database>(
  Deno.env.get("PUBLIC_SUPABASE_URL")!,
  Deno.env.get("SERVICE_KEY")!
);

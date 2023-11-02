import { createClient } from '@supabase/supabase-js'

console.log("ENV", import.meta.env)
export const db = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY, {
    auth: {
      flowType: "pkce"
    }
  }
)

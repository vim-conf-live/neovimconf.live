import {createClient} from '@supabase/supabase-js'
import type { AstroCookies } from 'astro';
import cookie from "cookie"

export const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
)

export async function getUser({cookies}: {cookies: AstroCookies}) {
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");

  if (!accessToken || !refreshToken) {
    throw new Error("No access token or refresh token");
  }

  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value,
  });

  if (error) {
    cookies.delete("sb-access-token", {
      path: "/",
    });
    cookies.delete("sb-refresh-token", {
      path: "/",
    });

    throw new Error("Error setting session");
  }

  return data
}

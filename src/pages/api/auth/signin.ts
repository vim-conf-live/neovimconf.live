import { supabase } from '@/lib/auth'
import { type EmailOtpType } from '@supabase/supabase-js'
import { type APIRoute } from 'astro'

export const prerender = false;

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const requestUrl = new URL(request.url)
  const token_hash = requestUrl.searchParams.get('token_hash')
  const type = requestUrl.searchParams.get('type') as EmailOtpType | null

  if (token_hash && type) {
    const auth = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })

    if (!auth.error && auth.data.session) {
      cookies.set("sb-access-token", auth.data.session?.access_token, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
      cookies.set("sb-refresh-token", auth.data.session?.refresh_token, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
      return redirect(`/register/complete`)
    }
  }

  // return the user to an error page with some instructions
  return redirect('/register/error')
}


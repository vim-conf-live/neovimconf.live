import { createServerClient } from '@supabase/ssr'
import { type EmailOtpType } from '@supabase/supabase-js'
import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const requestUrl = new URL(request.url)
  const token_hash = requestUrl.searchParams.get('token_hash')
  const type = requestUrl.searchParams.get('type') as EmailOtpType | null

  if (token_hash && type) {
    const supabase = createServerClient(
      import.meta.env.PUBLIC_SUPABASE_URL,
      import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(key) {
            return cookies.get(key)?.value
          },
          set(key, value, options) {
            cookies.set(key, value, options)
          },
          remove(key, options) {
            cookies.delete(key, options)
          },
        },
      }
    )

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
      return redirect(`/dashboard`)
    }
  }

  // return the user to an error page with some instructions
  return redirect('/auth/auth-code-error')
}


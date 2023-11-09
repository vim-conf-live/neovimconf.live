import { SignUpSchema } from "@/components/RegisterForm";
import { createSBSSR } from "@/lib/server/supabase";
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({request, cookies}) => {
  const data = await request.json();
  const parsedFormData = SignUpSchema.safeParse(data);
  const supabase = createSBSSR({ cookies });

  if (parsedFormData.success) {
    cookies.set("nvc-formdata", JSON.stringify(parsedFormData.data), {
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    const { error } = await supabase.auth.signInWithOtp({
      email: parsedFormData.data.email,
      options: {
        emailRedirectTo:
          import.meta.env.PUBLIC_AUTH_REDIRECT_HOST + "/register/confirm",
      },
    });

    if (error) {
      return new Response(JSON.stringify({
        error: error.message
      }));
    }

    return new Response(JSON.stringify({
      success: true,
      data: parsedFormData.data
    }))
  }

  return new Response(JSON.stringify({
    error: parsedFormData.error.message
  }))
}


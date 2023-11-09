import { SignUpSchema } from "@/components/RegisterForm";
import { createClient } from '@supabase/supabase-js'
import type { APIRoute } from "astro";

export const prerender = false;

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_KEY
);

export const POST: APIRoute = async ({request, cookies}) => {
  const data = await request.json();
  const parsedFormData = SignUpSchema.safeParse(data);

  if (parsedFormData.success) {
    cookies.set("nvc-formdata", JSON.stringify(parsedFormData.data), {
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    const { data, error } = await supabase
      .from('signup_queue')
      .insert([
        parsedFormData.data 
      ])
          
    if (error) {
      return new Response(JSON.stringify({
        error: error.message
      }));
    }

    return new Response(JSON.stringify({
      success: true,
    }))
  }

  return new Response(JSON.stringify({
    error: parsedFormData.error.message
  }))
}


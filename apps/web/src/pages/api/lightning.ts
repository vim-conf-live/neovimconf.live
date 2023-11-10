import { LightningSchema } from "@/components/LightningForm";
import { createSBSSR } from "@/lib/server/supabase";
import type { APIRoute } from "astro";

export const prerender = false;


export const POST: APIRoute = async ({request, cookies}) => {
  const data = await request.json();
  const parsedFormData = LightningSchema.safeParse(data);
  const supabase = createSBSSR({cookies});

  console.log({data, parsedFormData})

  if (parsedFormData.success) {
    const { error } = await supabase
      .from('lightning_submissions')
      .insert([
        { data: parsedFormData.data }
      ])

    console.log({error})
          
    if (error) {
      return new Response(JSON.stringify({
        error: error.message
      }));
    }

    console.log(parsedFormData.data);

    return new Response(JSON.stringify({
      success: true,
    }))
  }


  return new Response(JSON.stringify({
    error: parsedFormData.error.message
  }))
}


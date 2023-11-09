import type { Config } from "@netlify/functions"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_KEY
);

async function * getMails(count: numer) {
  let done = false;

  while(!done) {
    const {data, err} = await supabase.from('signup_queue').select('email').limit(count)
    if (data.length < count) {
      done = true
    }

    yield data
  }
}

export default async (req: Request) => {
    const { next_run } = await req.json()
    console.log("=== scheduled-mail-sender")

    for await(let mails of getMails(10)) { 
      console.log("processing mails: ", mails);
      for (let mail of mails) {
        console.log("sending mail to: ", mail)
        const { error } = await supabase.auth.signInWithOtp({
          email: parsedFormData.data.email,
          options: {
            emailRedirectTo:
              import.meta.env.PUBLIC_AUTH_REDIRECT_HOST + "/register/confirm",
          },
        });
      }
    }

    console.log("Next run: ", next_run)
}

export const config: Config = {
    schedule: "* * * *"
}


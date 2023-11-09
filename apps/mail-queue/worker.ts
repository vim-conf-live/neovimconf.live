import { Message } from "./messages.ts";
import { supabase } from "./supabase.ts";
// @deno-types="npm:@types/lodash"
import { load } from "https://deno.land/std@0.205.0/dotenv/mod.ts";
import { Database } from "./types.ts";

const env = await load();

const sleep = (
  waitFor: number,
) => new Promise<void>((resolve) => setTimeout(() => resolve(), waitFor));

async function* getMails(count: number) {
  let lastId = 0;
  let done = false;

  while (!done) {
    console.log({ lastId });
    const { data, error } = await supabase
      .from("signup_queue")
      .select("*")
      .is("sent_at", null)
      .gt("id", lastId)
      .order("id")
      .limit(count);

    if (error) {
      console.error(error);
      done = true;
    }

    if (data?.length) {
      yield data;
      lastId = data[data.length - 1].id;
    }

    if (!data || data.length < count) {
      done = true;
    }
  }
}

console.log("=== scheduled-mail-sender");

const timeout = 2000;
const sendMail = async (
  mail: Database["public"]["Tables"]["signup_queue"]["Row"],
) => {
  const started = Date.now();
  const options = {
    email: mail.email,
    options: {
      emailRedirectTo: env.PUBLIC_AUTH_REDIRECT_HOST + "/register/confirm",
    },
  };

  const { data, error } = await supabase.auth.signInWithOtp(options);
  console.log(data.messageId)

  if (error) {
    console.error(error);
  } else {
    await supabase.from("signup_queue").update({
      id: mail.id,
      sent_at: "now()",
    }).eq("id", mail.id);
  }

  // make sure we don't send too many mails at once
  const wait = Math.max(timeout - (Date.now() - started), 0);
  await sleep(wait);
};

let state: "idle" | "processing" = "idle";
const processMails = async () => {
  state = "processing";
  console.log("processing mails");
  for await (const mails of getMails(2)) {
    console.log("got mails", mails?.map((m) => m.email));
    if (!mails) {
      break;
    }

    for (const mail of mails) {
      await sendMail(mail);
    }
  }
  state = "idle";
  console.log("done processing mails, going to sleep");
};

self.onmessage = (message: Message) => {
  if (state === "processing") {
    console.log("already processing, ignoring");
  }

  if (state === "idle") {
    processMails();
  }
};

processMails();

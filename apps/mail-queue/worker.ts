import { Message } from "./messages.ts";
import { supabase } from "./supabase.ts";
import { Database } from "./types.ts";

const sleep = (
  waitFor: number,
) => new Promise<void>((resolve) => setTimeout(() => resolve(), waitFor));

const log = (
  scope: string,
  message: string,
  payload?: object | string | number,
) => {
  console.log({ scope, message, payload });
};

log.error = (
  scope: string,
  message: string,
  payload?: object | string | number,
) => {
  console.error({ scope, message, payload });
};

async function* getMails(count: number) {
  let lastId = 0;
  let done = false;

  while (!done) {
    log("getMails", "fetching new mails", { lastId, count });
    const { data, error } = await supabase
      .from("signup_queue")
      .select("*")
      .is("sent_at", null)
      .gt("id", lastId)
      .order("id")
      .limit(count);

    if (error) {
      log.error("getMails", "error fetching new mails", { error });
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

log("main", "starting worker");

const timeout = 2000;
const sendMail = async (
  mail: Database["public"]["Tables"]["signup_queue"]["Row"],
) => {
  let success: boolean;
  const started = Date.now();
  const options = {
    email: mail.email,
    options: {
      emailRedirectTo: Deno.env.get("PUBLIC_AUTH_REDIRECT_HOST") +
        "/register/confirm",
    },
  };

  const { error } = await supabase.auth.signInWithOtp(options);

  if (error) {
    log.error("sendMail", "error sending mail", { error })
    success = false
  } else {
    success = true
    log("sendMail", "mail sent, updating row", { mail })
    const {error} = await supabase.from("signup_queue").update({
      id: mail.id,
      sent_at: "now()",
    }).eq("id", mail.id);
    if (error) {
      log("sendMail", "error updating row", { error })
    }
  }

  // make sure we don't send too many mails at once
  const wait = Math.max(timeout - (Date.now() - started), 0);
  log("sendMail", "waiting", { wait })
  await sleep(wait);

  return success
};

let state: "idle" | "processing" = "idle";
const processMails = async () => {
  state = "processing";
  log("processMails", "starting")
  let rerun = false;
  for await (const mails of getMails(2)) {
    log("processMails", "got mails:", { mails: mails?.map(m => m.email) })
    if (!mails) {
      break;
    }

    for (const mail of mails) {
      if(await sendMail(mail) == false) {
        log("processMails", "error sending mail, retrying in next iteration")
        rerun = true;
      }
    }
  }
  state = "idle";
  log("processMails", "done")

  if (rerun) {
    log("processMails", "rerun")
    processMails();
  }
};

self.onmessage = (message: Message) => {
  log("onmessage", message);
  if (state === "processing") {
    log("onmessage", "already processing, ignoring");
  }

  if (state === "idle") {
    log("onmessage", "starting processMails()")
    processMails();
  }
};

processMails();

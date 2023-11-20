import { log } from "./logging.ts";
import { supabase } from "./supabase.ts";

log("main", "starting main");
const worker = new Worker(new URL("./worker.ts", import.meta.url), {
  type: "module",
});

log("main", "worker created");

setInterval(() => {
  log("main", "boop")
  worker.postMessage("boop");
}, 1000 * 60);

supabase.channel("custom-insert-channel")
  .on(
    "postgres_changes",
    { event: "*", schema: "public", table: "signup_queue" },
    (payload: object) => {
      log("main", "new data received", payload)
      worker.postMessage("boop");
    },
  )
  .subscribe();


import { supabase } from "./supabase.ts";

Deno.serve(() => {
  console.log("=== DENO SERVER ===")
  const worker = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module"
  });

  console.log("=== WORKER CREATED ===", worker)

  supabase.channel('custom-insert-channel')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'signup_queue' },
    () => {
      worker.postMessage("new data")
    }
  )
  .subscribe()

  return new Response(":e neovimconf.live");
});



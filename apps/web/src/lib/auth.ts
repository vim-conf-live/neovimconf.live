import { type Database } from "@/types";
import { createClient, type User } from "@supabase/supabase-js";
import cookie from "cookie";

export const supabase = createClient<Database>(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
);

let currentUser: User | null = null;

export const getCurrentUser = async () => {
  if (typeof document !== "undefined") {
    const cookieData = cookie.parse(document.cookie);
    if (!cookieData["sb-access-token"] || !cookieData["sb-refresh-token"]) {
      currentUser = null;
      return Promise.reject(null);
    }
  }

  if (currentUser) {
    return currentUser
  }

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    await supabase.auth.signOut();
    return Promise.reject(null)
  }

  currentUser = user

  return currentUser
}


export const getTicket = async (user: User) => {
  const {data, error} = await supabase.from("profiles").select("ticket").eq("id", user.id).single();
  if (error) {
    return Promise.reject('No ticket found');
  }

  return data.ticket
}

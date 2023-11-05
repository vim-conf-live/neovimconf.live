import { createClient, type User } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
);


export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user ? user : Promise.reject('No user found')
}

export const getTicket = async (user: User) => {
  const ticket = await supabase.from("profiles").select("ticket").eq("id", user.id).single();
  return ticket.data?.ticket 
    ? ticket.data.ticket 
    : Promise.reject('No ticket found');
}

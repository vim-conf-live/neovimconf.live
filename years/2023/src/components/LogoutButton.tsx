import { getCurrentUser, supabase } from "@/lib/auth";
import { useCallback, useEffect, useState } from "react";

export const LogoutButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    getCurrentUser().then(() => {
      setShow(true)
    }).catch(() => {})
  }, [])

  const signOut = useCallback(() => {
    supabase.auth.signOut().then(() => {
      window.location.href = "/"
    })
  }, [])

  if (!show) return null;

  return <button className="text-sm underline" onClick={signOut}>Logout</button >
}

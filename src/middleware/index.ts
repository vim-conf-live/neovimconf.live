import { defineMiddleware } from "astro:middleware";
import { supabase } from "@/lib/auth";

const protectedRoutes = ["/profile/", "/auth/complete"];
const redirectRoutes = [
  "/register",
  "/register/error",
  "/api/auth/signin",
];

export const onRequest = defineMiddleware(
  async ({ url, cookies, redirect }, next) => {
    if (protectedRoutes.includes(url.pathname)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");

      if (!accessToken || !refreshToken) {
        return redirect("/register");
      }

      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });

      if (error) {
        cookies.delete("sb-access-token", { path: "/" });
        cookies.delete("sb-refresh-token", { path: "/" });
        return redirect("/register");
      }

      cookies.set("sb-access-token", data?.session?.access_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
      cookies.set("sb-refresh-token", data?.session?.refresh_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
    }

    if (redirectRoutes.includes(url.pathname)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");

      if (accessToken && refreshToken) {
        return redirect("/register/complete");
      }
    }
    return next();
  },
);

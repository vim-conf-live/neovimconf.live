import { object, string, z } from "zod";

export const SignUpSchema = object({
  email: string().email("Pleaser enter a valid email address"),
});

export type SignUp = z.infer<typeof SignUpSchema>;

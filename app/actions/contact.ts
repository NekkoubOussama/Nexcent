"use server";

import { z } from "zod";

export type FormState = {
  success: boolean;
  error?: {
    Email?: string[];
  };
};

const formSchema = z.object({
  Email: z.string().email("Invalid email address"),
});

export async function myAction(prevState: FormState, formData: FormData) {
  const raw = {
    Email: formData.get("Email"),
  };
  const result = formSchema.safeParse(raw);
  if (!result.success) {
    return {
      success: false,
      error: result.error.flatten().fieldErrors,
    };
  }
  return { success: true };
}

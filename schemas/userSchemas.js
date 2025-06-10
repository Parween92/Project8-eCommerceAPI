import { z } from "zod/v4";

const userSchema = z.object({
  name: z
    .string("First name must be a string")
    .min(1, "Name must be at least 1 character")
    .max(255, "Name must be at most 255 characters"),
  email: z
    .string("Email must be a string")
    .min(1, "Email must be at least 1 character")
    .max(255, "Email must be at most 255 characters"),
  password: z.email("Must be a password"),
});

export default userSchema;

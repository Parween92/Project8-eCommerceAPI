import { z } from "zod/v4";

const userSchema = z.object({
  name: z
    .string("Name must be a string")
    .min(1, "Name must be at least 1 character")
    .max(255, "Name must be at most 255 characters"),
  description: z
    .string("Must be a string")
    .min(1, "Must be at least 1 character")
    .max(255, "Must be at most 255 characters"),
  price: z.price("Must be a price"),
});

export default userSchema;
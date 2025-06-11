import { z } from "zod/v4";

const categorySchema = z.object({
  name: z
    .string("name must be a string")
    .min(1, "name must be at least 1 character")
    .max(255, "name must be at most 255 characters"),
});
export default categorySchema;

import { z } from "zod/v4";

// Create User
export const userSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, "Name must not be empty")
    .max(255, "Name must be at most 255 characters"),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email format")
    .max(255, "Email must be at most 255 characters"),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(8, "Password must be at least 8 characters")
    .max(255, "Password must be at most 255 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});
// Update User
export const userUpdateSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  email: z.string().email().max(255).optional(),
  password: z
    .string()
    .min(8)
    .max(255)
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/, {
      message: "Password must include uppercase, lowercase, and a number",
    })
    .optional(),
});

// export default { userSchema, userUpdateSchema };

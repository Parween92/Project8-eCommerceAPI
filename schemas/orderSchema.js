import { z } from "zod/v4";

const productOrderSchema = z.object({
  productId: z.number().int().positive("productId must be a positive integer"),
  quantity: z.number().int().positive("quantity must be a positive integer"),
});

const orderSchema = z.object({
  userId: z.number("").int("").positive("userId must be a positive integer"),
  products: z
    .array(productOrderSchema)
    .min(1, "At least one product is required"),
  // total: z.number("").positive(""),
});

export default orderSchema;
// positiv(): größer als 0 & ganze Zahl

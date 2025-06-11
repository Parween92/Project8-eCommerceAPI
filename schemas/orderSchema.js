import { z } from "zod/v4";

const productOrderSchema = z.object({
  productId: z.number().int().positive(),
  quantity: z.number().int().positive(),
});

const orderSchema = z.object({
  userId: z.number("").int("").positive(""),
  products: z
    .array(productOrderSchema)
    .min(1, "At least one product is required"),
  total: z.number("").positive(""),
});

export default orderSchema;
// positiv(): größer als 0 & ganze Zahl

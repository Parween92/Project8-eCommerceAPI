import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";

import validateSchema from "../middleware/validateSchema.js";
import productSchema from "../schemas/productSchema.js";

const router = Router();

router
  .route("/")
  .get(getProducts)
  .post(validateSchema(productSchema), createProduct);

router
  .route("/:id")
  .get(getProductById)
  .put(validateSchema(productSchema), updateProduct)
  .delete(deleteProduct);

export default router;

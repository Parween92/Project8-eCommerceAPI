import { Router } from "express";
import {
  createProduct,
  getCategories,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controllers/productController";

import validateShema from "../middleware/validateShema";
import productShema from "../schemas/productSchema";

const router = Router();

router
  .route("/")
  .get(getCategories)
  .post(validateShema(productShema), createProduct);

router
  .route("/:id")
  .get(getProductById)
  .put(validateShema(productShema), updateProduct)
  .delete(deleteProduct);

export default router;

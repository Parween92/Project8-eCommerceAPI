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

const productRouter = Router();

productRouter.route("/").get(getProducts).post(createProduct);
//validateSchema(productSchema),

productRouter
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default productRouter;

import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController.js";

import validateSchema from "../middleware/validateSchema.js";
import categorySchema from "../schemas/categorySchema.js";

const router = Router();

router
  .route("/")
  .get(getCategories)
  .post(validateSchema(categorySchema), createCategory);

router
  .route("/:id")
  .get(getCategoryById)
  .put(validateSchema(categorySchema), updateCategory)
  .delete(deleteCategory);

export default router;

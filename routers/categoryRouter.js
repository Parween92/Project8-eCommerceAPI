import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController";

import validateShema from "../middleware/validateShema";
import categoryShema from "../schemas/categorySchema";

const router = Router();

router
  .route("/")
  .get(getCategories)
  .post(validateShema(categoryShema), createCategory);

router
  .route("/:id")
  .get(getCategoryById)
  .put(validateShema(categoryShema), updateCategory)
  .delete(deleteCategory);

export default router;

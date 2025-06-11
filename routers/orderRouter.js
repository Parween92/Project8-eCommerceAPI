import { Router } from "express";
import {
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder,
  createOrder,
} from "../controllers/orderController.js";

import validateSchema from "../middleware/validateSchema.js";
import orderSchema from "../schemas/orderSchema.js";

const router = Router();

router.route("/").get(getOrders).post(validateSchema(orderSchema), createOrder);

router
  .route("/:id")
  .get(getOrderById)
  .put(validateSchema(orderSchema), updateOrder)
  .delete(deleteOrder);

export default router;

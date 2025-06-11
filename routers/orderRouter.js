import { Router } from "express";
import {
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder,
  createOrder,
} from "../controllers/orderController";

import validateShema from "../middleware/validateShema";
import orderShema from "../schemas/orderSchema";

const router = Router();

router.route("/").get(getOrders).post(validateShema(orderShema), createOrder);

router
  .route("/:id")
  .get(getOrderById)
  .put(validateShema(OrderShema), updateOrder)
  .delete(deleteOrder);

export default router;

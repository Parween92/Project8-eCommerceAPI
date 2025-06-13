import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import validateSchema from "../middleware/validateSchema.js";
import { userSchema, userUpdateSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter
  .route("/")
  .get(getUsers)
  .post(validateSchema(userSchema), createUser);
userRouter
  .route("/:id")
  .get(getUserById)
  .put(validateSchema(userUpdateSchema), updateUser)
  .delete(deleteUser);

export default userRouter;

import "./db/associations.js";
import express from "express";
import userRouter from "./routers/userRouter.js";
import errorHandler from "./middleware/errorHandler.js";
import categoryRouter from "./routers/categoryRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/categorys", categoryRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));

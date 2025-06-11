import "./db/associations.js";
import express from "express";
import userRouter from "./routers/userRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import categoryRouter from "./routes/category.routes.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/users", postRouter);
app.use("/category", categoryRouter);
app.use("/products", userRouter);
app.use("/orders", userRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));

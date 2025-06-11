import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const OrderItem = sequelize.define("OrderItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default OrderItem;

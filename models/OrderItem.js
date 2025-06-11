import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const OrderItem = Sequelize.define("OrderItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default OrderItem;

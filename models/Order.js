import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const Order = Sequelize.define("Order", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
    //   ---> wenn kein Preis gibt dann soll 0
  },
});
export default Order;

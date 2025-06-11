import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const OderItem = Sequelize.define("OderItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default OderItem;

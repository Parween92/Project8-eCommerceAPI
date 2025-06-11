import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const Category = Sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default Category;

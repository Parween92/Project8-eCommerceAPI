import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const Product = Sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
export default Product;

//Product
// name: String
// description: String
// price: Float
// categoryId: Integer

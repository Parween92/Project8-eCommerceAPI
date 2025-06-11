import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";
import Product from "../models/Product.js";
import User from "../models/User.js";
import Category from "../models/Category.js";
import sequelize from "./index.js";

// 1. User:  hat viele Orders--->
User.hasMany(Order, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
});

// 2. Product: gehört zu Category--->
Product.belongsTo(Category, {
  foreignKey: {
    allowNull: false,
    name: "categoryId",
  },
  onDelete: "CASCADE",
});

// 3. Category: hat viele Products------>
Category.hasMany(Product, {
  foreignKey: {
    allowNull: false,
    name: "categoryId",
  },
});

// 4. Order: gehört zu User------>
Order.belongsTo(User, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
  onDelete: "CASCADE",
});

// 5. Order: hat viele Products über OrderItems m:n ------>
Order.belongsToMany(Product, {
  through: OrderItem,
  foreignKey: {
    allowNull: false,
    name: "orderId",
  },
});

Product.belongsToMany(Order, {
  through: OrderItem,
  foreignKey: {
    allowNull: false,
    name: "productId",
  },
});
sequelize.sync();

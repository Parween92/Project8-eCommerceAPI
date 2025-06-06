// 1. User:  hat viele Orders--->
// user.hasMany(Order, { foreignKey: 'userId' });

// 2. Product: gehört zu Category--->
// Product.belongsTo(Category, { foreignKey: 'categoryId' });

// 3. Category: hat viele Products------>
// Category.hasMany(Product, { foreignKey: 'categoryId' });

// 4. Order: gehört zu User------>
// Order.belongsTo(User, { foreignKey: 'userId' });

// 5. Order: hat viele Products über OrderItems m:n ------>
// Order.belongsToMany(Product, { through: OrderItem, foreignKey: 'orderId' });
// Product.belongsToMany(Order, { through: OrderItem, foreignKey: 'productId' });

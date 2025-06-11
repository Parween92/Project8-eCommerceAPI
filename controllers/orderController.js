import Order from "../models/Order";
import OrderItem from "../models/OrderItem";
import Product from "../models/Product.js";
import User from "../models/User.js";

export const getOrders = async (req, res) => {
  const orders = await Order.findAll({
    include: {
      model: Product,
      through: { attributes: ["quantity"] },
    },
  });

  const newFormatOrder = orders.map((order) => ({
    id: order.id,
    userId: order.userId,

    products: order.Products.map((p) => ({
      productId: p.id,
      quantity: p.OrderItem.quantity,
    })),
    total: order.total,
  }));

  res.json(newFormatOrder);
};

//GETBYID
export const getOrderById = async (req, res) => {
  const { id } = req.params;

  const order = await Order.findByPk(id, {
    include: {
      model: Product,
      through: { attributes: ["quantity"] },
    },
  });

  //Prüfen dann format geben
  if (!order) throw new error("order not found", { cause: 404 });

  const newFormatOrder = {
    id: order.id,
    userId: order.userId,
    products: order.Products.map((p) => ({
      productId: p.id,
      quantity: p.OrderItem.quantity,
    })),
    total: order.total,
  };

  res.json(newFormatOrder);
};

//CREATE
export const createOrder = async (req, res) => {
  const { userId, products } = req.body;

  //  Bestellung neu erstellen
  const order = await Order.create({ userId });

  //  Produkte mit quantity in Zwischentabelle anlegen
  for (const prod of products) {
    await order.addProduct(prod.productId, {
      through: { quantity: prod.quantity },
    });
  }

  //  Bestellung mit Produkten laden, um total zu berechnen
  const orderWithProducts = await Order.findByPk(order.id, {
    include: {
      model: Product,
      through: { attributes: ["quantity"] },
    },
  });

  // total berechnen
  const total = orderWithProducts.Products.reduce((sum, p) => {
    return sum + p.price * p.OrderItem.quantity;
  }, 0);

  // Antwort formatieren
  const newFormatOrder = {
    id: orderWithProducts.id,
    userId: orderWithProducts.userId,
    products: orderWithProducts.Products.map((p) => ({
      productId: p.id,
      quantity: p.OrderItem.quantity,
    })),
    total,
  };

  res.json(newFormatOrder);
};

//UPDATE
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { userId, products } = req.body;

  const order = await Order.findByPk(id, {
    include: {
      model: Product,
      through: { attributes: ["quantity"] },
    },
  });

  if (!order) throw new Error("order not found", { cause: 404 });

  //muss bestellung geupdeted werden
  await order.update({ userId });

  //muss product in der OrderItem aktualisiert werden--> zuerst leeren
  await order.setProducts([]);

  //dann neu einfügen mit quantity
  for (const prod of products) {
    await order.addProduct(prod.productId, {
      through: { quantity: prod.quantity },
    });
  }

  // Bestellung neu laden
  const updatedOrder = await Order.findByPk(id, {
    include: {
      model: Product,
      through: { attributes: ["quantity"] },
    },
  });

  // total aktualiseren
  const total = updatedOrder.Products.reduce((sum, p) => {
    return sum + p.price * p.OrderItem.quantity;
  }, 0);

  //Format von der Antwort
  const newFormatOrder = {
    id: updatedOrder.id,
    userId: updatedOrder.userId,
    products: updatedOrder.Products.map((p) => ({
      productId: p.id,
      quantity: p.OrderItem.quantity,
    })),
    total,
  };
  res.json(newFormatOrder);
};

//DELETE
export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  const order = await Order.findByPk(id);
  if (!order) throw new Error("Order not found", { cause: 404 });

  await order.destroy();
  res.json({ message: "Order deleted successfully" });
};

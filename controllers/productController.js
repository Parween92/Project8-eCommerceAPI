import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);
  if (!product) throw new Error("Product not found", { cause: 404 });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201, "new Product has been successed created").json(newProduct);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);
  if (!product) throw new Error("Product not found", { cause: 404 });

  await product.update(req.body);
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);
  if (!product) throw new Error("Product not found", { cause: 404 });

  await product.destroy();
  res.json({ message: "Product deleted successfully" });
};

import Category from "../models/Category";

export const getCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;

  const category = await Category.findByPk(id);
  if (!category) throw new error("Category not found", { cause: 404 });
  res.json(category);
};

export const createCategory = async (req, res) => {
  const newCategory = await Category.create(req.body);
  res.status(201, "new Category has been successed created").json(newCategory);
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByPk(id);
  if (!category) throw new Error("Category not found", { cause: 404 });

  await category.update(req.body);
  res.json(category);
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  const category = await Category.findByPk(id);
  if (!category) throw new Error("Category not found", { cause: 404 });

  await Category.destroy();
  res.json(category);
};

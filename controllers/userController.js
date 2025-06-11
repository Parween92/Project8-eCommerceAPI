import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const createUser = async (req, res) => {
  const {
    body: { name, email, password },
  } = req;
  if (!name || !email || !password)
    throw new Error("name, email and password are required", {
      cause: 400,
    });
  const found = await User.findOne({ where: { email } });
  if (found)
    throw new Error("User with that email already exists", { cause: 409 });
  const user = await User.create(req.body);
  res.json(user);
};

export const getUserById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found", { cause: 404 });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const {
    body: { name, email, password },
    params: { id },
  } = req;
  if (!name || !email || !password)
    throw new Error("name, email and password are required", {
      cause: 400,
    });
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found", { cause: 404 });
  await user.update(req.body);
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found", { cause: 404 });
  await user.destroy();
  res.json({ message: "User deleted" });
};

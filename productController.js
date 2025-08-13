const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { name, description, price, stock, image } = req.body;
  const product = await Product.create({ name, description, price, stock, image });
  res.status(201).json(product);
};

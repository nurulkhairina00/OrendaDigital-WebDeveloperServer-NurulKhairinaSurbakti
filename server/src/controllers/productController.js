const db = require("../models");
const Product = db.product;
const errorHandler = require("../middleware/errorHandler");

// create a new product
const createProduct = async (req, res) => {
  const { input } = req.body;
  try {
    await Product.create(input);
    res.status(200).json({ message: "Created Product Successfully" });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// get product by id
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { input } = req.body;
  try {
    const [updatedRows] = await Product.update(input, {
      where: { id },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Updated Product Successfully" });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await Product.destroy({
      where: { id },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Deleted Product Successfully" });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};

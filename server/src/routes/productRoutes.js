const express = require("express");
const router = express.Router();
const middlewareToken = require("../middleware/checkToken");

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// PRODUCTS
router.post("/", middlewareToken, createProduct); // create a new product
router.get("/", middlewareToken, getAllProducts); // get all products
router.get("/:id", middlewareToken, getProductById); // get product by id
router.patch("/:id", middlewareToken, updateProduct); // update a product
router.delete("/:id", middlewareToken, deleteProduct); // delete a product

module.exports = router;

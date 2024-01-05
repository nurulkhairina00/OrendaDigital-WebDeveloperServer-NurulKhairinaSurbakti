const express = require("express");
const router = express.Router();
const loginRoutes = require("./loginRoutes");
const customerRoutes = require("./customerRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");

router.use("/login", loginRoutes); // LOGIN
router.use("/customers", customerRoutes); // CUSTOMERS
router.use("/products", productRoutes); // PRODUCTS
router.use("/orders", orderRoutes); // ORDERS

module.exports = router;

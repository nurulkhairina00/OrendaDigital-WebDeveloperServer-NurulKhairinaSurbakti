const express = require("express");
const router = express.Router();
const middlewareToken = require("../middleware/checkToken");
const {
  createOrder,
  getAllOrders,
  getOrderDetailsById,
  deleteOrder,
} = require("../controllers/orderController");

// ORDER
router.post("/", middlewareToken, createOrder); // create order
router.get("/", middlewareToken, getAllOrders); // get all order
router.get("/:id", middlewareToken, getOrderDetailsById); // get order by id
router.delete("/:id", middlewareToken, deleteOrder); // delete order

module.exports = router;

const express = require("express");
const router = express.Router();
const middlewareToken = require("../middleware/checkToken");
const {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

// CUSTOMERS
router.post("/", middlewareToken, createCustomer); // create a new customer
router.get("/", middlewareToken, getAllCustomers); // get all customers
router.get("/:id", middlewareToken, getCustomerById); // get customer by id
router.patch("/:id", middlewareToken, updateCustomer); // update a customer
router.delete("/:id", middlewareToken, deleteCustomer); // delete a customer

module.exports = router;

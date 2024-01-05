const db = require("../models");
const Customer = db.customer;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const errorHandler = require("../middleware/errorHandler");

const login = async (req, res) => {
  const { email } = req.body;
  try {
    const customers = await Customer.findAll({
      where: { email },
    });

    const customer = customers.length > 0 ? customers[0].toJSON() : customers;

    if (customer.length === 0)
      return res.status(401).json({ message: "Email Not Registered" });

    const accessToken = jwt.sign(customer, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "12h",
    });

    customer.token = accessToken;

    res.status(200).json(customer);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

module.exports = { login };

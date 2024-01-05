const db = require("../models");
const Customer = db.customer;
const errorHandler = require("../middleware/errorHandler");

// create a new customer
const createCustomer = async (req, res) => {
  const { input } = req.body;
  try {
    await Customer.create(input);
    res.status(200).json({ message: "Create Customer Successfully" });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// get customer by id
const getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findByPk(id);

    if (!customer)
      return res.status(404).json({ message: "Customer not found" });

    res.status(200).json(customer);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// update a customer
const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { input } = req.body;

  try {
    const [updatedRows] = await Customer.update(input, {
      where: { id },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json({ message: "Updated Customer Successfully" });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// delete a customer
const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await Customer.destroy({
      where: { id },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json({ message: "Deleted Customer Successfully" });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};

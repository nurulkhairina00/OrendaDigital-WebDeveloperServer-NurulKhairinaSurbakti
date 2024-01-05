const db = require("../models");
const Customer = db.customer;
const Product = db.product;
const OrderMst = db.orderMst;
const OrderDtl = db.orderDtl;
const errorHandler = require("../middleware/errorHandler");

// create a new order
const createOrder = async (req, res) => {
  const { input, detailsOrder } = req.body;
  const t = await db.sequelize.transaction();
  try {
    const orderMst = await OrderMst.create(
      {
        customer_id: input.customer_id,
        grand_total: input.grand_total,
      },
      { transaction: t }
    );

    // create order details product
    await Promise.all(
      detailsOrder.map(async (detail) => {
        return await OrderDtl.create(
          {
            orderMst_id: orderMst.id,
            product_id: detail.product_id,
            satuan: detail.satuan,
            discount: detail.discount,
            total: detail.total,
          },
          { transaction: t }
        );
      })
    );

    // Commit transaksi jika berhasil
    await t.commit();

    res.status(200).json({ message: "Created Order Successfully" });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderMst.findAll({
      include: [
        {
          model: Customer,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(orders);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// get details
const getOrderDetailsById = async (req, res) => {
  const { id } = req.params;
  try {
    const ordersWithDetails = await OrderMst.findOne({
      where: { id: id },
      include: OrderDtl,
    });
    console.log(ordersWithDetails);
    if (!ordersWithDetails) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(ordersWithDetails);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

// delete a order
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await OrderMst.destroy({
      where: { id },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({ message: "Orders not found" });
    }

    await OrderDtl.destroy({
      where: { orderMst_id: id },
    });

    res.status(200).json({ message: "Deleted Orders Successfully" });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderDetailsById,
  deleteOrder,
};

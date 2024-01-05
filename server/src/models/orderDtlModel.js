const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const OrderDtl = sequelize.define("orderDtl", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderMst_id: {
      type: DataTypes.INTEGER,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    satuan: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.STRING,
    },
    total: {
      type: DataTypes.INTEGER,
    },
  });
  return OrderDtl;
};

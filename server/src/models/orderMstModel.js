const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const OrderMst = sequelize.define("orderMst", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
    },
    grand_total: {
      type: DataTypes.INTEGER,
    },
  });
  return OrderMst;
};

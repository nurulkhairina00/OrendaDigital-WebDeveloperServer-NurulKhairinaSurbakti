const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = require("./customerModel")(sequelize, Sequelize);
db.product = require("./productModel")(sequelize, Sequelize);
db.orderMst = require("./orderMstModel")(sequelize, Sequelize);
db.orderDtl = require("./orderDtlModel")(sequelize, Sequelize);

// Menetapkan hubungan antara Customer dan OrderMst
db.orderMst.belongsTo(db.customer, { foreignKey: "customer_id" });
db.customer.hasMany(db.orderMst, { foreignKey: "customer_id" });
db.orderMst.hasMany(db.orderDtl, { foreignKey: "orderMst_id" });
db.orderDtl.belongsTo(db.orderMst, { foreignKey: "orderMst_id" });

module.exports = db;

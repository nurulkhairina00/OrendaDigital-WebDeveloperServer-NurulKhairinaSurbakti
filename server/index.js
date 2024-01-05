const express = require("express");
const cors = require("cors");
const db = require("./src/models");
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./src/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============ create table in database  ===========//
// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced DB");
//   })
//   .catch((error) => {
//     console.log("Failed to sync db: " + error.message);
//   });

app.use("/api", routes);

// server running port 5000
app.listen(process.env.PORT, () =>
  console.log(`Server running at http://localhost:${process.env.PORT}`)
);

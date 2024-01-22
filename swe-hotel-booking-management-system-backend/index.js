const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const routes = require("./routes/auth/authRoutes.js");
const sequelize = require("./config/db.config.js");

const User = require("./models/User.js");

dotenv.config({
  path: "./config.env",
});
const app = express();
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

async function initializeDatabase() {
  try {
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
}

initializeDatabase();
app.use(cors());
app.use(cookieParser());
app.use("/", routes);
const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));

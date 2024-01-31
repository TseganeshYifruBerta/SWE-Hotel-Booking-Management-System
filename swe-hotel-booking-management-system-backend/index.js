const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const routes = require("./routes/auth/authRoutes.js");
const roomRoutes = require("./routes/roomRoutes/roomRoutes");
const paymentRoutes = require("./routes/payment/paymentRoute");
const feedbackRouter = require("./routes/feedback/feedbackRoutes");

const sequelize = require("./config/db.config.js");

dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "productionuser",
  password: process.env.DB_PASSWORD || "productionpassword",
  database: process.env.DB_NAME || "productiondb",
};

// If in test mode, use the test database configuration
if (process.env.NODE_ENV === "test") {
  dbConfig.user = "testuser";
  dbConfig.password = "testpassword";
  dbConfig.database = "testdb";
}

// Connect to the database
async function initializeDatabase() {
  try {
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
}

initializeDatabase();

// Routes
app.use("/", routes);
app.use("/room", roomRoutes);
app.use("/payment", paymentRoutes);
app.use("/feedback", feedbackRouter);

const port = process.env.PORT || 6000;

// Only start the server if the module is not being imported for testing
if (!module.parent) {
  app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
}

module.exports = app; // Export the app for testing purposes

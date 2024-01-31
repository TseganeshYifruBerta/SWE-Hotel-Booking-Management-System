const request = require("supertest");
const app = require("../../index"); // Import your Express app
const sequelize = require("../../config/db.config"); // Import your Sequelize instance

const Payment = require("../../models/payment/paymentModel");

// Your registration route may look something like this in your app
app.post("/payment/payment", async (req, res) => {
  try {
    // Your registration logic here, create a new room
    const payment = await Payment.create(req.body);
    res.status(200).json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Jest test suite
describe("payment Adding Route", () => {
  beforeAll(async () => {
    // Connect to the database before running the tests
    await sequelize.sync(); // This will sync your Sequelize models with the database
  });

  afterAll(async () => {
    // Close the database connection after all tests are done
    await sequelize.close();
  });

  // Test case
  it("should add a  payment", async () => {
    // Your test logic here
    const paymentData = {
      photo: "easy",
      transactionId: "6789",
      phoneNumber: "45676789",
      email: "m@gmail.com",
      id: "1",
    };

    const response = await request(app).post("/payment/payment").send(paymentData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.photo).toBe(paymentData.photo);
    expect(response.body.transactionId).toBe(paymentData.transactionId);
    expect(response.body.phoneNumber).toBe(paymentData.phoneNumber);
    expect(response.body.email).toBe(paymentData.email);
   
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
  });
});

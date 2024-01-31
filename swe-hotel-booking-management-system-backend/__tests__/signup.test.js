const request = require("supertest");
const app = require("../index"); // Import your Express app
const sequelize = require("../config/db.config"); // Import your Sequelize instance


const User = require("../models/auth/User");

// Your registration route may look something like this in your app
app.post("/signup", async (req, res) => {
  try {
    // Your registration logic here, create a new user
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Jest test suite
describe("Registration Route", () => {
  beforeAll(async () => {
    // Connect to the database before running the tests
    await sequelize.sync(); // This will sync your Sequelize models with the database
  });

  afterAll(async () => {
    // Close the database connection after all tests are done
    await sequelize.close();
  });

  // Test case
  it("should signup a user", async () => {
    // Your test logic here
    const userData = {
      name: "melat",
      phoneNumber: "00944099",
      password: "23456789",
      confirmPassword: "23456789",
    };

    const response = await request(app).post("/signup").send(userData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe(userData.name);
    expect(response.body.phoneNumber).toBe(userData.phoneNumber);
    expect(response.body.password).toBe(userData.password);
    expect(response.body.confirmPassword).toBe(userData.confirmPassword);
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
  });
});
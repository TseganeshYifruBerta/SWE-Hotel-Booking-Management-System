const request = require("supertest");
const app = require("../index"); // Import your Express app
const sequelize = require("../config/db.config"); // Import your Sequelize instance

const User = require("../models/auth/loginUser");

// Your sign-in route may look something like this in your app
app.post("/login", async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    // Your sign-in logic here
    const user = await User.findOne({ where: { phoneNumber, password } });

    if (user) {
      // User found, generate and send token
      const token = generateToken(user); // Implement this function as per your authentication strategy

      res.status(200).json({
        data: {
          id: user.id,
          name: user.name,
          phoneNumber: user.phoneNumber,
          token,
          password: user.password,
          updatedAt: user.updatedAt,
          createdAt: user.createdAt,
        },
        message: "User",
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Jest test suite
describe("Sign-In Route", () => {
  beforeAll(async () => {
    // Connect to the database before running the tests
    await sequelize.sync(); // This will sync your Sequelize models with the database
  });

  afterAll(async () => {
    // Close the database connection after all tests are done
    await sequelize.close();
  });

  // Test case
  it("should sign in a user", async () => {
    // Your test logic here
    const userData = {
      phoneNumber: "00944099",
      password: "23456789",
    };

    const response = await request(app).post("/login").send(userData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data.phoneNumber).toBe(userData.phoneNumber);
    expect(response.body.data.password).toBe(userData.password);
    expect(response.body.data).toHaveProperty("token");
    expect(response.body.message).toBe("User");
  });

  // Add more test cases for scenarios like invalid credentials, etc.
});

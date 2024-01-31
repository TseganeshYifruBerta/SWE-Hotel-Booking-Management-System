const request = require("supertest");
const app = require("../../index"); // Import your Express app
const sequelize = require("../../config/db.config"); // Import your Sequelize instance

const Feedback = require("../../models/feedback/feedback");

// Your registration route may look something like this in your app
app.post("/feedback/feedback", async (req, res) => {
  try {
    // Your registration logic here, create a new room
    const feedback = await Feedback.create(req.body);
    res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Jest test suite
describe("feedback Adding Route", () => {
  beforeAll(async () => {
    // Connect to the database before running the tests
    await sequelize.sync(); // This will sync your Sequelize models with the database
  });

  afterAll(async () => {
    // Close the database connection after all tests are done
    await sequelize.close();
  });

  // Test case
  it("should add a  feedback", async () => {
    // Your test logic here
    const feedbackData = {
      email: "h@gmail.com",
      message: "this room is best",
    };

    const response = await request(app)
      .post("/feedback/feedback")
      .send(feedbackData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.email).toBe(feedbackData.email);
    expect(response.body.message).toBe(feedbackData.message);

    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
  });
});

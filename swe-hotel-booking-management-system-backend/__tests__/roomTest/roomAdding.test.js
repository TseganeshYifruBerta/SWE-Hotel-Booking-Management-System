const request = require("supertest");
const app = require("../../index"); // Import your Express app
const sequelize = require("../../config/db.config"); // Import your Sequelize instance

const Room = require("../../models/room/roomModel");

// Your registration route may look something like this in your app
app.post("/room/addRoom", async (req, res) => {
  try {
    // Your registration logic here, create a new room
    const room = await Room.create(req.body);
    res.status(200).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Jest test suite
describe("Room Adding Route", () => {
  beforeAll(async () => {
    // Connect to the database before running the tests
    await sequelize.sync(); // This will sync your Sequelize models with the database
  });

  afterAll(async () => {
    // Close the database connection after all tests are done
    await sequelize.close();
  });

  // Test case
  it("should add a  room", async () => {
    // Your test logic here
    const roomData = {
      photo: "roomUploads",
      title: "fam",
      description: "this is fam",
      status: "available",
      price: "45",
      availableRooms: "4",
    };

    const response = await request(app).post("/room/addRoom").send(roomData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe(roomData.title);
    expect(response.body.description).toBe(roomData.description);
    expect(response.body.status).toBe(roomData.status);
    expect(response.body.price).toBe(roomData.price);
    expect(response.body.availableRooms).toBe(roomData.availableRooms);
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
  });
});

const request = require("supertest");
const app = require("../../index"); // Import your Express app
const sequelize = require("../../config/db.config"); // Import your Sequelize instance

const Room = require("../../models/room/roomModel");
describe("Room Fetching Route", () => {
  let testUser;

  beforeAll(async () => {
    // Connect to the database before running the tests
    await sequelize.sync(); // This will sync your Sequelize models with the database
  });

  afterAll(async () => {
    // Close the database connection after all tests are done
    await sequelize.close();
  });

  it("should fetch all rooms ", async () => {
    // Make a request to fetch all rooms for the test user
    const response = await request(app).get(
      "/room/getAllRooms"
    );

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);

    // Optional: If you want to make assertions on the room details, you can do so here
    // For example:
    const firstRoom = response.body[0];
    expect(firstRoom).toHaveProperty("id");
    expect(firstRoom).toHaveProperty("photo");
    expect(firstRoom).toHaveProperty("title");
    expect(firstRoom).toHaveProperty("description");
    expect(firstRoom).toHaveProperty("price");
    expect(firstRoom).toHaveProperty("status");
    expect(firstRoom).toHaveProperty("availableRooms");
    expect(firstRoom).toHaveProperty("createdAt");
    expect(firstRoom).toHaveProperty("updatedAt");


    // Add more assertions based on your room model

    // Ensure that the rooms fetched are associated with the correct user
    // const allRoomsBelongToUser = response.body.every(
    //   (room) => room.UserId === testUser.id
    // );
    // expect(allRoomsBelongToUser).toBe(true);
  });

  // Add more test cases for scenarios like an empty room list, error handling, etc.
});
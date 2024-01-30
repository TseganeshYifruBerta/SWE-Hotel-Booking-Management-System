const Room = require("../../models/room/roomModel")
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    if (!rooms) {
      return res.sendStatus(400);
    }
    return res.status(200).json(rooms);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};


const getAllRoomsById = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findOne({
      where: {
        id: id,
      },
    });

    
    if (room) {
      res.status(200).json({ room }); // Send the student data as a JSON response
    } else {
      res.status(404).send("room is  not found");
    }
  } catch (error) {
    res.status(500).send("An error occurred: " + error.message);
  }
};

const deleteRoom = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRoom = await Room.findOne({
      where:{
        id:id
      }
    })
 
    if (!deletedRoom) {
      return res.status(404).json({ error: "Room is not found" });
    }

    // Delete the question
    await deletedRoom.destroy();

    return res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllRooms, getAllRoomsById, deleteRoom };

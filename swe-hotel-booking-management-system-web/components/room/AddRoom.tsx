const AddRoomCard : React.FC = () => {
    return (
      <div>
        {/* title 
description
price
availableRooms
status
roomPhoto 
status
roomPhoto*/}

        {/* <form onSubmit={(e) => submitForm(data, e)}> */}
                    <form >

          <div className="max-w-md mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-6">Add Room</h1>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                placeholder="Enter title for the room"
                value={""}
                // onChange={""}
              />
            </div>

            <div className="flex justify-between">
              <div className="mb-2 mr-2">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-600"
                >
                  Price
                </label>
                <input
                placeholder="Only Number"
                  type="number"
                  id="price"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                  //   onChange={handlePhotoChange}
                />
              </div>
              <div className="mb-2 mr-2">
                <label
                  htmlFor="availablerooms"
                  className="text-sm font-medium text-gray-600"
                >
                  Available Rooms
                </label>
                <input
                placeholder="Only Number"
                  type="number"
                  id="availablerooms"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                  //   onChange={handlePhotoChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="text-sm font-medium text-gray-600"
                >
                  Status
                </label>
                <select
                //   type="status"
                
                  id="status"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                  //   onChange={handlePhotoChange}
                >
<option value="">Select Difficulty</option>
              <option value="easy">Available now</option>
              <option value="medium">Currently not Available</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-gray-600"
              >
                Room Photos
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                // onChange={handlePhotoChange}
              />
            </div>

          

            <button className="border-blue-500 border-4 px-4 py-2 rounded-md">
              Add Room
            </button>
          </div>
        </form>
      </div>
    );
}

export default AddRoomCard
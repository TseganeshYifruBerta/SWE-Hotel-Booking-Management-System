import LoadImage from "@/pages/home/image";
import { AddRoomFormData, addroom } from "@/store/rooms/add-rooms-api";
import { ChangeEvent, useState } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

const AddRoomCard: React.FC<InjectedFormProps<AddRoomFormData>> = ({
  handleSubmit,
}) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [availablerooms, setAvailableRooms] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [description, setDescription] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const handlePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const blobFile: any = await convertFileToBlob(file);

    setPhoto(blobFile);
    setImageUrl(URL.createObjectURL(blobFile));
  };
  const convertFileToBlob = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          const blob = new Blob([reader.result], { type: file.type });
          resolve(blob);
        } else {
          reject(new Error("Failed to read file."));
        }
      };

      reader.onerror = reject;

      reader.readAsArrayBuffer(file);
    });
  };

  const values: AddRoomFormData = {
    title: title,
    availableRooms: availablerooms,
    price: price,
    status: status,
    photo: photo,
    description: description,
  };

  const onSubmit = async () => {
    try {
      values.photo = imageUrl;
      console.log(values);
      const data = await addroom(values as AddRoomFormData);
      console.log(data);
      // showToast("Upload successful", "success");
    } catch (error) {
      console.error("Addroom error:", error);
      console.log(values);

      // showToast("Login error: " + (error as Error).message, "error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <input
              type="text"
              id="title"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              placeholder="Enter the description of the room"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setPrice(e.target.value)}
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
                onChange={(e) => setAvailableRooms(e.target.value)}
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
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select Difficulty</option>
                <option value="Available">Available now</option>
                <option value="Not Available">Currently not Available</option>
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
              onChange={handlePhotoChange}
            />
          </div>

          <button className="border-blue-500 border-4 px-4 py-2 rounded-md">
            Add Room
          </button>

          <LoadImage image={imageUrl} />
        </div>
      </form>
    </div>
  );
};


const ConnectedAddRoomForm = reduxForm<AddRoomFormData>({
  form: "addroom",
})(AddRoomCard);

export default ConnectedAddRoomForm;
export type AddRoomFormData = {
  title: string
  description:string;
  price:string;
  availableRooms:string;
  photo:string;
  status:string;
};

export const addroom = async (formData: AddRoomFormData) => {
  try {
    const response = await fetch("http://localhost:5000/room/addRoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

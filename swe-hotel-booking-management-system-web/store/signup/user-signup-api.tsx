export type UserSignUpFormData = {
  name: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string
};

export const usersignup = async (formData: UserSignUpFormData) => {
  try {
    const response = await fetch("http://localhost:6000/room/addRoom", {
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

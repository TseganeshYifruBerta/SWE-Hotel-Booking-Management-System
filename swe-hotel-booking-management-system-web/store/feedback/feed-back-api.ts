export type FeedbackUploadFormData = {

email: string,
message: string
};

export const uploadfeedback = async (formData: FeedbackUploadFormData) => {
  try {
    const response = await fetch("http://localhost:5000/feedback/feedback", {
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

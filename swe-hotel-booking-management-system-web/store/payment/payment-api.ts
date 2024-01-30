export type PaymentFormData = {
  phoneNumber: string,
  photo: string,
  transactionId: string
};

export const payment = async (formData: PaymentFormData) => {
  try {
    const response = await fetch("http://localhost:6000/room/payment", {
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

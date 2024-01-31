export type PaymentFormData = {
  phoneNumber: string,
  photo: string,
  transactionId: string,
  email: string,
  id:string
};

export const payment = async (formData: PaymentFormData) => {
  try {
    const response = await fetch("http://localhost:5000/payment/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
      
    });
    console.log(formData, "11111111111111111111");

    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.log("eeeeeeeeeeeeeeeeeee", error)
    console.error("Error:", error);
    throw error;
  }
};

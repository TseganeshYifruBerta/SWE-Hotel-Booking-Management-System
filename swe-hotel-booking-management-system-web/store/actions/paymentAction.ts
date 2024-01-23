import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:6000";
export interface paymentProps {
 phoneNUmber: string,
 photo: string,
 transactionId: string
}


// interface studentRegProps {
//   id: string;
//   name: string;
//   email: string;
//   userId: string;
//   password: string;
//   confirmPassword: string;
//   section: string;
//   updatedAt: string;
//   createdAt: string;
// }

export interface PaymentState {
  message: paymentProps;
  loading: boolean;
  success: boolean;
  error: Error | null;
}
export const userPayment = createAsyncThunk<
  PaymentState,
  paymentProps
>(
  "payement",
  async ({ phoneNUmber, photo, transactionId}) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response: AxiosResponse<PaymentState> = await axios.post(
        `${backendURL}/room/payment`,
        { phoneNUmber, photo, transactionId },
        config
      );
      // Extract only the serializable parts of the response
      const serializableResponse: PaymentState = {
        message: response.data.message,
        loading: response.data.loading,
        success: response.data.success,
        error: response.data.error,
      };
      return serializableResponse;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        console.log(error.response.data);
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

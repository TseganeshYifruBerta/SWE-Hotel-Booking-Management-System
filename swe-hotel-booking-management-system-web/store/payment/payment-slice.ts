import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  phoneNumber: string;
  photo: string;
  transactionId: string;
  email: string,
  id:string
}

const PaymentSlice = createSlice({
  name: "paymentupload",
  initialState: {
    phoneNumber: "",
    photo: "",
    transactionId: "",
    email: "",
  } as PaymentState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
    setTransactionId: (state, action: PayloadAction<string>) => {
      state.transactionId = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setPhoneNumber, setPhoto, setTransactionId, setEmail } = PaymentSlice.actions;
export default PaymentSlice.reducer;

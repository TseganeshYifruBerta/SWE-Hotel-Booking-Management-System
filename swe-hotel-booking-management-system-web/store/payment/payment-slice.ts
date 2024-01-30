import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  phoneNumber: string;
  photo: string;
  transactionId: string;
}

const PaymentSlice = createSlice({
  name: "feedbackupload",
  initialState: {
    phoneNumber:"",
    photo:"",
    transactionId:""
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
  },
});

export const { setPhoneNumber, setPhoto, setTransactionId } = PaymentSlice.actions;
export default PaymentSlice.reducer;

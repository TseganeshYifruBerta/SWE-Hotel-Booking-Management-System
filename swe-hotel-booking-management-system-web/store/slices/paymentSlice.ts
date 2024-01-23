import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { paymentProps, PaymentState } from "../actions/paymentAction";

const initialState: PaymentState = {
  message: {
   phoneNumber:"",
   photo:"",
   transactionId:""
  },

  loading: false,
  success: false,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setResponseData: (state, action: PayloadAction<paymentProps>) => {
      state.message = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
    setError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setResponseData, setLoading, setSuccess, setError } =
  paymentSlice.actions;

export default paymentSlice.reducer;

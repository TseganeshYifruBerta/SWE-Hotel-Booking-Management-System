import { configureStore } from "@reduxjs/toolkit";

import payment from "@/store/slices/paymentSlice"
const store = configureStore({
  reducer: {
    payment: payment,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

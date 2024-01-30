import { configureStore } from "@reduxjs/toolkit";
import { getPaymentHistoryByIdApi } from "./payment/get-all-payment-history-by-id";
import paymentReducer from "./payment/payment-slice";
import addRoomsReducer from "./rooms/add-rooms-slice";
import UserSignupReducer from "./signup/user-signup-slice"
import UserSigninReducer from "./signin/user-signin-slice"
import FeedbackUploadReducer from "./feedback/feedback-slice"
import { getAllRoomsApi } from "./rooms/get-all-rooms";
import { getRoomDetailByIdApi } from "./rooms/get-room-detail-by-id";

import { getAllPaymentsApi } from "./payment/get-all-payments";
// import userSignupSlice from "./signup/user-signup-slice";
const store = configureStore({
  reducer: {
    addroom: addRoomsReducer,
    payment: paymentReducer,
    usersignin: UserSigninReducer,
    usersignup: UserSignupReducer,
    uploadfeedback: FeedbackUploadReducer,
    [getPaymentHistoryByIdApi.reducerPath]: getPaymentHistoryByIdApi.reducer,
    [getAllRoomsApi.reducerPath]: getAllRoomsApi.reducer,
    [getRoomDetailByIdApi.reducerPath]: getRoomDetailByIdApi.reducer,
    [getAllPaymentsApi.reducerPath]: getAllPaymentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(getPaymentHistoryByIdApi.middleware)
      .concat(getAllRoomsApi.middleware)
      .concat(getRoomDetailByIdApi.middleware)
      .concat(getAllPaymentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

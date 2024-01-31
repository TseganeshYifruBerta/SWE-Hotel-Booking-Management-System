import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSignInState {
  phoneNumber: string;
  password: string;
}

const UserSignInSlice = createSlice({
  name: "usersignin",
  initialState: {
    phoneNumber: "",
    password: "",
  } as UserSignInState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setPhoneNumber, setPassword } = UserSignInSlice.actions;
export default UserSignInSlice.reducer;

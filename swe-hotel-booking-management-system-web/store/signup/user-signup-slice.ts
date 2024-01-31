import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSignUpState {
  name: string;
  phoneNumber: string;
  password: string;
  confirmPassword:string
}

const UserSignUpSlice = createSlice({
  name: "usersignup",
  initialState: {
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword:""
  } as UserSignUpState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const { setName, setPhoneNumber, setPassword } = UserSignUpSlice.actions;
export default UserSignUpSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FeedbackUploadState {

email:string,
message: string
}

const feedbackUploadSlice = createSlice({
  name: "feedbackupload",
  initialState: {
 
  email:"",
  message:""
  } as FeedbackUploadState,
  reducers: {
  
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    }
  },
});

export const {

  setEmail,
  setMessage,
} = feedbackUploadSlice.actions;
export default feedbackUploadSlice.reducer;

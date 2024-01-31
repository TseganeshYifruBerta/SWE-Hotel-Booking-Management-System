import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddRoomState {
  title: string;
  description: string;
  price: number;
  availableRooms: number;
  roomPhoto: string;
  status: string;
}

const AddRoomSlice = createSlice({
  name: "feedbackupload",
  initialState: {
    title: "",
    description: "",
    price: 0,
    availableRooms: 0,
    roomPhoto: "",
    status: "",
  } as AddRoomState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setAvailablity: (state, action: PayloadAction<number>) => {
      state.availableRooms = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setPhoto: (state, action: PayloadAction<string>) => {
      state.roomPhoto = action.payload;
    },
  },
});

export const {
  setAvailablity,
  setTitle,
  setDescription,
  setPrice,
  setStatus,
  setPhoto,
} =AddRoomSlice.actions;
export default AddRoomSlice.reducer;

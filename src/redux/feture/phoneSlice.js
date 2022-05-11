import { createSlice } from "@reduxjs/toolkit";
const phoneSlice = createSlice({
  name: "phone",
  phoneInitialState: [],
  reducer: {
    loadPhone: (phone, action) =>
      phoneInitialState === 9 ? [...action.payload] : [],
  },
});

export const { loadPhone: loadPhoneActionCreator } = phoneSlice.action;

export default phoneSlice.reducer;

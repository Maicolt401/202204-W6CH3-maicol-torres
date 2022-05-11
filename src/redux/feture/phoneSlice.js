import { createSlice } from "@reduxjs/toolkit";
const phoneSlice = createSlice({
  name: "phone",
  phoneInitialState: {
    calling: false,
    number: [],
  },
  reducer: {
    loadPhone: (telephone, action) => ({
      ...telephone,
      number: telephone.number + action.payload,
    }),
  },
});

export const { loadPhone: loadPhoneActionCreator } = phoneSlice.actions;

export default phoneSlice.reducer;

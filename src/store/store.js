import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "../redux/feture/phoneSlice";

const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});
export default store;

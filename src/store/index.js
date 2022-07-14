import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../Componen/Register/RegisterSlice";

const store = configureStore({
  reducer: {
    tes: "tes",
    user: registerReducer,
  },
});

export default store;

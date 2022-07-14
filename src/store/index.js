import { configureStore } from "@reduxjs/toolkit";
// import registerReducer from "../Componen/Register/RegisterSlice";
import userReducer from '../components/User/UserSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

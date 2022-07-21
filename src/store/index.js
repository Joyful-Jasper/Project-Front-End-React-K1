import { configureStore } from "@reduxjs/toolkit";
// import registerReducer from "../Componen/Register/RegisterSlice";
import userReducer from '../components/User/UserSlice'
import bookReducer from "../components/Books/BooksSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
  },
});

export default store;

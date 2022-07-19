import { configureStore } from "@reduxjs/toolkit";
import BooksSliceReducer from "../Componen/Books/BooksSlice";
import registerReducer from "../Componen/Register/RegisterSlice";

const store = configureStore({
  reducer: {
    tes: "tes",
    user: registerReducer,
    book: BooksSliceReducer,
  },
});

export default store;

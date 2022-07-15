import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  books: [],
  error: '',
}


export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  return await axios
    .get('https://www.googleapis.com/books/v1/volumes?q=romance')
    .then((response) => response.data)
})

const booksSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (item) => {
    item.addCase(fetchBooks.pending, (state) => {
      state.loading =  true;
    })
    item.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = action.error
    })
    item.addCase(fetchBooks.rejected, (state, action) => {
      state.books = [];
      state.error = action.error;
    })
  }
})

export default booksSlice.reducer
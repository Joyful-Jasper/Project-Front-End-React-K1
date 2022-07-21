import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	books: [],
	error: "",
	keyword: "Books Collection",
};

export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
	return await axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:programming&maxResults=40").then((response) => response.data);
});

export const searchBooks = createAsyncThunk("book/searchBooks", async (data) => {
	return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${data}&maxResults=40`).then((response) => response.data);
});

export const bookGenre = createAsyncThunk("book/bookGenre", async (data) => {
	return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${data}&maxResults=40`).then((response) => response.data);
});

const booksSlice = createSlice({
	name: "book",
	initialState,
	reducers: {
		addKeyword: (state, action) => {
			state.keyword = action.payload;
		},
	},
	extraReducers: (item) => {
		item.addCase(fetchBooks.pending, (state) => {
			state.loading = true;
		});
		item.addCase(fetchBooks.fulfilled, (state, action) => {
			state.loading = false;
			state.books = action.payload;
			state.error = action.error;
			state.keyword = "Book Collections";
		});
		item.addCase(fetchBooks.rejected, (state, action) => {
			state.books = [];
			state.error = action.error;
		});
		item.addCase(searchBooks.pending, (state) => {
			state.loading = true;
		});
		item.addCase(searchBooks.fulfilled, (state, action) => {
			state.loading = false;
			state.books = action.payload;
		});
		item.addCase(searchBooks.rejected, (state, action) => {
			state.books = [];
			state.error = action.error;
		});
		item.addCase(bookGenre.pending, (state) => {
			state.loading = true;
		});
		item.addCase(bookGenre.fulfilled, (state, action) => {
			state.loading = false;
			state.books = action.payload;
		});
		item.addCase(bookGenre.rejected, (state, action) => {
			state.books = [];
			state.error = action.error;
		});
	},
});

export default booksSlice.reducer;
export const { addKeyword } = booksSlice.actions;

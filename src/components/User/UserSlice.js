import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://62ccd8fea080052930b09ff3.mockapi.io'
})

const initialState = {
  data: [],
  logged: false,
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  return await api
    .get('/users')
    .then((res) => (res.data))
});

export const addUsersApi = createAsyncThunk('application/json', async (data) => {
  return await api
    .post('/users/', data)
    .then((res) => console.log(res))
})


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.logged = true
      state.data = []
      state.data.push(action.payload)
    }
  },
  extraReducers: (item) => {
    item.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload
    });
  }
})


export const { addUser } = userSlice.actions;
export default userSlice.reducer;
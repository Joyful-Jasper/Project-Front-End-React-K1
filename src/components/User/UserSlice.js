import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { useEffect } from "react";

const initialState = {
  data: [],
  logged: false,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload)
      state.logged = true
      state.data.push(action.payload)
    }
  }
})


export const { addUser } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  data: [],
};

const RegisterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addRegister: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addRegister } = RegisterSlice.actions;
export default RegisterSlice.reducer;

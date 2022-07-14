import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  userData: [{ firstName: "", lastName: "", email: "", password: "" }],
};

const RegisterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addRegister: (state, action) => {
      console.log(action.payload);
      state.data.push(action.payload);
    },
  },
});

export const { addRegister } = RegisterSlice.actions;
export default RegisterSlice.reducer;

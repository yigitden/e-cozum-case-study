import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormInformation: (state, action) => {
      state.data.push(action.payload) 
  },
}})

export default FormSlice.reducer;
export const { addFormInformation } = FormSlice.actions;

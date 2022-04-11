import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addPackagetoBasket: (state, action) => { 
      const control = state.data.some((item) => item.id === action.payload.id);
      if (control) { 
          state.data = state.data.filter((item)=> item.id !== action.payload.id);
      }
      else {
          state.data.push(action.payload);
      } 
    },
  },
});

export default BasketSlice.reducer;
export const { addPackagetoBasket } = BasketSlice.actions;

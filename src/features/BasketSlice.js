import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addPackagetoBasket: (state, action) => {
      const newPackage = action.payload;
      state.data.push(newPackage);
    },
  },
});

export default BasketSlice.reducer;
export const { addPackagetoBasket } = BasketSlice.actions;

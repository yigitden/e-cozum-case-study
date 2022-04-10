import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from ".././service/Api";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getAllPackages = createAsyncThunk("getAllPackages", async () => {
  const response = await Api().get("packages");
  return response.data;
});

const PackageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPackages.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getAllPackages.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllPackages.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = "Error!";
    });
  },
});

export default PackageSlice.reducer;

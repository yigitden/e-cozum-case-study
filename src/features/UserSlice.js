import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from ".././service/Api";

const initialState = {
  data: [],
  isLogged: false,
  loading: false,
  error: "",
};

export const addUser = createAsyncThunk("signup", async (values) => {
  const response = await Api().post("signup", values);
  return response.data;
});

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = { ...state, data: action.payload };
      state.isLogged = true;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = "Bir hata oluştu lütfen tekrar deneyiniz!";
      alert(state.error);
    });
  },
});

export default UserSlice.reducer;

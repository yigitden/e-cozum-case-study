import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from ".././service/Api";

const initialState = {
  data: [],
};

export const addPayment = createAsyncThunk("addPayment", async (values) => {
    const response = await Api().post("payment", values);
    return response.data;
  });

const PaymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPayment.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.data = { ...state, data: action.payload };
      state.isLogged = true;
    });
    builder.addCase(addPayment.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = "Bir hata oluştu lütfen tekrar deneyiniz!";
      alert(state.error);
    });
  },
});

export default PaymentSlice.reducer; 

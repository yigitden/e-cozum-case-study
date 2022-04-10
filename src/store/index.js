import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import BasketSlice from "../features/BasketSlice";
import FormSlice from "../features/FormSlice";
import PackageSlice from "../features/PackageSlice";
import PaymentSlice from "../features/PaymentSlice";
import UserSlice from "../features/UserSlice"; 

const store = configureStore({
  reducer: {
    package: PackageSlice,
    user: UserSlice,
    basket:BasketSlice,
    payment:PaymentSlice,
    form:FormSlice
  },
});

export default store;
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

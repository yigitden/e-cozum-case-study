import './App.css';
import Login from "./pages/Login"; 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PackageList from "./pages/PackageList";
import Payment from "./pages/Payment";
import ResultPayment from "./pages/ResultPayment"; 
import Deneme from "./Deneme"; 


function App() { 
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Login/>}
      />
      <Route
        path="packagelist"
        element={<PackageList/>}
      />
      <Route
        path="payment"
        element={<Payment/>}
      />
        <Route
        path="result"
        element={<ResultPayment/>}
      />
    
    <Route
        path="deneme"
        element={<Deneme/>}
      />
    </Routes>
  </BrowserRouter>
     
  );
}

export default App;


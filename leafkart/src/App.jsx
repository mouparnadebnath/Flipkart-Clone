import { React } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import Details from "./components/details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartItems from "./components/header/Cart/CartItems";
import PrepaymentPage from "./components/Payment/PrepaymentPage";
import PaymentForm from "./components/Payment/PaymentForm";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/cartItems" element={<CartItems />} />
          <Route path="/prepaymentPage" element={<PrepaymentPage/>}/>
          <Route path="/paymentForm" element={<PaymentForm/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

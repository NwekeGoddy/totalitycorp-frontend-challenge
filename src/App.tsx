import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CheckoutForm from "./pages/CheckoutForm";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="overflow-hidden">
      <Header/>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
     
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;

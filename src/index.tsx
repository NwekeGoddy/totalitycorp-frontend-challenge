import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <SidebarProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </SidebarProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

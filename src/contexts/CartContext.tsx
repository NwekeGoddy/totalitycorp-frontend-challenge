import React, { createContext, useState, useEffect } from "react";
import { CartProductType, ProductType } from "../types/types";

export const CartContext = createContext<any>(null);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartProductType[]>([]);

  const addToCart = (product: ProductType, id: number) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item?.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

  };

  const removeFromCart = (id:number) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })

    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart,  removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios"; 


export const ProductContext = createContext<any>(null);


const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<any[]>([]); // Will replace "any[]" with the actual type of your products later

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = await response.data;
        
        setProducts(data);
        console.log(data); // Log the fetched data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
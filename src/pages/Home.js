import React, { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Features from "../components/Features";
import Customers from "../components/Customers";
import Prefooter from "../components/Prefooter";

const Home = () => {
  const { products } = useContext(ProductContext);


  const filteredProducts = products
    ? products.filter(
        (item) =>
          item.category === "men's clothing" ||
          item.category === "women's clothing"
      )
    : [];

  console.log(products);
  console.log(filteredProducts);

  return (
    <section>
      <div className="px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto py-16">
        <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => {
            return (<Product product={product} key={product.id}/>)
          })}
        </div>
        </div>
       
      </div>
      <Customers />
      <Features />
      <Prefooter />
    </section>
  );
};

export default Home;

import React, { useContext, useEffect } from "react"; 
import { Link } from "react-router-dom";
import {BsPlus, BsEyeFill} from 'react-icons/bs'

type RatingType = {
  rate: number;
  count: number;
};

type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: RatingType;
  title: string;
};

const Product = ({ product }: { product: ProductType }) => {
  console.log(product);

  return <div className="">Product</div>;
};

export default Product;

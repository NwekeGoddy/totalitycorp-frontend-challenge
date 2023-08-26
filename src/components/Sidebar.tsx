import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { CartProductType, ProductType } from "../types/types";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total, clearCart } = useContext(CartContext);

  console.log(cart)
  return (


    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  w-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl;w-[30vw] h-full transition-all duration-300 z-20 px-4 lg:px-8`}
    >
      <div className="flex items-center justify-between py-5 border-b">
        <div className="text-sm font-semibold">Shopping Bag</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center "
        >
          <IoMdArrowForward className="text-xl" />
        </div>
      </div>

{cart.length >= 1 &&  <div>
<div className="flex flex-col gap-y-2 h-[420px] lg:h-[540px] overflow-y-auto overflow-x-hidden">
        {cart.map((item: CartProductType) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className=" flex flex-col gap-y-3 py-4">
        <div className=" flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total :</span> ₦{Number(total.toFixed(2))}
          </div>

          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-3 bg-rose-500 text-white w-10 h-10 flex justify-center items-center text-xl "
          >
            <FiTrash2 />
          </div>
        </div>
      </div>

      <div className="text-white bg-black px-6 py-3 font-semibold text-center my-3 w-full">
        <Link to={"/"}>Proceed to Checkout</Link>
      </div>
</div>}
      

    {cart.length <= 0 &&  <div className="flex flex-col items-center justify-center h-full">
     <p className="text-black font-medium">There's only emptiness</p> 

     <div  onClick={handleClose} className="text-white bg-black px-4 py-2 font-semibold text-center my-2 rounded-md cursor-pointer">
       Shop Now
      </div>
      </div>}
    </div>
  );
};

export default Sidebar;

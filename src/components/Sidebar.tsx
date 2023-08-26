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
  const { cart } = useContext(CartContext);

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

      <div className="flex flex-col ">{cart.map((item:CartProductType)=> {
        return <CartItem item={item} key={item.id}/>
      })}</div>
    </div>
  );
};

export default Sidebar;

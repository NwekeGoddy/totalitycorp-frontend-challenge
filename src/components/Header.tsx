import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../img/myshuplogo.png";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <div className="w-full flex flex-col items-center"> <header
    className={`bg-white px-4 md:px-6 lg:px-8 mb-4 max-w-[1600px] mx-auto transition-all fixed z-10 w-full top-0 `}
  >
    <div
      className={`  py-3 sm:py-4 flex flex-row justify-between items-center h-fit`}
    >
      <div className="flex flex-row gap-6 items-center">
        <div className="cursor-pointer">
          <Link to="/">
            <img
              className="w-[108px] h-[27px]"
              src={Logo}
              alt="myshup Logo"
            />
          </Link>
        </div>
        <Link to="/">
          <p>Shop</p>
        </Link>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-xl" />
          {itemAmount >= 1 ? (
            <div className="absolute flex h-2 w-2 -right-0.5 -bottom-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </div>
          ) : null}
        </div>
        <Link to="/">
          <p>Sign in</p>
        </Link>
      </div>
    </div>
    <div className="bg-[#788e9b] ">
      <p className="text-white px-8 py-2.5 text-center text-[12px]  sm:text-sm  md:text-base">
        Free shipping | Ghana & Benin - over ₦50 | EU - over ₦100 |
        Worldwide - over ₦200
      </p>
    </div>
  </header></div>
   
  );
};

export default Header;

import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../img/myshuplogo.png";

import { SidebarContext } from "../contexts/SidebarContext";

const Header = () => {

const {isOpen, setIsOpen} = useContext(SidebarContext);

  return (
    <section className="px-4 md:px-6  lg:px-8 mb-4 max-w-[1600px] mx-auto">
      <header className="py-3  sm:py-4 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-6 items-center">
          <div>
            <img className="w-[108px] h-[27px]" src={Logo} alt="myshup Logo" />
          </div>{" "}
          <Link to="/">
            <p>Shop</p>
          </Link>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <div onClick={()=> setIsOpen(!isOpen)} className="cursor-pointer">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 7.239v-.6h-.563l-.036.561.599.039zm11.708 0l.6-.028-.027-.572h-.573v.6zm.542 11.635v.6h.629l-.03-.628-.599.028zm-13 0l-.599-.038-.04.638H5.5v-.6zM6.25 7.84h11.708v-1.2H6.25v1.2zm11.109-.573l.542 11.636 1.198-.056-.541-11.635-1.199.055zM18.5 18.274h-13v1.2h13v-1.2zm-12.401.639l.75-11.636L5.65 7.2l-.75 11.636 1.198.077z"
                fill="#131315"
              ></path>
              <path
                d="M9.5 10.117V5.93c0-1.668 1.12-2.328 2.5-2.328s2.5.66 2.5 2.328v4.187"
                stroke="#131315"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>

            {/* <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 7.239v-.6h-.563l-.036.561.599.039zm11.708 0l.6-.028-.027-.572h-.573v.6zm.542 11.635v.6h.629l-.03-.628-.599.028zm-13 0l-.599-.038-.04.638H5.5v-.6zM6.25 7.84h11.708v-1.2H6.25v1.2zm11.109-.573l.542 11.636 1.198-.056-.541-11.635-1.199.055zM18.5 18.274h-13v1.2h13v-1.2zm-12.401.639l.75-11.636L5.65 7.2l-.75 11.636 1.198.077z"
                fill="#131315"
              ></path>
              <circle
                cx="17"
                cy="18"
                r="3.75"
                fill="#E4584E"
                stroke="#fff"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M9.5 10.117V5.93c0-1.668 1.12-2.328 2.5-2.328s2.5.66 2.5 2.328v4.187"
                stroke="#131315"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg> */}
          </div>
          <Link to="/">
            {" "}
            <p>Sign in</p>
          </Link>
        </div>
      </header>

      <div className="bg-[#788e9b]">
        <p className="text-white px-8 py-2.5 text-center text-sm sm:text-base">
          Free shipping | Portugal & Spain - over 50€ | EU - over 100€ |
          Worldwide - over 200€
        </p>
      </div>
    </section>
  );
};

export default Header;

import React from "react";
import amazonLogo from "../assets/pic.png";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-[#131921] h-16 flex justify-center items-center gap-4 text-white">
       <Link to='/' ><div className="w-[10%] cursor-pointer">
          <img  src={amazonLogo} alt="" />
        </div></Link>
        <div className="w-[10%]  flex items-center cursor-pointer"> 
          <div><CiLocationOn className="text-[20px] text-white"/></div>
           <div className="leading-4">
            <p className="text-[#ccc] text-[12px] font-[600]">Deliver to</p>
            <p className="text-[14px] font-[700]">Pakistan</p>
           </div>
            
        </div>
        <div className="w-[40%] ">
          <form className="flex">
            <div className="flex items-center gap-2 bg-[#D4D4D4] p-[10px] rounded-l-[4px] text-[#0F1111] text-[12px] cursor-pointer">
              <p>All</p>
              <IoMdArrowDropdown className="text-[17px]"/>
            </div>
            <div className="w-full">
                <input className="w-full p-[9px] border-0 outline-none text-black" type="text" name="" placeholder="Search Amazon" />
            </div>
            <div className="bg-[#F3A847] p-[10px] rounded-r-[4px] cursor-pointer">
            <IoSearch className="text-[20px] text-black"/>
            </div>
          </form>
        </div>
        <div className="w-[8%]  flex items-center gap-[3px] cursor-pointer">
        <LiaFlagUsaSolid className="text-2xl"/>
        <p className="text-[14px] font-bold">EN</p>
        <IoMdArrowDropdown />
        </div>
        <div className="w-[12%]  text-[12px] cursor-pointer">
            <p>Hello,sign in</p>
            <div className="flex items-center gap-[5px] font-bold">
            <p>Account and Lists</p>
            <IoMdArrowDropdown className="text-[18px]"/>
            </div>
        </div>
        <div className="w-[10%]  leading-[5px]">
            <span className="m-4">0</span>
           <Link to='cart'> <div className="flex items-center gap-2">
            <LuShoppingCart className="text-4xl"/>
            <p>Cart</p>
            </div></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

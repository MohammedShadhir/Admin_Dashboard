/* eslint-disable react/prop-types */
import { MdOutlineMenuOpen } from "react-icons/md";
// import { CiMenuBurger } from "react-icons/ci";
// import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

import { IoSunnyOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
// import { IoMail } from "react-icons/io5";
// import { FaBell } from "react-icons/fa";
import Search from "./Search";
import UserProfile from "./UserProfile ";
import NotificationDropdown from "./NotificationDropAndDown";
import MessageNotfication from "./MessageNotfication";
import React from "react";

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="w-full  bg-[#ffffff] flex justify-start items-center px-[12px] py-[16px]">
      <Link to={"/"} className="flex items-center justify-start mr-[105px]">
        <img
          src="https://mironcoder-hotash.netlify.app/images/logo.webp"
          alt="logo"
          className=" h-[45px]"
        />
        <span className="text-[#403e57] text-[24px] font-[900] ">HOTASH</span>
      </Link>
      <div className="flex justify-between w-full items-center gap-[18px] flex-grow-1">
        <div className="flex items-center justify-start gap-[18px]">
          <div
            className=" text-[#5e5d72] rounded-full w-[38px] flex items-center justify-center h-[38px] cursor-pointer "
            style={{ backgroundColor: "rgba(8, 88, 247, 0.06)" }}
            onClick={onToggleSidebar}
          >
            <MdOutlineMenuOpen className="text-[22px] hover:text-blue-500 transition-all ease-in-out" />
          </div>
          <Search />
        </div>
        <div className="flex items-center justify-end gap-[18px]">
          <div
            className=" text-[#5e5d72] rounded-full w-[38px] flex items-center justify-center h-[38px] cursor-pointer "
            style={{ backgroundColor: "rgba(8, 88, 247, 0.06)" }}
          >
            <IoSunnyOutline className="text-[22px] hover:text-blue-500 transition-all ease-in-out" />
          </div>
          <div
            className=" text-[#5e5d72] rounded-full w-[38px] flex items-center justify-center h-[38px] cursor-pointer"
            style={{ backgroundColor: "rgba(8, 88, 247, 0.06)" }}
          >
            <TbWorld className="text-[22px] hover:text-blue-500 transition-all ease-in-out" />
          </div>
          <div
            className=" text-[#5e5d72] rounded-full w-[38px] flex items-center justify-center h-[38px] cursor-pointer"
            style={{ backgroundColor: "rgba(8, 88, 247, 0.06)" }}
          >
            <FaCartShopping className="text-[22px]  hover:text-blue-500 transition-all ease-in-out" />
          </div>
          {/* <div
            className=" text-[#5e5d72] rounded-full w-[38px] flex items-center justify-center h-[38px] cursor-pointer"
            style={{ backgroundColor: "rgba(8, 88, 247, 0.06)" }}
          >
            <IoMail className="text-[22px] hover:text-blue-500 transition-all ease-in-out" />
          </div> */}
          <MessageNotfication />

          <NotificationDropdown />
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Header;

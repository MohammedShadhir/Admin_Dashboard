import { IoIosArrowForward } from "react-icons/io";

import { useState } from "react";
import React from "react";
import menuItems from "../../data/menuItems";
import uiItems from "../../data/uiItems";
import otherItems from "../../data/otherItems";

const SideBar = () => {
  const [expandedMenu, setExpandedMenu] = useState<number | null>(null);

  // Toggle submenu for a specific menu item
  const toggleSubmenu = (index: number | null) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <div className="w-[260px] h-screen left-0 bg-[#ffffff] py-5 px-3 text-[16px] font-sans font-[400] top-[60px] overflow-y-auto  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 transition-all duration-100 ease-in-out ">
      <div className="mb-[12px] bg-[#ffffff]">
        <h5 className="text-[#b4b4b4] text-[12px] font-[500] mb-[15px] uppercase">
          main pages
        </h5>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => toggleSubmenu(index)}
              className="flex  flex-col justify-between py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer mb-[3px] font-sans text-[16px] font-[400] text-[#5e5d72]"
            >
              <div className="flex justify-start text-[22px]  px-1 py-[12px] cursor-pointer rounded-lg gap-3 relative">
                {item.icon} {/* Dynamically renders the icon */}
                <span className="text-[15px] capitalize font-[500] text-left">
                  {item.name}
                </span>
                {/* <span className="bg-[#ff304f] rounded pt-0 px-[5px] pb-[1px] text-[#ffffff] text-[10px] font-[600] uppercase">
                  HOT
                </span> */}
                {item.subItems && (
                  <IoIosArrowForward
                    className={` cursor-pointer transition-transform absolute right-0  ${
                      expandedMenu === index ? "rotate-90" : ""
                    }`}
                  />
                )}
              </div>

              <div>
                {item.subItems && expandedMenu === index && (
                  <ul className=" border-l border-l-1 border-gray-400">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="pl-[20px] text-[15px] relative capitalize my-[15px] w-[100%] hover:text-blue-500 hover:border-l-blue-500 hover:border-l-2 "
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-[12px] bg-[#ffffff]">
        <h5 className="text-[#b4b4b4] text-[12px] font-[500] mb-[15px] uppercase">
          ui pages
        </h5>
        <ul>
          {uiItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer mb-[3px] font-sans text-[16px] font-[400] text-[#5e5d72]"
            >
              <div className="flex items-center text-[22px] justify-start px-1 py-[12px] cursor-pointer rounded-lg gap-3">
                {item.icon} {/* Dynamically renders the icon */}
                <span className="text-[15px] capitalize font-[500] text-left">
                  {item.name}
                </span>
              </div>
              {/* <IoIosArrowForward /> */}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-[12px] bg-[#ffffff]">
        <h5 className="text-[#b4b4b4] text-[12px] font-[500] mb-[15px] uppercase">
          other pages
        </h5>
        <ul>
          {otherItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer mb-[3px] font-sans text-[16px] font-[400] text-[#5e5d72]"
            >
              <div className="flex items-center text-[22px] justify-start px-1 py-[12px] cursor-pointer rounded-lg gap-3">
                {item.icon} {/* Dynamically renders the icon */}
                <span className="text-[15px] capitalize font-[500] text-left">
                  {item.name}
                </span>
              </div>
              {/* <IoIosArrowForward /> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

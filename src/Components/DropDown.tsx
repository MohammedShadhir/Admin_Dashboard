import React, { useState } from "react";

interface DropDownProps {
  items: string[];
  title: string;
}

const DropDown: React.FC<DropDownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-2">
      <h1 className="text-[12px] font-[700] text-[#403e57] uppercase ">
        {title}
      </h1>
      <div className="relative inline-block text-left w-full mt-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-start w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {items[0]}
          <svg
            className=" h-5 w-5 mr-1 ml-auto "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="origin-top-right absolute left-0 w-full mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {items.map((item, index) => (
                <a
                  href="#"
                  key={index}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#2b77e5] hover:text-white"
                  role="menuitem"
                  tabIndex={-1}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;

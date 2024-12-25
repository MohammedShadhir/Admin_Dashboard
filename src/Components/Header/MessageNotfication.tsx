import React from "react";
import { useState } from "react";
import { IoMail, IoSettingsSharp } from "react-icons/io5";

const MessageNotfication = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggelDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div
        className=" text-[#5e5d72] rounded-full w-[38px] flex items-center justify-center h-[38px] cursor-pointer"
        style={{ backgroundColor: "rgba(8, 88, 247, 0.06)" }}
        onClick={toggelDropdown}
      >
        <IoMail className="text-[22px] hover:text-blue-500 transition-all ease-in-out" />
      </div>
      {isDropdownOpen && (
        <div className="absolute top-[40px] right-0 p-[20px] w-[280px] bg-white shadow-lg rounded-md z-10 capitalize">
          <div className="flex justify-between items-center pt-[5px] px-[8px] pb-[8px]">
            <h4 className="font-[700] text-[16px] text-[#403e57] capitalize">
              Message (23)
            </h4>
            <div>
              <button>
                <IoSettingsSharp />
              </button>
            </div>
          </div>
          <div>
            <ul className="flex flex-col">
              {/* Profile Item */}
              <li className="flex items-center gap-[8px] p-[10px] my-[2px] bg-[#ebf6ff] cursor-pointer">
                <a href="#" className="flex ">
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="	https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                      alt="Jese image"
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                      <svg
                        className="w-2 h-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                        <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full ps-3">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      New message from{" "}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Jese Leos
                      </span>
                      {/* : "Hey, what's up? All set for the presentation?" */}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      a few moments ago
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            <div className="text-center mt-3">
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                View All Messages
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageNotfication;

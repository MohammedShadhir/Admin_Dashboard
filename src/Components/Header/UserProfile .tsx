import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaUser, FaKey, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";

export default function UserProfile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Profile Section */}
      <div
        className="flex items-center justify-center gap-[7px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <a>
          <div className="border rounded-full border-[#0858f7] w-[37px] h-[37px]">
            <img
              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
              alt="profile"
              className="w-full h-full rounded-full relative cursor-pointer"
            />
          </div>
        </a>
        <div className="flex flex-col">
          <h3 className="text-[14px] font-[600] capitalize text-[#403e57] flex flex-row justify-start mb-0">
            miron mahmud
            <span>
              <MdOutlineArrowDropDown className="w-6 h-6" />
            </span>
          </h3>
          <p className="text-[12px] font-[500] text-left lowercase mt-0 opacity-50">
            @mironcoder
          </p>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-14 right-0 w-[170px] bg-white shadow-lg rounded-md z-10 capitalize">
          <ul className="flex flex-col">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaUser className="w-4 h-4 " />
              <span className="text-[15px]">My Account</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaKey className="w-4 h-4 " />
              <span className="text-[15px]">Reset Password</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaSignOutAlt className="w-4 h-4 text-red-500" />
              <span className="text-red-500 text-[15px]">Log Out</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

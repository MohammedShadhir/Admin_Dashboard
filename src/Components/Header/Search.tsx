import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div>
      <div
        className="ftext-[#5e5d72] w-[280px] flex items-center justify-start rounded-lg h-[40px] text-[18px] text-[#5e5d72]"
        style={{ backgroundColor: "rgba(8, 88, 247, 0.06)" }}
      >
        <IoSearch className="text-[24px] ml-6 font-[400]" />
        <input
          placeholder="quick finding..."
          className="w-full h-full px-[12px] text-[#5e5d72] font-serif text-[16px] bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Search;

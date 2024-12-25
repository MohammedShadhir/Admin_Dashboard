import React from "react";

const TitleBar = () => {
  return (
    <div className="bg-white w-full h-20 rounded-lg flex p-5 justify-between items-center">
      <div>
        <h1 className="text-[#403e57] text-[20px] capitalize font-[700]">
          Ecommerce
        </h1>
      </div>
      <div className="flex items-center justify-evenly">
        <h1 className="text-[#0858f7] text-[14px] capitalize">Home</h1>
        <span className="pl-2 text-[#5e5d72]">~</span>
        <h1 className="text-[#0858f7] text-[14px] capitalize pl-2">
          Dashboard
        </h1>
        <span className="pl-2 text-[#5e5d72]">~</span>
        <h1 className="text-[#5e5d72] text-[14px] capitalize pl-2">
          Ecommerce
        </h1>
      </div>
    </div>
  );
};

export default TitleBar;

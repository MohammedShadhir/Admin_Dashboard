import React from "react";

interface DashboardProps {
  title: string;
  count: number;
  percentage: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const DashboardCard: React.FC<DashboardProps> = ({
  title,
  count,
  percentage,
  icon,
  bgColor,
  textColor,
}) => {
  return (
    <>
      <div
        className={`${bgColor} ${textColor} p-6 rounded-lg shadow-md flex flex-col h-full`}
      >
        <div className="flex justify-between items-center">
          <div className="text-xl">{title}</div>
          <div className={` bg-white text-yellow-500 p-2 rounded-full`}>
            {icon}
          </div>
        </div>
        <div className="flex-grow flex flex-col ">
          <div className="text-3xl font-bold">{count}</div>
          <div className="text-sm text-white mt-2">
            + ${percentage}Last Month
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardCard;

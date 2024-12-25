import React from "react";
import DashboardCard from "./DashboardCard";

const DashboardTop = () => {
  return (
    <div className="grid grid-cols-3  p-4 gap-6">
      <DashboardCard
        title="Total Users"
        count={324}
        percentage="+ 95% Last Month"
        icon="👤"
        bgColor="bg-green-500"
        textColor="text-white"
      />
      <DashboardCard
        title="Total Orders"
        count={338}
        percentage="+ 30% Last Month"
        icon="🛒"
        bgColor="bg-purple-500"
        textColor="text-white"
      />
      <div className="row-span-2 ">
        <DashboardCard
          title="Total Sales"
          count={3787681.0}
          percentage="$3,578.90 in last month"
          icon="💰"
          bgColor="bg-blue-500"
          textColor="text-white"
        />
      </div>
      <DashboardCard
        title="Total Products"
        count={557}
        percentage="+ 25% Last Month"
        icon="📦"
        bgColor="bg-yellow-500"
        textColor="text-white"
      />
      <DashboardCard
        title="Total Reviews"
        count={557}
        percentage="+ 45% Last Month"
        icon="⭐"
        bgColor="bg-orange-500"
        textColor="text-white"
      />
    </div>
  );
};
export default DashboardTop;

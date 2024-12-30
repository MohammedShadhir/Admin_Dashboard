import React from "react";
import DashboardTop from "./DashboardTop";
import ProductList from "../../Components/Dashboard/Ecommerce/ProductList";

const Dashboard = () => {
  return (
    <div>
      <DashboardTop />
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Dashboard;

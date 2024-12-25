import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar";
import { useState } from "react";
import React from "react";
import TitleBar from "./Components/TitleBar";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <BrowserRouter>
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex flex-row">
        {isSidebarVisible && (
          <div>
            <SideBar />
          </div>
        )}
        <div className=" h-[100vh] w-full">
          <div className="px-4 py-4">
            <TitleBar />
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { ReactNode } from "react";
import { MdDashboard } from "react-icons/md";
import { TbBrandAuth0 } from "react-icons/tb";
import {
  FaUsers,
  FaBox,
  FaFileInvoice,
  FaEnvelope,
  FaBell,
  FaCog,
  FaFileAlt,
} from "react-icons/fa";
import React from "react";

// Type for the structure of each menu item
interface MenuItem {
  name: string;
  icon: ReactNode; // React node to hold the icon (e.g., JSX element)
  subItems?: string[]; // Optional array for sub-items
}

// Example of the menu items data (same as your sample data)
const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    subItems: ["Ecommerce", "Analytics", "Crm"],
  },
  {
    name: "Authentication",
    icon: <TbBrandAuth0 />,
    subItems: ["Login", "Registration", "Forgot Password"],
  },
  {
    name: "Users",
    icon: <FaUsers />,
    subItems: ["User List", "User Profile", "My Account"],
  },
  {
    name: "Products",
    icon: <FaBox />,
    subItems: ["Product List", "Product View", "Product Upload"],
  },
  {
    name: "Invoices",
    icon: <FaFileInvoice />,
    subItems: ["Invoice", "Invoice List"],
  },
  { name: "Messages", icon: <FaEnvelope /> },
  { name: "Notifications", icon: <FaBell /> },
  { name: "Settings", icon: <FaCog /> },
  { name: "Blank Pages", icon: <FaFileAlt /> },
];

export default menuItems;

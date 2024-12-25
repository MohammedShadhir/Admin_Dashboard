import React from "react";
import { ReactNode } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaMobileButton, FaChartPie } from "react-icons/fa6";
import { IoIosAlert, IoIosColorPalette, IoMdPhotos } from "react-icons/io";
import { LiaTableSolid } from "react-icons/lia";
import { MdOutlineSubtitles } from "react-icons/md";

interface otherItem {
  name: string;
  icon: ReactNode;
}

const otherItems: otherItem[] = [
  { name: "Alerts", icon: <IoIosAlert /> },
  { name: "Avatars", icon: <IoMdPhotos /> },
  { name: "Headings", icon: <MdOutlineSubtitles /> },
  { name: "Buttons", icon: <FaMobileButton /> },
  { name: "Colors", icon: <IoIosColorPalette /> },
  { name: "Charts", icon: <FaChartPie /> },
  { name: "Fields", icon: <AiOutlineFieldTime /> },
  { name: "tables", icon: <LiaTableSolid /> },
];

export default otherItems;

import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaBed } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdCheckboxOutline } from "react-icons/io";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      {/* Left section */}
      <div className="flex items-center">
        <i className="fas fa-bars mr-4"></i>
        <h1 className="text-xl font-bold">Vishwaraj Hospital</h1>
      </div>

      {/* Right section */}
      <div className="ht">
       <span className="bb"> <input
          type="text"
          placeholder="Search By Patient Name"
          
        /> </span>
        <AiOutlineGlobal className="ic"/>
        <FaRegBell className="ic"/>
        <FaBed className="ic"/>
        <FaWhatsapp className="ic"/>
        <SlCalender className="ic"/>
        <IoMdCheckboxOutline className="ic"/>
      </div>
    </div>
  );
};

export default Topbar;

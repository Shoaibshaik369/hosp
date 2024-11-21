import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  IoDesktopOutline,
  IoCashOutline,
  IoCalendarOutline,
  IoMedkitOutline,
  IoFlaskOutline,
  IoImagesOutline,
  IoWaterOutline,
  IoCarSportOutline,
  IoPeopleOutline,
  IoDocumentTextOutline,
  IoBarChartOutline,
  IoShareOutline,
} from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaHospital, FaBookDead, FaUserAlt } from "react-icons/fa"; // Additional icons
import "./Sidebar.css";

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const menuItems = [
    { icon: <IoBarChartOutline />, text: "Dashboard", link: "/dashboard" },
    { icon: <IoCashOutline />, text: "Billing", link: "/billing" },
    { icon: <IoCalendarOutline />, text: "Appointment", link: "/appointment" },
    { icon: <IoMedkitOutline />, text: "OPD - Out Patient", link: "/opd" },
    { icon: <FaHospital />, text: "IPD - In Patient", link: "/ipd" },
    { icon: <IoFlaskOutline />, text: "Pharmacy", link: "/pharmacy" },
    { icon: <IoImagesOutline />, text: "Pathology", link: "/pathology" },
    { icon: <IoImagesOutline />, text: "Radiology", link: "/radiology" },
    { icon: <IoWaterOutline />, text: "Blood Bank", link: "/blood-bank" },
    { icon: <IoCarSportOutline />, text: "Ambulance", link: "/ambulance" },
    { icon: <IoDesktopOutline />, text: "Front Office", link: "/front-office" },
    {
      icon: <FaBookDead />,
      text: "Birth & Death Record",
      dropdown: [
        { text: "Birth Record", link: "/birth-record" },
        { text: "Death Record", link: "/death-record" },
      ],
    },
    { icon: <FaUserAlt />, text: "Human Resource", link: "/human-resource" },
    { icon: <IoCalendarOutline />, text: "Duty Roster", link: "/duty-roster" },
    {
      icon: <IoCashOutline />,
      text: "Finance",
      dropdown: [
        { text: "Income", link: "/finance/income" },
        { text: "Expenses", link: "/finance/expenses" },
      ],
    },
    { icon: <IoShareOutline />, text: "Referral", link: "/referral" },
    { icon: <MdMessage />, text: "Messaging", link: "/messaging" },
    
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div key={index}>
          {/* Main menu item */}
          <Link
            to={item.link || "#"} // Provide link for navigation
            onClick={item.dropdown ? () => toggleDropdown(index) : null}
            className="menu-item"
          >
            <span className="icon">{item.icon}</span> {/* React Icon */}
            {item.text}
            {item.dropdown && (
              <span className="dropdown-icon">
                {activeDropdown === index ? "▲" : "▼"}
              </span>
            )}
          </Link>

          {/* Dropdown menu */}
          {item.dropdown && activeDropdown === index && (
            <div className="dropdown">
              {item.dropdown.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.link} // Sub-item navigation
                  className="dropdown-item"
                >
                  {subItem.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faEnvelope,
  faUsers,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const items = [
    { icon: faHome, label: "Home", path: "/home" },
    { icon: faTachometerAlt, label: "Dashboard", path: "/dashboard" },
    { icon: faEnvelope, label: "Messages", path: "/messages" },
    { icon: faUsers, label: "Network", path: "/network" },
    {icon:faHeadset,label:"Help center",path:"/help-center"},
  ];
  
  return (
    <aside className="w-20  flex flex-col items-center py-6 space-y-8">
      {items.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            to={item.path}
            key={index}
            className={`flex flex-col items-center group p-2 rounded ${
              isActive
                ? " text-gray-1000"
                : "text-gray-700  hover:text-black"
            } transition-colors`}
          >
            <FontAwesomeIcon icon={item.icon} className="w-10 h-10" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </aside>
  );
};
export default Sidebar;

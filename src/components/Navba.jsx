import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/dark-logo.jpg";
import NotificationIcon from "./NotificationIcon";
import Profile from "./Profile";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navba() {
  return (
    <nav className="w-screen flex items-center justify-between bg-white py-4 px-4 font-bold ">
      <span className="flex flex-row items-center">
        <img src={logo} alt="mvp-logo" className="size-8 rounded-full  " />
        <span className="bg-gradient-to-r from-[#0b21e6]  to-[#b30be6] bg-clip-text text-transparent drop-shadow-2xl  text-2xl pr-4 ">
          Startups To Fund
        </span>

        <div className="relative">
          {/* This div is the 'absolute' container for  SVG icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="
border border-gray-300
rounded-full 
w-2xl 
pl-10 
py-2 

pr-4
focus:outline-none
focus:ring-2 focus:ring-blue-500
"
          />
        </div>
      </span>

      <div className="flex flex-row items-center space-x-8">
        <NotificationIcon initialCount={0} />

        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} className="text-lg text-gray-800 " />
        </Link>
      </div>
    </nav>
  );
}
export default Navba;

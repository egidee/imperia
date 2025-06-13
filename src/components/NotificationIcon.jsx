import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";



const NotificationIcon = ({ initialCount = 0 }) => {
  const [notificationCount, setNotificationCount] = useState(initialCount);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Simulate new notifications arriving
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationCount((prevCount) => prevCount + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  const handleIconClick = () => {
    setIsDropdownOpen((prev) => !prev);
    // Optional: Reset count or mark as read when dropdown opens
    // if (notificationCount > 0) {
    // setNotificationCount(0);
    // }
  };
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleIconClick}
        className="relative text-gray-400 focus:outline-none p-2 rounded-full hover:text-gray-900 transition duration-300"
        aria-label="Notifications"
      >
        <FontAwesomeIcon icon={faBell} className=" text-xl text-gray-800"/>
        {notificationCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full leading-none flex items-center justify-center">
            {notificationCount}
          </span>
        )}
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-20 text-gray-800">
          <div className="px-4 py-2 border-b border-gray-200 font-semibold text-sm">
            Notifications
          </div>
          {notificationCount === 0 ? (
            <div className="px-4 py-2 text-sm text-gray-500">
              No new notifications.
            </div>
          ) : (
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                {/*New message from John Doe*/}
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                {/*Your order #12345 has shipped!*/}
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
               {/* Reminder: Meeting at 3 PM*/}
              </li>
            </ul>
          )}
          <div className="px-4 py-2 border-t border-gray-200 text-right">
            <Link
              to="/notifications"
              className="text-blue-500 text-sm hover:underline"
              onClick={() => setIsDropdownOpen(false)}
            >
              View all
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default NotificationIcon;

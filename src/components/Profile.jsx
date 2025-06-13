import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"




const Profile = () => {
    return (
    <div className="container mx-auto p-8 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Profile</h1>
    <p className="text-lg text-gray-700">This is where your user profile information will be displayed.</p>
    <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
    <p className="text-gray-600">Username: JohnDoe</p>
    <p className="text-gray-600">Email: john.doe@example.com</p>
    {/* Add more profile details here */}
    </div>
    </div>
    );
    };
    export default Profile;
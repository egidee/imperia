import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navba from "./components/Navba";
import Home from "./components/Home";
import Network from "./components/Network";
import Messages from "./components/Messages";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import Profile from "./components/Profile"

function App() {
  return (
    <div className=" h-screen bg-sky-300 font-sans  ">
      <ProgressBar />
      <Navba />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/network" element={<Network />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

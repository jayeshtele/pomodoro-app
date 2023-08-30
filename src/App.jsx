import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Focus from "./components/focus";
import ShortBreak from "./components/ShortBreak";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="app tr flex h-screen flex-col items-center justify-center bg-[#270000]">

      <Login />

      <h1 className="heading mb-[5rem] text-6xl font-bold tracking-[1rem] text-center text-[#F4EDDB]">
        POMODORO APP
      </h1>

      <div className="navbar space-x-[2rem] text-white">
        <NavLink className="inline-block text-xl font-bold" to="/">
          Focus Time
        </NavLink>
        <NavLink className="inline-block text-xl font-bold" to="/short">
          Short Break
        </NavLink>
      </div>

      <Routes>
        <Route index element={<Focus />} />
        <Route path="short" element={<ShortBreak />} />
      </Routes>
    </div>
  );
}

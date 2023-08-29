import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Focus from "./components/focus";
import ShortBreak from "./components/ShortBreak";

export default function App() {
  return (
    <div className="app tr flex h-screen flex-col items-center justify-center bg-[#270000]">
      <h1 className="heading text-6xl font-bold tracking-[1rem] text-[#F4EDDB] mb-[5rem]">
        POMODORO APP
      </h1>
      <div className="navbar text-white space-x-[2rem]">
        <NavLink className="text-xl font-bold inline-block" to="/">Focus Time</NavLink>
        <NavLink className="text-xl font-bold inline-block" to="/short">Short Break</NavLink>
      </div>
      <Routes>
        <Route index element={<Focus />} />
        <Route path="short" element={<ShortBreak />} />
      </Routes>
    </div>
  );
}

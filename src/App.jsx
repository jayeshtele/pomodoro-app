import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Focus from "./components/focus";
import ShortBreak from "./components/ShortBreak";

export default function App() {
  return (
    <div className="app tr flex h-screen flex-col items-center justify-center bg-[#270000]">
      <form className="absolute inset-0 flex items-center justify-center bg-black/80">
        <div className="form-pomodoro flex flex-col items-center justify-center rounded-xl bg-white px-16 py-[3rem]">
          <h1 className="mb-16 text-center text-2xl font-bold">Login Form</h1>
          <div className="username">
            <label htmlFor="username" className="inline-block w-[6rem] font-bold">
              Username
            </label>
            <input
              type="text"
              className="rounded border border-black focus:outline-none"
              id="username"
            />
          </div>
          <div className="password">
            <label htmlFor="username" className="mt-5 inline-block w-[6rem] font-bold">
              Password
            </label>
            <input
              type="text"
              className="rounded border border-black focus:outline-none"
              id="username"
            />
          </div>
          <button className="mt-10 inline-block w-full rounded bg-green-800 py-2 font-bold text-white">
            Login
          </button>
        </div>
      </form>
      <h1 className="heading mb-[5rem] text-6xl font-bold tracking-[1rem] text-[#F4EDDB]">
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

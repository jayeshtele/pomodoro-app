import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <Outlet />
      <NavLink to="/home/focus" ></NavLink>
      <NavLink to="/home/short"></NavLink>
    </div>
  );
}

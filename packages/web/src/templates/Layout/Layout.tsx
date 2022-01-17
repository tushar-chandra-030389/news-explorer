import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="hidden sm:inline-grid	 sm:col-span-1 2xl:col-span-2"></div>
      <div className="col-span-12 sm:col-span-10 2xl:col-span-8 bg-background text-slate-50 h-full">
        <Outlet />
      </div>
      <div className="hidden sm:inline-grid sm:col-span-1 2xl:col-span-2"></div>
    </div>
  );
}

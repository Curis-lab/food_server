import { adminApi } from "@/infrastructure/api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/sidebarnav";
import { Toaster } from "../components/ui/toaster";

function HomePage() {
  return (
    <ApiProvider api={adminApi}>
      <div className="min-h-screen w-full bg-white text-black flex">
        <SideNavbar />
        <Outlet />
        <Toaster/>
      </div>
    </ApiProvider>
  );
}

export default HomePage;

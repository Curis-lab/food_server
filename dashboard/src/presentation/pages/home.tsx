import { mainSlice } from "@/infrastructure/api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/sidebarnav";
import { Toaster } from "../components/ui/toaster";
import Header from "../components/header";

function HomePage() {
  return (
    <ApiProvider api={mainSlice}>
      <div className="min-h-screen w-full bg-white text-black flex">
        <SideNavbar />
        <div className="w-full h-full pl-[300px]">
          <Header />
          <Outlet />
        </div>
        <Toaster />
      </div>
    </ApiProvider>
  );
}

export default HomePage;

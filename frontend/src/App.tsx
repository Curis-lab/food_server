import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import VendorProfile from "./presenter/page/vendor-profile";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { mainSlice } from "./adapter/redux/main-slice";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<VendorProfile />} />)
);

function App() {
  return (
    <ApiProvider api={mainSlice}>
      <RouterProvider router={router} />;
    </ApiProvider>
  );
}

export default App;

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
import ProductList from "./presenter/profile/product-list";
import ProductForm from "./presenter/profile/product-form";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<VendorProfile />}>
      <Route index element={<ProductList/>} />
      <Route path="create" element={<ProductForm/>}/>
    </Route>
  )
);

function App() {
  return (
    <ApiProvider api={mainSlice}>
      <RouterProvider router={router} />;
    </ApiProvider>
  );
}

export default App;

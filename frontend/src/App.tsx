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
import CustomerProfile from "./presenter/page/customer-profile";
import Home from "./presenter/page/home";
import { Layout } from "./presenter/common/layout";
import CheckoutPage from "./presenter/page/checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/checkout" element={<CheckoutPage/>}/>
      <Route path="/customer" element={<CustomerProfile />} />
      <Route path="/vendor" element={<VendorProfile />}>
        <Route index element={<ProductList />} />
        <Route path="create" element={<ProductForm />} />
      </Route>
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

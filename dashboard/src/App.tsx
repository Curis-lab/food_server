import "./App.css";
import MainTable from "./presentation/components/vendor-table";
import CreateVendorAccount from "./presentation/components/create-vendor-account";
import HomePage from "./presentation/pages/home";

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider,} from 'react-router-dom'
import Edit from "./presentation/components/edit";
import CustomerTable from "./presentation/components/customer-table";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage/>}>
      <Route index element={<MainTable/>}/>
      <Route path="create" element={<CreateVendorAccount/>}/>
      <Route path=":id/edit" element={<Edit/>}/>
      <Route path="customer" element={<CustomerTable/>}/>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
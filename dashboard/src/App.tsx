import "./App.css";
import { adminApi } from "./infrastructure/api/apiSlice";
import MainTable from "./presentation/components/table";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./presentation/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import CreateVendorAccount from "./presentation/components/create-vendor-account";
import HomePage from "./presentation/pages/home";

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider,} from 'react-router-dom'
//-----------------router-----------

//-----------------end router -----------

export type vendor_table = {
  name: string;
  ownerName: string;
  phone: string;
  email: string;
  address: string;
  serviceAvailable: boolean;
  rating: number;
  foodType: [string];
  pinCode: string;
};

export const columns: ColumnDef<vendor_table>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "ownerName",
    header: "Owner Name",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "pinCode",
    header: "Pin Code",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  
  {
    accessorKey: "serviceAvailable",
    header: "Service Available",
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("rating")}</div>
    ),
  },
  {
    accessorKey: "foodType",
    header: "foodType",
  },
  {
    accessorKey: "foods",
    header: "Foods",
  },
];

function Table() {
  const { data: api, isSuccess } = adminApi.useGetVendorsQuery();
  const vendor_data: vendor_table[] = isSuccess
    ? api.map((vendor) => {
        return {
          name: vendor.name,
          ownerName: vendor.ownerName,
          phone: vendor.phone,
          email: vendor.email,
          address: vendor.address,
          serviceAvailable: vendor.serviceAvailable,
          rating: vendor.rating,
          foodType: vendor.foodType,
          pinCode: vendor.pinCode,
        };
      })
    : [];
  return <MainTable data={vendor_data} columns={columns} />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage/>}>
      <Route index element={<Table/>}/>
      <Route path="create" element={<CreateVendorAccount/>}/>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
import "./App.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { adminApi } from "./infrastructure/api/apiSlice";
import MainTable from "./presentation/components/table";
import { ColumnDef } from "@tanstack/react-table";

type vendor = {
  name: string;
  ownerName: string;
  pinCode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImage: [string];
  rating: number;
  foodType: [string];
  foods: [];
};

export const columns: ColumnDef<vendor>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "ownerName",
    header: "Owner Name",
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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "salt",
    header: "Salt",
  },
  {
    accessorKey: "serviceAvailable",
    header: "Service Available",
  },
  {
    accessorKey: "coverImage",
    header: "coverIamge",
  },
  {
    accessorKey: "rating",
    header: "Rating",
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
  return isSuccess ? (
    <MainTable data={api.data} columns={columns} />
  ) : (
    <div>Noting</div>
  );
}

function App() {
  return (
    <ApiProvider api={adminApi}>
      <Table />
    </ApiProvider>
  );
}

export default App;

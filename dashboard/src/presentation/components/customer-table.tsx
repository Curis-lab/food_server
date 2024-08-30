import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableHeader } from "./ui";


interface Customer{
  email:string;
  password:string;
  salt:string;
  firstName:string;
  lastName:string;
  address:string;
  phone:string;
  verified:boolean;
  otp:number;
  otp_expiry:number;
  lat:number;
  lng:number;
  // orders:[OrderDoc]
}

function CustomerTable() {
  const columns:any = {}
  const data:any = {}
  const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})
  return <div className="mx-10">
    <h1 className="text-2xl font-bold my-3">Customer Table</h1>
    <Table>
      <TableHeader>
      </TableHeader>
    </Table>
  </div>;
}

export default CustomerTable;

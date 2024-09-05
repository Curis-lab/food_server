import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui";
import { useGetCustomersQuery } from "@/infrastructure/api/customer-slice";
import { getCommonPinningStyles } from "@/lib/data-table";

interface CustomerTableProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  verified: boolean;
  otpStatus: "Active" | "Expired";
  location: number;
  totalOrders: number;
}
export const customerColumns: ColumnDef<CustomerTableProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span>{row.original.name}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <span>{row.original.email}</span>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <span>{row.original.phone}</span>,
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => <span>{row.original.address}</span>,
  },
  {
    accessorKey: "verified",
    header: "Verified",
    cell: ({ row }) => <span>{row.original.verified ? "✔️" : "❌"}</span>,
  },
  {
    accessorKey: "otpStatus",
    header: "OTP Status",
    cell: ({ row }) => (
      <span
        className={`${
          row.original.otpStatus === "Active"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {row.original.otpStatus}
      </span>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <span>{row.original.location}</span>,
  },
  {
    accessorKey: "totalOrders",
    header: "Total Orders",
    cell: ({ row }) => <span>{row.original.totalOrders}</span>,
  },
];


function CustomerTable() {
  const { data: customersData = [] } = useGetCustomersQuery();

  const customer_data: CustomerTableProps[] = customersData.map(
    ({ firstName, lastName, email, phone, address , verified}) => ({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      address,
      verified,
      otpStatus: "Active",
      location: 12,
      totalOrders: 12,
    })
  );

  const table = useReactTable({
    data: customer_data,
    columns: customerColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="mx-10">
      <h1 className="text-2xl font-bold my-3">Customer Table</h1>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{
                      ...getCommonPinningStyles({ column: header.column }),
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{
                      ...getCommonPinningStyles({ column: cell.column }),
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={customerColumns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default CustomerTable;

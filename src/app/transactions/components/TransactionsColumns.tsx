
import { ColumnDef } from "@tanstack/react-table";
import { Transaction } from "../../../../api/models/transactions";
import { DataTableColumnHeader } from "@/components/datatable/DataTableColumnHeader";


export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "accountId", 
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account ID" isSortable />),
  },
  {
    accessorKey: "amount.stringValue",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" isSortable />),
    cell: ({ row }) => `${row.original.amount.stringValue} ${row.original.amount.currency}`,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" isSortable />),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" isSortable />),
    cell: ({ row }) => new Date(row.original.date).toLocaleDateString(),
  },
  {
    accessorKey: "returned",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Returned" isSortable />),
    cell: ({ row }) => (row.original.returned ? "Yes" : "No"),
  },
];

"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/datatable/DataTableColumnHeader";
import { Account } from "../../../../api/models/accounts";
import AccountRowAction from "./AccountRowAction";


export const AccountColumns: ColumnDef<Account>[] = [
    {
      accessorKey: "created",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Created" isSortable />
      ),
      cell: ({ row }) => new Date(row.original.created).toLocaleDateString(),
    },
    {
      accessorKey: "currency",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Currency" isSortable />
      ),
    },
    {
      accessorKey: "market",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Market" isSortable />
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" isSortable />
      ),
    },
    {
      accessorKey: "updated",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Updated" isSortable />
      ),
      cell: ({ row }) => new Date(row.original.updated).toLocaleDateString(),
    },
    {
      accessorKey: "identifiers",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Identifiers" isSortable />
      ),
      cell: ({ row }) =>
        row.original.identifiers
          .map((id) => `${id.type}: ${id.number} (${id.invalid ? "Invalid" : "Valid"})`)
          .join(", "),
    },
    {
      accessorKey: "routing",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Routing" isSortable />
      ),
      cell: ({ row }) =>
        row.original.routing
          .map((route) => `${route.type}: ${route.number}`)
          .join(", "),
    },
    {
        id: "action",
        cell: ({ row }) => <AccountRowAction account={row.original} />,
      },
  ];  

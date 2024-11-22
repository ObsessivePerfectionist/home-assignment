"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/datatable/DataTableColumnHeader";
import { Account } from "../../../../api/models/accounts";


export const AccountBalancesColumns: ColumnDef<Account>[] = [
    {
      accessorKey: "accountId",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Account Id" isSortable />
      ),
    },
    {
      accessorKey: "currency",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Currency" isSortable />
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amount" isSortable />
      ),
    },
  ];  

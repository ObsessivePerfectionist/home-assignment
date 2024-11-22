import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Account } from "../../../../api/models/accounts";
import { listBalance } from "../../../../api/actions/account";

interface AccountRowActionProps {
  account: Account;
}

export default function AccountRowAction({
  account: account,
}: AccountRowActionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  
  // Scrapped this an it does not work but row action buttons could be used
  // Right now it shows all 
  async function checkBalance() {
    const balance = await listBalance(account.id);
  }

  const handleOpenChange = (isOpen: boolean) => {
    isOpen ? setIsEditing(false) : null;
    setOpen(isOpen);
  };

  return (
    <div>
      <DropdownMenu open={open} onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={async () => checkBalance()}>
            Check Balance
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

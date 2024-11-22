"use client";

import { useEffect, useState } from "react";
import { Account } from "../../../api/models/accounts";
import { DataTable } from "@/components/datatable/DataTable";
import { AccountColumns } from "./components/AccountColumns";

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true);
        
        const response = await fetch("https://api.atlar.com/financial-data/v2/accounts"
          , {
          method: "GET",
          headers: {
            "Authorization": "Basic " + btoa('AvahI5yjCWUV43vu67Ka:oRpiDBaluISG0aSGhu8a_5_WQ3x0oNb9Ggr51G--TgJ7wSQb5k9LxkpLE3BMWAhf20ei'),
          },
        });
        const data = await response.json();
        setAccounts(data.items);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Accounts Page</h1>
      <DataTable 
        columns={AccountColumns} 
        data={accounts} 
        searchPlaceholder="Search Transactions..."
        pagination={true}/>
    </div>
  );
}

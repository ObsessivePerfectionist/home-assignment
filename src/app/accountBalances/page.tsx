"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/components/datatable/DataTable";
import { AccountBalancesColumns } from "./components/AccountBalancesColumns";

const listAccountURL = "https://api.atlar.com/financial-data/v2/accounts";

export default function AccountsPage() {
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccountsAndBalances = async () => {
      try {
        setLoading(true);

        const accountsResponse = await fetch(listAccountURL, {
          method: "GET",
          headers: {
            "Authorization": "Basic " + btoa('AvahI5yjCWUV43vu67Ka:oRpiDBaluISG0aSGhu8a_5_WQ3x0oNb9Ggr51G--TgJ7wSQb5k9LxkpLE3BMWAhf20ei'),
          },
        });

        if (!accountsResponse.ok) {
          throw new Error("Failed to fetch accounts");
        }

        const accountsData = await accountsResponse.json();
        const accounts = accountsData.items;

        // Fetch balances for each account and flatten the data
        const fetchBalancesPromises = accounts.map(async (account: any) => {
          const balancesResponse = await fetch(
            `${listAccountURL}/${account.id}/balances`,
            {
              method: "GET",
              headers: {
                "Authorization": "Basic " + btoa('AvahI5yjCWUV43vu67Ka:oRpiDBaluISG0aSGhu8a_5_WQ3x0oNb9Ggr51G--TgJ7wSQb5k9LxkpLE3BMWAhf20ei'),
              },
            }
          );

          if (!balancesResponse.ok) {
            throw new Error(`Failed to fetch balances for account ID: ${account.id}`);
          }

          const balancesData = await balancesResponse.json();

          const flattenedBalances = balancesData.items.map((balance: any) => ({
            accountId: account.id,
            currency: balance.amount.currency,
            amount: balance.amount.value,
          }));

          return flattenedBalances;
        });

        const allData = (await Promise.all(fetchBalancesPromises)).flat();

        const uniqueData = Array.from(
          new Map(
            allData.map((item) => [
              `${item.accountId}-${item.currency}-${item.amount}`,
              item,
            ])
          ).values()
        );

        setTableData(uniqueData);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAccountsAndBalances();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Accounts Page</h1>
      <DataTable
        columns={AccountBalancesColumns}
        data={tableData}
        searchPlaceholder="Search Accounts..."
        pagination={true}
      />
    </div>
  );
}

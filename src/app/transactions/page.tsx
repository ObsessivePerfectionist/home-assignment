"use client";

import React, { useEffect, useState } from 'react';
import { Transaction } from '../../../api/models/transactions';
import { DataTable } from '@/components/datatable/DataTable';
import { columns } from './components/TransactionsColumns';

const App = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.atlar.com/financial-data/v2/transactions', {
          method: 'GET',
          headers: {
            'Authorization': 'Basic ' + btoa('AvahI5yjCWUV43vu67Ka:oRpiDBaluISG0aSGhu8a_5_WQ3x0oNb9Ggr51G--TgJ7wSQb5k9LxkpLE3BMWAhf20ei'),
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }


        const data = await response.json();
        setTransactions(data.items);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Transaction Page</h1>
      <DataTable
        columns={columns}
        data={transactions}
        searchPlaceholder="Search Transactions..."
        pagination={true}
      />
    </div>
  );
};

export default App;
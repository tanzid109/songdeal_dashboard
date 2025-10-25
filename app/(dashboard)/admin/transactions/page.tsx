import Transaction from '@/dashboard/transactions/Transactions';
import TransactionTable from '@/dashboard/transactions/TransactionsTable';
import React from 'react';

const page = () => {
    return (
        <div>
            <Transaction />
            <TransactionTable />
        </div>
    );
};

export default page;
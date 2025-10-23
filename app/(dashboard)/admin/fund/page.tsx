import Withdrawal from '@/dashboard/fund/Withdrawl';
import WithdrawalTable from '@/dashboard/fund/WithdrawTable';
import React from 'react';

const page = () => {
    return (
        <div>
            <Withdrawal />
            <WithdrawalTable/>
        </div>
    );
};

export default page;
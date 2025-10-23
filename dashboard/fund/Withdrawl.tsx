import React from 'react';
import { Check, AlertCircle, CreditCard } from 'lucide-react';

export default function Withdrawal() {
    return (
        <div className=" bg-gray-50 p-2 md:p-4">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='flex flex-col items-center justify-center p-10 bg-white rounded-xl shadow-sm'>
                    <h3 className='text-base'>Total User</h3>
                    <h2 className='text-2xl font-bold'>45,586</h2>
                </div>
                <div className='flex flex-col items-center justify-center p-10 bg-white rounded-xl shadow-sm'>
                    <h3 className='text-base'>Total User</h3>
                    <h2 className='text-2xl font-bold'>45,586</h2>
                </div>
                <div className='flex flex-col items-center justify-center p-10 bg-white rounded-xl shadow-sm'>
                    <h3 className='text-base'>Total User</h3>
                    <h2 className='text-2xl font-bold'>45,586</h2>
                </div>
            </div>
            <div className=" mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                            Withdrawal
                        </h1>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Request a withdrawal from your<br />
                            available balance. Minimum withdrawal<br />
                            amount is $100.
                        </p>
                    </div>

                    <button className="w-full md:w-auto bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5">
                        Request Withdrawal
                    </button>
                </div>

                {/* Status Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Card 1 */}
                    <div className="bg-indigo-50/50 rounded-xl p-7 flex items-center md:items-start gap-5 hover:-translate-y-1 transition-transform duration-200">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                            <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                                Payout Details Submitted
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Your request is being processed.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-indigo-50/50 rounded-xl p-7 flex items-center md:items-start gap-5 hover:-translate-y-1 transition-transform duration-200">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                            <AlertCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                                Admin Review
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Your withdrawal is under manual review.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-indigo-50/50 rounded-xl p-7 flex items-center md:items-start gap-5 hover:-translate-y-1 transition-transform duration-200">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                                Paid
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Awaiting approval.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
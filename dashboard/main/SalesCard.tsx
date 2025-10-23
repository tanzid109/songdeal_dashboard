import React from 'react';

const SalesCard = () => {
    return (
        <main className="p-5 rounded-lg border-0 shadow-lg bg-white">
            <div className="">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Sales Overview</h3>
                <p className="text-sm text-slate-500 mb-8">Last 7 days</p>

                <div className="relative mx-auto">
                    <svg className="h-25 transform -rotate-90" viewBox="0 0 200 200">
                        <circle
                            cx="100"
                            cy="100"
                            r="80"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="24"
                        />
                        <circle
                            cx="100"
                            cy="100"
                            r="80"
                            fill="none"
                            stroke="rgb(6, 182, 212)"
                            strokeWidth="24"
                            strokeDasharray="502"
                            strokeDashoffset="125"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="100"
                            cy="100"
                            r="80"
                            fill="none"
                            stroke="rgb(236, 72, 153)"
                            strokeWidth="24"
                            strokeDasharray="502"
                            strokeDashoffset="0"
                            strokeLinecap="round"
                            style={{ strokeDashoffset: 125 + 377 }}
                        />
                        <circle
                            cx="100"
                            cy="100"
                            r="80"
                            fill="none"
                            stroke="rgb(99, 102, 241)"
                            strokeWidth="24"
                            strokeDasharray="502"
                            strokeDashoffset="0"
                            strokeLinecap="round"
                            style={{ strokeDashoffset: 125 + 377 + 75 }}
                        />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-slate-900">254</p>
                            <p className="text-xs text-slate-500 mt-1">Total Sales</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6 text-center">
                    <div>
                        <div className="w-3 h-3 rounded-full bg-cyan-500 mx-auto mb-1"></div>
                        <p className="text-xs font-semibold text-slate-600">75%</p>
                    </div>
                    <div>
                        <div className="w-3 h-3 rounded-full bg-pink-500 mx-auto mb-1"></div>
                        <p className="text-xs font-semibold text-slate-600">15%</p>
                    </div>
                    <div>
                        <div className="w-3 h-3 rounded-full bg-indigo-500 mx-auto mb-1"></div>
                        <p className="text-xs font-semibold text-slate-600">0%</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SalesCard;
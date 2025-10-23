import React from 'react';

const CustomerCard = () => {
    return (
        <main className="rounded-lg bg-gradient-to-br from-cyan-50 to-cyan-100 border-0 shadow-lg overflow-hidden relative p-5">
            <div>
                <p className="text-cyan-700 text-sm font-semibold mb-3">Customers</p>
                <div className="flex items-baseline gap-3 mb-6">
                    <p className="text-4xl font-bold text-cyan-900">58,558</p>
                    <span className="text-red-600 text-lg font-semibold">-56%</span>
                </div>

                {/* Wave Chart */}
                <svg className="w-full h-24 mt-4" viewBox="0 0 240 80" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,50 Q20,30 40,35 T80,40 Q100,35 120,45 T160,50 Q180,45 200,40 T240,45 L240,80 L0,80 Z"
                        fill="url(#gradient1)"
                        stroke="rgb(6, 182, 212)"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </main>
    );
};

export default CustomerCard;
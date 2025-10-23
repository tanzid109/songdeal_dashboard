import { TrendingUp } from 'lucide-react';
import React from 'react';

const WelcomeCard = () => {
    return (
        <main className="p-5 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 border-0 shadow-xl h-full">
                <main>
                    <div className="flex items-start gap-4">
                        <div className="bg-white rounded-2xl p-4 shadow-lg">
                            <TrendingUp className="w-8 h-8 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-white mb-1">Welcome Back</h1>
                            <p className="text-2xl font-semibold text-indigo-100">David</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-8">
                        <div>
                            <p className="text-indigo-200 text-sm font-medium mb-2">Total Funds Raised</p>
                            <p className="text-4xl font-bold text-white mb-1">$66,816</p>
                            <p className="text-emerald-300 text-sm font-medium">+21% this month</p>
                        </div>
                        <div>
                            <p className="text-indigo-200 text-sm font-medium mb-2">Active Investors</p>
                            <p className="text-4xl font-bold text-white mb-1">1.2M</p>
                            <p className="text-emerald-300 text-sm font-medium">+5% this month</p>
                        </div>
                    </div>
                </main>
            </main>
    );
};

export default WelcomeCard;
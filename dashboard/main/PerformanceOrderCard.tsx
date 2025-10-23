import { Link2, Package, ShoppingBag } from 'lucide-react';
import React from 'react';

const PerformanceOrderCard = () => {
    return (
        <main className="p-5 rounded-lg border-0 shadow-lg bg-white" >
            <div className="">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Your Performance</h3>
                <p className="text-sm text-slate-500 mb-6">Last check on 25 february</p>

                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-100 rounded-xl p-3">
                            <ShoppingBag className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-slate-900">64 new orders</p>
                            <p className="text-sm text-slate-500">Processing</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-pink-100 rounded-xl p-3">
                            <Link2 className="w-5 h-5 text-pink-600" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-slate-900">4 orders</p>
                            <p className="text-sm text-slate-500">On hold</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-cyan-100 rounded-xl p-3">
                            <Package className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-slate-900">12 orders</p>
                            <p className="text-sm text-slate-500">Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default PerformanceOrderCard;
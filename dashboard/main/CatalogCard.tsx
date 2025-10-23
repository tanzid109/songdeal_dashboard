import React from 'react';

const CatalogCard = () => {
    return (
        <main className="rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 border-0 shadow-lg p-5">
            <div>
                <p className="text-pink-700 text-sm font-semibold mb-3">Total Catalogs</p>
                <div className="flex items-baseline gap-3 mb-6">
                    <p className="text-4xl font-bold text-pink-900">38,618</p>
                    <span className="text-emerald-600 text-lg font-semibold">+15%</span>
                </div>

                {/* Bar Chart */}
                <div className="flex items-end justify-between h-24 gap-2 mt-4">
                    {[35, 60, 45, 70, 85, 55, 75, 50, 65, 80, 45, 70].map((height, i) => (
                        <div
                            key={i}
                            className="flex-1 bg-white rounded-t-sm transition-all hover:bg-pink-200"
                            style={{ height: `${height}%` }}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default CatalogCard;
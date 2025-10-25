import React from 'react';

export const StatCard = ({ title, value, icon }: { title: string; value: number; icon: string }) => {
    return (
        <div className="bg-white rounded-lg shadow p-10 flex items-center justify-between">
            <div>
                <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
                <p className="text-2xl font-bold">{value.toLocaleString()}</p>
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xl">{icon}</span>
            </div>
        </div>
    );
};
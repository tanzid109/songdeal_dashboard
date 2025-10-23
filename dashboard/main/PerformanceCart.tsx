"use client";
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Layers } from "lucide-react";

const data = [
    { month: "Jan", followers: 550, plays: 220 },
    { month: "Feb", followers: 220, plays: 230 },
    { month: "Mar", followers: 280, plays: 350 },
    { month: "Apr", followers: 340, plays: 380 },
    { month: "May", followers: 300, plays: 400 },
    { month: "Jun", followers: 320, plays: 510 },
    { month: "Jul", followers: 300, plays: 450 },
    { month: "Aug", followers: 280, plays: 310 },
    { month: "Sep", followers: 240, plays: 370 },
    { month: "Oct", followers: 180, plays: 280 },
    { month: "Nov", followers: 220, plays: 420 },
    { month: "Dec", followers: 190, plays: 460 },
];

export default function PerformanceChart() {
    return (
        <div className="rounded-lg bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
            <div className="w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                            <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Performance Chart
                            </h1>
                            <p className="text-sm sm:text-base text-gray-500">Monthly Growth</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Followers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Plays</span>
                        </div>
                    </div>
                </div>

                {/* Chart */}
                <div className="w-full h-84">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.05} />
                                </linearGradient>
                                <linearGradient id="colorPlays" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.05} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                            <XAxis
                                dataKey="month"
                                stroke="#9ca3af"
                                style={{ fontSize: "12px" }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                stroke="#9ca3af"
                                style={{ fontSize: "12px" }}
                                axisLine={false}
                                tickLine={false}
                                domain={[0, 600]}
                                ticks={[0, 100, 200, 300, 400, 500, 600]}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "white",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="followers"
                                stroke="#6366f1"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorFollowers)"
                            />
                            <Area
                                type="monotone"
                                dataKey="plays"
                                stroke="#06b6d4"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorPlays)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

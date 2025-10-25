"use client";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Left Info Panel */}
                    <div className="bg-white rounded-2xl shadow-sm p-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
                        <p className="text-sm text-gray-500 mb-8">Overview of Latest Month</p>

                        <div className="mb-8">
                            <p className="text-sm text-gray-600 mb-2">User Growth</p>
                            <p className="text-4xl font-bold text-emerald-500">+15%</p>
                        </div>

                        <button className="w-full px-6 py-3 border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                            Last Month Summary
                        </button>
                    </div>

                    {/* Chart Panel */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
                        <div className="w-full h-96">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    data={data}
                                    margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0.05} />
                                        </linearGradient>
                                        <linearGradient id="colorPlays" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.05} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid
                                        strokeDasharray="5 5"
                                        stroke="#e0e0e0"
                                        horizontal={true}
                                        vertical={false}
                                    />
                                    <XAxis
                                        dataKey="month"
                                        stroke="#9ca3af"
                                        style={{ fontSize: "13px", fontWeight: "500" }}
                                        axisLine={false}
                                        tickLine={false}
                                        dy={10}
                                    />
                                    <YAxis
                                        stroke="#9ca3af"
                                        style={{ fontSize: "13px", fontWeight: "500" }}
                                        axisLine={false}
                                        tickLine={false}
                                        domain={[0, 600]}
                                        ticks={[0, 100, 200, 300, 400, 500, 600]}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "white",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "12px",
                                            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                                            padding: "12px",
                                        }}
                                        labelStyle={{
                                            color: "#374151",
                                            fontWeight: "600",
                                            marginBottom: "4px"
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
            </div>
        </div>
    );
}
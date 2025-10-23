"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type User = {
    id: string;
    photo?: string;
    userId: number;
    catalog?: string;
    email: string;
    date?: string;
    time?: string;
    artist?: string;
    genre?: string;
    roi?: number;
    status: "live" | "pending";
};

interface CatalogViewProps {
    user: User;
    onClose: () => void;
}

export default function CatalogView({ user, onClose }: CatalogViewProps) {
    return (
        <div className="fixed inset-0 bg-[#08080852] backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl relative">
                {/* Close Button */}
                <Button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-transparent hover:bg-gray-200 text-gray-600 p-1"
                >
                    <X className="w-5 h-5" />
                </Button>

                {/* Modal Header */}
                <h2 className="text-xl font-semibold text-[#2D2D2D] mb-4 text-center md:text-left p-2">
                    Investors
                </h2>

                {/* Modal Content */}
                <div className="overflow-auto max-h-[70vh] p-2">
                    {/* Header Row */}
                    <div className="hidden md:grid grid-cols-3 gap-4 text-center bg-gray-100 p-2 rounded-t-lg font-semibold">
                        <div>Catalog Title</div>
                        <div>Date</div>
                        <div>Status</div>
                    </div>

                    {/* Content Row */}
                    <div className="border-t border-gray-200">
                        <div className="grid md:grid-cols-3 gap-4 text-center md:text-center py-2 items-center">
                            {/* Catalog Title with Image */}
                            <div className="flex md:justify-center items-center gap-2 text-left md:text-center">
                                <Image
                                    src={user.photo ?? "/assets/user.jpg"}
                                    alt={user.artist ?? "user"}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-sm font-medium text-[#2D2D2D] truncate max-w-[120px] md:max-w-full">
                                    {user.catalog}
                                </span>
                            </div>

                            {/* Date */}
                            <div className="text-sm text-gray-600 mt-1 md:mt-0">
                                {user.date}
                            </div>

                            {/* Status */}
                            <div className="mt-1 md:mt-0">
                                <span
                                    className={`px-2 py-1 rounded-md text-sm font-normal ${user.status === "live"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {user.status === "live" ? "Confirmed" : "Pending"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

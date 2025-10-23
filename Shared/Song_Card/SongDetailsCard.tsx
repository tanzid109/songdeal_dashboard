"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Facebook, Instagram, Linkedin, MailIcon, Phone, PlayIcon, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import InvestModal from "./InvestCard";

const data = [
    { month: "Jan", revenue: 300 },
    { month: "Feb", revenue: 500 },
    { month: "Mar", revenue: 700 },
    { month: "Apr", revenue: 1000 },
    { month: "May", revenue: 600 },
    { month: "Jun", revenue: 400 },
    { month: "Jul", revenue: 500 },
];

export default function SongDetailsCard() {
    return (
        <main className="w-full max-w-7xl mx-auto">
            <div className="p-6">
                <h3 className="text-3xl font-semibold">Midnight Bloom</h3>
                <p className="text-muted-foreground">By Aurelia Vance</p>
            </div>
            <div className=" p-6 grid lg:grid-cols-3 gap-8">
                {/* Left Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Music Player */}
                    <Card className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/assets/image1.jpg"
                                    alt="Song cover"
                                    width={70}
                                    height={70}
                                    className="rounded-md object-cover"
                                />
                                <div>
                                    <p className="font-medium">Midnight Bloom</p>
                                    <p className="text-sm text-muted-foreground">Aurelia Vance</p>
                                </div>
                            </div>
                            <Button
                                size="icon"
                                className="rounded-full bg-indigo-500 hover:bg-indigo-600"
                            >
                                <PlayIcon className="size-5 fill-accent" />
                            </Button>
                        </div>

                        <div className="mt-4">
                            <Slider defaultValue={[30]} className="text-indigo-500" />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>1:17</span>
                                <span>3:45</span>
                            </div>
                        </div>
                    </Card>

                    {/* Description */}
                    <Card className="px-6 ">
                        <div>
                            <h3 className="font-semibold mb-2">Description</h3>
                            <p className="text-sm text-muted-foreground">
                                &quot;Midnight Bloom&quot; is an ethereal pop anthem that captures the feeling of a city
                                coming alive after dark. With its pulsating synth lines and soaring vocals,
                                the track has strong potential for sync licensing in film, television, and advertising.
                            </p>
                        </div>
                        {/* genre */}
                        <div className="lg:grid lg:grid-cols-2 flex justify-between border-t border-b lg:gap-3 text-sm">
                            <div className="p-4">
                                <p className="font-medium">Genre</p>
                                <p className="text-muted-foreground">Pop</p>
                            </div>
                            <div className="md:border-l p-4">
                                <p className="font-medium">Region</p>
                                <p className="text-muted-foreground">North America</p>
                            </div>
                        </div>
                        {/* valuation */}
                        <div className="">
                            <p className="font-medium">Valuation</p>
                            <p className="text-indigo-600 font-semibold">$100,000</p>
                        </div>

                        {/* Artist Links */}
                        <div className="pt-4 border-t">
                            <p className="font-medium mb-2">Artist Links</p>
                            <div className="flex gap-3">
                                <Link href="#"><Linkedin className="text-[#635BFF]" /></Link>
                                <Link href="#"><X className="text-[#635BFF]" /></Link>
                                <Link href="#"><Phone className="text-[#635BFF]" /></Link>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-4 border-t">
                            <p className="font-medium mb-2">Social media</p>
                            <div className="flex gap-3">
                                <Link href="#"><Youtube className="text-[#635BFF]" /></Link>
                                <Link href="#"><Facebook className="text-[#635BFF]" /></Link>
                                <Link href="#"><Instagram className="text-[#635BFF]" /></Link>
                            </div>
                        </div>
                    </Card>

                    {/* Performance Analytics */}
                    <Card className="p-6">
                        <h3 className="font-semibold mb-4">Performance Analytics</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                            Streaming Revenue (placeholder)
                        </p>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="revenue" fill="#6366f1" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </div>

                {/* Right Section */}
                <div className="space-y-6">
                    {/* investment */}
                    <Card className="px-4">
                        <h3 className="font-semibold ">Investment</h3>
                        <div className="flex justify-between text-sm border-b pb-3">
                            <p className="text-muted-foreground">Type</p>
                            <p>Sale</p>
                        </div>
                        <div className="flex justify-between text-sm ">
                            <p className="text-muted-foreground">Shares</p>
                            <p>50%</p>
                        </div>
                    </Card>

                    <div className="flex flex-col gap-3">
                        <InvestModal />
                        <Button>
                            Follow
                        </Button>
                        <Button variant="secondary">
                            <MailIcon className="size-5" />Contact Artist
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

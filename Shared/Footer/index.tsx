"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0D067D] text-white pt-16 pb-8 px-6 md:px-12">
            <div className="lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
                {/* Left Section */}
                <div className="flex flex-col items-start">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col justify-center items-center gap-1 lg:gap-0">
                        <Image src="/assets/logo.png"
                            alt="SongDeal Logo"
                            width={60}
                            height={40}
                            className="h-auto w-auto" />
                        <div className="flex flex-col lg:justify-center lg:items-center">
                            <h1 className="text-xl font-semibold text-[#5B3FFF]">SongDeal</h1>
                            <p className="text-[8px] text-gray-500 tracking-normal">
                                TURNING SONGS INTO ASSETS
                            </p>
                        </div>
                    </Link>
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed max-w-xs">
                        A revolutionary marketplace for music royalties, connecting artists and investors.
                    </p>

                    <p className="text-sm font-semibold mb-3 text-white">CONTACT</p>
                    <div className="flex space-x-3">
                        <Link
                            href="#"
                            className="bg-[#1B127D] p-2 rounded-full hover:bg-[#2A1FB3] transition"
                        >
                            <Facebook className="h-5 w-5 text-white" />
                        </Link>
                        <Link
                            href="#"
                            className="bg-[#1B127D] p-2 rounded-full hover:bg-[#2A1FB3] transition"
                        >
                            <Instagram className="h-5 w-5 text-white" />
                        </Link>
                    </div>
                </div>

                {/* Platform Links */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">Platform</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link href="#">Market Place</Link></li>
                        <li><Link href="#">For Artists</Link></li>
                        <li><Link href="#">For Investors</Link></li>
                        <li><Link href="#">How It Works</Link></li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">Company & Legal</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Terms of Service</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <form className="flex flex-col sm:flex-row items-center justify-center sm:items-stretch gap-3">
                        <Input
                            placeholder="Your email address"
                            className=" w-full bg-[#04004E]  border border-[#443FA1] text-white placeholder-gray-400 focus-visible:ring-[#5B3FFF] p-[24px]"
                        />
                        <Button className="bg-gradient-to-r from-[#6C4CFF] to-[#5B3FFF] text-white px-6 hover:opacity-90 w-full lg:w-auto">
                            Join Now
                        </Button>
                    </form>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="border-t border-[#2A1FB3] mt-10 pt-6 text-center text-sm text-gray-400">
                Copyright © <span className="text-white font-semibold">SongDeal.</span>{" "}
                {new Date().getFullYear()}. All rights reserved.
            </div>
        </footer>
    );
}

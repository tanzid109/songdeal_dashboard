"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import RoleSelectionModal from "@/auth/register/RoleSelectionModal";

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Marketplace", href: "/marketplace" },
        { name: "About", href: "/about" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    return (
        <header className="md:sticky md:top-0 md:z-50 backdrop-blur-lg w-full border-b ">
            <div className="lg:px-20 lg:py-2 mx-auto flex items-center justify-between py-1 px-2 shadow-md">
                {/* Logo */}
                <Link href="/" className="flex lg:flex-col justify-center items-center gap-1 lg:gap-0">
                    <Image src="/assets/logo.png" alt="SongDeal Logo" width={60} height={40} className="h-auto w-auto" />
                    <div className="flex flex-col lg:justify-center lg:items-center">
                        <h1 className="text-xl font-semibold text-[#5B3FFF]">SongDeal</h1>
                        <p className="text-[8px] text-gray-500 tracking-normal">
                            TURNING SONGS INTO ASSETS
                        </p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="">
                    <NavigationMenu className="hidden  md:flex">
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <NavigationMenuLink asChild active={pathname === link.href}>
                                        <Link href={link.href}>
                                            {link.name}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex space-x-3">
                    <Link href={"/login"}>
                        <Button variant="secondary">
                            Sign in
                        </Button>
                    </Link>
                    <Button variant="default"
                        onClick={() => setIsModalOpen(true)}>
                        Get started
                    </Button>

                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-auto p-5 bg-white">
                        <SheetTitle>
                            <nav className="flex flex-col space-y-3 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`font-medium ${pathname === link.href
                                            ? "text-[#5B3FFF] font-bold"
                                            : "text-gray-800"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-2.5 ">
                                    <Link href={"/login"}>
                                        <Button variant="secondary" size="sm" className="w-full font-semibold text-sm">
                                            Sign in
                                        </Button>
                                    </Link>
                                    <Link href="/register">
                                        <Button variant="default" size="sm" className="w-full font-semibold text-sm"
                                            onClick={() => setIsModalOpen(true)}>
                                            Get started
                                        </Button>
                                    </Link>
                                </div>
                            </nav>
                        </SheetTitle>
                        <SheetDescription/>
                    </SheetContent>
                </Sheet>
            </div>
            <RoleSelectionModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </header>
    );
}
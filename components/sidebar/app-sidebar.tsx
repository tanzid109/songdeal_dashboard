"use client"

import * as React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./team-switcher"
import { NavMain } from "./nav-main"
import { usePathname } from "next/navigation"
import { TbLayoutDashboardFilled, TbCards, TbCurrencyDollar, TbSettings, TbMusic, TbUsersGroup } from "react-icons/tb";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/assets/user.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/admin",
            icon: TbLayoutDashboardFilled,
        },
        {
            title: "Artist Management",
            url: "/admin/artist_management",
            icon: TbMusic,
        },
        {
            title: "Investor Management",
            url: "/admin/investor_management",
            icon: TbUsersGroup,
        },
        {
            title: "Catalog Management",
            url: "/admin/catalog_management",
            icon: TbCards,
        },
        {
            title: "Transactions",
            url: "/admin/transactions",
            icon: TbCurrencyDollar,
        },
        {
            title: "Settings",
            url: "/admin/settings",
            icon: TbSettings,
            items: [
                {
                    title: "Basic",
                    url: "/admin/settings/basic",
                },
                {
                    title: "Change Password",
                    url: "/admin/settings/changepassword",
                },
                {
                    title: "Notification",
                    url: "/admin/settings/notification",
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    // Add `isActive` based on current path for main nav
    const navItems = data.navMain.map((item) => ({
        ...item,
        isActive: pathname === item.url,
    }))


    return (
        <Sidebar className="bg-white" {...props}>
            <SidebarHeader className="bg-white">
                <TeamSwitcher />
            </SidebarHeader>
            <SidebarContent className="bg-white ">
                <NavMain items={navItems} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
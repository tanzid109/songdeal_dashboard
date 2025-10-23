import * as React from "react"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

export function TeamSwitcher() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <Link href="/">
                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        {/* Wrap image in a relative container */}
                        <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                                sizes="40px"
                            />
                        </div>

                        <div className="grid flex-1 text-left leading-tight">
                            <p
                                className={`tracking-tighter text-[32px] font-bold text-[#635BFF]`}
                            >
                                SongDeal
                            </p>
                        </div>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

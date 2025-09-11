"use client";
import React from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup,
    SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton,
    SidebarMenuItem, Separator
} from '../../shared';
import { dashboardItemsProps } from "../../interface/dashboard";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const DashboardSidebar = () => {
    const dashboardItems: dashboardItemsProps[] = [
        { label: 'Meetings', icon: VideoIcon, href: '/meetings' },
        { label: 'Agents', icon: BotIcon, href: '/agents' },
        { label: 'Upgrade', icon: StarIcon, href: '/upgrade' },
    ];
  return (
    <Sidebar>
        <SidebarHeader className="text-sidebar-accent-foreground">
            <Link href='/' className="flex items-center gap-2 px-2 pt-2">
                <div className="w-9 h-9 relative">
                    <Image alt="meet_ai" fill src='/svgs/logo.svg' priority />
                </div>
                <p className="text-2xl font-semibold">Meet.AI</p>
            </Link>
        </SidebarHeader>
        <div className="px-4 py-2">
            <Separator className="opacity-10 text-[#5D6B68]" />
            <p className="text-sm text-muted-foreground">Dashboard</p>
        </div>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {dashboardItems.slice(0, 2).map((item: dashboardItemsProps, index: number) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton>
                                    <Link href={item.href} className="flex items-center gap-2">
                                        <item.icon className="size-5" />
                                        <span className="text-sm font-medium tracking-tight">
                                            {item.label}
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-center">
            &copy; {new Date().getFullYear()} Meet AI
        </SidebarFooter>
    </Sidebar>
  )
}

export default DashboardSidebar
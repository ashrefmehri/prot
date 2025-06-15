"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { VideoIcon, StarIcon, BotIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboard-user-button";

const firstSection = [
  {
    icon: VideoIcon,
    label: "Meetings",
    href: "/",
  },
  {
    icon: BotIcon,
    label: "Agents",
    href: "/agents",
  },
];

const secondSection = [
  {
    icon: StarIcon,
    label: "Upgrade",
    href: "/upgrade",
  },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="px-2 pt-2">
          <Image src="/logo.svg" alt="Logo" width={130} height={50} />
        </Link>
        <div className=" px-4 py-2">
          <Separator />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent>
          <SidebarMenu className="px-2 ">
            {firstSection.map((item) => (
              <SidebarMenuItem key={item.href} className="">
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "h-10 hover:text-primary",
                    pathname === item.href && "bg-muted text-primary"
                  )}
                >
                  <Link href={item.href} className="">
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
        <div className=" px-4 py-2">
          <Separator />
        </div>
        <SidebarGroupContent>
          <SidebarMenu className="px-2 ">
            {secondSection.map((item) => (
              <SidebarMenuItem key={item.href} className="">
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "h-10 hover:text-primary",
                    pathname === item.href && "bg-muted text-primary"
                  )}
                >
                  <Link href={item.href} className="">
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
      </SidebarContent>
      <SidebarFooter>
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  );
};

import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardNavbar } from "@/modules/dashboard/ui/dashboard-navbar";
import { DashboardSidebar } from "@/modules/dashboard/ui/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
<SidebarProvider>
    <DashboardSidebar/>
<main className="h-screen w-screen flex flex-col bg-muted">
   <DashboardNavbar/>
    {children}
</main>
</SidebarProvider>          
     
     
  );
}
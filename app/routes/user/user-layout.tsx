import { Outlet } from "react-router";
import AppHeader from "~/components/app-header";
import { AppSidebar } from "~/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

const UserLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />

            <SidebarInset className="md:peer-data-[variant=inset]:m-0 md:peer-data-[variant=inset]:rounded-none h-screen overflow-y-hidden">
                <AppHeader className="bg-white sticky top-0 z-10" />

                <div className="flex flex-1 flex-col overflow-y-auto hide-scrollbar">
                    <div className="@container/main flex flex-1 flex-col gap-2 bg-icy-white">
                        <Outlet />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default UserLayout;

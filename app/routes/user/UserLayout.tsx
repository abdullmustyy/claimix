import { Outlet } from "react-router";
import AppHeader from "~/components/AppHeader";
import { AppSidebar } from "~/components/AppSidebar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

const UserLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />

            <SidebarInset className="md:peer-data-[variant=inset]:mt-0">
                <AppHeader />

                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default UserLayout;

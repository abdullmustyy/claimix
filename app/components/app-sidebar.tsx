import { ArrowUpCircleIcon } from "lucide-react";
import { useCallback } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "~/lib/utils";
import AnalyticsIcon from "./icons/analytics-icon";
import AuditLogsIcon from "./icons/audit-logs-icon";
import DashboardIcon from "./icons/dashboard-icon";
import PolicyHoldersIcon from "./icons/policy-holders-icon";
import SettingsIcon from "./icons/settings-icon";
import StaffManagementIcon from "./icons/staff-management-icon";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "./ui/sidebar";

const userNavs = [
    {
        title: "Dashboard",
        to: "/user/dashboard",
        Icon: DashboardIcon,
    },
    {
        title: "Analytics",
        to: "/user/analytics",
        Icon: AnalyticsIcon,
    },
    {
        title: "Policy Holders",
        to: "/user/policy-holders",
        Icon: PolicyHoldersIcon,
    },
    {
        title: "Staff Management",
        to: "/user/staff-management",
        Icon: StaffManagementIcon,
    },
    {
        title: "Audit Logs",
        to: "/user/audit-logs",
        Icon: AuditLogsIcon,
    },
    {
        title: "Settings",
        to: "/user/settings",
        Icon: SettingsIcon,
    },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { openMobile, toggleSidebar } = useSidebar();

    const handleNavClick = useCallback(() => {
        if (openMobile) toggleSidebar();
    }, [openMobile, toggleSidebar]);

    return (
        <Sidebar
            {...props}
            className="p-0 [&_[data-slot='sidebar-inner']]:bg-off-white border-r"
        >
            <SidebarHeader className="p-4 justify-center h-15 border-b border-frost-gray border-dashed">
                <Link to="" onClick={handleNavClick}>
                    <img src="/logo.png" alt="Claimix Logo" />
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="flex flex-col gap-2">
                        <SidebarMenu>
                            {userNavs.map(({ Icon, title, to }) => (
                                <NavLink
                                    key={title}
                                    to={to}
                                    className={({ isActive }) =>
                                        cn({
                                            "[&_[data-slot='sidebar-menu-button']]:bg-white [&_[data-slot='sidebar-menu-button']]:text-black [&_[data-slot='sidebar-menu-button']]:border [&_[data-slot='sidebar-menu-button']]:shadow-[0_1px_3px_0_#0000000D]":
                                                isActive,
                                        })
                                    }
                                    onClick={handleNavClick}
                                >
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            tooltip={title}
                                            className="h-10 cursor-pointer text-slate-blue hover:text-black [&>svg]:size-5 hover:bg-white"
                                        >
                                            <Icon />
                                            <span>{title}</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </NavLink>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

import { Bell, Menu, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useSidebar } from "./ui/sidebar";

const AppHeader = ({ className }: React.ComponentProps<"header">) => {
    const [searchTerm, setSearchTerm] = useState("");
    const { toggleSidebar } = useSidebar();

    return (
        <header
            className={cn(
                "group-has-data-[collapsible=icon]/sidebar-wrapper:h-15 flex h-15 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear",
                className,
            )}
        >
            <div className="flex w-full items-center justify-between px-4 lg:px-6">
                <Link to="" className="md:hidden">
                    <img src="/logo.png" alt="Claimix Logo" />
                </Link>

                <Button
                    size="icon"
                    variant="ghost"
                    className="lg:hidden order-2 ml-auto"
                    onClick={toggleSidebar}
                >
                    <Menu />
                </Button>

                <div className="relative md:block hidden">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-gray" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Jump to or search"
                        className="w-full h-8 rounded-lg pl-8 pr-4 text-sm border shadow-[0_0_0_1px_#00000014] focus-visible:shadow-[0_0_0_1px_#0000001F] focus-visible:outline-none transition-colors text-raven placeholder:text-xs placeholder:text-slate-gray"
                    />
                </div>

                <div className="lg:flex hidden items-center gap-3">
                    <Bell className="size-4 text-iron-gray" />
                    <Separator
                        orientation="vertical"
                        className="data-[orientation=vertical]:h-8"
                    />
                    <div className="flex items-center gap-3">
                        <div className="grid place-content-center size-6 text-xs rounded-full border">
                            <span>K</span>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="text-[0.8125rem]">Kolapo Abiola</h6>
                            <span className="text-xs text-cool-gray">
                                kolapoabiola@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;

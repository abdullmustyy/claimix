import type { ColumnDef } from "@tanstack/react-table";
import { EyeOff, MoreHorizontal } from "lucide-react";
import CircleOffIcon from "~/components/icons/circle-off-icon";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { cn } from "~/lib/utils";
import StatusIndicator from "../../status-indicator";
import { DataTableColumnHeader } from "../data-table/data-table-column-header";

export interface IPolicyHolder {
    id: string;
    user_name: string;
    email: string;
    placeholder_id: string;
    active_policies: number;
    status: "Active" | "Blacklisted" | "Lapsed";
    total_claims_filed: number;
    seniority: string;
    last_activity: string;
}

export const policyHoldersColumns: ColumnDef<IPolicyHolder>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
                className="bg-white border-[1.5px] ml-2 data-[state=checked]:bg-sky-blue data-[state=checked]:border-none data-[state=checked]:ring data-[state=checked]:ring-sky-blue data-[state=checked]:ring-offset-1"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="bg-white border-[1.5px] ml-2 data-[state=checked]:bg-sky-blue data-[state=checked]:border-none data-[state=checked]:ring data-[state=checked]:ring-sky-blue data-[state=checked]:ring-offset-1"
            />
        ),
        enableSorting: false,
        enableHiding: false,
        size: 50,
    },
    {
        accessorKey: "user_name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="User Name" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "placeholder_id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Placeholder ID" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "active_policies",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="No Of Active Policies"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            return <StatusIndicator status={row.getValue("status")} />;
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "total_claims_filed",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Total Claims Filed" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "seniority",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Seniority" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "last_activity",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Last Activity" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "actions",
        header: () => <span>Action</span>,
        enableHiding: false,
        cell: () => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="size-8 p-0 has-[>svg]:px-0 focus-visible:border-none focus-visible:ring-0"
                        >
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="size-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        alignOffset={-10}
                        className="p-0 border-bright-gray"
                    >
                        <DropdownMenuItem className="group px-4 py-2 cursor-pointer text-iron-gray focus:text-black">
                            <EyeOff className="text-iron-gray group-focus:text-black" />
                            <span className="text-sm">View User</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group px-4 py-2 cursor-pointer text-iron-gray focus:text-black">
                            <CircleOffIcon className="text-iron-gray group-focus:text-black" />
                            <span className="text-sm">Blacklist User</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

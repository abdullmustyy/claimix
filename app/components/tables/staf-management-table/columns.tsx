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
import { DataTableColumnHeader } from "../data-table/data-table-column-header";
import DataTableStatusIndicator from "../data-table/data-table-status-indicator";

export interface IStaffManagement {
    id: string;
    staff_name: string;
    email: string;
    role: string;
    department: string;
    status: "Active" | "Inactive";
    date_joined: string;
    last_login: string;
}

export const staffManagementColumns: ColumnDef<IStaffManagement>[] = [
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
                className="p-0 bg-white border-[1.5px] ml-2 data-[state=checked]:bg-sky-blue data-[state=checked]:border-none data-[state=checked]:ring data-[state=checked]:ring-sky-blue data-[state=checked]:ring-offset-1"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="p-0 bg-white border-[1.5px] ml-2 data-[state=checked]:bg-sky-blue data-[state=checked]:border-none data-[state=checked]:ring data-[state=checked]:ring-sky-blue data-[state=checked]:ring-offset-1"
            />
        ),
        enableSorting: false,
        enableHiding: false,
        size: 50,
    },
    {
        accessorKey: "staff_name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Staff Name" />
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
        accessorKey: "role",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Role" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "department",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Department" />
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
            return <DataTableStatusIndicator status={row.getValue("status")} />;
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "date_joined",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date Joined" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "last_login",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Last Login" />
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
                            <span className="text-sm">View Staff</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group px-4 py-2 cursor-pointer text-iron-gray focus:text-black">
                            <CircleOffIcon className="text-iron-gray group-focus:text-black" />
                            <span className="text-sm">Deactivate Staff</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

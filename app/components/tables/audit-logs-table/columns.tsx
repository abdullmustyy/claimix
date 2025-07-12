import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "~/components/ui/checkbox";
import StatusIndicator from "../../status-indicator";
import { DataTableColumnHeader } from "../data-table/data-table-column-header";

export interface IAuditLog {
    id: string;
    date_time: string;
    claim_id: string;
    user: string;
    role: string;
    action: string;
    description: string;
    status: "Success" | "Unsuccessful";
}

export const auditLogsColumns: ColumnDef<IAuditLog>[] = [
    {
        accessorKey: "date_time",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date & Time" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "claim_id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Claim ID" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "user",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="User" />
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
        accessorKey: "action",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Action" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "description",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Description" />
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
];

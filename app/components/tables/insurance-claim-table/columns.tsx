import type { ColumnDef } from "@tanstack/react-table";
import { EyeOff, Flag, MoreHorizontal } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useAppDialog } from "~/hooks/store/use-app-dialog";
import { DataTableColumnHeader } from "../data-table/data-table-column-header";
import DataTableStatusIndicator from "../data-table/data-table-status-indicator";

export interface IInsuranceClaim {
    id: string;
    claim_id: string;
    claimant_name: string;
    last_contacted: string;
    date_submitted: string;
    status: "Pending" | "Under Review" | "Approved" | "Flagged";
    tags: string;
    claims_officer: string;
}

export const insuranceClaimColumns: ColumnDef<IInsuranceClaim>[] = [
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
        accessorKey: "claim_id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Claim ID" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "claimant_name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Claimant Name" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "last_contacted",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Last Contacted" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "date_submitted",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date Submitted" />
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
        accessorKey: "tags",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Tags" />
        ),
        cell: ({ row }) => (
            <div className="py-0.5 px-2 rounded-full bg-ghost-gray border border-frost-silver w-fit">
                {row.getValue("tags")}
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "claims_officer",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Claims Officer" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "actions",
        header: () => <span>Action</span>,
        enableHiding: false,
        cell: () => {
            const { onOpen } = useAppDialog();

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
                            <span className="text-sm">Quick view</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="group px-4 py-2 cursor-pointer text-iron-gray focus:text-black"
                            onSelect={() => onOpen("flag-claim")}
                        >
                            <Flag className="text-iron-gray group-focus:text-black" />
                            <span className="text-sm">Flag for review</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

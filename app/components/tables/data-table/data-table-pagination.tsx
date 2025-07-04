import type { Table } from "@tanstack/react-table";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

interface DataTablePaginationProps<TData> extends React.ComponentProps<"div"> {
    table: Table<TData>;
    pageSizeOptions?: number[];
}

export function DataTablePagination<TData>({
    table,
    pageSizeOptions = [10, 20, 30, 40, 50],
    className,
    ...props
}: DataTablePaginationProps<TData>) {
    const pageIndex = table.getState().pagination.pageIndex;
    const pageSize = table.getState().pagination.pageSize;
    const totalRows = table.getFilteredRowModel().rows.length;
    const startRow = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
    const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);

    return (
        <div
            className={cn(
                "flex w-full flex-col-reverse items-center justify-between gap-4 overflow-auto p-1 sm:flex-row sm:gap-8",
                className,
            )}
            {...props}
        >
            <div className="flex-1 whitespace-nowrap font-medium text-iron-gray text-sm">
                {startRow} - {endRow} of {totalRows} results
        </div>
        
            <div className="flex items-center gap-3">
                <Button
                    aria-label="Go to previous page"
                    variant="outline"
                    size="sm"
                    className="text-iron-gray disabled:text-cool-gray"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Prev
                </Button>

                <div className="flex items-center justify-center font-medium text-sm text-iron-gray">
                    {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()} pages
                </div>

                <Button
                    aria-label="Go to next page"
                    variant="outline"
                    size="sm"
                    className="text-iron-gray disabled:text-cool-gray"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

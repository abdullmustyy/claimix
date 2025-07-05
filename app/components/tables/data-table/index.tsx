import { type Table as TanstackTable, flexRender } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import type * as React from "react";

import { DataTablePagination } from "~/components/tables/data-table/data-table-pagination";
import { Button } from "~/components/ui/button";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import { getCommonPinningStyles } from "~/lib/data-table";
import { cn } from "~/lib/utils";

interface DataTableProps<TData> extends React.ComponentProps<"div"> {
    table: TanstackTable<TData>;
    actionBar?: React.ReactNode;
}

export function DataTable<TData>({
    table,
    actionBar,
    children,
    className,
    ...props
}: DataTableProps<TData>) {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col gap-2.5 overflow-auto isolate",
                className,
            )}
            {...props}
        >
            {children}

            <ScrollArea className="whitespace-nowrap">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow
                                key={headerGroup.id}
                                className="hover:bg-sky-blue/8"
                            >
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        colSpan={header.colSpan}
                                        style={{
                                            ...getCommonPinningStyles({
                                                column: header.column,
                                            }),
                                        }}
                                        className="p-3"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext(),
                                              )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="[&_tr:last-child]:border-b-1">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                    className="hover:bg-sky-blue/8"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            style={{
                                                ...getCommonPinningStyles({
                                                    column: cell.column,
                                                }),
                                            }}
                                            className="p-3 text-iron-gray"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={table.getAllColumns().length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>

            {table.getFilteredSelectedRowModel().rows.length > 0 && (
                <div className="fixed bottom-1/10 left-1/2 w-fit bg-white rounded-(--card-radius) p-(--card-padding) z-10 [--card-radius:calc(var(--radius)-2px)] [--card-padding:--spacing(1)]">
                    <Button
                        variant="ghost"
                        className="rounded-[calc(var(--card-radius)-var(--card-padding))]"
                    >
                        <Trash2 className="text-cherry-red" />
                        {table.getFilteredSelectedRowModel().rows.length === 1
                            ? "Blacklist user"
                            : "Blacklist users"}
                    </Button>
                </div>
            )}

            <div className="flex flex-col gap-2.5 px-4 pb-8 mt-4">
                <DataTablePagination table={table} />
                {actionBar &&
                    table.getFilteredSelectedRowModel().rows.length > 0 &&
                    actionBar}
            </div>
        </div>
    );
}

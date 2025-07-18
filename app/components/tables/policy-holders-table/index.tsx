import { LoaderCircle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { useDataTable } from "~/hooks/use-data-table";
import { DataTable } from "../data-table";
import { policyHoldersColumns, type IPolicyHolder } from "./columns";

const PolicyHoldersTable = () => {
    const [policyHoldersData, setPolicyHoldersData] = useState<
        IPolicyHolder[] | null
    >(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        import("./data.json").then((mod) => {
            if (isMounted) {
                setPolicyHoldersData(
                    mod.default.map((item: any) => ({
                        ...item,
                        status: item.status as
                            | "Blacklisted"
                            | "Active"
                            | "Lapsed",
                    })),
                );
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    const { table } = useDataTable({
        data: policyHoldersData || [],
        columns: policyHoldersColumns,
        // pageCount: 10,
        // getRowId: (originalRow) => originalRow.id,
        // shallow: false,
        // clearOnDefault: true,
    });

    if (loading)
        return <LoaderCircle className="text-raven m-4 animate-spin" />;
    return (
        <DataTable table={table}>
            {table.getFilteredSelectedRowModel().rows.length > 0 && (
                <div className="fixed bottom-1/10 left-1/2 w-fit bg-white rounded-(--card-radius) p-(--card-padding) z-10 shadow-[0_0_0_1px_#00000014] [--card-radius:calc(var(--radius)-2px)] [--card-padding:--spacing(1)]">
                    <Button
                        variant="ghost"
                        className="rounded-[calc(var(--card-radius)-var(--card-padding))] has-[>svg]:px-8"
                        onClick={() => table.toggleAllRowsSelected(false)}
                    >
                        <Trash2 className="text-cherry-red" />
                        {table.getFilteredSelectedRowModel().rows.length === 1
                            ? "Blacklist user"
                            : "Blacklist users"}
                    </Button>
                </div>
            )}
        </DataTable>
    );
};

export default PolicyHoldersTable;

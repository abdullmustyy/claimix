import { LoaderCircle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { useDataTable } from "~/hooks/use-data-table";
import { DataTable } from "../data-table";
import { staffManagementColumns, type IStaffManagement } from "./columns";

const StaffManagementTable = () => {
    const [staffManagementData, setStaffManagementData] = useState<
        IStaffManagement[] | null
    >(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        import("./data.json").then((mod) => {
            if (isMounted) {
                setStaffManagementData(
                    mod.default.map((item: any) => ({
                        ...item,
                        status: item.status as "Active" | "Inactive",
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
        data: staffManagementData || [],
        columns: staffManagementColumns,
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
                            ? "Deactivate Staff"
                            : "Deactivate Staffs"}
                    </Button>
                </div>
            )}
        </DataTable>
    );
};

export default StaffManagementTable;

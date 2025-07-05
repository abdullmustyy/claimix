import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
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
    return <DataTable table={table} />;
};

export default StaffManagementTable;

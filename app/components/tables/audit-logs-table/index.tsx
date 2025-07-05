import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDataTable } from "~/hooks/use-data-table";
import { DataTable } from "../data-table";
import { auditLogsColumns, type IAuditLog } from "./columns";

const AuditLogsTable = () => {
    const [auditLogsData, setAuditLogsData] = useState<IAuditLog[] | null>(
        null,
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        import("./data.json").then((mod) => {
            if (isMounted) {
                setAuditLogsData(
                    mod.default.map((item: any) => ({
                        ...item,
                        // Add any status or type casting if needed for audit logs
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
        data: auditLogsData || [],
        columns: auditLogsColumns,
        // pageCount: 10,
        // getRowId: (originalRow) => originalRow.id,
        // shallow: false,
        // clearOnDefault: true,
    });

    if (loading)
        return <LoaderCircle className="text-raven m-4 animate-spin" />;
    return <DataTable table={table} />;
};

export default AuditLogsTable;

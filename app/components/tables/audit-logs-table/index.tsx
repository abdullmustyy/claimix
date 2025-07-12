import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDataTable } from "~/hooks/use-data-table";
import { DataTable } from "../data-table";
import { auditLogsColumns, type IAuditLog } from "./columns";

interface AuditLogsTableProps {
    showPagination?: boolean;
}

const AuditLogsTable = ({ showPagination = true }: AuditLogsTableProps) => {
    const [auditLogsData, setAuditLogsData] = useState<IAuditLog[] | null>(
        null,
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        import("./data.json").then((mod) => {
            if (isMounted) {
                let data = mod.default.map((item: any) => ({
                    ...item,
                    // Add any status or type casting if needed for audit logs
                }));

                // Limit to first 3 rows when pagination is disabled
                if (!showPagination) {
                    data = data.slice(0, 3);
                }

                setAuditLogsData(data);
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [showPagination]);

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
    return <DataTable table={table} showPagination={showPagination} />;
};

export default AuditLogsTable;

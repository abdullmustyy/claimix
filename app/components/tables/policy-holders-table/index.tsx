import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { DataTable } from "../data-table";
import { policyHoldersColumns, type IPolicyHolder } from "./columns";
import { useDataTable } from "~/hooks/use-data-table";

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
    return <DataTable table={table} />;
};

export default PolicyHoldersTable;

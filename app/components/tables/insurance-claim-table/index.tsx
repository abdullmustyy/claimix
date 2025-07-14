import { Flag, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import AppDialog from "~/dialogs/app-dialog";
import { useAppDialog } from "~/hooks/store/use-app-dialog";
import { useDataTable } from "~/hooks/use-data-table";
import { DataTable } from "../data-table";
import { insuranceClaimColumns, type IInsuranceClaim } from "./columns";

const InsuranceClaimTable = () => {
    const { openDialogKey } = useAppDialog();
    const [insuranceClaimData, setInsuranceClaimData] = useState<
        IInsuranceClaim[] | null
    >(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        import("./data.json").then((mod) => {
            if (isMounted) {
                setInsuranceClaimData(
                    mod.default.map((item: any) => ({
                        ...item,
                        status: item.status as
                            | "Pending"
                            | "Under Review"
                            | "Approved"
                            | "Flagged",
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
        data: insuranceClaimData || [],
        columns: insuranceClaimColumns,
        // pageCount: 10,
        // getRowId: (originalRow) => originalRow.id,
        // shallow: false,
        // clearOnDefault: true,
    });

    if (loading)
        return <LoaderCircle className="text-raven m-4 animate-spin" />;
    return (
        <>
            <DataTable table={table}>
                {table.getFilteredSelectedRowModel().rows.length > 0 && (
                    <div className="fixed bottom-1/10 left-1/2 w-fit bg-white rounded-(--card-radius) p-(--card-padding) z-10 shadow-[0_0_0_1px_#00000014] [--card-radius:calc(var(--radius)-2px)] [--card-padding:--spacing(1)]">
                        <Button
                            variant="ghost"
                            className="rounded-[calc(var(--card-radius)-var(--card-padding))] has-[>svg]:px-8"
                            onClick={() => table.toggleAllRowsSelected(false)}
                        >
                            <Flag className="text-cherry-red" />
                            {table.getFilteredSelectedRowModel().rows.length ===
                            1
                                ? "Flag user"
                                : "Flag users"}
                        </Button>
                    </div>
                )}
            </DataTable>

            <AppDialog
                open={openDialogKey === "flag-claim"}
                title="Flag Claim"
                className="[&_[data-slot='note-bar']]:bg-rose-red"
                note={
                    <p className="text-sm text-iron-gray">
                        <span className="font-medium text-foreground">
                            Note:{" "}
                        </span>
                        You are about to flag a claim for review. Once flagged
                        it can only be approved by a super admin.
                    </p>
                }
                action={
                    <Button
                        size="sm"
                        className="bg-rose-red hover:bg-rose-red/90"
                    >
                        Flag Claim
                    </Button>
                }
            />
        </>
    );
};

export default InsuranceClaimTable;

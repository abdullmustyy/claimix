import { cn } from "~/lib/utils";

interface IDataTableStatusIndicatorProps extends React.ComponentProps<"div"> {
    status:
        | "Active"
        | "Blacklisted"
        | "Lapsed"
        | "Success"
        | "Unsuccessful"
        | "Inactive";
}
const DataTableStatusIndicator = ({
    status,
}: IDataTableStatusIndicatorProps) => {
    return (
        <div className="flex items-center gap-2">
            <div
                className={cn("size-2 rounded-xs", {
                    "bg-teal-green":
                        status === "Active" || status === "Success",
                    "bg-cherry-red":
                        status === "Blacklisted" ||
                        status === "Unsuccessful" ||
                        status === "Inactive",
                    "bg-amber": status === "Lapsed",
                })}
            />
            <span>{status}</span>
        </div>
    );
};

export default DataTableStatusIndicator;

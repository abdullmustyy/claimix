import { cn } from "~/lib/utils";

type IStatus =
    | "Active"
    | "Blacklisted"
    | "Lapsed"
    | "Success"
    | "Unsuccessful"
    | "Inactive"
    | "Pending"
    | "Under Review"
    | "Approved"
    | "Flagged";
interface IStatusIndicatorProps extends React.ComponentProps<"div"> {
    status: IStatus;
}

const STATUS_COLOR_MAP: Record<IStatus, string> = {
    // Teal Green
    Active: "bg-teal-green",
    Success: "bg-teal-green",
    Approved: "bg-teal-green",
    // Cherry Red
    Blacklisted: "bg-cherry-red",
    Unsuccessful: "bg-cherry-red",
    Inactive: "bg-cherry-red",
    Flagged: "bg-cherry-red",
    // Amber
    Lapsed: "bg-amber",
    Pending: "bg-amber",
    // Signal Blue
    "Under Review": "bg-signal-blue",
};

const StatusIndicator = ({ className, status }: IStatusIndicatorProps) => {
    const statusColor = STATUS_COLOR_MAP[status];

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className={cn("size-2 rounded-xs", statusColor)} />
            <span>{status}</span>
        </div>
    );
};

export default StatusIndicator;

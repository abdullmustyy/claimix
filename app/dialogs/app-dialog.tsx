import { XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "~/components/ui/dialog";
import { useAppDialog } from "~/hooks/store/use-app-dialog";
import { cn } from "~/lib/utils";

interface IAppDialog extends React.ComponentProps<typeof Dialog> {
    className?: string;
    title: string;
    note?: React.ReactNode;
    action?: React.ReactNode;
}

const AppDialog = ({
    children,
    className,
    title,
    note,
    action,
    ...props
}: IAppDialog) => {
    const { onClose } = useAppDialog();

    return (
        <Dialog onOpenChange={onClose} {...props}>
            <DialogContent
                showCloseButton={false}
                className={cn("p-0 gap-0 bg-white", className)}
            >
                <DialogHeader className="px-6 py-4 flex-row items-center justify-between">
                    <DialogTitle className="font-medium">{title}</DialogTitle>
                    <div className="flex items-center gap-2">
                        <div className="text-xs font-medium hidden md:grid place-content-center h-5 px-1.5 rounded-sm bg-ghost-gray border border-frost-silver">
                            <span>esc</span>
                        </div>
                        <DialogClose asChild>
                            <div className="size-5 grid place-content-center rounded-sm hover:bg-ghost-gray hover:border border-frost-silver transition-all">
                                <XIcon className="size-4 text-iron-gray" />
                            </div>
                        </DialogClose>
                    </div>
                    <DialogDescription className="sr-only"></DialogDescription>
                </DialogHeader>

                <div className="p-6 pt-4 border-y">
                    {note && (
                        <div className="px-3 py-2.5 bg-off-white rounded-xl flex items-center gap-3 shadow-[0_2px_4px_0_#0000000A,0_1px_2px_-1px_#00000014,0_0_0_1px_#00000014]">
                            <div
                                data-slot="note-bar"
                                className="h-8.5 w-1 rounded-full"
                            />
                            {note}
                        </div>
                    )}

                    {children}
                </div>

                <div className="px-6 py-4 flex items-center justify-end gap-2">
                    <DialogClose asChild>
                        <Button size="sm" variant="outline">
                            Cancel
                        </Button>
                    </DialogClose>
                    {action}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AppDialog;

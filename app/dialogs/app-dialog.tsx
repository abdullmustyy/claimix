import { XIcon } from "lucide-react";
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
}

const AppDialog = ({ children, className, title, ...props }: IAppDialog) => {
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
                        <div className="text-xs font-medium grid place-content-center h-5 px-1.5 rounded-sm bg-ghost-gray border border-frost-silver">
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
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default AppDialog;

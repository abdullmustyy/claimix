import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ControlledFieldWrapper from "~/components/controlled-fields/field-wrapper";
import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import {
    claimManagementActions,
    escalateClaimOptions,
} from "~/config/form-fields";
import AppDialog from "~/dialogs/app-dialog";
import { useAppDialog } from "~/hooks/store/use-app-dialog";
import { cn } from "~/lib/utils";
import { ClaimManagementSchema } from "~/schemas/dashboard/user";
import type { IDialogInfoMap, IOpenDialogKey } from "~/types/app-dialog";

export type ClaimManagementFormType = z.infer<typeof ClaimManagementSchema>;

const ClaimManagementForm = () => {
    const { openDialogKey, onOpen } = useAppDialog();
    const [currentDialogKey, setCurrentDialogKey] = useState<IOpenDialogKey>();

    const form = useForm<ClaimManagementFormType>({
        resolver: zodResolver(ClaimManagementSchema),
    });

    const dialogInfoMap: IDialogInfoMap = {
        "approve-claim": {
            title: "Approve Claim",
            note: (
                <p className="text-sm text-iron-gray">
                    <span className="font-medium text-foreground">Note: </span>
                    You are about to approve a claim. Click on{" "}
                    <span className="font-medium text-foreground">
                        approve claim
                    </span>{" "}
                    to proceed and{" "}
                    <span className="font-medium text-foreground">cancel</span>{" "}
                    to cancel
                </p>
            ),
            action: <Button size="sm">Approve Claim</Button>,
        },
        "reject-claim": {
            title: "Reject Claim",
            note: (
                <p className="text-sm text-iron-gray">
                    <span className="font-medium text-foreground">Note: </span>
                    You are about to reject a claim. Click on{" "}
                    <span className="font-medium text-foreground">
                        reject claim
                    </span>{" "}
                    to proceed and{" "}
                    <span className="font-medium text-foreground">cancel</span>{" "}
                    to cancel
                </p>
            ),
            action: (
                <Button size="sm" className="bg-rose-red hover:bg-rose-red/90">
                    Reject Claim
                </Button>
            ),
        },
        "escalate-claim": {
            title: "Escalate Claim",
            children: (
                <Select defaultValue="manager">
                    <SelectTrigger className="w-full focus-visible:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {escalateClaimOptions.map(({ name, value }, index) => (
                            <SelectItem
                                key={value + index}
                                value={value}
                                className="text-[0.8125rem]"
                            >
                                {name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            ),
            action: <Button size="sm">Escalate Claim</Button>,
        },
        "follow-up-question": {
            title: "Add Follow-up Question",
            children: (
                <ControlledFieldWrapper
                    control={form.control}
                    name="follow_up_questions"
                    label="Follow-up questions"
                    className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                    render={({ field }) => (
                        <Textarea
                            {...field}
                            className="h-20 focus-visible:ring-0 placeholder:text-[0.8125rem] text-[0.8125rem]"
                        />
                    )}
                />
            ),
            action: <Button size="sm">Add Question</Button>,
        },
    };

    return (
        <div className="flex flex-col gap-5 px-5">
            <div className="flex items-center justify-between">
                <h3 className="text-xl">Claim Management</h3>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="sm"
                            className="text-[0.8125rem] bg-lime-green hover:bg-lime-green/90 font-normal"
                        >
                            Actions
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" alignOffset={-20}>
                        {claimManagementActions.map(
                            ({ name, value }, index) => (
                                <DropdownMenuItem
                                    key={value + index}
                                    className="text-[0.8125rem] py-2"
                                    onSelect={() => {
                                        setCurrentDialogKey(value);
                                        onOpen(value);
                                    }}
                                >
                                    {name}
                                </DropdownMenuItem>
                            ),
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <Form {...form}>
                <form className="grid gap-4">
                    <ControlledFieldWrapper
                        control={form.control}
                        name="claim_officer"
                        label="Claim Officer"
                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                        render={({ field }) => (
                            <Input
                                {...field}
                                placeholder="Enter Claim Officer"
                                className="focus-visible:ring-0 placeholder:text-[0.8125rem] text-[0.8125rem]"
                            />
                        )}
                    />
                    <ControlledFieldWrapper
                        control={form.control}
                        name="claim_notes"
                        label="Claim Notes"
                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                        render={({ field }) => (
                            <Textarea
                                {...field}
                                className="h-20 focus-visible:ring-0 placeholder:text-[0.8125rem] text-[0.8125rem]"
                                placeholder="Enter Claim Notes"
                            />
                        )}
                    />
                    <ControlledFieldWrapper
                        control={form.control}
                        name="next_action"
                        label="Next Action"
                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                        render={({ field }) => (
                            <Textarea
                                {...field}
                                className="h-20 focus-visible:ring-0 placeholder:text-[0.8125rem] text-[0.8125rem]"
                                placeholder="Enter Next Action"
                            />
                        )}
                    />
                    <ControlledFieldWrapper
                        control={form.control}
                        name="next_action_details"
                        label="Next Action Details"
                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                        render={({ field }) => (
                            <Textarea
                                {...field}
                                className="h-20 focus-visible:ring-0 placeholder:text-[0.8125rem] text-[0.8125rem]"
                                placeholder="Enter Next Action Details"
                            />
                        )}
                    />
                </form>

                {/* Dialog */}
                <AppDialog
                    open={openDialogKey === currentDialogKey}
                    title={dialogInfoMap[currentDialogKey!]?.title ?? ""}
                    className={cn("[&_[data-slot='note-bar']]:bg-primary", {
                        "[&_[data-slot='note-bar']]:bg-rose-red":
                            currentDialogKey === "reject-claim",
                    })}
                    note={dialogInfoMap[currentDialogKey!]?.note}
                    action={dialogInfoMap[currentDialogKey!]?.action}
                >
                    {dialogInfoMap[currentDialogKey!]?.children}
                </AppDialog>
            </Form>
        </div>
    );
};

export default ClaimManagementForm;

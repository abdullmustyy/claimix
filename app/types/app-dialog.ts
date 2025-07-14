export type IOpenDialogKey =
    | null
    | "add-claim"
    | "approve-claim"
    | "reject-claim"
    | "follow-up-question"
    | "extracted-info"
    | "escalate-claim"
    | "flag-claim";

export interface IDialogInfo {
    title: string;
    note?: React.ReactNode;
    action?: React.ReactNode;
    children?: React.ReactNode;
}

export type IDialogInfoMap = Partial<Record<NonNullable<IOpenDialogKey>, IDialogInfo>>;

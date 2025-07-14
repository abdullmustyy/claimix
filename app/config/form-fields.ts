export const claimManagementActions = [
    { name: "Approve", value: "approve-claim" },
    { name: "Reject", value: "reject-claim" },
    { name: "Add follow-up question", value: "follow-up-question" },
    { name: "See extracted information", value: "extracted-info" },
    { name: "Escalate to other members", value: "escalate-claim" },
] as const;

export const escalateClaimOptions = [
    { name: "Manager", value: "manager" },
    { name: "Admin", value: "admin" },
    { name: "Claims Adjuster", value: "claims-adjuster" },
];

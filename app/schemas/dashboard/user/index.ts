import { z } from "zod";
import { MediaSchema } from "~/schemas/media-schema";

export const NewClaimSchema = z.object({
    claimant_full_name: z.string().min(1, "Claimant Full Name is required"),
    policy_id: z.string().min(1, "Policy ID is required"),
    claim_id: z.string().min(1, "Claim ID is required"),
    claim_type: z.string(),
    policy_holder_id: z.string().min(1, "Policy Holder ID is required"),
    tags: z.string(),
    incident_time: z.string().min(1, "Incident Time is required"),
    incident_date: z
        .string()
        .min(1, "Incident Date is required")
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    location: z.string().min(1, "Location of Incident is required"),
    description: z.string().min(1, "Description of Incident is required"),
    documents: MediaSchema.optional(),
});

export const ClaimManagementSchema = z.object({
    claim_officer: z.string().min(1, "Claim Officer is required"),
    claim_notes: z.string().min(1, "Claim Notes is required"),
    next_action: z.string().min(1, "Next Action is required"),
    next_action_details: z.string().min(1, "Next Action Details is required"),
    follow_up_questions: z.string().min(1, "Follow-up question is required"),
});

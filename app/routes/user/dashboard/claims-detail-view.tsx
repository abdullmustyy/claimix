import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import ControlledFieldWrapper from "~/components/controlled-fields/field-wrapper";
import LinkIcon from "~/components/icons/link-icon";
import SheetIcon from "~/components/icons/sheet-icon";
import StatusIndicator from "~/components/status-indicator";
import AuditLogsTable from "~/components/tables/audit-logs-table";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
import { ClaimManagementSchema } from "~/schemas/dashboard/user";

export type ClaimManagementFormType = z.infer<typeof ClaimManagementSchema>;

export default function ClaimsDetailView() {
    const navigate = useNavigate();

    const form = useForm<ClaimManagementFormType>({
        resolver: zodResolver(ClaimManagementSchema),
    });

    return (
        <section className="md:m-3 flex-1 flex flex-col gap-5">
            <section className="bg-white p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-5">
                    <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className="size-3" />
                        Back
                    </Button>
                </div>

                <div className="px-5">
                    <h1 className="text-2xl font-medium text-raven mb-7.5">
                        Claim Detail View
                    </h1>
                </div>

                <div className="flex flex-col gap-5 mb-11">
                    {/* Claim Summary */}
                    <div className="grid grid-cols-6 gap-4 px-7.5 py-4 rounded-md shadow-[0px_0px_0px_1px_#00000014,0px_0px_0px_1.5px_#E4E4E799_inset,0px_0px_0px_1px_#FFFFFF_inset]">
                        <div className="flex flex-col gap-5">
                            <span className="text-base font-light">
                                Claim ID
                            </span>
                            <span className="font-medium text-lg">
                                CLM-0001
                            </span>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-base font-light">
                                Claimant Name
                            </span>
                            <span className="font-medium text-lg">
                                Jane Okwuosa
                            </span>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-base font-light">
                                Policy ID
                            </span>
                            <span className="font-medium text-lg">
                                PI-00123
                            </span>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-base font-light">Status</span>
                            <Badge className="h-6 bg-amber/10 text-amber font-normal text-lg rounded-full">
                                Pending
                            </Badge>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-base font-light">Tags</span>
                            <Badge className="h-6 bg-iron-gray/10 text-iron-gray font-normal text-lg rounded-full">
                                Escalated
                            </Badge>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-base font-light">
                                Last Contacted
                            </span>
                            <span className="text-lg">1hr</span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative flex flex-col gap-2.5">
                        <div className="relative w-full h-7.5">
                            <div className="absolute left-0 top-0 h-full w-full bg-light-gray rounded-full"></div>
                            <div className="absolute left-0 top-0 h-full w-7/10 bg-signal-blue rounded-full"></div>
                            <div className="absolute left-0 top-0 h-full w-1/2 bg-lime-green rounded-full"></div>
                        </div>
                        <div className="w-4/5 flex items-center justify-between text-[0.8125rem] text-iron-gray">
                            <span>Policy validity check</span>
                            <span>Document verification</span>
                            <span>Claims analysis</span>
                            <span>Claims completion</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Claim Overview */}
                    <div className="lg:col-span-2 flex flex-col gap-5 px-5 border-r">
                        <h3 className="text-xl">Claim Overview</h3>

                        <div className="flex flex-col *:pb-2.5 *:not-first:pt-2.5 *:not-last:border-b *:px-2">
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Claim Type
                                </span>
                                <span>Auto</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Urgency Level
                                </span>
                                <span>High</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Date Submitted
                                </span>
                                <span>2025-06-20</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Date and Time of Incident
                                </span>
                                <span>2025-06-20, 8:00AM</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Incident Location
                                </span>
                                <span>Third Mainland Bridge in Lagos</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Images Uploaded
                                </span>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/public/images/pngs/car.png"
                                        alt=""
                                        className="w-6.5 h-4.5"
                                    />
                                    <img
                                        src="/public/images/pngs/car.png"
                                        alt=""
                                        className="w-6.5 h-4.5"
                                    />
                                </div>
                            </div>
                            <div className="flex items-start justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Documents Uploaded
                                </span>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-1">
                                        <SheetIcon className="size-5" />
                                        <span>repair_estimate.pdf</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <SheetIcon className="size-5" />
                                        <span>police_report.pdf</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <h6 className="text-base">Incident Description</h6>
                            <p className="text-[0.8125rem] text-iron-gray">
                                On June 12, 2025, the insured vehicle (Toyota
                                Corolla, 2019 model) was involved in a minor
                                collision while navigating traffic on the Third
                                Mainland Bridge in Lagos. The front bumper
                                sustained significant damage due to contact with
                                another vehicle that abruptly changed lanes. No
                                injuries were reported. Photographic evidence of
                                the damage, as well as the police report and
                                vehicle inspection report, have been attached
                                for review. The claimant is requesting repair
                                reimbursement under the comprehensive auto
                                policy.
                            </p>
                        </div>
                    </div>

                    {/* Claim Management */}
                    <div className="flex flex-col gap-5 px-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl">Claim Management</h3>
                            <Select>
                                <SelectTrigger className="pointer-events-none text-[0.8125rem] bg-lime-green text-white h-8 data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white [&_svg:not([class*='text-'])]:opacity-100 gap-1 px-2 border-none">
                                    <SelectValue placeholder="Actions" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">
                                        System
                                    </SelectItem>
                                </SelectContent>
                            </Select>
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
                        </Form>
                    </div>
                </div>
            </section>

            <section className="bg-white p-4 rounded-xl">
                {/* Bottom Tabs */}
                <Tabs
                    defaultValue="policy-holder"
                    className="w-full gap-7.5 px-4"
                >
                    <TabsList className="w-full justify-start p-0 bg-white *:data-[state=active]:bg-transparent *:data-[state=active]:border-b *:data-[state=active]:border-b-raven *:data-[state=active]:shadow-none *:rounded-none *:data-[state=active]:text-raven *:text-dust-gray *:hover:text-raven *:hover:border-b-raven *:hover:border-b *:text-lg *:font-normal *:px-8 *:flex-none">
                        <TabsTrigger value="policy-holder">
                            Policy Holder ID
                        </TabsTrigger>
                        <TabsTrigger value="policy-info">
                            Policy Info
                        </TabsTrigger>
                        <TabsTrigger value="audit-logs">Audit Logs</TabsTrigger>
                        <TabsTrigger value="email-conversations">
                            Email Conversations
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="policy-holder">
                        <div className="flex flex-col *:not-last:border-b *:not-first:pt-2.5 *:not-last:pb-2.5 *:px-2">
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Policy Holder ID
                                </span>
                                <span>PH-00123</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Full Name
                                </span>
                                <span>John Doe</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">Email</span>
                                <span>john.doe@example.com</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Phone Number
                                </span>
                                <span>09087654321</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">Address</span>
                                <span>123 Main St, Anytown, USA</span>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="policy-info">
                        <div className="flex flex-col *:not-last:border-b *:not-first:pt-2.5 *:not-last:pb-2.5 *:px-2">
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Policy ID
                                </span>
                                <span>PL-00123</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">Status</span>
                                <StatusIndicator
                                    status="Pending"
                                    className="text-[0.8125rem] gap-1"
                                />
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Coverage Type
                                </span>
                                <span>Fire</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Policy Start
                                </span>
                                <span>2025-06-20</span>
                            </div>
                            <div className="flex items-center justify-between text-[0.8125rem]">
                                <span className="text-iron-gray">
                                    Policy End
                                </span>
                                <span>2025-06-20</span>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="audit-logs">
                        <AuditLogsTable showPagination={false} />
                    </TabsContent>

                    <TabsContent value="email-conversations">
                        <div className="flex flex-col gap-6">
                            {/* Left message */}
                            <div className="flex items-start gap-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EEF2FF] text-[#4F46E5] font-extrabold text-base">
                                    SL
                                </div>
                                <div className="bg-white rounded-2xl p-3 flex items-center gap-2.5 border border-[#E2E8F0]">
                                    <span className="text-sm font-medium text-[#1E293B]">
                                        Hello! I'm new here, glad to be here
                                    </span>
                                    <div className="flex items-center gap-1 text-[#475569]">
                                        <span className="text-xs font-medium">
                                            10:25
                                        </span>
                                        <CheckCheck className="size-4" />
                                    </div>
                                </div>
                            </div>
                            {/* Right message */}
                            <div className="flex items-start gap-3 justify-end">
                                <div className="flex flex-col items-end">
                                    <div className="bg-primary rounded-2xl p-1 w-103 relative">
                                        <div className="p-3 bg-[#003566] rounded-xl">
                                            <div className="flex items-center justify-between text-white">
                                                <h6 className="font-bold text-base">
                                                    External Link Title
                                                </h6>
                                                <LinkIcon className="size-6" />
                                            </div>
                                            <p className="text-white/64 text-xs">
                                                External link description
                                            </p>
                                        </div>

                                        <div className="p-2 flex items-center justify-between">
                                            <div className="flex flex-col text-white text-sm font-medium">
                                                <span>
                                                    Hey welcome, check our site.
                                                </span>
                                                <Link
                                                    to=""
                                                    // target="_blank"
                                                >
                                                    https://www.externallink.com
                                                </Link>
                                            </div>
                                            <div className="flex items-center gap-1 text-[#A5B4FC]">
                                                <span className="text-xs font-medium">
                                                    10:25
                                                </span>
                                                <CheckCheck className="size-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src="/images/pngs/avatar.png"
                                    alt="avatar"
                                    className="size-10 rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>
        </section>
    );
}

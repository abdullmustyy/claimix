import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Plus, Upload, XIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import z from "zod";
import ControlledFieldWrapper from "~/components/controlled-fields/field-wrapper";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";
import { Textarea } from "~/components/ui/textarea";
import UploadMediaTrigger from "~/components/upload-media-trigger";
import { useDropzoneStore } from "~/hooks/store/use-dropzone";
import { cn } from "~/lib/utils";
import { NewClaimSchema } from "~/schemas/dashboard/user";

export type FormType = z.infer<typeof NewClaimSchema>;

const claimTypeOptions = [
    { value: "Health Claims", label: "Health Claims" },
    { value: "Auto Claims", label: "Auto Claims" },
    { value: "Property Claims", label: "Property Claims" },
];
const tagOptions = [
    { value: "None", label: "None" },
    { value: "Urgent", label: "Urgent" },
    { value: "Follow-up", label: "Follow-up" },
];

const NewClaimForm = () => {
    const { isDragActive, setIsDragActive } = useDropzoneStore();
    const form = useForm<FormType>({
        resolver: zodResolver(NewClaimSchema),
    });

    const handleSubmit = (data: FormType) => {
        console.log(data);
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="sm">
                    Add new claim
                    <Plus />
                </Button>
            </SheetTrigger>
            <SheetContent
                showCloseButton={false}
                className="sm:max-w-2xl w-full p-0 gap-0"
            >
                <SheetHeader className="px-6 py-4 flex-row items-center justify-between shrink-0">
                    <SheetTitle className="font-normal text-ink-black">
                        Add New Claim Form
                    </SheetTitle>
                    <div className="flex items-center gap-2">
                        <div className="text-xs font-medium hidden md:grid place-content-center h-5 px-1.5 rounded-sm bg-ghost-gray border border-frost-silver">
                            <span>esc</span>
                        </div>
                        <SheetClose asChild>
                            <div className="size-5 grid place-content-center rounded-sm hover:bg-ghost-gray hover:border border-frost-silver transition-all">
                                <XIcon className="size-4 text-iron-gray" />
                            </div>
                        </SheetClose>
                    </div>
                    <SheetDescription className="sr-only"></SheetDescription>
                </SheetHeader>

                <ScrollArea className="flex-1 overflow-auto border-y hide-scrollbar">
                    <Form {...form}>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                                <ControlledFieldWrapper
                                    control={form.control}
                                    name="claimant_full_name"
                                    label="Claimant Full Name"
                                    className="col-span-2 [&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Jane Okwuosa"
                                            className="focus-visible:ring-0"
                                        />
                                    )}
                                />
                                <div className="grid grid-cols-2 gap-4 col-span-2">
                                    <ControlledFieldWrapper
                                        control={form.control}
                                        name="policy_id"
                                        label="Policy ID"
                                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="P128456"
                                                className="focus-visible:ring-0"
                                            />
                                        )}
                                    />
                                    <ControlledFieldWrapper
                                        control={form.control}
                                        name="claim_id"
                                        label="Claim ID"
                                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="CL12345"
                                                className="focus-visible:ring-0"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 col-span-2">
                                    <ControlledFieldWrapper
                                        control={form.control}
                                        name="claim_type"
                                        label="Claim Type"
                                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                        render={({ field }) => (
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select claim type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {claimTypeOptions.map(
                                                        (opt) => (
                                                            <SelectItem
                                                                key={opt.value}
                                                                value={
                                                                    opt.value
                                                                }
                                                            >
                                                                {opt.label}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    <ControlledFieldWrapper
                                        control={form.control}
                                        name="policy_holder_id"
                                        label="Policy Holder ID"
                                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="PH-298374"
                                                className="focus-visible:ring-0"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 col-span-2">
                                    <ControlledFieldWrapper
                                        control={form.control}
                                        name="tags"
                                        label="Tags"
                                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                        render={({ field }) => (
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="None" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {tagOptions.map((opt) => (
                                                        <SelectItem
                                                            key={opt.value}
                                                            value={opt.value}
                                                        >
                                                            {opt.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    <ControlledFieldWrapper
                                        control={form.control}
                                        name="incident_time"
                                        label="Incident Time"
                                        className="[&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="9:30 AM"
                                                className="focus-visible:ring-0"
                                            />
                                        )}
                                    />
                                </div>
                                <ControlledFieldWrapper
                                    control={form.control}
                                    name="incident_date"
                                    label="Incident Date"
                                    className="col-span-2 [&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="2025-06-20"
                                            className="focus-visible:ring-0"
                                        />
                                    )}
                                />
                                <ControlledFieldWrapper
                                    control={form.control}
                                    name="location"
                                    label="Location of Incident"
                                    className="col-span-2 [&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Third Mainland Bridge, Lagos, Nigeria"
                                            className="focus-visible:ring-0"
                                        />
                                    )}
                                />
                                <ControlledFieldWrapper
                                    control={form.control}
                                    name="description"
                                    label="Description of incident"
                                    className="col-span-2 [&_[data-slot='form-label']]:text-steel-gray [&_[data-slot='form-label']]:font-normal"
                                    render={({ field }) => (
                                        <Textarea
                                            {...field}
                                            className="h-26.5 focus-visible:ring-0"
                                            placeholder="Describe the incident..."
                                        />
                                    )}
                                />
                            </div>

                            <div className="px-5 pb-5 grid gap-2.5">
                                <Label className="mb-1">
                                    <p>
                                        Documents Upload/Image{" "}
                                        <span className="font-extralight">
                                            *Optional
                                        </span>
                                    </p>
                                </Label>

                                <div
                                    className={cn(
                                        "relative border border-dashed rounded-[6px] flex flex-col items-center justify-center gap-5 bg-polar-white h-50",
                                        isDragActive && "border-primary",
                                    )}
                                >
                                    <UploadMediaTrigger
                                        name="documents"
                                        className="absolute inset-0 z-0"
                                        onDragEnter={() =>
                                            setIsDragActive(true)
                                        }
                                        onDragLeave={() =>
                                            setIsDragActive(false)
                                        }
                                        onDragOver={() => setIsDragActive(true)}
                                    />
                                    <div className="flex flex-col items-center z-10">
                                        <h6 className="font-medium text-sm">
                                            Documents Upload
                                        </h6>
                                        <p className="text-xs text-slate-gray">
                                            Drag and drop or select a file
                                        </p>
                                    </div>
                                    <div className="flex gap-2 mb-2 z-10">
                                        <UploadMediaTrigger name="documents">
                                            <Button
                                                type="button"
                                                size="sm"
                                                variant="outline"
                                                className="text-[13px] pointer-events-auto"
                                            >
                                                <Upload className="size-3" />
                                                Upload
                                            </Button>
                                        </UploadMediaTrigger>
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="outline"
                                            className="text-[13px] gap-1 pointer-events-auto"
                                        >
                                            Import from
                                            <img
                                                src="/images/pngs/google-drive-icon.png"
                                                alt=""
                                            />
                                            <img
                                                src="/images/pngs/dropbox-icon.png"
                                                alt=""
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Form>
                </ScrollArea>

                <SheetFooter className="md:flex-row px-5 pb-5 shrink-0">
                    <SheetClose asChild>
                        <Button
                            type="button"
                            variant="outline"
                            className="md:w-1/2 w-full h-10"
                        >
                            Cancel
                        </Button>
                    </SheetClose>
                    <Button
                        disabled={!form.formState.isValid}
                        className="md:w-1/2 w-full h-10"
                        onClick={() => form.handleSubmit(handleSubmit)}
                    >
                        Add Claim
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default NewClaimForm;

import type { ForwardedRef, HTMLAttributes } from "react";
import React, { forwardRef, useCallback, useEffect, useState } from "react";
import Dropzone, {
    type DropzoneProps,
    type FileRejection,
} from "react-dropzone";
import { type FieldValues, type Path, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { useDropzoneStore } from "~/hooks/store/use-dropzone";
import { cn } from "~/lib/utils";
import ErrorToast from "./ui/custom-toasts/error-toast";

type IUploadMediaTriggerProps<
    T extends FieldValues,
    K extends Path<T>,
> = HTMLAttributes<HTMLElement> & {
    accept?: DropzoneProps["accept"];
    maxSize?: DropzoneProps["maxSize"];
    disabled?: DropzoneProps["disabled"];
    multiple?: boolean;
    name: K;
};

const UploadMediaTrigger = forwardRef(
    <T extends FieldValues, K extends Path<T>>(
        {
            accept = {
                "application/vnd.ms-powerpoint": [".ppt"],
                "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                    [".pptx"],
            },
            maxSize = 20 * 1024 * 1024, // 20MB
            className,
            children,
            name,
            disabled,
            multiple = false,
            ...rest
        }: IUploadMediaTriggerProps<T, K>,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const { register, unregister, setValue } = useFormContext();
        const { setIsDragActive } = useDropzoneStore();

        const handleDrop = useCallback(
            async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
                setIsDragActive(false);

                if (rejectedFiles.length > 0) {
                    rejectedFiles.forEach(({ errors }) => {
                        errors.forEach((error) => {
                            let heading = "File error";
                            let description = error.message;
                            if (error.code === "file-invalid-type") {
                                heading = "Invalid file type";
                                description = error.message.replace(
                                    /[a-z]+\/[a-zA-Z0-9.\-+]+,?\s*/g,
                                    "",
                                );
                            } else if (error.code === "too-many-files") {
                                heading = "Too many files";
                                description = "Please upload only one file";
                            } else if (error.code === "file-too-large") {
                                heading = "File too large";
                                description = `File size should not be more than ${
                                    maxSize / 1024 / 1024
                                }MB`;
                            }
                            toast(
                                <ErrorToast
                                    heading={heading}
                                    description={description}
                                />,
                            );
                        });
                    });
                    return;
                }

                // Store the file(s) in the form state
                if (multiple) {
                    setValue(name, acceptedFiles as unknown as T[K], {
                        shouldValidate: true,
                    });
                } else {
                    setValue(name, acceptedFiles[0] as unknown as T[K], {
                        shouldValidate: true,
                    });
                }
            },
            [maxSize, name, setValue, multiple, setIsDragActive],
        );

        useEffect(() => {
            register(name);
            return () => {
                unregister(name);
            };
        }, [register, unregister, name]);

        return (
            <Dropzone
                accept={accept}
                maxFiles={multiple ? undefined : 1}
                maxSize={maxSize}
                onDrop={handleDrop}
                disabled={disabled}
                multiple={multiple}
            >
                {({ getRootProps, getInputProps }) => (
                    <div
                        {...getRootProps()}
                        {...rest}
                        ref={ref}
                        tabIndex={0}
                        aria-label="File upload area"
                        className={cn(className)}
                    >
                        <input {...getInputProps()} />
                        {children}
                    </div>
                )}
            </Dropzone>
        );
    },
);

UploadMediaTrigger.displayName = "UploadMediaTrigger";

export default UploadMediaTrigger;

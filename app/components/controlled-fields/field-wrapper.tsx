import type { ReactElement, ReactNode } from "react";
import type {
    Control,
    ControllerFieldState,
    ControllerRenderProps,
    FieldValues,
    Path,
    UseFormStateReturn,
} from "react-hook-form";
import { cn } from "~/lib/utils";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";

/**
 * Wrapper for controlled form fields with react-hook-form,
 * providing consistent label, error, and description handling.
 */
type FieldWrapperProps<T extends FieldValues, K extends Path<T>> = {
    label?: string;
    description?: string;
    control: Control<T>;
    name: K;
    className?: string;
    /**
     * Children alternative to render prop, if you want to use ReactNode.
     * Useful for simple inputs.
     */
    children?: ReactNode;
    /**
     * Classic render function. Receives field and error state, etc.
     */
    render?: ({
        field,
        fieldState,
        formState,
    }: {
        field: ControllerRenderProps<T, K>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<T>;
    }) => ReactElement;
    /**
     * Additional props to pass to FormField (optional).
     */
    fieldProps?: Omit<
        React.ComponentProps<typeof FormField<T, K>>,
        "control" | "name" | "render"
    >;
};

export default function ControlledFieldWrapper<
    T extends FieldValues,
    K extends Path<T>,
>({
    control,
    name,
    className,
    label,
    description,
    children,
    render,
    fieldProps,
}: FieldWrapperProps<T, K>) {
    return (
        <FormField<T, K>
            control={control}
            name={name}
            {...fieldProps}
            render={(props) => (
                <FormItem className={cn(className)}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        {render ? render(props) : children}
                    </FormControl>
                    {!!description && (
                        <p className="text-[0.8rem] text-muted-foreground mt-1">
                            {description}
                        </p>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

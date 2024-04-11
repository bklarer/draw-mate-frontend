import InputWrapper from "@/components/form/InputWrapper"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { useId } from "react"
import { useController, useFormContext } from "react-hook-form"

interface SelectProps {
    autoComplete?: "on" | "address-level1"
    className?: string
    defaultValue?: string | { value: string; label: string }
    firstSelectedText?: string
    label?: string
    name: string
    options?: { label: string; value: string | number }[]
    required?: boolean
    disabled?: boolean
    selectClassName?: string
    variant?: "normal" | "gray"
}

export const Select = ({
    autoComplete,
    disabled,
    className,
    defaultValue = "",
    firstSelectedText = "Please Select an Option",
    label,
    name,
    options,
    required = false,
    selectClassName,
    variant = "normal",
}: SelectProps) => {
    const id = useId()

    const { control } = useFormContext()

    const {
        field: { onChange, ref, onBlur, value },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue,
    })

    return (
        <InputWrapper
            error={error}
            label={label}
            disabled={disabled}
            required={required}
            className={className}
            id={id}
        >
            <div className="relative w-full">
                <select
                    aria-required={required ? true : undefined}
                    disabled={disabled}
                    aria-invalid={!!error}
                    autoComplete={autoComplete}
                    id={id}
                    onBlur={onBlur}
                    onChange={onChange}
                    ref={ref}
                    value={value}
                    className={cn(
                        "w-full appearance-none rounded-lg border border-gray-light/50 bg-transparent px-8 py-4 text-base font-normal leading-normal text-foreground outline-none ring-offset-primary placeholder:text-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:border-slate-200 disabled:text-slate-300",
                        selectClassName,
                        variant === "gray" &&
                        "border-none bg-gray-100 p-2 text-gray-medium dark:bg-gray-light/50 dark:text-foreground",
                        disabled && "cursor-not-allowed",
                        error &&
                        "border-accent-red ring-offset-accent-red focus-visible:ring-accent-red"
                    )}
                >
                    <option disabled value="">
                        {firstSelectedText}
                    </option>
                    {options?.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <Icons.chevronDown
                    className={cn(
                        disabled && "cursor-not-allowed opacity-70",
                        "absolute right-3 top-1/2 h-12 w-7 -translate-y-1/2"
                    )}
                />
            </div>
        </InputWrapper>
    )
}

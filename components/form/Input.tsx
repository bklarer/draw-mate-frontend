import { useCallback, useId, type ChangeEvent } from "react"
import { useController, useFormContext } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import InputWrapper from "@/components/form/InputWrapper"

const removeNonNumbers = (value: string): string => {
    if (!value) return value
    const onlyNumbers = value.replace(/[^\d]/g, "")
    return onlyNumbers
}

type AutoCompleteTypes =
    | "given-name"
    | "family-name"
    | "email"
    | "on"
    | "address-line1"
    | "address-line2"
    | "address-level2"
    | "postal-code"

interface InputProps {
    autoComplete?: AutoCompleteTypes
    className?: string
    defaultValue?: string
    inputMode?: "text" | "email" | "numeric" | "url"
    label?: string
    loading?: boolean
    name: string
    placeholder?: string
    required?: boolean
    type?: "text" | "email" | "url"
    disabled?: boolean
}

export const Input = ({
    autoComplete,
    className,
    defaultValue = "",
    inputMode = "text",
    label,
    loading = false,
    name,
    placeholder,
    required = false,
    type = "text",
    disabled = false,
}: InputProps) => {
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

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (inputMode === "numeric") {
                const onlyNumbers = removeNonNumbers(e.target.value)
                if (onChange) {
                    onChange(onlyNumbers as any)
                }
            } else {
                onChange(e.target.value)
            }
        },
        [inputMode, onChange]
    )

    if (loading) {
        return (
            <div className={className}>
                {label && (
                    <label
                        className="mb-2 ml-5 inline-block text-xs font-normal uppercase leading-normal text-gray-medium dark:text-white"
                        htmlFor={id}
                    >
                        {label}
                        {required && <span className="text-accent-red">*</span>}
                    </label>
                )}

                <Skeleton className="min-h-[58px] w-full rounded-lg" />
            </div>
        )
    }

    return (
        <InputWrapper
            error={error}
            label={label}
            required={required}
            disabled={disabled}
            className={className}
            id={id}
        >
            <input
                disabled={disabled}
                aria-invalid={!!error}
                aria-required={required ? true : undefined}
                aria-describedby={error ? `${id}-form-item-message` : undefined}
                autoComplete={autoComplete}
                id={id}
                inputMode={inputMode}
                name={name}
                onBlur={onBlur}
                placeholder={placeholder}
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cn(
                    "w-full appearance-none rounded-lg border border-gray-light/50 bg-transparent px-8 py-4 text-base font-normal leading-normal text-foreground outline-none ring-offset-primary placeholder:text-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:border-slate-200 disabled:text-slate-300",
                    disabled && "cursor-not-allowed",
                    error &&
                    "border-accent-red ring-offset-accent-red focus-visible:ring-accent-red"
                )}
            />
        </InputWrapper>
    )
}

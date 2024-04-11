import type { ReactNode } from "react"
import type { FieldError } from "react-hook-form"

import { cn } from "@/lib/utils"

interface InputWrapperProps {
    className?: string
    label?: string
    id?: string
    error?: FieldError
    required?: boolean
    children: ReactNode
    hideErrorSpacer?: boolean
    disabled?: boolean
}

const InputWrapper = ({
    className,
    label,
    hideErrorSpacer = false,
    id,
    error,
    required,
    children,
    disabled,
}: InputWrapperProps) => {
    return (
        <div className={className}>
            {label && (
                <label
                    className={cn(
                        disabled && "cursor-not-allowed opacity-70",
                        "mb-2 ml-5 inline-block text-xs font-normal uppercase leading-normal text-gray-medium"
                    )}
                    htmlFor={id}
                >
                    {label}
                    {required && <span className="text-accent-red">*</span>}
                </label>
            )}

            {children}

            {error && (
                <span
                    id={`${id}-form-item-message`}
                    role="alert"
                    className={cn(
                        !hideErrorSpacer && "mt-2",
                        "ml-5 block text-xs font-normal leading-normal text-accent-red"
                    )}
                >
                    {error.message}
                </span>
            )}
        </div>
    )
}

export default InputWrapper

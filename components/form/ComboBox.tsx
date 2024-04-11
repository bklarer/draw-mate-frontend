"use client"

import { useId, useState } from "react"
import { useController, useFormContext } from "react-hook-form"

import InputWrapper from "@/components/form/InputWrapper"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface ComboBoxProps {
    label?: string
    className?: string
    name: string
    defaultValue?: string
    searchText?: string
    noOptionsText?: string
    required?: boolean
    placeholder?: string
    disabled?: boolean
    options: {
        value: string
        label: string
    }[]
}

const ComboBox = ({
    options,
    label,
    name,
    className,
    required,
    defaultValue = "",
    searchText = "Search Option...",
    noOptionsText = "No options found.",
    placeholder = "Please Select an Option",
    disabled,
}: ComboBoxProps) => {
    const id = useId()
    const [open, setOpen] = useState(false)

    const { control } = useFormContext()

    const {
        field: { onChange, value },
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
            required={required}
            disabled={disabled}
            className={className}
            id={id}
        >
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id={id}
                        variant="outline"
                        disabled={disabled}
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "h-auto w-full justify-between rounded-lg border border-gray-light/50 py-4 pl-8 pr-3 text-base font-normal leading-normal text-foreground disabled:border-slate-200 disabled:text-slate-300 disabled:opacity-100",
                            error &&
                            "border-accent-red ring-offset-accent-red focus-visible:ring-accent-red",
                            disabled && "cursor-not-allowed"
                        )}
                    >
                        {value
                            ? options.find((option) => option.value === value)?.label
                            : placeholder}

                        <Icons.chevronDown className="h-7 w-12" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="h-[250] w-full overflow-auto p-0">
                    <Command>
                        <CommandInput placeholder={searchText} />
                        <CommandEmpty>{noOptionsText}</CommandEmpty>
                        <CommandGroup>
                            <ScrollArea className="h-[200px]">
                                {options.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={(currentValue) => {
                                            onChange(currentValue === value ? "" : option.value)
                                            setOpen(false)
                                        }}
                                    >
                                        <Icons.check
                                            className={cn(
                                                "mr-2 size-4",
                                                value === option.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {option.label}
                                    </CommandItem>
                                ))}
                            </ScrollArea>
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </InputWrapper>
    )
}

export default ComboBox

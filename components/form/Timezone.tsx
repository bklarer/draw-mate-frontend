import { useMemo } from "react"
import { timezones } from "@/helpers/timezones"

import { cn } from "@/lib/utils"
import { Select } from "@/components/form/Select"

const TimezoneSelect = ({
    className,
    name = "timezone",
    firstSelectedText = "Select a timezone",
    disabled = false,
    required = false,
}: {
    className?: string
    name?: string
    firstSelectedText?: string
    disabled?: boolean
    required?: boolean
}) => {
    const defaultTimezone = useMemo(() => {
        if (typeof window === "undefined") return undefined
        return (
            timezones.find(
                (timezone) =>
                    timezone.value === Intl.DateTimeFormat().resolvedOptions().timeZone
            )?.value ?? undefined
        )
    }, [])

    console.log("default timezone", defaultTimezone)

    return (
        <Select
            required={required}
            disabled={disabled}
            name={name}
            options={timezones.map((timezone) => ({
                label: timezone.name,
                value: timezone.value,
            }))}
            className={cn(className)}
            firstSelectedText={firstSelectedText}
            defaultValue={defaultTimezone}
            label="Timezone"
        />
    )
}

export default TimezoneSelect

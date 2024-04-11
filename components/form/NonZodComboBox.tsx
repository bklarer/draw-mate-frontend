import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

interface Option {
  value: string;
  label: string;
}

interface NonZodComboBoxProps {
  options: Option[];
}

export function NonZodComboBox({ options }: NonZodComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  // Change value to an array of strings
  const [values, setValues] = React.useState<string[]>([]);

  // Function to toggle option's selection
  const toggleValue = (currentValue: string) => {
    setValues(
      values.includes(currentValue)
        ? values.filter((value) => value !== currentValue)
        : [...values, currentValue]
    );
  };

  // Generate display text based on selected values
  const displayText =
    values
      .map((value) => options.find((option) => option.value === value)?.label)
      .join(", ") || "Select option...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {displayText}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command
          filter={(value, search) => {
            if (value.includes(search)) return 1;
            return 0;
          }}
        >
          <CommandInput placeholder="Search option..." />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {options.map((option: Option) => (
              <CommandItem
                key={option.value}
                value={`${option.value} ${option.label}`}
                onSelect={() => {
                  toggleValue(option.value);
                  // Do not close the popover to allow multiple selections
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    values.includes(option.value) ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

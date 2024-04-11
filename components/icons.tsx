import {
  Check,
  Trash,
  Gift,
  LucideProps,
  type LucideIcon as LucideIconType,
} from "lucide-react";

// May need this later
// import { cn } from "@/lib/utils"

export type IconType = LucideIconType;

export const Icons = {
  check: Check,
  gift: Gift,
  trash: Trash,

  chevronDown: (props: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  ),
};

import {
  Check,
  Gift,
  LogOut,
  LucideProps,
  Trash,
  type LucideIcon as LucideIconType,
} from "lucide-react";

// May need this later
// import { cn } from "@/lib/utils"

export type IconType = LucideIconType;

export const Icons = {
  check: Check,
  gift: Gift,
  trash: Trash,
  logOut: LogOut,

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

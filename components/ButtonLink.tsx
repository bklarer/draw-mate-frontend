"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ButtonLinkProps {
  link?: string;
  children: React.ReactNode;
  action?: () => void;
}

export default function ButtonLink({
  link,
  children,
  action = () => {},
}: ButtonLinkProps) {
  const router = useRouter();
  return (
    <Button onClick={link ? () => router.push(link) : action}>
      {children}
    </Button>
  );
}

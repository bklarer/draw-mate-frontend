"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ButtonLinkProps {
  link: string;
  children: React.ReactNode;
}

export default function ButtonLink({ link, children }: ButtonLinkProps) {
  const router = useRouter();
  return <Button onClick={() => router.push(link)}>{children}</Button>;
}

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ArchiveLabelProps = {
  children: ReactNode;
  className?: string;
};

export function ArchiveLabel({ children, className }: ArchiveLabelProps) {
  return <span className={cn("archive-label text-secondary", className)}>{children}</span>;
}

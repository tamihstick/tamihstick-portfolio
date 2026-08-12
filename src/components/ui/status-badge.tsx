import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: string;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn("archive-status", className)} data-status={status.toLowerCase()}>
      {status}
    </span>
  );
}

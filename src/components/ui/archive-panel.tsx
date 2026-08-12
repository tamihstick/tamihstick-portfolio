import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ArchivePanelProps = {
  title?: string;
  eyebrow?: string;
  icon?: ReactNode;
  children: ReactNode;
  interactive?: boolean;
  className?: string;
};

export function ArchivePanel({
  title,
  eyebrow,
  icon,
  children,
  interactive = false,
  className,
}: ArchivePanelProps) {
  return (
    <section className={cn("archive-panel p-4 md:p-5", className)} data-interactive={interactive}>
      {(title || eyebrow || icon) && (
        <header className="archive-panel__header">
          {icon}
          <div className="flex flex-wrap items-center gap-2">
            {eyebrow ? <span className="archive-label text-muted">{eyebrow}</span> : null}
            {title ? <h2 className="archive-panel__title">{title}</h2> : null}
          </div>
        </header>
      )}
      {children}
    </section>
  );
}

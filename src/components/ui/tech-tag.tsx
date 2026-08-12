import type { ReactNode } from "react";

type TechTagProps = {
  children: ReactNode;
};

export function TechTag({ children }: TechTagProps) {
  return <span className="archive-tag">{children}</span>;
}

import type { ReactNode } from "react";
import "./styles/globals.css";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}

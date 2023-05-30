import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <main className="py-4">{children}</main>;
}

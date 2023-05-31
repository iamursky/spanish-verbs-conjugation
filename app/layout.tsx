import "./global.css";

import type { ReactNode } from "react";

import Link from "next/link";

export const metadata = {
  title: "Spanish Verb Conjugations",
  description: "Spanish Verb Conjugations",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark:bg-neutral-900 dark:text-gray-400">
      <body className="container mx-auto py-8 font-serif">
        <header className="py-4 print:hidden">
          <Link href="/">
            <h1 className="text-xl font-bold">Spanish Verb Conjugations</h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}

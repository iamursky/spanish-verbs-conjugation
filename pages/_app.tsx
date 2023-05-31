import "@/styles/global.css";

import type { AppProps } from "next/app";

import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="py-4">
      <header className="py-4 print:hidden">
        <Link href="/">
          <h1 className="text-xl font-bold">Spanish Verb Conjugations</h1>
        </Link>
      </header>
      <Component {...pageProps} />
    </main>
  );
}

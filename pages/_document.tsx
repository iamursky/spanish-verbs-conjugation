import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark:bg-neutral-900 dark:text-gray-400">
      <Head />
      <body className="container mx-auto py-8 font-serif">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

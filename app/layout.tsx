import "./global.css";

export const metadata = {
  title: "Spanish Verbs Conjugation",
  description: "Spanish Verbs Conjugation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

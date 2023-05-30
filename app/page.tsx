import Link from "next/link";

export default function Home() {
  return (
    <main className="py-4">
      <ul className="list-disc pl-4">
        <li>
          <Link href="/verb/ser" className="underline">
            Ser (to be)
          </Link>
        </li>
      </ul>
    </main>
  );
}

import { VERB_MAP } from "@/constants";
import Link from "next/link";

export default function Page() {
  return (
    <main className="py-4">
      <ul className="list-disc pl-4">
        {Object.values(VERB_MAP).map((verb) => (
          <li key={verb.SPANISH}>
            <Link
              className="underline"
              href={`/${normalizeSpanishWord(verb.SPANISH.toLowerCase())}`}
            >
              {`${verb.SPANISH} (${verb.ENGLISH})`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

function normalizeSpanishWord(word: string) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

import type { Verb } from "@/types";

import Link from "next/link";

export type VerbListProps = {
  verbs: Verb[];
};

export function VerbList({ verbs }: VerbListProps) {
  return (
    <ul className="verb-list">
      {verbs.map((verb) => (
        <li key={verb.SPANISH} className="verb-list-item">
          <Link href={`/${normalizeSpanishWord(verb.SPANISH.toLowerCase())}`}>
            <p aria-label="Verb in Spanish" className="spanish">
              {verb.SPANISH}
            </p>
            <p aria-label="Verb translation in English" className="english">
              {verb.ENGLISH}
            </p>
          </Link>
        </li>
      ))}

      <style jsx>{`
        .verb-list {
          list-style: none;
          padding: 0;
        }

        .verb-list-item {
          padding: var(--spacing-2);
        }

        .verb-list-item:not(:first-child) {
          border-top: 1px solid var(--color-1);
        }

        .spanish {
          font-weight: 700;
        }

        .english {
          color: var(--color-3);
        }
      `}</style>
    </ul>
  );
}

function normalizeSpanishWord(word: string) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

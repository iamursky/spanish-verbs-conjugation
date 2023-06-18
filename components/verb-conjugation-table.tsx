import { Conjugations, PRONOUN, Pronoun, PronounLabels, TENSE, Tense, TenseLabels } from "@/types";

type VerbConjugationTableProps = {
  conjugations: Conjugations;
};

export function VerbConjugationTable({ conjugations }: VerbConjugationTableProps) {
  return (
    <section className="tense">
      <table>
        <thead>
          <td />
          {Object.keys(PRONOUN).map((pronoun) => (
            <td key={pronoun} style={{ fontWeight: 600 }}>
              {PRONOUN_LABELS[pronoun as Pronoun]["SPANISH"]}
            </td>
          ))}
        </thead>
        <tbody>
          {Object.keys(TENSE).map((tense) => (
            <tr key={tense}>
              <td>
                <div style={{ fontWeight: 600 }}>{TENSE_LABELS[tense as Tense]["SPANISH"]}</div>
                <div className="english-tense">{TENSE_LABELS[tense as Tense]["ENGLISH"]}</div>
              </td>
              {Object.keys(PRONOUN).map((pronoun) => (
                <td key={`${tense}.${pronoun}`}>
                  <div>{conjugations[tense as Tense][pronoun as Pronoun]["SPANISH"]}</div>
                  <div className="english-conjugation">
                    {conjugations[tense as Tense][pronoun as Pronoun]["ENGLISH"]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        table {
          max-width: 100%;
          border-collapse: collapse;
        }

        table th,
        table td {
          border: 1px solid var(--color-2);
          padding: var(--spacing-2);
        }

        @media screen() {
          table th,
          table td {
            white-space: nowrap;
          }
        }

        .english-tense,
        .english-conjugation {
          color: var(--color-3);
          font-size: 0.9em;
        }
      `}</style>
    </section>
  );
}

const PRONOUN_LABELS: PronounLabels = {
  YO: {
    SPANISH: "Yo",
    ENGLISH: "I",
  },
  TU: {
    SPANISH: "Tú",
    ENGLISH: "You",
  },
  EL: {
    SPANISH: "Él / Ella",
    ENGLISH: "He / She",
  },
  ELLOS: {
    SPANISH: "Ellos/as",
    ENGLISH: "They",
  },
  NOSOTROS: {
    SPANISH: "Nosotros/as",
    ENGLISH: "We",
  },
  VOSOTROS: {
    SPANISH: "Vosotros/as",
    ENGLISH: "You (plural)",
  },
} as const;

const TENSE_LABELS: TenseLabels = {
  PRESENT_SIMPLE: {
    ENGLISH: "Present Simple",
    SPANISH: "Presente Indicativo",
  },
  PRESENT_PERFECT: {
    ENGLISH: "Present Perfect",
    SPANISH: "Pretérito Perfecto Compuesto",
  },
  PAST_SIMPLE: {
    ENGLISH: "Past Simple",
    SPANISH: "Pretérito Perfecto Simple",
  },
  PAST_PERFECT: {
    ENGLISH: "Past Perfect",
    SPANISH: "Pretérito Pluscuamperfecto",
  },
  FUTURE_SIMPLE: {
    ENGLISH: "Future Simple",
    SPANISH: "Futuro Simple",
  },
  CONDICIONAL_SIMPLE: {
    ENGLISH: "Conditional Simple",
    SPANISH: "Condicional Simple",
  },
} as const;

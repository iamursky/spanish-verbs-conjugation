import { Conjugations, PRONOUN, Pronoun, PronounLabels, TENSE, Tense, TenseLabels } from "@/types";

type VerbConjugationTableProps = {
  conjugations: Conjugations;
};

export function VerbConjugationTable({ conjugations }: VerbConjugationTableProps) {
  return (
    <div className="wrapper">
      {Object.keys(TENSE).map((tense) => (
        <section key={tense} className="tense">
          <h2 className="tense-name">{TENSE_LABELS[tense as Tense]["ENGLISH"]}</h2>
          <table>
            <thead>
              <tr>
                {Object.keys(PRONOUN).map((pronoun) => (
                  <td key={pronoun}>
                    <p className="spanish-label">{PRONOUN_LABELS[pronoun as Pronoun]["SPANISH"]}</p>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(PRONOUN).map((pronoun) => (
                <td key={`${tense}.${pronoun}`}>
                  <p className="spanish-conjugation">
                    {conjugations[tense as Tense][pronoun as Pronoun]["SPANISH"]}
                  </p>
                  <p className="english-conjugation">
                    {conjugations[tense as Tense][pronoun as Pronoun]["ENGLISH"]}
                  </p>
                </td>
              ))}
            </tbody>
          </table>
        </section>
      ))}

      <style jsx>{`
        .tense {
          margin-bottom: var(--spacing-5);
        }

        .tense-name {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: var(--spacing-2);
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
          display: block;
          table-layout: fixed;
          width: 100%;
        }

        table th,
        table td {
          border: 1px solid var(--color-5);
          padding: var(--spacing-1) var(--spacing-2);
          vertical-align: top;
          white-space: nowrap;
        }

        .english-conjugation {
          color: var(--color-7);
          font-size: 0.85em;
        }
      `}</style>
    </div>
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
  PRESENTE: {
    SPANISH: "Presente",
    ENGLISH: "Present Simple",
  },
  PERFECTO_COMPUESTO: {
    SPANISH: "Perfecto Compuesto",
    ENGLISH: "Present Perfect",
  },
  PRETERITO_INDEFINIDO: {
    SPANISH: "Pretérito Indefinido",
    ENGLISH: "Past Simple",
  },
  PRETERITO_PLUSCUAMPERFECTO: {
    SPANISH: "Pretérito Pluscuamperfecto",
    ENGLISH: "Past Perfect",
  },
  FUTURO_SIMPLE: {
    SPANISH: "Futuro Simple",
    ENGLISH: "Future Simple",
  },
  CONDICIONAL_SIMPLE: {
    SPANISH: "Condicional Simple",
    ENGLISH: "Conditional Simple",
  },
  // CONDICIONAL_COMPUESTO: {
  //   SPANISH: "Condicional Compuesto",
  //   ENGLISH: "Conditional Perfect",
  // },
  // FUTURO_COMPUESTO: {
  //   SPANISH: "Futuro Compuesto",
  //   ENGLISH: "Future Perfect",
  // },
  // PRETERITO_IMPERFECTO: {
  //   SPANISH: "Pretérito Imperfecto",
  //   ENGLISH: "Past Progressive",
  // },
} as const;

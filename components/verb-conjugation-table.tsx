import { Conjugations, PRONOUN, Pronoun, PronounLabels, TENSE, Tense, TenseLabels } from "@/types";

type VerbConjugationTableProps = {
  conjugations: Conjugations;
};

export function VerbConjugationTable({ conjugations }: VerbConjugationTableProps) {
  return (
    <div className="wrapper">
      {Object.keys(TENSE).map((tense) => (
        <section key={tense} className="tense">
          <div className="table-container">
            <table>
              <caption aria-label="Tense name">{TENSE_LABELS[tense as Tense]["SPANISH"]}</caption>
              <thead>
                <tr>
                  {Object.keys(PRONOUN).map((pronoun) => (
                    <td key={pronoun}>
                      <p className="spanish-label">
                        {PRONOUN_LABELS[pronoun as Pronoun]["SPANISH"]}
                      </p>
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
          </div>
        </section>
      ))}

      <style jsx>{`
        .tense {
          margin-bottom: var(--spacing-6);
        }

        .tense-name {
          font-size: 1.3rem;
          margin-bottom: var(--spacing-3);
        }

        .spanish-tense-name,
        .english-tense-name {
          display: block;
        }

        .spanish-tense-name {
          line-height: 1.3rem;
        }

        .english-tense-name {
          color: var(--color-6);
          font-weight: 400;
          font-size: 1.2rem;
        }

        .table-container {
          width: 100%;
          overflow-x: auto;
        }

        .spanish-label {
          font-weight: 700;
        }

        .english-label {
          color: var(--color-5);
          font-size: 0.9em;
        }

        .spanish-conjugation {
        }

        .english-conjugation {
          color: var(--color-6);
          font-size: 0.9em;
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
  NOSOTROS: {
    SPANISH: "Nosotros/as",
    ENGLISH: "We",
  },
  VOSOTROS: {
    SPANISH: "Vosotros/as",
    ENGLISH: "You (plural)",
  },
  ELLOS: {
    SPANISH: "Ellos/as",
    ENGLISH: "They",
  },
} as const;

const TENSE_LABELS: TenseLabels = {
  CONDICIONAL_COMPUESTO: {
    SPANISH: "Condicional Compuesto",
    ENGLISH: "Conditional Perfect",
  },
  CONDICIONAL_SIMPLE: {
    SPANISH: "Condicional Simple",
    ENGLISH: "Conditional Simple",
  },
  FUTURO_COMPUESTO: {
    SPANISH: "Futuro Compuesto",
    ENGLISH: "Future Perfect",
  },
  FUTURO_SIMPLE: {
    SPANISH: "Futuro Simple",
    ENGLISH: "Future Simple",
  },
  PERFECTO_COMPUESTO: {
    SPANISH: "Perfecto Compuesto",
    ENGLISH: "Present Perfect",
  },
  PRESENTE: {
    SPANISH: "Presente",
    ENGLISH: "Present Simple",
  },
  PRETERITO_IMPERFECTO: {
    SPANISH: "Pretérito Imperfecto",
    ENGLISH: "Past Progressive",
  },
  PRETERITO_INDEFINIDO: {
    SPANISH: "Pretérito Indefinido",
    ENGLISH: "Past Simple",
  },
  PRETERITO_PLUSCUAMPERFECTO: {
    SPANISH: "Pretérito Pluscuamperfecto",
    ENGLISH: "Past Perfect",
  },
} as const;

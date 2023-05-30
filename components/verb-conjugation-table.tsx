import type { Conjugations, Pronoun, PronounLabels, Tense, TenseLabels, Verb } from "@/types";

import { PRONOUN, TENSE } from "@/types";

type VerbConjugationTableProps = {
  verb: Verb;
  conjugations: Conjugations;
};

export function VerbConjugationTable({ verb, conjugations }: VerbConjugationTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th className="pr-2 text-left">
            <p className="font-bold">{verb["SPANISH"]}</p>
            <p className="font-normal text-sm italic text-gray-500">{verb["ENGLISH"]}</p>
          </th>
          {Object.keys(PRONOUN).map((pronoun) => (
            <td key={pronoun} className="p-2">
              <p className="font-bold">{PRONOUN_LABELS[pronoun as Pronoun]["SPANISH"]}</p>
              <p className="text-sm italic text-gray-500">
                {PRONOUN_LABELS[pronoun as Pronoun]["ENGLISH"]}
              </p>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(TENSE).map((tense) => (
          <tr key={tense}>
            <td className="pr-2">
              <p className="font-bold">{TENSE_LABELS[tense as Tense]["SPANISH"]}</p>
              <p className="text-sm italic text-gray-500">
                {TENSE_LABELS[tense as Tense]["ENGLISH"]}
              </p>
            </td>
            {Object.keys(PRONOUN).map((pronoun) => (
              <td key={`${tense}.${pronoun}`} className="p-2">
                <p>{conjugations[tense as Tense][pronoun as Pronoun]["SPANISH"]}</p>
                <p className="text-sm italic text-gray-500">
                  {conjugations[tense as Tense][pronoun as Pronoun]["ENGLISH"]}
                </p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
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
    ENGLISH: "They (plrl)",
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

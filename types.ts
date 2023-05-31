export const LANGUAGE = {
  SPANISH: "SPANISH",
  ENGLISH: "ENGLISH",
} as const;

export const TENSE = {
  PRESENTE: "PRESENTE",
  PERFECTO_COMPUESTO: "PERFECTO_COMPUESTO",

  PRETERITO_INDEFINIDO: "PRETERITO_INDEFINIDO",
  PRETERITO_PLUSCUAMPERFECTO: "PRETERITO_PLUSCUAMPERFECTO",
  PRETERITO_IMPERFECTO: "PRETERITO_IMPERFECTO",

  FUTURO_SIMPLE: "FUTURO_SIMPLE",
  FUTURO_COMPUESTO: "FUTURO_COMPUESTO",

  CONDICIONAL_SIMPLE: "CONDICIONAL_SIMPLE",
  CONDICIONAL_COMPUESTO: "CONDICIONAL_COMPUESTO",
} as const;

export const PRONOUN = {
  YO: "YO",
  TU: "TU",
  EL: "EL",
  ELLOS: "ELLOS",
  NOSOTROS: "NOSOTROS",
  VOSOTROS: "VOSOTROS",
} as const;

export type Language = keyof typeof LANGUAGE;

export type Tense = keyof typeof TENSE;

export type Pronoun = keyof typeof PRONOUN;

export type Verb = {
  [language in Language]: string;
};

export type Conjugations = {
  [tense in Tense]: {
    [pronoun in Pronoun]: Verb;
  };
};

export type PronounLabels = {
  [pronoun in Pronoun]: {
    [language in Language]: string;
  };
};

export type TenseLabels = {
  [verbTense in Tense]: {
    [language in Language]: string;
  };
};

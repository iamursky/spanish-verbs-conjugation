export const LANGUAGE = {
  SPANISH: "SPANISH",
  ENGLISH: "ENGLISH",
} as const;

export const TENSE = {
  PRESENT_SIMPLE: "PRESENT_SIMPLE",
  PRESENT_PERFECT: "PRESENT_PERFECT",
  PAST_SIMPLE: "PAST_SIMPLE",
  PAST_PERFECT: "PAST_PERFECT",
  FUTURE_SIMPLE: "FUTURE_SIMPLE",
  CONDICIONAL_SIMPLE: "CONDICIONAL_SIMPLE",
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

export type VerbMap = {
  [verb: string]: Verb;
};

export type VerbConjugationMap = {
  [verb: string]: Conjugations;
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

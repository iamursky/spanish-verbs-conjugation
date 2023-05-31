import type { Conjugations, Verb } from "@/types";

import { VerbConjugationTable } from "@/components/verb-conjugation-table";

export default function Page() {
  return <VerbConjugationTable verb={SER_VERB} conjugations={SER_VERB_CONJUGATIONS} />;
}

const SER_VERB: Verb = {
  SPANISH: "Ser",
  ENGLISH: "To be (permanent)",
};

const SER_VERB_CONJUGATIONS: Conjugations = {
  PRESENTE: {
    YO: {
      SPANISH: "Soy",
      ENGLISH: "I am",
    },
    TU: {
      SPANISH: "Eres",
      ENGLISH: "You are",
    },
    EL: {
      SPANISH: "Es",
      ENGLISH: "He is",
    },
    ELLOS: {
      SPANISH: "Son",
      ENGLISH: "They are",
    },
    NOSOTROS: {
      SPANISH: "Somos",
      ENGLISH: "We are",
    },
    VOSOTROS: {
      SPANISH: "Sois",
      ENGLISH: "You are",
    },
  },

  PERFECTO_COMPUESTO: {
    YO: {
      SPANISH: "He sido",
      ENGLISH: "I have been",
    },
    TU: {
      SPANISH: "Has sido",
      ENGLISH: "You have been",
    },
    EL: {
      SPANISH: "Ha sido",
      ENGLISH: "He has been",
    },
    ELLOS: {
      SPANISH: "Han sido",
      ENGLISH: "They have been",
    },
    NOSOTROS: {
      SPANISH: "Hemos sido",
      ENGLISH: "We have been",
    },
    VOSOTROS: {
      SPANISH: "Habéis sido",
      ENGLISH: "You have been",
    },
  },

  PRETERITO_INDEFINIDO: {
    YO: {
      SPANISH: "Fui",
      ENGLISH: "I was",
    },
    TU: {
      SPANISH: "Fuiste",
      ENGLISH: "You were",
    },
    EL: {
      SPANISH: "Fue",
      ENGLISH: "He were",
    },
    ELLOS: {
      SPANISH: "Fueron",
      ENGLISH: "They were",
    },
    NOSOTROS: {
      SPANISH: "Fuimos",
      ENGLISH: "We were",
    },
    VOSOTROS: {
      SPANISH: "Fuisteis",
      ENGLISH: "You were",
    },
  },

  PRETERITO_PLUSCUAMPERFECTO: {
    YO: {
      SPANISH: "Había sido",
      ENGLISH: "I had been",
    },
    TU: {
      SPANISH: "Habías sido",
      ENGLISH: "You had been",
    },
    EL: {
      SPANISH: "Había sido",
      ENGLISH: "He had been",
    },
    ELLOS: {
      SPANISH: "Habían sido",
      ENGLISH: "They had been",
    },
    NOSOTROS: {
      SPANISH: "Habíamos sido",
      ENGLISH: "We had been",
    },
    VOSOTROS: {
      SPANISH: "Habías sido",
      ENGLISH: "You had been",
    },
  },

  PRETERITO_IMPERFECTO: {
    YO: {
      SPANISH: "Era",
      ENGLISH: "I used to be",
    },
    TU: {
      SPANISH: "Eras",
      ENGLISH: "You used to be",
    },
    EL: {
      SPANISH: "Era",
      ENGLISH: "He used to be",
    },
    ELLOS: {
      SPANISH: "Eran",
      ENGLISH: "They used to be",
    },
    NOSOTROS: {
      SPANISH: "Éramos",
      ENGLISH: "We used to be",
    },
    VOSOTROS: {
      SPANISH: "Erais",
      ENGLISH: "You used to be",
    },
  },

  FUTURO_SIMPLE: {
    YO: {
      SPANISH: "Seré",
      ENGLISH: "I will be",
    },
    TU: {
      SPANISH: "Serás",
      ENGLISH: "You will be",
    },
    EL: {
      SPANISH: "Será",
      ENGLISH: "He will be",
    },
    ELLOS: {
      SPANISH: "Serán",
      ENGLISH: "They will be",
    },
    NOSOTROS: {
      SPANISH: "Seremos",
      ENGLISH: "We will be",
    },
    VOSOTROS: {
      SPANISH: "Seréis",
      ENGLISH: "You will be",
    },
  },

  FUTURO_COMPUESTO: {
    YO: {
      SPANISH: "Habré sido",
      ENGLISH: "I will have been",
    },
    TU: {
      SPANISH: "Habrás sido",
      ENGLISH: "You will have been",
    },
    EL: {
      SPANISH: "Habrá sido",
      ENGLISH: "He will have been",
    },
    ELLOS: {
      SPANISH: "Habrán sido",
      ENGLISH: "They will have been",
    },
    NOSOTROS: {
      SPANISH: "Habremos sido",
      ENGLISH: "We will have been",
    },
    VOSOTROS: {
      SPANISH: "Habréis sido",
      ENGLISH: "You will have been",
    },
  },

  CONDICIONAL_SIMPLE: {
    YO: {
      SPANISH: "Sería",
      ENGLISH: "I would be",
    },
    TU: {
      SPANISH: "Serías",
      ENGLISH: "You would be",
    },
    EL: {
      SPANISH: "Sería",
      ENGLISH: "He would be",
    },
    ELLOS: {
      SPANISH: "Serían",
      ENGLISH: "They would be",
    },
    NOSOTROS: {
      SPANISH: "Seríamos",
      ENGLISH: "We would be",
    },
    VOSOTROS: {
      SPANISH: "Serías",
      ENGLISH: "You would be",
    },
  },

  CONDICIONAL_COMPUESTO: {
    YO: {
      SPANISH: "Habría sido",
      ENGLISH: "I would have been",
    },
    TU: {
      SPANISH: "Habrías sido",
      ENGLISH: "You would have been",
    },
    EL: {
      SPANISH: "Habría sido",
      ENGLISH: "He would have been",
    },
    ELLOS: {
      SPANISH: "Habrían sido",
      ENGLISH: "They would have been",
    },
    NOSOTROS: {
      SPANISH: "Habríamos sido",
      ENGLISH: "We would have been",
    },
    VOSOTROS: {
      SPANISH: "Habrías sido",
      ENGLISH: "You would have been",
    },
  },
} as const;

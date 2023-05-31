import type { Conjugations, Pronoun, VerbConjugationMap, VerbMap } from "../types";

import { test } from "@playwright/test";
import { writeFile } from "fs";
import { resolve } from "path";
import { PRONOUN } from "../types";

const VERBS_ROW_SELECTOR: string = `tr[class="hover:bg-yellow-100 dark:hover:bg-gray-600"]`;
const VERB_ELEMENT_SELECTOR = `td[class="border-b border-gray-200 px-3 sm:px-4 py-2"]`;
const VERB_TRANSLATION_SELECTOR = `td[class="border-b border-gray-200 px-3 sm:px-4 py-2 italic"]`;

const PRESENTE_ROW_SELECTOR = `div[id="present-indicative"] tbody tr`;
const PERFECTO_COMPUESTO_ROW_SELECTOR = `div[id="present-perfect-indicative"] tbody tr`;
const PRETERITO_INDEFINIDO_ROW_SELECTOR = `div[id="preterite-indicative"] tbody tr`;
const PRETERITO_PLUSCUAMPERFECTO_ROW_SELECTOR = `div[id="past-perfect-indicative"] tbody tr`;
const PRETERITO_IMPERFECTO_ROW_SELECTOR = `div[id="preterite-indicative"] tbody tr`;
const FUTURO_SIMPLE_ROW_SELECTOR = `div[id="future-indicative"] tbody tr`;
const FUTURO_COMPUESTO_ROW_SELECTOR = `div[id="future-perfect-indicative"] tbody tr`;
const CONDICIONAL_SIMPLE_ROW_SELECTOR = `div[id="conditional-indicative"] tbody tr`;
const CONDICIONAL_COMPUESTO_ROW_SELECTOR = `div[id="conditional-perfect-indicative"] tbody tr`;

const SPANISH_COL_SELECTOR = `td[class="spanish-conjugation py-3 md:py-4 px-2 md:px-6 border-b dark:border-grey-400 whitespace-nowrap"]`;
const ENGLISH_COL_SELECTOR = `td[class="py-3 md:py-4 px-2 md:px-6 border-b dark:border-grey-400 italic"]`;

function indexToPronoun(index: number): Pronoun {
  return (
    {
      0: PRONOUN.YO,
      1: PRONOUN.TU,
      2: PRONOUN.EL,
      3: PRONOUN.NOSOTROS,
      4: PRONOUN.VOSOTROS,
      5: PRONOUN.ELLOS,
    }[index] || "YO"
  );
}

function normalizeSpanishWord(word: string) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

test("crawl verbs", async ({ page }) => {
  /* Crawl Verbs */

  await page.goto("https://ellaverbs.com/spanish-verbs/");

  const verbs: VerbMap = {};
  const verbRows = await page.$$(VERBS_ROW_SELECTOR);

  // const firstTwoVerbRows = verbRows.slice(0, 30);
  for (const tableRow of verbRows) {
    const verbElement = await tableRow.$(VERB_ELEMENT_SELECTOR);
    const translationElement = await tableRow.$(VERB_TRANSLATION_SELECTOR);
    if (!verbElement || !translationElement) throw new Error("Verb elements not found");

    const verb = await verbElement.innerText();
    const translation = await translationElement.innerText();
    const normalizedVerb = normalizeSpanishWord(verb.toLowerCase());

    verbs[normalizedVerb] = {
      SPANISH: verb,
      ENGLISH: translation,
    };
  }

  /* Crawl Conjugations */

  let crawledConjugations: VerbConjugationMap = {};

  for (const normalizedVerb of Object.keys(verbs)) {
    await page.goto(`https://ellaverbs.com/spanish-verbs/${normalizedVerb}-conjugation/`);

    const presenteRows = await page.$$(PRESENTE_ROW_SELECTOR);
    const perfectoCompuestoRows = await page.$$(PERFECTO_COMPUESTO_ROW_SELECTOR);
    const preteritoIndefinidoRows = await page.$$(PRETERITO_INDEFINIDO_ROW_SELECTOR);
    const preteritoPluscuamperfectoRows = await page.$$(PRETERITO_PLUSCUAMPERFECTO_ROW_SELECTOR);
    const preteritoImperfectoRows = await page.$$(PRETERITO_IMPERFECTO_ROW_SELECTOR);
    const futuroSimpleRows = await page.$$(FUTURO_SIMPLE_ROW_SELECTOR);
    const futuroCompuestoRows = await page.$$(FUTURO_COMPUESTO_ROW_SELECTOR);
    const condicionalSimpleRows = await page.$$(CONDICIONAL_SIMPLE_ROW_SELECTOR);
    const condicionalCompuestoRows = await page.$$(CONDICIONAL_COMPUESTO_ROW_SELECTOR);

    // prettier-ignore
    for (let i = 0, j = 6; i < j; i++) {
      if (!crawledConjugations[normalizedVerb]) {
        crawledConjugations[normalizedVerb] = EMPTY_CONFUGATIONS;
      }

      const presenteSpanishCol = await presenteRows[i].$(SPANISH_COL_SELECTOR);
      const presenteEnglishCol = await presenteRows[i].$(ENGLISH_COL_SELECTOR);

      const perfectoCompuestoSpanishCol = await perfectoCompuestoRows[i].$(SPANISH_COL_SELECTOR);
      const perfectoCompuestoEnglishCol = await perfectoCompuestoRows[i].$(ENGLISH_COL_SELECTOR);

      const preteritoIndefinidoSpanishCol = await preteritoIndefinidoRows[i].$(SPANISH_COL_SELECTOR);
      const preteritoIndefinidoEnglishCol = await preteritoIndefinidoRows[i].$(ENGLISH_COL_SELECTOR);

      const preteritoPluscuamperfectoSpanishCol = await preteritoPluscuamperfectoRows[i].$(SPANISH_COL_SELECTOR);
      const preteritoPluscuamperfectoEnglishCol = await preteritoPluscuamperfectoRows[i].$(ENGLISH_COL_SELECTOR);

      const preteritoImperfectoSpanishCol = await preteritoImperfectoRows[i].$(SPANISH_COL_SELECTOR);
      const preteritoImperfectoEnglishCol = await preteritoImperfectoRows[i].$(ENGLISH_COL_SELECTOR);

      const futuroSimpleSpanishCol = await futuroSimpleRows[i].$(SPANISH_COL_SELECTOR);
      const futuroSimpleEnglishCol = await futuroSimpleRows[i].$(ENGLISH_COL_SELECTOR);

      const futuroCompuestoSpanishCol = await futuroCompuestoRows[i].$(SPANISH_COL_SELECTOR);
      const futuroCompuestoEnglishCol = await futuroCompuestoRows[i].$(ENGLISH_COL_SELECTOR);

      const condicionalSimpleSpanishCol = await condicionalSimpleRows[i].$(SPANISH_COL_SELECTOR);
      const condicionalSimpleEnglishCol = await condicionalSimpleRows[i].$(ENGLISH_COL_SELECTOR);

      const condicionalCompuestoSpanishCol = await condicionalCompuestoRows[i].$(SPANISH_COL_SELECTOR);
      const condicionalCompuestoEnglishCol = await condicionalCompuestoRows[i].$(ENGLISH_COL_SELECTOR);

      const pronoun = indexToPronoun(i);
      crawledConjugations[normalizedVerb]["PRESENTE"][pronoun]["SPANISH"] = await presenteSpanishCol!.innerText();
      crawledConjugations[normalizedVerb]["PRESENTE"][pronoun]["ENGLISH"] = await presenteEnglishCol!.innerText();

      crawledConjugations[normalizedVerb]["PERFECTO_COMPUESTO"][pronoun]["SPANISH"] = await perfectoCompuestoSpanishCol!.innerText();
      crawledConjugations[normalizedVerb]["PERFECTO_COMPUESTO"][pronoun]["ENGLISH"] = await perfectoCompuestoEnglishCol!.innerText();

      crawledConjugations[normalizedVerb]["PRETERITO_INDEFINIDO"][pronoun]["SPANISH"] = await preteritoIndefinidoSpanishCol!.innerText();
      crawledConjugations[normalizedVerb]["PRETERITO_INDEFINIDO"][pronoun]["ENGLISH"] = await preteritoIndefinidoEnglishCol!.innerText();

      crawledConjugations[normalizedVerb]["PRETERITO_PLUSCUAMPERFECTO"][pronoun]["SPANISH"] = await preteritoPluscuamperfectoSpanishCol!.innerText();
      crawledConjugations[normalizedVerb]["PRETERITO_PLUSCUAMPERFECTO"][pronoun]["ENGLISH"] = await preteritoPluscuamperfectoEnglishCol!.innerText();

      crawledConjugations[normalizedVerb]["PRETERITO_IMPERFECTO"][pronoun]["SPANISH"] = await preteritoImperfectoSpanishCol!.innerText();
      crawledConjugations[normalizedVerb]["PRETERITO_IMPERFECTO"][pronoun]["ENGLISH"] = await preteritoImperfectoEnglishCol!.innerText();

      crawledConjugations[normalizedVerb]["FUTURO_SIMPLE"][pronoun]["SPANISH"] = await futuroSimpleSpanishCol!.innerText();
      crawledConjugations[normalizedVerb]["FUTURO_SIMPLE"][pronoun]["ENGLISH"] = await futuroSimpleEnglishCol!.innerText();

      crawledConjugations[normalizedVerb]["FUTURO_COMPUESTO"][pronoun]["SPANISH"] = await futuroCompuestoSpanishCol!.innerText();
      crawledConjugations[normalizedVerb]["FUTURO_COMPUESTO"][pronoun]["ENGLISH"] = await futuroCompuestoEnglishCol!.innerText();

      crawledConjugations[normalizedVerb]["CONDICIONAL_SIMPLE"][pronoun]["SPANISH"] = await condicionalSimpleSpanishCol!.innerText();
      crawledConjugations[normalizedVerb]["CONDICIONAL_SIMPLE"][pronoun]["ENGLISH"] = await condicionalSimpleEnglishCol!.innerText();

      crawledConjugations[normalizedVerb]["CONDICIONAL_COMPUESTO"][pronoun]["SPANISH"] = await condicionalCompuestoSpanishCol!.innerText();
      crawledConjugations[normalizedVerb]["CONDICIONAL_COMPUESTO"][pronoun]["ENGLISH"] = await condicionalCompuestoEnglishCol!.innerText();

      writeFile(
        resolve(__dirname + `/../data/${normalizedVerb}.json`),
        JSON.stringify(crawledConjugations[normalizedVerb], null, 2),
        { flag: "w" },
        () => {}
      );
    }
  }

  // console.log(crawledConjugations);

  // for (const [normalizedVerb, conjugation] of Object.entries(crawledConjugations)) {
  //   writeFile(
  //     resolve(__dirname + `/../data/${normalizedVerb}.json`),
  //     JSON.stringify(conjugation, null, 2),
  //     { flag: "w" },
  //     (err) => {
  //       if (err) console.error(err);
  //     },
  //   );
  // }
});

const EMPTY_CONFUGATIONS: Conjugations = {
  PRESENTE: {
    YO: {
      SPANISH: "",
      ENGLISH: "",
    },
    TU: {
      SPANISH: "",
      ENGLISH: "",
    },
    EL: {
      SPANISH: "",
      ENGLISH: "",
    },
    ELLOS: {
      SPANISH: "",
      ENGLISH: "",
    },
    NOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
    VOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
  },

  PERFECTO_COMPUESTO: {
    YO: {
      SPANISH: "",
      ENGLISH: "",
    },
    TU: {
      SPANISH: "",
      ENGLISH: "",
    },
    EL: {
      SPANISH: "",
      ENGLISH: "",
    },
    ELLOS: {
      SPANISH: "",
      ENGLISH: "",
    },
    NOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
    VOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
  },

  PRETERITO_INDEFINIDO: {
    YO: {
      SPANISH: "",
      ENGLISH: "",
    },
    TU: {
      SPANISH: "",
      ENGLISH: "",
    },
    EL: {
      SPANISH: "",
      ENGLISH: "",
    },
    ELLOS: {
      SPANISH: "",
      ENGLISH: "",
    },
    NOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
    VOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
  },

  PRETERITO_PLUSCUAMPERFECTO: {
    YO: {
      SPANISH: "",
      ENGLISH: "",
    },
    TU: {
      SPANISH: "",
      ENGLISH: "",
    },
    EL: {
      SPANISH: "",
      ENGLISH: "",
    },
    ELLOS: {
      SPANISH: "",
      ENGLISH: "",
    },
    NOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
    VOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
  },

  PRETERITO_IMPERFECTO: {
    YO: {
      SPANISH: "",
      ENGLISH: "",
    },
    TU: {
      SPANISH: "",
      ENGLISH: "",
    },
    EL: {
      SPANISH: "",
      ENGLISH: "",
    },
    ELLOS: {
      SPANISH: "",
      ENGLISH: "",
    },
    NOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
    VOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
  },

  FUTURO_SIMPLE: {
    YO: {
      SPANISH: "",
      ENGLISH: "",
    },
    TU: {
      SPANISH: "",
      ENGLISH: "",
    },
    EL: {
      SPANISH: "",
      ENGLISH: "",
    },
    ELLOS: {
      SPANISH: "",
      ENGLISH: "",
    },
    NOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
    VOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
  },

  FUTURO_COMPUESTO: {
    YO: {
      SPANISH: "",
      ENGLISH: "",
    },
    TU: {
      SPANISH: "",
      ENGLISH: "",
    },
    EL: {
      SPANISH: "",
      ENGLISH: "",
    },
    ELLOS: {
      SPANISH: "",
      ENGLISH: "",
    },
    NOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
    VOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
  },

  CONDICIONAL_SIMPLE: {
    YO: {
      SPANISH: "",
      ENGLISH: "",
    },
    TU: {
      SPANISH: "",
      ENGLISH: "",
    },
    EL: {
      SPANISH: "",
      ENGLISH: "",
    },
    ELLOS: {
      SPANISH: "",
      ENGLISH: "",
    },
    NOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
    VOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
  },

  CONDICIONAL_COMPUESTO: {
    YO: {
      SPANISH: "",
      ENGLISH: "",
    },
    TU: {
      SPANISH: "",
      ENGLISH: "",
    },
    EL: {
      SPANISH: "",
      ENGLISH: "",
    },
    ELLOS: {
      SPANISH: "",
      ENGLISH: "",
    },
    NOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
    VOSOTROS: {
      SPANISH: "",
      ENGLISH: "",
    },
  },
};

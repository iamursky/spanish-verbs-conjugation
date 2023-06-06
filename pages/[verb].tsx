import type { Conjugations, Verb } from "@/types";
import type { GetStaticPaths, GetStaticProps } from "next";

import { VerbConjugationTable } from "@/components/verb-conjugation-table";
import { VERBS_MAP } from "@/constants";
import { readFileSync } from "fs";
import { resolve } from "path";

type PageProps = {
  verb: Verb;
  conjugations: Conjugations;
};

type PageParams = {
  verb: string;
};

export default function Page({ verb, conjugations }: PageProps) {
  return (
    <main className="container">
      <VerbConjugationTable conjugations={conjugations} />

      <style jsx>{`
        .container {
          padding-top: var(--spacing-6);
          padding-bottom: var(--spacing-6);
        }
      `}</style>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: Object.keys(VERBS_MAP).map((normalizedVerb) => `/${normalizedVerb}`),
  };
};

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({ params }) => {
  if (!params?.verb) throw new Error("No verb param passed");

  const fileContent = readFileSync(resolve(`${process.cwd()}/data/${params.verb}.json`));
  const conjugations = JSON.parse(fileContent.toString());

  return { props: { verb: VERBS_MAP[params.verb], conjugations } };
};

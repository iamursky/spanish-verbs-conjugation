import { VerbList } from "@/components/verb-list";
import { VERBS } from "@/constants";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

export default function Page() {
  const router = useRouter();

  const [searchString, setSearchString] = useState<string>();

  useEffect(() => {
    const url = new URL(`${location.origin}/${router.asPath}`);
    const searchString = url.searchParams.get("search");
    setSearchString(searchString || "");
  }, []);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextSearchString = event.target.value || "";

      const urlSearchParams = new URLSearchParams();

      if (nextSearchString !== "") {
        urlSearchParams.append("search", nextSearchString);
      }

      const searchParams = urlSearchParams.toString();
      router.push(searchParams !== "" ? `?${urlSearchParams.toString()}` : "", undefined, {
        shallow: true,
      });

      setSearchString(nextSearchString);
    },
    [router],
  );

  const filteredVerbs = useMemo(() => {
    if (searchString === undefined) return [];
    if (searchString === "") return VERBS;

    const lowercaseSearchString = searchString.toLowerCase();

    return VERBS.filter(
      (verb) =>
        verb.SPANISH.includes(lowercaseSearchString) ||
        verb.ENGLISH.includes(lowercaseSearchString),
    );
  }, [searchString]);

  return searchString !== undefined ? (
    <main className="container">
      <div className="search">
        <input
          autoFocus
          className="input"
          placeholder="Start typing the verb..."
          value={searchString}
          onChange={handleChange}
        />
      </div>

      <VerbList verbs={filteredVerbs} />

      <style jsx>{`
        .search {
          position: sticky;
          top: 0;

          padding: var(--spacing-3) 0;
          background-color: var(--color-1);
        }

        input {
          width: 100%;
          padding: var(--spacing-2) var(--spacing-3);

          color: var(--color-9);
          border-radius: var(--spacing-1);
          border: 1px solid var(--color-4);
          background-color: var(--color-1);
        }

        input::placeholder {
          color: var(--color-6);
        }
      `}</style>
    </main>
  ) : null;
}

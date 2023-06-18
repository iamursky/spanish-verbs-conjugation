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
    <main role="main">
      <div className="search">
        <input
          autoFocus
          className="input"
          placeholder="Start typing the verb..."
          value={searchString}
          onChange={handleChange}
        />
        <div className="divider" />
      </div>

      <VerbList verbs={filteredVerbs} />

      <style jsx>{`
        main {
          padding: 0 var(--spacing-3) var(--spacing-3);
        }

        .search {
          background-color: white;
          position: sticky;
          top: 0;
          padding: var(--spacing-3) 0;
          border-bottom: 1px solid var(--color-2);
        }

        input {
          border-radius: var(--spacing-1);
          border: 1px solid var(--color-2);
          padding: var(--spacing-2);
          width: 100%;
        }

        input::placeholder {
          color: var(--color-3);
        }
      `}</style>
    </main>
  ) : null;
}

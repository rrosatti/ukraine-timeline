import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import EraJumpNav from "./components/EraJumpNav";
import Timeline from "./components/Timeline";
import {
  CULTURE_ITEMS,
  PILLARS,
  getItemId,
  getLegacyItemId,
} from "./data/culture";
import type { Category } from "./data/culture";
import type { Locale } from "./data/localization";
import { SITE_COPY } from "./data/siteCopy";

const LOCALE_STORAGE_KEY = "ukraine-timeline.locale";

const isLocale = (value: string | null): value is Locale =>
  value === "en" || value === "uk";

const readStoredLocale = (): Locale => {
  if (typeof window === "undefined") {
    return "en";
  }

  try {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(storedLocale) ? storedLocale : "en";
  } catch {
    return "en";
  }
};

export const App = () => {
  const [currentFilter, setCurrentFilter] = useState<Category | "all">("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [locale, setLocale] = useState<Locale>(readStoredLocale);

  useEffect(() => {
    document.documentElement.lang = locale;

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Ignore storage failures and keep the selected locale in memory.
    }
  }, [locale]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) {
        setExpandedIndex(null);
        return;
      }

      const itemIndex = CULTURE_ITEMS.findIndex(
        (item) => getItemId(item) === hash || getLegacyItemId(item) === hash,
      );
      if (itemIndex === -1) return;

      const item = CULTURE_ITEMS[itemIndex];
      setCurrentFilter((prev) =>
        prev === "all" || prev === item.category ? prev : "all",
      );
      setExpandedIndex(itemIndex);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function handleToggleExpand(index: number) {
    setExpandedIndex((prev) => {
      const nextIndex = prev === index ? null : index;

      if (nextIndex === null) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      } else {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}#${getItemId(CULTURE_ITEMS[nextIndex])}`,
        );
      }

      return nextIndex;
    });
  }

  const copy = SITE_COPY[locale];

  return (
    <div className="ukraine-root">
      <Hero locale={locale} onLocaleChange={setLocale} />
      <FilterBar
        items={CULTURE_ITEMS}
        currentFilter={currentFilter}
        locale={locale}
        onFilterChange={setCurrentFilter}
      />
      <EraJumpNav
        pillars={PILLARS}
        items={CULTURE_ITEMS}
        currentFilter={currentFilter}
        locale={locale}
      />
      <Timeline
        items={CULTURE_ITEMS}
        pillars={PILLARS}
        currentFilter={currentFilter}
        locale={locale}
        expandedIndex={expandedIndex}
        onToggleExpand={handleToggleExpand}
      />
      <div className="footer-bar">
        <div className="footer-motto">{copy.footerMotto}</div>
        <div className="footer-note">{copy.footerNote}</div>
        <a
          href="https://github.com/rrosatti/ukraine-timeline"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.814-.26.814-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          {copy.githubLinkLabel}
        </a>
      </div>
    </div>
  );
};

export default App;

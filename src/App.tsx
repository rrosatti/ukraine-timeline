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
      </div>
    </div>
  );
};

export default App;

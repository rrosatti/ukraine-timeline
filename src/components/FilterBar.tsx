import React from "react";
import { CATEGORY_LABELS } from "../data/culture";
import type { CultureItem, Category } from "../data/culture";
import type { Locale } from "../data/localization";
import { SITE_COPY } from "../data/siteCopy";

interface FilterBarProps {
  items: CultureItem[];
  currentFilter: Category | "all";
  locale: Locale;
  onFilterChange: (filter: Category | "all") => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  items,
  currentFilter,
  locale,
  onFilterChange,
}: FilterBarProps) => {
  const copy = SITE_COPY[locale];
  const counts: Record<string, number> = { all: items.length };
  for (const e of items) {
    counts[e.category] = (counts[e.category] || 0) + 1;
  }

  const filters: { key: Category | "all"; typeClass: string }[] = [
    { key: "all", typeClass: "" },
    { key: "cuisine", typeClass: "cuisine" },
    { key: "tradition", typeClass: "tradition" },
    { key: "literature", typeClass: "literature" },
    { key: "art", typeClass: "art" },
    { key: "music", typeClass: "music" },
    { key: "geography", typeClass: "geography" },
    { key: "architecture", typeClass: "architecture" },
  ];

  return (
    <div className="filter-bar">
      {filters.map(({ key, typeClass }) => {
        const isActive = currentFilter === key;
        const className = ["filter-btn", typeClass, isActive ? "active" : ""]
          .filter(Boolean)
          .join(" ");
        const label =
          key === "all"
            ? copy.filters.all
            : CATEGORY_LABELS[locale][key];

        return (
          <button
            key={key}
            className={className}
            onClick={() => onFilterChange(key)}
          >
            {label} ({counts[key]})
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;

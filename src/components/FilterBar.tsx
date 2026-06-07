import React from 'react';
import type { CultureItem, Category } from "../data/culture";

interface FilterBarProps {
  items: CultureItem[];
  currentFilter: Category | "all";
  onFilterChange: (filter: Category | "all") => void;
}

const filters: { key: Category | "all"; label: string; typeClass: string }[] =
  [
    { key: "all", label: "All", typeClass: "" },
    { key: "cuisine", label: "Cuisine", typeClass: "cuisine" },
    { key: "tradition", label: "Traditions", typeClass: "tradition" },
    { key: "literature", label: "Literature", typeClass: "literature" },
    { key: "art", label: "Art", typeClass: "art" },
    { key: "music", label: "Music", typeClass: "music" },
    { key: "geography", label: "Geography", typeClass: "geography" },
    { key: "architecture", label: "Architecture", typeClass: "architecture" },
  ];

export const FilterBar: React.FC<FilterBarProps> = ({
  items,
  currentFilter,
  onFilterChange,
}: FilterBarProps) => {
  const counts: Record<string, number> = { all: items.length };
  for (const e of items) {
    counts[e.category] = (counts[e.category] || 0) + 1;
  }

  return (
    <div className="filter-bar">
      {filters.map(({ key, label, typeClass }) => {
        const isActive = currentFilter === key;
        const className = ["filter-btn", typeClass, isActive ? "active" : ""]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={key}
            className={className}
            onClick={() => onFilterChange(key)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;

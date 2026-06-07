import React from 'react';
import type { HistoricalEvent, Category } from "../data/events";

interface FilterBarProps {
  events: HistoricalEvent[];
  currentFilter: Category | "all";
  onFilterChange: (filter: Category | "all") => void;
}

const filters: { key: Category | "all"; label: string; typeClass: string }[] =
  [
    { key: "all", label: "All Events", typeClass: "" },
    { key: "ruler", label: "Leaders", typeClass: "ruler" },
    { key: "culture", label: "Culture", typeClass: "culture" },
    { key: "milestone", label: "Milestones", typeClass: "milestone" },
    { key: "conflict", label: "Conflicts", typeClass: "conflict" },
  ];

export const FilterBar: React.FC<FilterBarProps> = ({
  events,
  currentFilter,
  onFilterChange,
}: FilterBarProps) => {
  const counts: Record<string, number> = { all: events.length };
  for (const e of events) {
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
            {label} <span className="count-badge">{counts[key] || 0}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;

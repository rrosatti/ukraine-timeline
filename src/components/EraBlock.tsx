import React from "react";
import { getItemId } from "../data/culture";
import type { CulturalPillar, CultureItem, Category } from "../data/culture";
import type { Locale } from "../data/localization";
import { SITE_COPY } from "../data/siteCopy";
import EventCard from "./EventCard";

interface EraBlockProps {
  pillar: CulturalPillar;
  items: CultureItem[];
  originalIndices: number[];
  currentFilter: Category | "all";
  locale: Locale;
  expandedIndex: number | null;
  onToggleExpand: (index: number) => void;
}

export const EraBlock: React.FC<EraBlockProps> = ({
  pillar,
  items,
  originalIndices,
  currentFilter,
  locale,
  expandedIndex,
  onToggleExpand,
}: EraBlockProps) => {
  const copy = SITE_COPY[locale];
  const hasVisible = items.some(
    (e) => currentFilter === "all" || e.category === currentFilter,
  );
  const visibleCount = items.filter(
    (item) => currentFilter === "all" || item.category === currentFilter,
  ).length;

  if (!hasVisible) return null;

  return (
    <section className="era-block" id={pillar.id}>
      <div className="era-header">
        <div className="era-label">{pillar.label[locale]}</div>
        <div className="era-intro">{pillar.intro[locale]}</div>
        <div
          className="era-meta"
          style={{ marginTop: "0.5rem", fontSize: "13px", color: "#8c8279" }}
        >
          <span>
            {visibleCount}{" "}
            {visibleCount === 1
              ? copy.categoryCountLabelSingle
              : copy.categoryCountLabelPlural}
          </span>
        </div>
      </div>
      {items.map((item, i) => {
        const globalIndex = originalIndices[i];
        const hidden =
          currentFilter !== "all" && item.category !== currentFilter;

        if (hidden) return null;

        return (
          <EventCard
            key={getItemId(item)}
            itemId={getItemId(item)}
            item={item}
            locale={locale}
            isExpanded={expandedIndex === globalIndex}
            onToggle={() => onToggleExpand(globalIndex)}
          />
        );
      })}
    </section>
  );
};

export default EraBlock;

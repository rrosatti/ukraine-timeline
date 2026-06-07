import React from "react";
import type { CultureItem, CulturalPillar, Category } from "../data/culture";
import type { Locale } from "../data/localization";
import EraBlock from "./EraBlock";

interface TimelineProps {
  items: CultureItem[];
  pillars: CulturalPillar[];
  currentFilter: Category | "all";
  locale: Locale;
  expandedIndex: number | null;
  onToggleExpand: (index: number) => void;
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  pillars,
  currentFilter,
  locale,
  expandedIndex,
  onToggleExpand,
}: TimelineProps) => {
  return (
    <div className="timeline-wrap">
      <div className="timeline-line" />
      {pillars.map((pillar) => {
        const pillarItems: CultureItem[] = [];
        const originalIndices: number[] = [];

        items.forEach((item, i) => {
          if (item.pillarId === pillar.id) {
            pillarItems.push(item);
            originalIndices.push(i);
          }
        });

        if (pillarItems.length === 0) return null;

        return (
          <EraBlock
            key={pillar.id}
            pillar={pillar}
            items={pillarItems}
            originalIndices={originalIndices}
            currentFilter={currentFilter}
            locale={locale}
            expandedIndex={expandedIndex}
            onToggleExpand={onToggleExpand}
          />
        );
      })}
    </div>
  );
};

export default Timeline;

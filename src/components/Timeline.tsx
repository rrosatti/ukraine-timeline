import React from 'react';
import type { HistoricalEvent, Era, Category } from "../data/events";
import EraBlock from "./EraBlock";

interface TimelineProps {
  events: HistoricalEvent[];
  eras: Era[];
  currentFilter: Category | "all";
  expandedIndex: number | null;
  onToggleExpand: (index: number) => void;
}

export const Timeline: React.FC<TimelineProps> = ({
  events,
  eras,
  currentFilter,
  expandedIndex,
  onToggleExpand,
}: TimelineProps) => {
  return (
    <div className="timeline-wrap">
      <div className="timeline-line" />
      {eras.map((era) => {
        const eraEvents: HistoricalEvent[] = [];
        const originalIndices: number[] = [];

        events.forEach((e, i) => {
          if (e.eraId === era.id) {
            eraEvents.push(e);
            originalIndices.push(i);
          }
        });

        if (eraEvents.length === 0) return null;

        return (
          <EraBlock
            key={era.id}
            era={era}
            events={eraEvents}
            originalIndices={originalIndices}
            currentFilter={currentFilter}
            expandedIndex={expandedIndex}
            onToggleExpand={onToggleExpand}
          />
        );
      })}
    </div>
  );
};

export default Timeline;

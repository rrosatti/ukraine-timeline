import React from "react";
import { getEventId } from "../data/events";
import type { Era, HistoricalEvent, Category } from "../data/events";
import EventCard from "./EventCard";

interface EraBlockProps {
  era: Era;
  events: HistoricalEvent[];
  originalIndices: number[];
  currentFilter: Category | "all";
  expandedIndex: number | null;
  onToggleExpand: (index: number) => void;
}

export const EraBlock: React.FC<EraBlockProps> = ({
  era,
  events,
  originalIndices,
  currentFilter,
  expandedIndex,
  onToggleExpand,
}: EraBlockProps) => {
  const [title, range] = era.label.split("·").map((part) => part.trim());
  const hasVisible = events.some(
    (e) => currentFilter === "all" || e.category === currentFilter,
  );
  const visibleCount = events.filter(
    (event) => currentFilter === "all" || event.category === currentFilter,
  ).length;

  if (!hasVisible) return null;

  return (
    <section className="era-block" id={era.id}>
      <div className="era-header">
        <div className="era-label">{title}</div>
        <div className="era-intro">{era.intro}</div>
        <div className="era-meta" style={{ marginTop: '0.5rem', fontSize: '13px', color: '#8c8279' }}>
          <span>{visibleCount} events in this period</span>
        </div>
      </div>
      {events.map((event, i) => {
        const globalIndex = originalIndices[i];
        const hidden = currentFilter !== "all" && event.category !== currentFilter;

        if (hidden) return null;

        return (
          <EventCard
            key={getEventId(event)}
            eventId={getEventId(event)}
            event={event}
            isExpanded={expandedIndex === globalIndex}
            onToggle={() => onToggleExpand(globalIndex)}
          />
        );
      })}
    </section>
  );
};

export default EraBlock;

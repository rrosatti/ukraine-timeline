import React from 'react';
import type { Era, Category, HistoricalEvent } from "../data/events";

interface EraJumpNavProps {
  eras: Era[];
  events: HistoricalEvent[];
  currentFilter: Category | "all";
}

export const EraJumpNav: React.FC<EraJumpNavProps> = ({
  eras,
  events,
  currentFilter,
}: EraJumpNavProps) => {
  const visibleEras = eras.filter((era) =>
    events.some((event) => {
      const startYear = typeof event.year === 'number' ? event.year : parseInt(event.year.split('-')[0]);
      const matchesEra = startYear >= (era.years[0] as number) && startYear <= (era.years[1] as number);
      const matchesFilter = currentFilter === "all" || event.category === currentFilter;
      return matchesEra && matchesFilter;
    }),
  );

  return (
    <nav className="era-jump-nav" aria-label="Jump to era">
      <div className="era-jump-label">Jump to era</div>
      <div className="era-jump-links">
        {visibleEras.map((era) => {
          const [title] = era.label.split("·").map((part) => part.trim());

          return (
            <a key={era.id} className="era-jump-link" href={`#${era.id}`}>
              {title}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default EraJumpNav;

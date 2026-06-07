import React from 'react';
import type { CulturalPillar, CultureItem, Category } from "../data/culture";

interface EraJumpNavProps {
  pillars: CulturalPillar[];
  items: CultureItem[];
  currentFilter: Category | "all";
}

export const EraJumpNav: React.FC<EraJumpNavProps> = ({
  pillars,
  items,
  currentFilter,
}: EraJumpNavProps) => {
  const visiblePillars = pillars.filter((pillar) =>
    items.some((item) => {
      const matchesPillar = item.pillarId === pillar.id;
      const matchesFilter = currentFilter === "all" || item.category === currentFilter;
      return matchesPillar && matchesFilter;
    }),
  );

  return (
    <nav className="era-jump-nav" aria-label="Jump to category">
      <div className="era-jump-label">Jump to</div>
      <div className="era-jump-links">
        {visiblePillars.map((pillar) => {
          return (
            <a key={pillar.id} className="era-jump-link" href={`#${pillar.id}`}>
              {pillar.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default EraJumpNav;

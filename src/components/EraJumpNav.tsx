import React from "react";
import type { CulturalPillar, CultureItem, Category } from "../data/culture";
import type { Locale } from "../data/localization";
import { SITE_COPY } from "../data/siteCopy";

interface EraJumpNavProps {
  pillars: CulturalPillar[];
  items: CultureItem[];
  currentFilter: Category | "all";
  locale: Locale;
}

export const EraJumpNav: React.FC<EraJumpNavProps> = ({
  pillars,
  items,
  currentFilter,
  locale,
}: EraJumpNavProps) => {
  const copy = SITE_COPY[locale];
  const visiblePillars = pillars.filter((pillar) =>
    items.some((item) => {
      const matchesPillar = item.pillarId === pillar.id;
      const matchesFilter =
        currentFilter === "all" || item.category === currentFilter;
      return matchesPillar && matchesFilter;
    }),
  );

  return (
    <nav className="era-jump-nav" aria-label={copy.jumpToLabel}>
      <div className="era-jump-label">{copy.jumpToLabel}</div>
      <div className="era-jump-links">
        {visiblePillars.map((pillar) => {
          return (
            <a key={pillar.id} className="era-jump-link" href={`#${pillar.id}`}>
              {pillar.label[locale]}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default EraJumpNav;

import React from "react";
import { CATEGORY_LABELS, type Category } from "../data/culture";
import type { CultureItem } from "../data/culture";
import { localize } from "../data/localization";
import type { Locale } from "../data/localization";
import { SITE_COPY } from "../data/siteCopy";
import ChevronIcon from "./ChevronIcon";

const badgeClassMap: Record<Category, string> = {
  cuisine: "badge-cuisine",
  tradition: "badge-tradition",
  literature: "badge-literature",
  art: "badge-art",
  music: "badge-music",
  geography: "badge-geography",
  architecture: "badge-architecture",
  history: "badge-history",
};

interface EventCardProps {
  itemId: string;
  item: CultureItem;
  locale: Locale;
  isExpanded: boolean;
  onToggle: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  itemId,
  item,
  locale,
  isExpanded,
  onToggle,
}: EventCardProps) => {
  const copy = SITE_COPY[locale];
  const className = `event type-${item.category}${item.featured ? " featured" : ""}${isExpanded ? " expanded" : ""}${item.image ? " has-image" : ""}`;
  const stats = item.stats?.[locale] || [];
  const [leadStat, ...otherStats] = stats;
  const details = item.details?.[locale] || [];

  function handleShare(eventClick: React.MouseEvent<HTMLAnchorElement>) {
    eventClick.stopPropagation();
  }

  return (
    <div className={className} id={itemId} onClick={onToggle}>
      <div className="event-year">{item.year || ""}</div>
      <div className="event-dot-wrap">
        <div className="event-dot" />
      </div>
      <div className="event-card">
        <div className="event-content-wrapper">
          {item.image && (
            <div className="event-image-container">
              <img
                src={item.image}
                alt={localize(item.title, locale)}
                className="event-image"
              />
            </div>
          )}
          <div className="event-main-content">
            <div className="event-topline">
              <span className={`event-badge ${badgeClassMap[item.category]}`}>
                {CATEGORY_LABELS[locale][item.category]}
              </span>
              <div className="event-actions">
                <a
                  className="event-share-link"
                  href={`#${itemId}`}
                  onClick={handleShare}
                  aria-label={`${copy.copyableLinkLabel}: ${localize(item.title, locale)}`}
                  title={copy.copyableLinkLabel}
                ></a>
                <ChevronIcon expanded={isExpanded} />
              </div>
            </div>
            <div className="event-title-row">
              <div className="event-title">
                {localize(item.title, locale)}
                {item.featured && (
                  <span className="featured-flag">{copy.featuredLabel}</span>
                )}
              </div>
            </div>
            <div className="event-summary">
              {localize(item.summary, locale)}
            </div>
          </div>
        </div>

        <div className="event-expand">
          <div className="event-body">
            {details.length > 0 && (
              <ul className="event-details-list">
                {details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}

            {leadStat && (
              <div className="event-lead-stat">
                <span className="event-lead-stat-label">{leadStat.label}</span>
                <strong className="event-lead-stat-value">
                  {leadStat.value}
                </strong>
              </div>
            )}

            {otherStats.length > 0 && (
              <div className="stat-pills">
                {otherStats.map((stat) => (
                  <div className="stat-pill" key={stat.label}>
                    {stat.label}: <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            )}

            {item.sources && item.sources.length > 0 && (
              <div className="event-sources">
                <span className="event-sources-label">
                  {copy.sourcesLabel}:
                </span>
                <div className="event-sources-links">
                  {item.sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {localize(source.title, locale)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

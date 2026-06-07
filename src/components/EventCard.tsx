import React from "react";
import type { CultureItem, Category } from "../data/culture";
import ChevronIcon from "./ChevronIcon";

const badgeClassMap: Record<Category, string> = {
  cuisine: "badge-cuisine",
  tradition: "badge-tradition",
  literature: "badge-literature",
  art: "badge-art",
  music: "badge-music",
  geography: "badge-geography",
  architecture: "badge-architecture",
};

const badgeTextMap: Record<Category, string> = {
  cuisine: "Cuisine",
  tradition: "Tradition",
  literature: "Literature",
  art: "Art",
  music: "Music",
  geography: "Geography",
  architecture: "Architecture",
};

interface EventCardProps {
  itemId: string;
  item: CultureItem;
  isExpanded: boolean;
  onToggle: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  itemId,
  item,
  isExpanded,
  onToggle,
}: EventCardProps) => {
  const className = `event type-${item.category}${item.featured ? " featured" : ""}${isExpanded ? " expanded" : ""}${item.image ? " has-image" : ""}`;
  const stats = item.stats || [];
  const [leadStat, ...otherStats] = stats;

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
              <img src={item.image} alt={item.title} className="event-image" />
            </div>
          )}
          <div className="event-main-content">
            <div className="event-topline">
              <span className={`event-badge ${badgeClassMap[item.category]}`}>
                {badgeTextMap[item.category]}
              </span>
              <div className="event-actions">
                <a
                  className="event-share-link"
                  href={`#${itemId}`}
                  onClick={handleShare}
                  aria-label={`Link to ${item.title}`}
                  title="Copyable link"
                ></a>
                <ChevronIcon expanded={isExpanded} />
              </div>
            </div>
            <div className="event-title-row">
              <div className="event-title">
                {item.title}
                {item.featured && (
                  <span className="featured-flag">Featured</span>
                )}
              </div>
            </div>
            <div className="event-summary">{item.summary}</div>
          </div>
        </div>

        <div className="event-expand">
          <div className="event-body">
            {item.details && item.details.length > 0 && (
              <ul className="event-details-list">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}

            {leadStat && (
              <div className="event-lead-stat">
                <span className="event-lead-stat-label">{leadStat.l}</span>
                <strong className="event-lead-stat-value">{leadStat.v}</strong>
              </div>
            )}

            {otherStats.length > 0 && (
              <div className="stat-pills">
                {otherStats.map((stat) => (
                  <div className="stat-pill" key={stat.l}>
                    {stat.l}: <strong>{stat.v}</strong>
                  </div>
                ))}
              </div>
            )}

            {item.sources && item.sources.length > 0 && (
              <div
                className="event-sources"
                style={{ marginTop: "1rem", fontSize: "13px" }}
              >
                <span
                  style={{
                    color: "#8c8279",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Sources:
                </span>
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "0.5rem" }}
                >
                  {item.sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--ua-blue)",
                        textDecoration: "none",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {source.title}
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

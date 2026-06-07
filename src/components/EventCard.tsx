import React from 'react';
import type { HistoricalEvent, Category } from "../data/events";
import ChevronIcon from "./ChevronIcon";

const badgeClassMap: Record<Category, string> = {
  ruler: "badge-ruler",
  culture: "badge-culture",
  milestone: "badge-milestone",
  conflict: "badge-conflict",
};

const badgeTextMap: Record<Category, string> = {
  ruler: "Leader",
  culture: "Culture",
  milestone: "Milestone",
  conflict: "Conflict",
};

interface EventCardProps {
  eventId: string;
  event: HistoricalEvent;
  isExpanded: boolean;
  onToggle: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  eventId,
  event,
  isExpanded,
  onToggle,
}: EventCardProps) => {
  const className = `event type-${event.category}${event.featured ? " featured" : ""}${isExpanded ? " expanded" : ""}`;
  const stats = event.stats || [];
  const [leadStat, ...otherStats] = stats;

  function handleShare(eventClick: React.MouseEvent<HTMLAnchorElement>) {
    eventClick.stopPropagation();
  }

  return (
    <div className={className} id={eventId} onClick={onToggle}>
      <div className="event-year">{event.year}</div>
      <div className="event-dot-wrap">
        <div className="event-dot" />
      </div>
      <div className="event-card">
        <div className="event-topline">
          <span className={`event-badge ${badgeClassMap[event.category]}`}>
            {badgeTextMap[event.category]}
          </span>
          <div className="event-actions">
            <a
              className="event-share-link"
              href={`#${eventId}`}
              onClick={handleShare}
              aria-label={`Link to ${event.title}`}
              title="Copyable link"
            >
              #
            </a>
            <ChevronIcon expanded={isExpanded} />
          </div>
        </div>
        <div className="event-title-row">
          <div className="event-title">
            {event.title}
            {event.featured && <span className="featured-flag">Featured</span>}
          </div>
        </div>
        <div className="event-summary">{event.summary}</div>
        
        <div className="event-expand">
          <div className="event-body">
            {event.details && event.details.length > 0 && (
              <ul className="event-details-list">
                {event.details.map((detail, idx) => (
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

            {event.sources && event.sources.length > 0 && (
              <div className="event-sources" style={{ marginTop: '1rem', fontSize: '13px' }}>
                <span style={{ color: '#8c8279', textTransform: 'uppercase', letterSpacing: '1px' }}>Sources:</span>
                <div style={{ display: 'flex', gap: '10px', marginTop: '0.5rem' }}>
                  {event.sources.map((source, idx) => (
                    <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }} onClick={(e) => e.stopPropagation()}>
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

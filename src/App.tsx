import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import EraJumpNav from "./components/EraJumpNav";
import Timeline from "./components/Timeline";
import { events, eras, getEventId } from "./data/events";
import type { Category } from "./data/events";

export const App = () => {
  const [currentFilter, setCurrentFilter] = useState<Category | "all">("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) {
        setExpandedIndex(null);
        return;
      }

      const eventIndex = events.findIndex(
        (event) => getEventId(event) === hash,
      );
      if (eventIndex === -1) return;

      const event = events[eventIndex];
      setCurrentFilter((prev) =>
        prev === "all" || prev === event.category ? prev : "all",
      );
      setExpandedIndex(eventIndex);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function handleToggleExpand(index: number) {
    setExpandedIndex((prev) => {
      const nextIndex = prev === index ? null : index;

      if (nextIndex === null) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      } else {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}#${getEventId(events[nextIndex])}`,
        );
      }

      return nextIndex;
    });
  }

  return (
    <div className="ukraine-root">
      <Hero />
      <FilterBar
        events={events}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />
      <EraJumpNav
        eras={eras}
        events={events}
        currentFilter={currentFilter}
      />
      <Timeline
        events={events}
        eras={eras}
        currentFilter={currentFilter}
        expandedIndex={expandedIndex}
        onToggleExpand={handleToggleExpand}
      />
      <div className="footer-bar">
        Slava Ukraini — Glory to Ukraine
      </div>
    </div>
  );
};

export default App;

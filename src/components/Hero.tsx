import React from "react";
import tridentImg from "../assets/ukrainian-trident.png";
import type { Locale } from "../data/localization";
import { LOCALES } from "../data/localization";
import { SITE_COPY } from "../data/siteCopy";

interface HeroProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export const Hero: React.FC<HeroProps> = ({ locale, onLocaleChange }) => {
  const copy = SITE_COPY[locale];

  return (
    <div className="hero">
      <div
        className="language-toggle"
        role="group"
        aria-label={copy.languageToggleLabel}
      >
        {LOCALES.map((option) => {
          const isActive = option === locale;

          return (
            <button
              key={option}
              type="button"
              className={
                isActive ? "language-toggle-btn active" : "language-toggle-btn"
              }
              onClick={() => onLocaleChange(option)}
              aria-pressed={isActive}
            >
              {copy.languageNames[option]}
            </button>
          );
        })}
      </div>
      <div className="trident-icon">
        <img
          src={tridentImg}
          alt={copy.tridentAlt}
          style={{ width: "80px", height: "auto" }}
        />
      </div>
      <h1>{copy.heroTitle}</h1>
      <p className="sub">{copy.heroSubtitle}</p>
      <div className="meta-stats">
        {copy.metaStats.map((stat) => (
          <div className="meta-stat" key={stat.label}>
            <div className="num">{stat.num}</div>
            <div className="lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

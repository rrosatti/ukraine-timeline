import React from 'react';

const metaStats = [
  { num: "1,000+", label: "Years of History" },
  { num: "24", label: "UNESCO Assets" },
  { num: "7", label: "Bordering Countries" },
  { num: "1", label: "Unbroken Spirit" },
];

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="trident-icon">
        <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--accent-blue)' }}>
          <path d="M50 10L40 30H60L50 10Z" />
          <path d="M30 40V70H40V40H30Z" />
          <path d="M60 40V70H70V40H60Z" />
          <path d="M45 40V80H55V40H45Z" />
          <path d="M30 80H70V90H30V80Z" />
        </svg>
      </div>
      <h1>Ukraine</h1>
      <p className="sub">A Journey Through Time, Culture, and Resilience</p>
      <div className="meta-stats">
        {metaStats.map((stat) => (
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

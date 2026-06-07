import React from 'react';
import tridentImg from '../assets/ukrainian-trident.png';

const metaStats = [
  { num: "1,000+", label: "Years of History" },
  { num: "24", label: "UNESCO Assets" },
  { num: "7", label: "Bordering Countries" },
];

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="trident-icon">
        <img src={tridentImg} alt="Ukrainian Trident" style={{ width: '80px', height: 'auto' }} />
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

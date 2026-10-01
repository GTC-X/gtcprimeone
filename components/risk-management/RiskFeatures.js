'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Icon } from '../shared/PageUi';
import { riskFeatureIcons } from './featureIcons';

function RiskFeatureCard({ item, icon, index }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`risk-feature-card${hovered ? ' is-hovered' : ''}`}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -6 }}
    >
      <motion.span
        className="icon-tile risk-feature-icon-tile"
        aria-hidden="true"
        animate={reduced ? undefined : { scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <Icon icon={icon} />
      </motion.span>
      <h3>{item.title}</h3>
      {item.text ? <p>{item.text}</p> : null}
    </motion.div>
  );
}

export default function RiskFeatures({ features }) {
  return (
    <section className="section section-border shell">
      <div className="risk-features">
        {features.map((item, index) => (
          <RiskFeatureCard
            key={item.title}
            item={item}
            icon={riskFeatureIcons[index]}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

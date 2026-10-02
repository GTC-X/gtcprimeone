'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Icon, Reveal, Kicker, SplitHeading } from '../shared/PageUi';
import { riskPillarIcons } from './pillarIcons';

function PillarCard({ item, icon, index }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.article
      className={`risk-pillar-card${hovered ? ' is-hovered' : ''}`}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -4 }}
    >
      <span className="risk-pillar-card-glow" aria-hidden="true" />
      <span className="risk-pillar-icon" aria-hidden="true">
        <Icon icon={icon} />
      </span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </motion.article>
  );
}

export default function RiskPillars({ section }) {
  if (!section?.items?.length) return null;

  return (
    <section className="audience-section risk-pillars-section" aria-labelledby="risk-pillars-heading">
      <div className="section shell">
        <Reveal className="risk-section-head">
          <Kicker>{section.kicker}</Kicker>
          <SplitHeading className="mt-4" id="risk-pillars-heading" {...section.title} />
          <p className="risk-section-intro">{section.intro}</p>
        </Reveal>
        <div className="risk-pillars-grid">
          {section.items.map((item, index) => (
            <PillarCard key={item.title} item={item} icon={riskPillarIcons[index]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

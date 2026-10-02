'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Icon, Reveal, Kicker, SplitHeading } from '../shared/PageUi';
import { riskFeatureIcons } from './featureIcons';

function CapabilityTile({ item, icon, index }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="risk-capability-tile"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="risk-capability-tile-bg"
        aria-hidden="true"
        initial={false}
        animate={
          reduced
            ? { opacity: hovered ? 1 : 0 }
            : { opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.94 }
        }
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="risk-capability-tile-inner">
        <motion.span
          className="risk-capability-icon"
          aria-hidden="true"
          animate={reduced ? undefined : { scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon icon={icon} />
        </motion.span>
        <h4>{item.title}</h4>
        {item.text ? <p>{item.text}</p> : null}
      </div>
    </motion.div>
  );
}

export default function RiskCapabilities({ section }) {
  const features = section?.features ?? [];
  if (!features.length) return null;

  return (
    <section className="section section-border shell risk-capabilities" aria-labelledby="risk-capabilities-heading">
      <Reveal className="risk-section-head">
        <Kicker>{section.kicker}</Kicker>
        <SplitHeading className="mt-4" id="risk-capabilities-heading" {...section.title} />
        <p className="risk-section-intro">{section.intro}</p>
      </Reveal>
      <div className="risk-capabilities-grid">
        {features.map((item, index) => (
          <CapabilityTile key={item.title} item={item} icon={riskFeatureIcons[index]} index={index} />
        ))}
      </div>
    </section>
  );
}

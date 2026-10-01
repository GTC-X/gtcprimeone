'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Reveal } from '../shared/PageUi';
import { analyticsImages } from './analyticsImages';

function AnalyticsItem({ item, icons, index }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`connectivity-analytics-item${hovered ? ' is-hovered' : ''}`}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -4 }}
    >
      <motion.span
        className="connectivity-analytics-icon"
        aria-hidden="true"
        animate={reduced ? undefined : { scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          key={hovered ? 'hover' : 'default'}
          src={hovered ? icons.hoverSrc : icons.src}
          alt=""
          width={40}
          height={40}
          className="connectivity-analytics-icon-img"
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
          decoding="async"
        />
      </motion.span>
      <span className="connectivity-analytics-label">{item.title}</span>
    </motion.div>
  );
}

export default function ConnectivityAnalytics({ section }) {
  return (
    <div className="audience-section">
      <section className="section shell connectivity-block" aria-labelledby="connectivity-analytics-title">
        <Reveal className="connectivity-block-head">
          <h2 id="connectivity-analytics-title" className="connectivity-block-title">
            {section.title}
          </h2>
          <p className="connectivity-block-lead">{section.description}</p>
        </Reveal>
        <div className="connectivity-analytics-grid">
          {section.items.map((item, index) => (
            <AnalyticsItem
              key={item.title}
              item={item}
              icons={analyticsImages[index]}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

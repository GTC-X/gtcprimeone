'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Icon, Reveal } from '../shared/PageUi';
import { liquidityHighlightIcons } from './highlightIcons';

function HighlightItem({ item, icon, index }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`liquidity-highlight-card${hovered ? ' is-hovered' : ''}`}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -6 }}
    >
      <motion.span
        className="liquidity-highlight-icon"
        aria-hidden="true"
        animate={reduced ? undefined : { scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <Icon icon={icon} />
      </motion.span>
      <h3>{item.title}</h3>
    </motion.div>
  );
}

export default function LiquidityNarrative({ paragraphs, highlights }) {
  const [lead, ...rest] = paragraphs;

  return (
    <div className="audience-section">
      <section className="section shell liquidity-narrative" aria-labelledby="liquidity-narrative-title">
        <span id="liquidity-narrative-title" className="sr-only">
          Liquidity overview
        </span>

        {lead && (
          <Reveal className="liquidity-narrative-lead" delay={0.06}>
            <p>{lead}</p>
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="liquidity-narrative-grid">
            {rest.map((paragraph, index) => (
              <Reveal key={index} delay={0.1 + index * 0.08} className="liquidity-narrative-item">
                <span className="liquidity-narrative-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        )}

        <div className="liquidity-highlights">
          {highlights.map((item, index) => (
            <HighlightItem key={item.title} item={item} icon={liquidityHighlightIcons[index]} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

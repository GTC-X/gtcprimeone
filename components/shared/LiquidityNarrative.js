'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { Icon, Reveal, Kicker, SplitHeading } from './PageUi';
import { liquidityHighlightIcons } from './liquidityHighlightIcons';

function HighlightItem({ title, icon, index }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.li
      className={`liquidity-highlight-card${hovered ? ' is-hovered' : ''}`}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -4 }}
    >
      <motion.span
        className="liquidity-highlight-icon"
        aria-hidden="true"
        animate={reduced ? undefined : { scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <Icon icon={icon} />
      </motion.span>
      <h4>{title}</h4>
    </motion.li>
  );
}

export default function LiquidityNarrative({ section, contactHref, talkLabel }) {
  if (!section) return null;
  const [lead, ...rest] = section.paragraphs ?? [];

  return (
    <section className="section shell liquidity-narrative" aria-labelledby="liquidity-narrative-heading">
      <Reveal className="liquidity-narrative-head">
        <Kicker>{section.kicker}</Kicker>
        <div id="liquidity-narrative-heading">
          <SplitHeading className="mt-4" {...section.title} />
        </div>
      </Reveal>

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

      {section.closing && (
        <Reveal className="liquidity-narrative-closing" delay={0.12}>
          <p>{section.closing}</p>
          {contactHref && talkLabel && (
            <Link href={contactHref} className="button button-primary mt-6">
              {talkLabel}
            </Link>
          )}
        </Reveal>
      )}

      {section.highlights?.length > 0 && (
        <ul className="liquidity-highlights">
          {section.highlights.map((item, index) => (
            <HighlightItem
              key={item.title}
              title={item.title}
              icon={liquidityHighlightIcons[index] ?? liquidityHighlightIcons[0]}
              index={index}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

'use client';

import { motion, useReducedMotion } from 'motion/react';
import HeroArtwork from '../shared/HeroArtwork';
import { Kicker } from '../shared/PageUi';

function HeroCopy({ children, delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function RiskHero({ riskPage }) {
  const description = riskPage.heroDescription || riskPage.heroLead;

  return (
    <section className="hero" aria-labelledby="risk-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <HeroCopy delay={0}>
            <Kicker>{riskPage.eyebrow}</Kicker>
          </HeroCopy>
          <HeroCopy delay={0.08}>
            <h1 id="risk-title" className="hero-title text-h1 mt-7">
              <span className="text-ink">{riskPage.heroLine1}</span>
              <br />
              <span className="text-primary">{riskPage.heroLine2}</span>
            </h1>
          </HeroCopy>
          {description ? (
            <HeroCopy delay={0.12}>
              <p className="hero-description">{description}</p>
            </HeroCopy>
          ) : null}
          {riskPage.heroMetrics?.length ? (
            <HeroCopy delay={0.14}>
              <ul className="risk-hero-metrics" aria-label="Risk management highlights">
                {riskPage.heroMetrics.map((metric) => (
                  <li key={metric.label}>
                    <span className="risk-hero-metrics-value">{metric.value}</span>
                    <span className="risk-hero-metrics-label">{metric.label}</span>
                  </li>
                ))}
              </ul>
            </HeroCopy>
          ) : null}
        </div>
        <HeroArtwork alt={riskPage.artAlt} imageSrc="/assets/risk-management.png" />
      </div>
    </section>
  );
}

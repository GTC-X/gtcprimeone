'use client';

import Link from 'next/link';
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

export default function RiskHero({ riskPage, talk, explore, contactHref }) {
  return (
    <section className="hero" aria-labelledby="risk-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <HeroCopy delay={0}>
            <Kicker>{riskPage.eyebrow}</Kicker>
          </HeroCopy>
          <HeroCopy delay={0.08}>
            <h1 id="risk-title" className="text-display mt-7">
              {riskPage.heroLine1}
              <br />
              <span className="text-primary">{riskPage.heroLine2}</span>
            </h1>
          </HeroCopy>
          <HeroCopy delay={0.16}>
            <p className="hero-description">{riskPage.heroLead}</p>
          </HeroCopy>
          <HeroCopy delay={0.24}>
            <div className="button-row">
              <Link href={contactHref} className="button button-primary">
                {talk}
              </Link>
              <a href="#risk-content" className="button button-outline">
                {explore}
              </a>
            </div>
          </HeroCopy>
        </div>
        <HeroArtwork
          alt={riskPage.artAlt}
          imageSrc='/assets/risk-management.png'
          // captionLeft={riskPage.artCaptionLeft}
          // captionRight={riskPage.artCaptionRight}
        />
      </div>
    </section>
  );
}

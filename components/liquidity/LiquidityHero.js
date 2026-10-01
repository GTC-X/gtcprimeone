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

export default function LiquidityHero({ page, talk, explore, contactHref }) {
  const reduced = useReducedMotion();

  return (
    <section className="hero liquidity-hero" aria-labelledby="liquidity-title">
      <div className="shell liquidity-hero-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <HeroCopy delay={0}>
              <Kicker>{page.eyebrow}</Kicker>
            </HeroCopy>
            <HeroCopy delay={0.08}>
              <h1 id="liquidity-title" className="text-display mt-7 text-primary">
                {page.heroTitle}
              </h1>
            </HeroCopy>
            <HeroCopy delay={0.16}>
              <div className="button-row">
                <Link href={contactHref} className="button button-primary">
                  {talk}
                </Link>
                <a href="#liquidity-content" className="button button-outline">
                  {explore}
                </a>
              </div>
            </HeroCopy>
          </div>
          <HeroArtwork alt={page.artAlt} imageSrc="/assets/liquidity.png" />
        </div>
        <motion.div
          className="liquidity-hero-tagline"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="liquidity-hero-tagline-accent" aria-hidden="true" />
          <p>{page.heroTagline}</p>
        </motion.div>
      </div>
    </section>
  );
}

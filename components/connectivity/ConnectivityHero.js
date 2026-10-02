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

export default function ConnectivityHero({ page, talk, explore, contactHref }) {
  return (
    <section className="hero" aria-labelledby="connectivity-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <HeroCopy delay={0}>
            <Kicker>{page.eyebrow}</Kicker>
          </HeroCopy>
          <HeroCopy delay={0.08}>
            <h1 id="connectivity-title" className="hero-title text-h1 mt-7">
              <span className="text-ink">{page.heroLine1}</span>
              <br />
              <span className="text-primary">{page.heroLine2}</span>
            </h1>
          </HeroCopy>
          {page.heroDescription ? (
            <HeroCopy delay={0.12}>
              <p className="hero-description">{page.heroDescription}</p>
            </HeroCopy>
          ) : null}
          <HeroCopy delay={0.16}>
            <div className="button-row">
              <Link href={contactHref} className="button button-primary">
                {talk}
              </Link>
              <a href="#connectivity-content" className="button button-outline">
                {explore}
              </a>
            </div>
          </HeroCopy>
        </div>
        <HeroArtwork
          alt={page.artAlt}
          imageSrc={"/assets/connectivity.png"}
        />
      </div>
    </section>
  );
}

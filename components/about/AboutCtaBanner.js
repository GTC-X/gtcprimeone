'use client';

import Link from 'next/link';
import { Reveal, Kicker } from '../shared/PageUi';

export default function AboutCtaBanner({ text, kicker, talk, contactHref }) {
  return (
    <section className="about-cta-band" aria-label="Contact invitation">
      <div className="shell">
        <Reveal className="about-cta-banner">
          <span className="about-cta-glow" aria-hidden="true" />
          <div className="about-cta-inner">
            <Kicker>{kicker}</Kicker>
            <p className="about-cta-text">{text}</p>
            <div className="about-cta-actions">
              <Link href={contactHref} className="button button-primary">
                {talk}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

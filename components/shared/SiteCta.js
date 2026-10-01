'use client';

import Link from 'next/link';
import { Reveal, Kicker, SplitHeading } from './PageUi';

export default function SiteCta({ t, href }) {
  return (
    <section className="cta-section section shell">
      <Reveal className="cta-block">
        <div>
          <Kicker light>{t.labels.contact}</Kicker>
          <SplitHeading light {...t.ctaTitle} />
          <p>{t.ctaText}</p>
        </div>
        <Link href={href('contact')} className="button button-white">
          {t.talk}
        </Link>
        <span className="cta-decoration" aria-hidden="true" />
      </Reveal>
    </section>
  );
}

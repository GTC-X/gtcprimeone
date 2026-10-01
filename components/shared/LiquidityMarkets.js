'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useReducedMotion } from 'motion/react';
import { faCoins, faCube, faChartSimple, faClock, faGem, faTableCellsLarge, faBuilding, faBolt } from '@fortawesome/free-solid-svg-icons';
import { Icon, Reveal, Kicker, SplitHeading } from './PageUi';

const liquidityMarketIcons = [faCoins, faCube, faChartSimple, faClock, faGem, faTableCellsLarge, faBuilding, faBolt];

function formatCount(n, lang) {
  return n >= 1000 ? n.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US') : String(n);
}

function StatCounter({ value, suffix, active, reduced, lang }) {
  const [count, setCount] = useState(reduced ? value : 0);
  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setCount(value);
      return;
    }
    const duration = 900;
    const startTime = performance.now();
    let frame;
    const tick = now => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setCount(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduced, value]);
  return (
    <>
      {formatCount(count, lang)}
      {suffix}
    </>
  );
}

export default function LiquidityMarkets({ t, href, language = 'en' }) {
  const m = t.liquidityMarkets;
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="liquidity-markets-section section" id="liquidity-markets" ref={sectionRef}>
      <div className="shell">
        <Reveal className="liquidity-markets-head">
          <Kicker>{t.labels.liquidityMarkets}</Kicker>
          <SplitHeading className="!text-h2" {...m.title} />
          <p className="liquidity-markets-intro">{m.intro}</p>
        </Reveal>
        <div className="liquidity-markets-board">
          <div className="liquidity-markets-table-head" aria-hidden="true">
            <span>{m.instrumentsLabel}</span>
            <span>{m.assetClassLabel}</span>
          </div>
          <ul className="liquidity-markets-grid">
            {m.stats.map((stat, i) => (
              <li key={stat.label} className={stat.highlight ? 'is-highlight' : ''}>
                <Reveal delay={i * 0.04} className="liquidity-market-card">
                  <span className="liquidity-market-icon" aria-hidden="true">
                    <Icon icon={liquidityMarketIcons[i]} />
                  </span>
                  <div className="liquidity-market-meta">
                    <span className="liquidity-market-count">
                      <StatCounter value={stat.value} suffix={stat.suffix} active={active} reduced={reduced} lang={language} />
                    </span>
                    <span className="liquidity-market-label">{stat.label}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <Reveal className="liquidity-markets-cta">
          <Link href={href('contact')} className="text-link">
            {m.link}
            <span className="link-line" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

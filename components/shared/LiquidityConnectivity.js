'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Kicker, Reveal, SplitHeading } from './PageUi';

export default function LiquidityConnectivity({ section }) {
  if (!section) return null;
  const reduced = useReducedMotion();
  const imageSrc = section.diagramImage || '/assets/liquidity-connectivity-diagram.jpg';

  return (
    <section className="liquidity-connectivity-section section" aria-labelledby="liquidity-connectivity-heading">
      <div className="shell">
        <Reveal className="liquidity-connectivity-head">
          <Kicker>{section.kicker}</Kicker>
          <div id="liquidity-connectivity-heading">
            {section.title?.line1 ? (
              <SplitHeading className="mt-4" {...section.title} />
            ) : (
              <h2 className="liquidity-connectivity-title mt-4">{section.title}</h2>
            )}
          </div>
          <p className="liquidity-connectivity-intro">{section.intro}</p>
        </Reveal>
        <Reveal className="liquidity-connectivity-diagram-wrap">
          <motion.figure
            className="liquidity-connectivity-figure"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={imageSrc}
              width={1024}
              height={346}
              alt={section.diagramAria}
              className="liquidity-connectivity-image"
              loading="lazy"
              decoding="async"
            />
          </motion.figure>
        </Reveal>
      </div>
    </section>
  );
}

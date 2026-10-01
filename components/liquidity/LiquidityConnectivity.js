'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Reveal } from '../shared/PageUi';

export default function LiquidityConnectivity({ section }) {
  const reduced = useReducedMotion();
  const imageSrc = section.diagramImage || '/assets/liquidity-section.png';

  return (
    <section className="section shell liquidity-connectivity" aria-labelledby="liquidity-connectivity-title">
      <Reveal className="liquidity-fx-head">
        <h2 id="liquidity-connectivity-title" className="liquidity-section-title">
          {section.title}
        </h2>
        <p className="liquidity-fx-lead">{section.intro}</p>
      </Reveal>
      <Reveal className="liquidity-connectivity-diagram">
        <motion.figure
          className="liquidity-connectivity-figure"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={imageSrc}
            width={1200}
            height={800}
            alt={section.diagramAria}
            className="liquidity-connectivity-image"
            loading="lazy"
            decoding="async"
          />
        </motion.figure>
      </Reveal>
    </section>
  );
}

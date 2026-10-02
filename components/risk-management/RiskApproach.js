'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Reveal, Kicker, SplitHeading } from '../shared/PageUi';

function StepCard({ step, index }) {
  const reduced = useReducedMotion();

  return (
    <motion.li
      className="risk-approach-step"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="risk-approach-step-num" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </motion.li>
  );
}

export default function RiskApproach({ section }) {
  if (!section?.steps?.length) return null;

  return (
    <section className="section shell risk-approach" aria-labelledby="risk-approach-heading">
      <Reveal className="risk-section-head">
        <Kicker>{section.kicker}</Kicker>
        <SplitHeading className="mt-4" id="risk-approach-heading" {...section.title} />
        <p className="risk-section-intro">{section.intro}</p>
      </Reveal>
      <ol className="risk-approach-steps">
        {section.steps.map((step, index) => (
          <StepCard key={step.title} step={step} index={index} />
        ))}
      </ol>
    </section>
  );
}

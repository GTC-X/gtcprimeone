'use client';

import { motion, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Icon({ icon, ...props }) {
  return <FontAwesomeIcon icon={icon} aria-hidden="true" {...props} />;
}

export function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={reduced ? undefined : { opacity: [0, 1], y: [24, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Kicker({ children, light = false }) {
  return (
    <p className={`kicker ${light ? 'text-white/70' : 'text-primary'}`}>
      <span />
      {children}
    </p>
  );
}

export function Heading({ children, className = '' }) {
  return <h2 className={`whitespace-pre-line ${className}`}>{children}</h2>;
}

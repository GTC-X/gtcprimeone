'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'motion/react';

export default function HeroArtwork({
  alt,
  captionLeft,
  captionRight,
  imageSrc = '/assets/hero-transparent.webp',
}) {
  const ref = useRef(null);
  const visible = useInView(ref, { amount: 0.1 });
  const reduced = useReducedMotion();
  const moving = visible && !reduced;

  return (
    <motion.div
      ref={ref}
      className="hero-art"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="hero-float"
        initial={false}
        animate={
          moving
            ? { y: [0, -16, -5, 0], x: [0, 6, -4, 0], rotate: [0, 1.5, -0.8, 0] }
            : { y: 0, x: 0, rotate: 0 }
        }
        transition={
          moving
            ? { duration: 9, repeat: Infinity, ease: 'easeInOut' }
            : { duration: reduced ? 0 : 0.5 }
        }
      >
        <img src={imageSrc} width="1536" height="1024" alt={alt} fetchPriority="high" />
      </motion.div>
      {(captionLeft || captionRight) && (
        <div className="art-caption">
          {captionLeft && <span>{captionLeft}</span>}
          {captionRight && <span>{captionRight}</span>}
        </div>
      )}
    </motion.div>
  );
}

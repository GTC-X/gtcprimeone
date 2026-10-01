'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Reveal } from '../shared/PageUi';
import { positionKeeperImages } from './positionKeeperIcons';

function ToolkitItem({ tool, icons, index }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="connectivity-toolkit-item"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="connectivity-toolkit-item-bg"
        aria-hidden="true"
        initial={false}
        animate={
          reduced
            ? { opacity: hovered ? 1 : 0 }
            : { opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.94 }
        }
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="connectivity-toolkit-item-content">
        <motion.span
          className="connectivity-toolkit-icon"
          aria-hidden="true"
          animate={reduced ? undefined : { scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            key={hovered ? 'hover' : 'default'}
            src={hovered ? icons.hoverSrc : icons.src}
            alt=""
            width={56}
            height={56}
            className="connectivity-toolkit-icon-img"
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            loading="lazy"
            decoding="async"
          />
        </motion.span>
        <span className="connectivity-toolkit-label">{tool.title}</span>
      </div>
    </motion.div>
  );
}

export default function ConnectivityPositionKeeper({ section }) {
  return (
    <section className="section section-border shell connectivity-block" aria-labelledby="position-keeper-title">
      <Reveal className="connectivity-block-head">
        <h2 id="position-keeper-title" className="connectivity-block-title">
          {section.titlePrefix}{' '}
          <span className="text-primary">{section.titleHighlight}</span>
        </h2>
        <p className="connectivity-block-lead">{section.description}</p>
      </Reveal>
      <div className="connectivity-toolkit shell-inner">
        {section.tools.map((tool, index) => (
          <ToolkitItem
            key={tool.title}
            tool={tool}
            icons={positionKeeperImages[index]}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

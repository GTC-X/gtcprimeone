'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Icon, Reveal } from './PageUi';
import { liquidityAssetIcons } from './liquidityAssetIcons';

function AssetItem({ title, icon, index }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.li
      className="liquidity-fx-asset"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="liquidity-fx-asset-glow"
        aria-hidden="true"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.92 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="liquidity-fx-asset-icon" aria-hidden="true">
        <Icon icon={icon} />
      </span>
      <span className="liquidity-fx-asset-label">{title}</span>
    </motion.li>
  );
}

export default function LiquidityFxCfd({ section }) {
  if (!section) return null;

  return (
    <section className="liquidity-fx-section section" aria-labelledby="liquidity-fx-title">
      <div className="shell">
        <Reveal className="liquidity-fx-head">
          <h2 id="liquidity-fx-title" className="liquidity-fx-title">
            {section.title}
          </h2>
          <p className="liquidity-fx-lead">{section.intro}</p>
        </Reveal>
        <ul className="liquidity-fx-asset-bar">
          {section.assets.map((asset, index) => (
            <AssetItem
              key={asset.title}
              title={asset.title}
              icon={liquidityAssetIcons[index] ?? liquidityAssetIcons[0]}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

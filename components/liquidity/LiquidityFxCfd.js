'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Icon, Reveal } from '../shared/PageUi';
import { liquidityAssetIcons } from './assetIcons';

function AssetItem({ asset, icon, index }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="liquidity-asset-item"
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
        className="liquidity-asset-item-bg"
        aria-hidden="true"
        initial={false}
        animate={
          reduced
            ? { opacity: hovered ? 1 : 0 }
            : { opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.94 }
        }
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="liquidity-asset-item-content">
        <motion.span
          className="liquidity-asset-icon"
          aria-hidden="true"
          animate={reduced ? undefined : { scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon icon={icon} />
        </motion.span>
        <span className="liquidity-asset-label">{asset.title}</span>
      </div>
    </motion.div>
  );
}

export default function LiquidityFxCfd({ section }) {
  return (
    <section id="liquidity-content" className="section shell liquidity-fx" aria-labelledby="liquidity-fx-title">
      <Reveal className="liquidity-fx-head">
        <h2 id="liquidity-fx-title" className="liquidity-section-title">
          {section.title}
        </h2>
        <p className="liquidity-fx-lead">{section.intro}</p>
      </Reveal>
      <div className="liquidity-asset-bar shell-inner">
        {section.assets.map((asset, index) => (
          <AssetItem key={asset.title} asset={asset} icon={liquidityAssetIcons[index]} index={index} />
        ))}
      </div>
    </section>
  );
}

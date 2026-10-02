'use client';

import Link from 'next/link';
import { faArrowRight, faComments, faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { Icon, Kicker, Reveal } from '../shared/PageUi';

const channelIcons = {
  primary: faComments,
  secondary: faEnvelope,
  violet: faMobileScreen,
};

function ChannelCard({ item, index }) {
  const icon = channelIcons[item.variant] ?? faComments;
  const external = item.href?.startsWith('http') || item.href?.startsWith('mailto:') || item.href?.startsWith('tel:');

  const actionClass = 'contact-channel-action';
  const ActionTag = external ? 'a' : Link;
  const actionProps = external
    ? {
        href: item.href,
        target: item.href.startsWith('http') ? '_blank' : undefined,
        rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined,
      }
    : { href: item.href };

  return (
    <Reveal delay={index * 0.08} className={`contact-channel-card contact-channel-card--${item.variant}`}>
      <div className="contact-channel-card-glow" aria-hidden="true" />
      <div className="contact-channel-card-body">
        <div className={`contact-channel-icon contact-channel-icon--${item.variant}`} aria-hidden="true">
          <Icon icon={icon} />
        </div>
        <h3 className="contact-channel-title">{item.title}</h3>
        <p className="contact-channel-desc">{item.description}</p>
        {item.detailLabel && item.detailHref ? (
          <p className="contact-channel-detail">
            <span className="contact-channel-detail-dot" aria-hidden="true" />
            <a href={item.detailHref}>{item.detailLabel}</a>
          </p>
        ) : null}
      </div>
      {item.href && item.action ? (
        <div className="contact-channel-card-foot">
          <ActionTag {...actionProps} className={actionClass}>
            <Icon icon={faArrowRight} className="contact-channel-action-icon" />
            <span>{item.action}</span>
          </ActionTag>
        </div>
      ) : null}
    </Reveal>
  );
}

export default function ContactChannels({ section }) {
  if (!section?.items?.length) return null;

  return (
    <section className="section shell contact-channels" aria-labelledby="contact-channels-title">
      <Reveal className="contact-channels-head">
        <Kicker>{section.kicker}</Kicker>
        <h2 id="contact-channels-title" className="contact-channels-title">
          {section.title}
        </h2>
        <p className="contact-channels-intro">{section.intro}</p>
      </Reveal>
      <div className="contact-channels-grid">
        {section.items.map((item, index) => (
          <ChannelCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faLayerGroup, faNetworkWired, faShieldHalved, faGlobe, faBars, faXmark, faCheck, faBuildingColumns, faBriefcase, faUserTie, faDisplay, faCoins, faGem, faCube, faChartSimple, faClock, faBuilding, faTableCellsLarge, faBolt, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { content } from '../lib/content';
import { Icon, Reveal, Kicker, Heading, SplitHeading } from './shared/PageUi';
function headingLabel(title) { return title?.line2 ? `${title.line1} ${title.line2}` : title?.line1 || title; }
function ServiceDetailTitle({ title }) {
    const parts = title.split('\n');
    if (parts.length < 2) return <h1 className="text-display whitespace-pre-line">{title}</h1>;
    return (
        <h1 className="text-display">
            <span className="text-ink">{parts[0]}</span>
            <br />
            <span className="text-primary">{parts.slice(1).join(' ')}</span>
        </h1>
    );
}
import HeroArtwork from './shared/HeroArtwork';
import RiskManagementPage from './risk-management/RiskManagementPage';
import ConnectivityPage from './connectivity/ConnectivityPage';
import AboutPage from './about/AboutPage';
import ContactPage from './contact/ContactPage';
import LiquidityMarkets from './shared/LiquidityMarkets';
import LiquidityFxCfd from './shared/LiquidityFxCfd';
import LiquidityNarrative from './shared/LiquidityNarrative';
import LiquidityConnectivity from './shared/LiquidityConnectivity';
import SiteCta from './shared/SiteCta';
config.autoAddCss = false;
const serviceIcons = [faLayerGroup, faNetworkWired, faShieldHalved];
const audienceIcons = [faBuildingColumns, faBriefcase, faUserTie, faDisplay];
const marketIcons = [faCoins,faGem,faCube,faChartSimple,faClock,faBuilding,faTableCellsLarge,faBolt];
function Logo({inverse=false}) { return <img className={`brand-logo ${inverse?'inverse':''}`} src="/assets/gtc-prime-logo.webp" width="700" height="149" alt="GTC Prime"/>; }
export default function Website({language='en',page='home'}) {
 const t=content[language]; const [menu,setMenu]=useState(false); const menuButton=useRef(null); const href=(target='home',lang=language)=>`${lang==='ar'?'/ar':''}${target==='home'?'/':`/${target}/`}`;
 useEffect(()=>{ document.documentElement.lang=language;document.documentElement.dir=language==='ar'?'rtl':'ltr';setMenu(false);},[language,page]);
 useEffect(()=>{const close=e=>{if(e.key==='Escape'){setMenu(false);menuButton.current?.focus();}};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close);},[]);
 const nav=['about','liquidity','connectivity','risk-management'];
 return <div className={language==='ar'?'font-arabic':''} dir={language==='ar'?'rtl':'ltr'} lang={language}>
  <a href="#main" className="skip-link">{t.skip}</a>
  <header className="site-header"><div className="shell header-row">
   <Link href={href()} aria-label="GTC Prime" className="logo-link"><Logo/></Link>
   <nav aria-label={language==='ar'?'القائمة الرئيسية':'Main navigation'} className="desktop-nav">{nav.map(key=><Link key={key} href={href(key)} aria-current={page===key?'page':undefined}>{t.nav[key]}</Link>)}</nav>
   <div className="header-actions"><Link className="language-control" href={href(page,language==='en'?'ar':'en')} aria-label={t.language}><Icon icon={faGlobe}/><span>{language==='en'?'العربية':'EN'}</span></Link><Link href={href('contact')} className="button button-primary header-cta">{t.talk}</Link><button ref={menuButton} onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-nav" aria-label={menu?t.close:t.menu} className="menu-toggle"><Icon icon={menu?faXmark:faBars}/></button></div>
  </div>{menu&&<nav id="mobile-nav" className="mobile-nav" aria-label={t.menu}>{['home',...nav,'contact'].map(key=><Link key={key} href={href(key)} onClick={()=>setMenu(false)} aria-current={page===key?'page':undefined}>{t.nav[key]}</Link>)}<a href="https://mygtcportal.com/" target="_blank" rel="noopener noreferrer">{t.account}</a></nav>}</header>
  <main id="main">{page==='home'?<Home t={t} href={href} language={language}/>:page==='about'?<AboutPage t={t} href={href}/>:page==='contact'?<ContactPage t={t} href={href}/>:page==='risk-management'?<RiskManagementPage t={t} href={href}/>:page==='connectivity'?<ConnectivityPage t={t} href={href}/>:<Service t={t} page={page} href={href} language={language}/>}</main>
  <Footer t={t} href={href}/>
 </div>;
}
function Home({ t, href, language = 'en' }) {
    return <>
        <section className="hero"><div className="shell hero-grid"><div className="hero-copy"><Kicker>{t.hero.eyebrow}</Kicker><h1 className="hero-title text-display mt-7">{t.hero.line2 ? <><span className="text-ink">{t.hero.line1}</span><br /><span className="text-primary">{t.hero.line2}</span></> : t.hero.line1}</h1><p className="hero-description">{t.hero.description}</p>{t.hero.banner?.length > 0 && <div className="hero-banner">{t.hero.banner.map(line => <p key={line}>{line}</p>)}</div>}<div className="button-row hero-cta"><a href="#who-we-serve" className="button button-primary">{t.hero.explore || t.explore}</a></div></div><HeroArtwork alt={t.hero.art} captionLeft="01 / 03" captionRight={t.services.map(s => s.title).join(' · ')} /></div></section>
        <div className="platform-strip"><div className="shell platform-row"><span>{t.platforms}</span><div>MetaTrader <b>4</b></div><div>MetaTrader <b>5</b></div>{t.hero.banner?.[2] && <span className="strip-end">{t.hero.banner[2]}</span>}</div></div>
        <WhoWeServe t={t} /><WhatWeOffer t={t} href={href} /><Technology t={t} href={href} />
        <section className="why-section section" id="why-gtc-prime"><div className="shell"><Reveal className="section-top"><div><Kicker>{t.labels.why}</Kicker><SplitHeading className="!text-h2" {...t.whyTitle} /></div><Link href={href('about')} className="text-link">{t.nav.about}<span className="link-line" /></Link></Reveal><div className="benefits benefits-six">{t.benefits.map(([title, desc], i) => <Reveal key={title} delay={i * .06}><span className="benefit-number">{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{desc}</p></Reveal>)}</div></div></section>
        <LiquidityMarkets t={t} href={href} language={language} /><SiteCta t={t} href={href} />
    </>;
}
function WhoWeServe({ t }) {
    const [active, setActive] = useState(0);
    const [title, desc] = t.audiences[active];
    return <section className="section shell audience-showcase" id="who-we-serve"><div className="audience-showcase-grid"><Reveal className="audience-showcase-intro"><Kicker>{t.labels.who}</Kicker><SplitHeading {...t.audienceTitle} /><p className="section-intro mt-6 max-w-none">{t.audienceText}</p><div className="audience-showcase-spotlight" id="audience-spotlight-panel" aria-live="polite"><span className="audience-showcase-spotlight-num">{String(active + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{desc}</p></div></Reveal><div className="audience-showcase-list" role="tablist" aria-label={headingLabel(t.audienceTitle)}>{t.audiences.map(([itemTitle, itemDesc], i) => <button key={itemTitle} type="button" role="tab" id={`audience-tab-${i}`} aria-selected={active === i} aria-controls="audience-spotlight-panel" tabIndex={active === i ? 0 : -1} className={`audience-showcase-item ${active === i ? 'is-active' : ''}`} onClick={() => setActive(i)} onKeyDown={e => { if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); setActive((i + 1) % t.audiences.length); } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); setActive((i + t.audiences.length - 1) % t.audiences.length); } }}><span className="audience-showcase-item-icon" aria-hidden="true"><Icon icon={audienceIcons[i]} /></span><span className="audience-showcase-item-copy"><span className="audience-showcase-item-title">{itemTitle}</span><span className="audience-showcase-item-hint">{itemDesc.length > 72 ? `${itemDesc.slice(0, 72)}…` : itemDesc}</span></span><span className="audience-showcase-item-index">{String(i + 1).padStart(2, '0')}</span></button>)}</div></div></section>;
}
function WhatWeOffer({ t, href }) {
    const items = t.whatWeOffer.items;
    const [selected, setSelected] = useState(0);
    const reduced = useReducedMotion();
    const item = items[selected];
    const tabRefs = useRef([]);
    function tabKey(e, i) {
        let n = i;
        if (e.key === 'ArrowRight') n = (i + 1) % items.length;
        else if (e.key === 'ArrowLeft') n = (i + items.length - 1) % items.length;
        else if (e.key === 'Home') n = 0;
        else if (e.key === 'End') n = items.length - 1;
        else return;
        e.preventDefault();
        setSelected(n);
        tabRefs.current[n]?.focus();
    }
    return <section className="offer-section section" id="what-we-offer"><div className="shell"><Reveal className="offer-showcase-head"><Kicker>{t.labels.offer}</Kicker><SplitHeading className="!text-h2" light {...t.whatWeOffer.title} /><div className="offer-progress" aria-hidden="true">{items.map((entry, i) => <span key={entry.slug} className={i <= selected ? 'is-filled' : ''} />)}</div></Reveal><div className="offer-showcase-tabs" role="tablist" aria-label={headingLabel(t.whatWeOffer.title)}>{items.map((entry, i) => <button key={entry.slug} ref={el => { tabRefs.current[i] = el; }} type="button" role="tab" id={`offer-tab-${i}`} aria-controls="offer-showcase-panel" aria-selected={selected === i} tabIndex={selected === i ? 0 : -1} className={selected === i ? 'is-active' : ''} onKeyDown={e => tabKey(e, i)} onClick={() => setSelected(i)}><Icon icon={serviceIcons[i]} /><span>{entry.title}</span></button>)}</div><div className="offer-showcase-panel" id="offer-showcase-panel" role="tabpanel" aria-labelledby={`offer-tab-${selected}`} tabIndex={0}><div className="offer-showcase-glow" aria-hidden="true" /><motion.div key={item.slug} className="offer-showcase-panel-inner" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}><div className="offer-showcase-visual" aria-hidden="true"><span className="offer-showcase-orbit" /><span className="offer-showcase-icon"><Icon icon={serviceIcons[selected]} /></span><span className="offer-showcase-watermark">{String(selected + 1).padStart(2, '0')}</span></div><div className="offer-showcase-copy"><p className="offer-showcase-step">{String(selected + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</p><h3>{item.title}</h3><p>{item.text}</p><Link href={href(item.slug)} className="text-link mt-8">{t.discover}<span className="link-line" /></Link></div></motion.div></div></div></section>;
}
function TechnologyPanel({ t }) {
    return <Reveal className="technology-panel"><p className="panel-label">{t.ecosystem}</p><div className="network-diagram"><div className="network-core network-core-compact"><Logo /></div><ul className="tech-panel-features">{t.techPanelFeatures.map((feature, i) => <li key={feature}><span className="tech-panel-feature-icon" aria-hidden="true"><Icon icon={faBolt} /></span><span>{feature}</span><span className="tech-panel-feature-index">{String(i + 1).padStart(2, '0')}</span></li>)}</ul></div><div className="platform-tags"><span>MT4</span><span>MT5</span></div></Reveal>;
}
function Technology({ t, href }) { return <section className="section shell"><div className="technology-grid"><TechnologyPanel t={t} /><Reveal className="technology-copy"><Kicker>{t.labels.tech}</Kicker><SplitHeading {...t.techTitle} /><p className="section-intro mt-6">{t.techText}</p><Link href={href('connectivity')} className="button button-primary mt-8">{t.techLink}</Link></Reveal></div></section>; }
function Markets({ t, href }) { const [selected, setSelected] = useState(0); const refs = useRef([]); function keyChange(e, i) { let n = i; if (e.key === 'ArrowRight') n = (i + 1) % 8; else if (e.key === 'ArrowLeft') n = (i + 7) % 8; else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = 7; else return; e.preventDefault(); setSelected(n); refs.current[n]?.focus(); } return <section className="markets-section section"><div className="shell"><Reveal className="section-top"><div><Kicker>{t.labels.markets}</Kicker><SplitHeading {...t.marketTitle} /></div><p className="section-intro">{t.marketText}</p></Reveal><Reveal><div className="market-tabs" role="tablist" aria-label={t.marketPrompt}>{t.markets.map(([label], i) => <button key={label} ref={el => { refs.current[i] = el }} role="tab" id={`market-tab-${i}`} aria-controls="market-panel" aria-selected={selected === i} tabIndex={selected === i ? 0 : -1} onKeyDown={e => keyChange(e, i)} onClick={() => setSelected(i)} className={selected === i ? 'selected' : ''}><Icon icon={marketIcons[i]} /><span>{label}</span></button>)}</div><div className="market-panel" id="market-panel" role="tabpanel" aria-labelledby={`market-tab-${selected}`} tabIndex={0}><div className="market-symbol"><Icon icon={marketIcons[selected]} /></div><div><h3>{t.markets[selected][0]}</h3><p>{t.markets[selected][1]}</p></div><Link href={href('contact')} className="text-link">{t.marketDetails}<span className="link-line" /></Link></div></Reveal></div></section>; }
function Brochure({ t }) { return <section className="shell brochure-wrap"><Reveal className="brochure"><div className="brochure-icon"><Icon icon={faFileLines} /></div><div><Kicker>{t.labels.brochure}</Kicker><h3>{t.brochureTitle}</h3><p>{t.brochureText}</p></div><a className="button button-outline" href="https://gtcprime.com/wp-content/uploads/2023/04/GTC-Prime-Profile-.pdf" target="_blank" rel="noopener noreferrer"><Icon icon={faFileLines} />{t.download}</a></Reveal></section>; }
function Service({ t, page, href, language = 'en' }) {
    const index = t.services.findIndex(s => s.slug === page);
    const s = t.services[index];
    if (!s) return null;
    return <>
        <section className="inner-hero shell service-hero"><div><Kicker>{s.title}</Kicker><ServiceDetailTitle title={s.detailTitle} /><p className="inner-description">{s.detail}</p><Link href={href('contact')} className="button button-primary mt-8">{t.talk}</Link></div><div className="service-emblem"><span className="emblem-number">0{index + 1}</span><Icon icon={serviceIcons[index]} /><span>{s.title}</span></div></section>
        {page === 'liquidity' ? <LiquidityFxCfd section={t.liquidityFx} /> : null}
        {page === 'liquidity' ? <LiquidityNarrative section={t.liquidityNarrative} contactHref={href('contact')} talkLabel={t.talk} /> : null}
        {page === 'liquidity' ? <LiquidityConnectivity section={t.liquidityConnectivity} /> : null}
        {page !== 'liquidity' ? <section className="section section-border shell"><div className="service-details">{s.sections.map(([title, desc], i) => <Reveal key={title} delay={i * .1}><span className="benefit-number">0{i + 1}</span><h3>{title}</h3><p>{desc}</p></Reveal>)}</div></section> : null}
        {page === 'liquidity' ? <Markets t={t} href={href} /> : page === 'connectivity' ? <Technology t={t} href={href} /> : page === 'risk-management' ? <WhoWeServe t={t} /> : null}
        {page === 'liquidity' ? <LiquidityMarkets t={t} href={href} language={language} /> : null}
        <SiteCta t={t} href={href} />
    </>;
}
function Footer({ t, href }) { return <footer className="site-footer"><div className="shell"><div className="footer-top"><div><Link href={href()} aria-label="GTC Prime"><Logo /></Link><p>{t.footer.line}</p></div><div><h4>{t.footer.company}</h4><Link href={href('about')}>{t.nav.about}</Link><Link href={href('contact')}>{t.nav.contact}</Link><a href="https://mygtcportal.com/" target="_blank" rel="noopener noreferrer">{t.account}</a></div><div><h4>{t.footer.solutions}</h4>{t.services.map(s => <Link key={s.slug} href={href(s.slug)}>{s.title}</Link>)}</div><div><h4>{t.footer.contact}</h4><a href="mailto:support@gtcprime.com">support@gtcprime.com</a><span className="footer-accent" /></div></div><div className="legal-copy"><h5>{t.footer.riskTitle}</h5><p>{t.footer.risk}</p><p>{t.footer.legal}</p><p>{t.footer.copy}</p><p>{t.footer.restriction}</p><p>{t.footer.disclaimer}</p></div><div className="footer-bottom"><span>{t.footer.copyright}</span><span>GTC PRIME</span></div></div></footer>; }

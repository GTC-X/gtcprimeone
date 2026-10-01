import LiquidityHero from './LiquidityHero';
import LiquidityFxCfd from './LiquidityFxCfd';
import LiquidityNarrative from './LiquidityNarrative';
import LiquidityConnectivity from './LiquidityConnectivity';
import ProPartnerSection from '../shared/ProPartnerSection';
import LiquidityMarkets from '../shared/LiquidityMarkets';
import SiteCta from '../shared/SiteCta';

export default function LiquidityPage({ t, href, language = 'en' }) {
  const page = t.liquidityPage;

  return (
    <>
      <LiquidityHero
        page={page}
        talk={t.talk}
        explore={t.explore}
        contactHref={href('contact')}
      />
      <LiquidityFxCfd section={page.fxSection} />
      <LiquidityNarrative paragraphs={page.paragraphs} highlights={page.highlights} />
      <LiquidityConnectivity section={page.connectivitySection} />
      <LiquidityMarkets t={t} href={href} language={language} />
      <SiteCta t={t} href={href} />
      <ProPartnerSection
        labels={t.labels}
        partnerTitle={page.partnerTitle}
        partnerIntro={page.partnerIntro}
        partnerForm={page.partnerForm}
        titleId="liquidity-partner-title"
      />
    </>
  );
}

import ConnectivityHero from './ConnectivityHero';
import ConnectivityIntro from './ConnectivityIntro';
import ConnectivityPositionKeeper from './ConnectivityPositionKeeper';
import ConnectivityAnalytics from './ConnectivityAnalytics';
import ProPartnerSection from '../shared/ProPartnerSection';

export default function ConnectivityPage({ t, href }) {
  const page = t.connectivityPage;

  return (
    <>
      <ConnectivityHero
        page={page}
        talk={t.talk}
        explore={t.explore}
        contactHref={href('contact')}
      />
      <ConnectivityIntro paragraphs={page.intro} />
      <ConnectivityPositionKeeper section={page.positionKeeper} />
      <ConnectivityAnalytics section={page.analytics} />
      <ProPartnerSection
        labels={t.labels}
        partnerTitle={page.partnerTitle}
        partnerIntro={page.partnerIntro}
        partnerForm={page.partnerForm}
        titleId="connectivity-partner-title"
      />
    </>
  );
}

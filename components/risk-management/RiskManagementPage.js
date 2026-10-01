import RiskHero from './RiskHero';
import RiskNarrative from './RiskNarrative';
import RiskFeatures from './RiskFeatures';
import ProPartnerSection from '../shared/ProPartnerSection';

export default function RiskManagementPage({ t, href }) {
  const page = t.riskPage;

  return (
    <>
      <RiskHero
        riskPage={page}
        talk={t.talk}
        explore={t.explore}
        contactHref={href('contact')}
      />
      <RiskNarrative paragraphs={page.paragraphs} />
      <RiskFeatures features={page.features} />
      <ProPartnerSection
        labels={t.labels}
        partnerTitle={page.partnerTitle}
        partnerIntro={page.partnerIntro}
        partnerForm={page.partnerForm}
        titleId="risk-partner-title"
      />
    </>
  );
}

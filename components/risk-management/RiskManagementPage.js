import RiskHero from './RiskHero';
import RiskNarrative from './RiskNarrative';
import RiskFeatures from './RiskFeatures';

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
    </>
  );
}

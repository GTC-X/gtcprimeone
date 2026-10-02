import RiskHero from './RiskHero';
import RiskNarrative from './RiskNarrative';
import RiskFeatures from './RiskFeatures';

export default function RiskManagementPage({ t }) {
  const page = t.riskPage;

  return (
    <>
      <RiskHero riskPage={page} />
      <RiskNarrative paragraphs={page.paragraphs} />
      <RiskFeatures features={page.features} />
    </>
  );
}

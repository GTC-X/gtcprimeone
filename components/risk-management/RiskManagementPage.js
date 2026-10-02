import SiteCta from '../shared/SiteCta';
import RiskHero from './RiskHero';
import RiskIntro from './RiskIntro';
import RiskPillars from './RiskPillars';
import RiskCapabilities from './RiskCapabilities';
import RiskApproach from './RiskApproach';

export default function RiskManagementPage({ t, href }) {
  const page = t.riskPage;

  return (
    <>
      <RiskHero riskPage={page} />
      <RiskIntro paragraphs={page.intro ?? page.paragraphs} />
      <RiskPillars section={page.pillarsSection} />
      <RiskCapabilities section={page.capabilitiesSection ?? { features: page.features }} />
      <RiskApproach section={page.approachSection} />
      <SiteCta t={t} href={href} />
    </>
  );
}

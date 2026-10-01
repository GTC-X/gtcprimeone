import AboutHero from './AboutHero';
import AboutNarrative from './AboutNarrative';
import AboutCtaBanner from './AboutCtaBanner';
import ProPartnerSection from '../shared/ProPartnerSection';

export default function AboutPage({ t, href }) {
  const page = t.aboutPage;

  return (
    <>
      <AboutHero
        page={page}
        talk={t.talk}
        explore={t.explore}
        contactHref={href('contact')}
      />
      <AboutNarrative
        paragraphs={page.paragraphs}
        kicker={t.labels.about}
        title={t.aboutSub}
      />
      <AboutCtaBanner
        text={page.ctaBanner}
        kicker={t.labels.contact}
        talk={t.talk}
        contactHref={href('contact')}
      />
      <ProPartnerSection
        labels={t.labels}
        partnerTitle={page.partnerTitle}
        partnerIntro={page.partnerIntro}
        partnerForm={page.partnerForm}
        titleId="about-partner-title"
      />
    </>
  );
}

import ContactHero from './ContactHero';
import RequestCallback from './RequestCallback';
import ProPartnerSection from '../shared/ProPartnerSection';

export default function ContactPage({ t, href }) {
  const page = t.contactPage;

  return (
    <>
      <ContactHero
        page={page}
        talk={t.talk}
        explore={page.scrollToCallback}
        contactHref="#contact-callback"
      />
      <RequestCallback title={page.callbackTitle} form={page.callbackForm} />
      <ProPartnerSection
        labels={t.labels}
        partnerTitle={page.partnerTitle}
        partnerIntro={page.partnerIntro}
        partnerForm={page.partnerForm}
        titleId="contact-partner-title"
      />
    </>
  );
}

import ContactHero from './ContactHero';
import RequestCallback from './RequestCallback';

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
      <RequestCallback
        title={page.callbackTitle}
        form={{ ...page.callbackForm, required: t.form.required }}
      />
 
    </>
  );
}

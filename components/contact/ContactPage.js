import ContactHero from './ContactHero';
import RequestCallback from './RequestCallback';
import ContactChannels from './ContactChannels';

export default function ContactPage({ t }) {
  const page = t.contactPage;

  return (
    <>
      <ContactHero page={page} />
      <RequestCallback
        title={page.callbackTitle}
        form={{ ...page.callbackForm, required: t.form.required }}
      />
      <ContactChannels section={page.channelsSection} />
    </>
  );
}

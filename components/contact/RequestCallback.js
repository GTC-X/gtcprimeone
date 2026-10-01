'use client';

import { Reveal } from '../shared/PageUi';

export default function RequestCallback({ title, form }) {
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
    ].join('\n');
    window.location.href = `mailto:support@gtcprime.com?subject=${encodeURIComponent('GTC Prime — Callback request')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact-callback" className="section shell contact-callback" aria-labelledby="callback-title">
      <Reveal>
        <h2 id="callback-title" className="contact-callback-title">
          {title}
        </h2>
        <form className="contact-callback-form" onSubmit={submit}>
          <div className="form-grid contact-callback-grid">
            <label className="contact-callback-field">
              <span className="sr-only">{form.nameLabel}</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                placeholder={form.namePlaceholder}
              />
            </label>
            <label className="contact-callback-field">
              <span className="sr-only">{form.emailLabel}</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={150}
                placeholder={form.emailPlaceholder}
              />
            </label>
            <label className="contact-callback-field full-width contact-callback-phone">
              <span className="contact-callback-phone-label">{form.phoneLabel}</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={40}
                placeholder={form.phonePlaceholder}
              />
            </label>
          </div>
          <p className="form-note contact-callback-note">{form.privacy}</p>
          <button className="button button-primary contact-callback-submit" type="submit">
            {form.submit}
          </button>
          <p className="form-note">{form.note}</p>
        </form>
      </Reveal>
    </section>
  );
}

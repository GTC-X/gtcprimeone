'use client';

import { Reveal, Kicker } from './PageUi';
import PartnerIntro from './PartnerIntro';

export default function ProPartnerSection({
  labels,
  partnerTitle,
  partnerIntro,
  partnerForm,
  titleId = 'pro-partner-title',
}) {
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `First name: ${data.get('firstName')}`,
      `Last name: ${data.get('lastName')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Country: ${data.get('country')}`,
      '',
      data.get('message'),
    ].join('\n');
    window.location.href = `mailto:support@gtcprime.com?subject=${encodeURIComponent('GTC Prime — Pro Partner enquiry')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="section shell risk-partner" aria-labelledby={titleId}>
      <Reveal className="risk-partner-grid">
        <div className="risk-partner-copy">
          <Kicker light>{labels.contact}</Kicker>
          <h2 id={titleId} className="text-white whitespace-pre-line">
            {partnerTitle}
          </h2>
          <PartnerIntro text={partnerIntro} />
        </div>
        <form className="risk-partner-form" onSubmit={submit}>
          <div className="form-grid">
            <label>
              {partnerForm.firstName} *
              <input name="firstName" autoComplete="given-name" required maxLength={80} />
            </label>
            <label>
              {partnerForm.lastName} *
              <input name="lastName" autoComplete="family-name" required maxLength={80} />
            </label>
            <label>
              {partnerForm.email} *
              <input type="email" name="email" autoComplete="email" required maxLength={150} />
            </label>
            <label>
              {partnerForm.phone}
              <input type="tel" name="phone" autoComplete="tel" maxLength={40} />
            </label>
            <label className="full-width">
              {partnerForm.country}
              <input name="country" autoComplete="country-name" maxLength={80} />
            </label>
            <label className="full-width">
              {partnerForm.message} *
              <textarea
                name="message"
                rows={5}
                required
                maxLength={2000}
                placeholder={partnerForm.placeholder}
              />
            </label>
          </div>
          <p className="form-note">{partnerForm.privacy}</p>
          <button className="button button-white" type="submit">
            {partnerForm.submit}
          </button>
          <p className="form-note">{partnerForm.note}</p>
        </form>
      </Reveal>
    </section>
  );
}

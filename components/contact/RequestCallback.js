'use client';

import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Reveal } from '../shared/PageUi';
import { COUNTRIES, countryNameFromCode } from '../../lib/countries';

function FieldError({ name, errors, touched }) {
  if (!touched[name] || !errors[name]) return null;
  return (
    <span className="form-field-error" role="alert">
      {errors[name]}
    </span>
  );
}

function validateCallback(values, requiredMessage) {
  const errors = {};
  const required = requiredMessage || 'Please complete this field.';

  if (!values.firstName.trim()) errors.firstName = required;
  if (!values.lastName.trim()) errors.lastName = required;
  if (!values.email.trim()) {
    errors.email = required;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = required;
  }
  if (!values.phone.trim()) errors.phone = required;
  if (!values.country) errors.country = required;
  if (!values.message.trim()) errors.message = required;

  return errors;
}

export default function RequestCallback({ title, form }) {
  const [countryLoading, setCountryLoading] = useState(true);
  const requiredMessage = form.required || 'Please complete this field.';

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      message: '',
    },
    validate: (values) => validateCallback(values, requiredMessage),
    onSubmit: (values, helpers) => {
      const payload = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        countryCode: values.country,
        countryOfResidence: countryNameFromCode(values.country),
        message: values.message.trim(),
      };
      console.log('GTC Prime — Callback request', payload);
      helpers.setSubmitting(false);
    },
  });

  useEffect(() => {
    let cancelled = false;

    async function detectCountry() {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) return;
        const data = await response.json();
        if (!cancelled && data.country_code) {
          const code = String(data.country_code).toUpperCase();
          if (COUNTRIES.some((country) => country.code === code)) {
            formik.setFieldValue('country', code);
          }
        }
      } catch {
        /* optional geo lookup */
      } finally {
        if (!cancelled) setCountryLoading(false);
      }
    }

    detectCountry();
    return () => {
      cancelled = true;
    };
  }, [formik.setFieldValue]);

  return (
    <section id="contact-callback" className="section shell contact-callback" aria-labelledby="callback-title">
      <Reveal>
        <h2 id="callback-title" className="contact-callback-title">
          {title}
        </h2>
        <form
          className="contact-callback-form contact-callback-panel"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className="form-grid">
            <label>
              {form.firstName} *
              <input
                type="text"
                autoComplete="given-name"
                maxLength={80}
                {...formik.getFieldProps('firstName')}
              />
              <FieldError name="firstName" errors={formik.errors} touched={formik.touched} />
            </label>
            <label>
              {form.lastName} *
              <input
                type="text"
                autoComplete="family-name"
                maxLength={80}
                {...formik.getFieldProps('lastName')}
              />
              <FieldError name="lastName" errors={formik.errors} touched={formik.touched} />
            </label>
            <label>
              {form.email} *
              <input
                type="email"
                autoComplete="email"
                maxLength={150}
                {...formik.getFieldProps('email')}
              />
              <FieldError name="email" errors={formik.errors} touched={formik.touched} />
            </label>
            <label>
              {form.phone} *
              <input
                type="tel"
                autoComplete="tel"
                maxLength={40}
                {...formik.getFieldProps('phone')}
              />
              <FieldError name="phone" errors={formik.errors} touched={formik.touched} />
            </label>
            <label className="full-width contact-callback-country">
              {form.country} *
              <select
                name="country"
                autoComplete="country-name"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={countryLoading}
              >
                <option value="" disabled>
                  {countryLoading ? form.countryLoading : form.countrySelect}
                </option>
                {COUNTRIES.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              <FieldError name="country" errors={formik.errors} touched={formik.touched} />
              <span className="form-note contact-callback-country-hint">{form.countryHint}</span>
            </label>
            <label className="full-width">
              {form.message} *
              <textarea
                rows={5}
                maxLength={2000}
                placeholder={form.placeholder}
                {...formik.getFieldProps('message')}
              />
              <FieldError name="message" errors={formik.errors} touched={formik.touched} />
            </label>
          </div>
          <p className="form-note">{form.privacy}</p>
          <button
            className="button button-primary contact-callback-submit"
            type="submit"
            disabled={formik.isSubmitting}
          >
            {form.submit}
          </button>
          <p className="form-note">{form.note}</p>
        </form>
      </Reveal>
    </section>
  );
}

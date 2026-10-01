const SUPPORT_EMAIL = 'support@gtcprime.com';

export default function PartnerIntro({ text }) {
  if (!text.includes(SUPPORT_EMAIL)) return <p>{text}</p>;
  const [before, after] = text.split(SUPPORT_EMAIL);
  return (
    <p>
      {before}
      <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      {after}
    </p>
  );
}

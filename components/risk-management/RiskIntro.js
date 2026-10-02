import { Reveal } from '../shared/PageUi';

export default function RiskIntro({ paragraphs }) {
  if (!paragraphs?.length) return null;

  return (
    <section id="risk-content" className="section shell section-border risk-intro">
      <div className="risk-intro-grid">
        {paragraphs.map((paragraph, index) => (
          <Reveal key={index} delay={index * 0.08}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

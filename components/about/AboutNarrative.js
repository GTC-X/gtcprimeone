import { Reveal, Kicker, Heading } from '../shared/PageUi';

export default function AboutNarrative({ paragraphs, kicker, title }) {
  const [lead, ...rest] = paragraphs;

  return (
    <div className="audience-section">
      <section id="about-content" className="section shell about-narrative">
        <Reveal className="about-narrative-head">
          <Kicker className=" justify-center">{kicker}</Kicker>
          <Heading className="about-narrative-title">{title}</Heading>
        </Reveal>

        {lead && (
          <Reveal className="about-narrative-lead" delay={0.06}>
            <p>{lead}</p>
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="about-narrative-grid">
            {rest.map((paragraph, index) => (
              <Reveal key={index} delay={0.1 + index * 0.08} className="about-narrative-item">
                <span className="about-narrative-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

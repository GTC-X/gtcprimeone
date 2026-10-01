import { Reveal, Kicker, Heading } from '../shared/PageUi';

export default function AboutNarrative({ narrative, kicker, title }) {
  const { lead, chapters } = narrative;

  return (
    <div className="audience-section">
      <section id="about-content" className="section shell about-story">
        <Reveal className="about-story-head">
          <Kicker className="justify-center">{kicker}</Kicker>
          <Heading className="about-story-title">{title}</Heading>
        </Reveal>

        <Reveal className="about-story-lead" delay={0.05}>
          <p>{lead}</p>
        </Reveal>

        <div className="about-story-grid">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.title} delay={0.08 + index * 0.06} className="about-story-item">
              <span className="about-story-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
              {chapter.partners?.length > 0 && (
                <p className="about-story-partners">
                  {chapter.partners.map((name, i) => (
                    <span key={name}>
                      {i > 0 ? ' · ' : null}
                      {name}
                    </span>
                  ))}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

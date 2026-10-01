import { Reveal } from '../shared/PageUi';

export default function ConnectivityIntro({ paragraphs }) {
  return (
    <section id="connectivity-content" className="section shell section-border connectivity-intro">
      <div className="connectivity-intro-grid">
        {paragraphs.map((paragraph, index) => (
          <Reveal key={index} delay={index * 0.08}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

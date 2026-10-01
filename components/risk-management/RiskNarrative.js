import { Reveal } from '../shared/PageUi';

export default function RiskNarrative({ paragraphs }) {
  return (
    <div className='audience-section'>
    <section id="risk-content" className="section shell risk-narrative ">
      {paragraphs.map((paragraph, index) => (
        <Reveal key={index} delay={index * 0.08}>
          <p>{paragraph}</p>
        </Reveal>
      ))}
    </section>
    </div>
  );
}

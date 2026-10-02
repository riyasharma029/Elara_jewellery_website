import React from 'react';
import AnimatedSection from '../common/AnimatedSection.jsx';

const STEPS = [
  {
    num: '01',
    title: 'Design',
    description: 'Every piece begins as a drawing — a considered response to a stone\'s character, a patron\'s desire, or a material\'s unique possibility.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=85',
  },
  {
    num: '02',
    title: 'Craft',
    description: 'Master goldsmiths form each piece by hand using traditional techniques refined over generations. No shortcuts. No compromises.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700&q=85',
  },
  {
    num: '03',
    title: 'Detail',
    description: 'Setting, polishing, engraving — each micro-operation performed under magnification with tools made specifically for the task.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=85',
  },
  {
    num: '04',
    title: 'Finish',
    description: 'A final examination under natural light. The piece is signed. Packaged. And delivered as a work of permanent beauty.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=85',
  },
];

export default function Craftsmanship() {
  return (
    <section className="bg-[var(--elara-black)] section-pad" aria-labelledby="craftsmanship-heading">
      <div className="container-elara">

        {/* Header — split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-20">
          <AnimatedSection>
            <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
              The ÉLARA Process
            </span>
            <h2
              id="craftsmanship-heading"
              className="font-display text-[var(--elara-ivory)] mt-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em' }}
            >
              Extraordinary
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--elara-gold-light)' }}>Craftsmanship.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}>
              ÉLARA pieces are made by a small group of master jewellers whose combined experience spans many decades. We work slowly, deliberately and with a complete rejection of shortcuts. The result is jewellery that improves with age.
            </p>
          </AnimatedSection>
        </div>

        {/* Process steps — horizontal on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(245,240,232,0.06)]">
          {STEPS.map((step, i) => (
            <AnimatedSection
              key={step.num}
              delay={i * 120}
              className="bg-[var(--elara-black)]"
            >
              <div className="p-0 group">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={step.image}
                    alt={`${step.title} — ÉLARA craftsmanship`}
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.6) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />
                  {/* Step number overlay */}
                  <div className="absolute top-5 left-5">
                    <span className="font-display text-[var(--elara-gold)] opacity-60" style={{ fontSize: '3rem', fontWeight: 300, lineHeight: 1 }}>
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-6 pb-8">
                  <h3 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.4rem', fontWeight: 400 }}>
                    {step.title}
                  </h3>
                  <div className="w-6 h-px bg-[var(--elara-gold)] mt-3 mb-4 opacity-60" aria-hidden="true" />
                  <p className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.78rem', lineHeight: 1.75, fontWeight: 300 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

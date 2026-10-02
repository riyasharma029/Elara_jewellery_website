import React, { useState } from 'react';
import AnimatedSection from '../common/AnimatedSection.jsx';

const TESTIMONIALS = [
  {
    text: 'The Élan ring is beyond anything I could have imagined. The way it was presented, the care taken in every detail — I felt ÉLARA understood exactly what this moment meant.',
    author: 'Charlotte M.',
    detail: 'Élan Solitaire Ring',
    location: 'London',
  },
  {
    text: 'I have owned fine jewellery from many houses over the years. ÉLARA is in a category of its own. The craftsmanship is simply extraordinary.',
    author: 'Isabelle L.',
    detail: 'Lumière Diamond Halo Ring',
    location: 'Paris',
  },
  {
    text: 'The bespoke process was the most beautiful experience. Every detail, every conversation — they treated my piece as if it were their own.',
    author: 'Amelia J.',
    detail: 'Bespoke Commission',
    location: 'New York',
  },
  {
    text: 'I had been searching for the perfect pearl earrings for years. The Seraphine is everything I wanted — and more. No two are alike. That is the beauty of it.',
    author: 'Hana T.',
    detail: 'Seraphine Pearl Earrings',
    location: 'Tokyo',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[var(--elara-charcoal)] section-pad" aria-labelledby="testimonials-heading">
      <div className="container-elara">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="font-display text-[var(--elara-ivory)] mt-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 400 }}
          >
            Words from Those
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--elara-gold-light)' }}>Who Wear ÉLARA.</em>
          </h2>
        </AnimatedSection>

        {/* Active testimonial */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <div className="relative" style={{ minHeight: '180px' }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? 'none' : 'translateY(8px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  position: active === i ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  pointerEvents: active === i ? 'all' : 'none',
                }}
                aria-hidden={active !== i}
              >
                {/* Opening quote */}
                <span
                  className="font-display text-[var(--elara-gold)] block mb-6"
                  style={{ fontSize: '4rem', lineHeight: 0.7, opacity: 0.25 }}
                  aria-hidden="true"
                >
                  "
                </span>
                <p className="font-display text-[var(--elara-ivory)]" style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.6rem)', fontWeight: 300, lineHeight: 1.55, letterSpacing: '-0.01em' }}>
                  {t.text}
                </p>
                <div className="flex flex-col items-center mt-8 gap-1">
                  <span className="font-sans text-[var(--elara-ivory)]" style={{ fontSize: '0.78rem', fontWeight: 500 }}>
                    {t.author}
                  </span>
                  <span className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.65rem', letterSpacing: '0.08em' }}>
                    {t.detail} · {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-10" role="tablist" aria-label="Testimonial navigation">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={active === i}
                aria-label={`View testimonial ${i + 1}`}
                className="focus-visible:outline-none transition-all duration-300"
                style={{
                  width: active === i ? '24px' : '6px',
                  height: '2px',
                  background: active === i ? 'var(--elara-gold)' : 'rgba(201,169,110,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Compact additional quotes */}
        <AnimatedSection delay={200}>
          <div className="divider-subtle mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { rating: '⭐⭐⭐⭐⭐', text: 'The care guide and authentication certificate are a beautiful touch.', who: 'Sophie R.' },
              { rating: '⭐⭐⭐⭐⭐', text: 'Packaging arrived as if it were itself the gift. Pure refinement.', who: 'Natalie K.' },
              { rating: '⭐⭐⭐⭐⭐', text: 'The atelier visit during the bespoke process was unforgettable.', who: 'Marina V.' },
            ].map(({ rating, text, who }) => (
              <div key={who} className="text-center">
                <p className="font-sans text-[var(--elara-gold)]" style={{ fontSize: '0.65rem', letterSpacing: '0.06em' }}>
                  {rating}
                </p>
                <p className="font-sans text-[var(--elara-taupe-light)] mt-3" style={{ fontSize: '0.78rem', lineHeight: 1.65, fontStyle: 'italic' }}>
                  "{text}"
                </p>
                <p className="font-sans text-[var(--elara-taupe)] mt-2" style={{ fontSize: '0.65rem' }}>
                  — {who}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

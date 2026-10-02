import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection.jsx';

export default function BridalSection({ onNavigate }) {
  return (
    <section className="relative overflow-hidden section-pad-lg bg-[var(--elara-black)]" aria-labelledby="bridal-heading">
      <div className="container-elara">

        {/* Heading area */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
            Bridal Jewellery
          </span>
          <h2
            id="bridal-heading"
            className="font-display text-[var(--elara-ivory)] mt-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.015em' }}
          >
            For the
            <em style={{ fontStyle: 'italic', color: 'var(--elara-gold-light)' }}> Beginning</em>
            <br />
            of Everything.
          </h2>
        </AnimatedSection>

        {/* Immersive 3-panel layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

          {/* Panel 1: Engagement */}
          <AnimatedSection delay={100} className="group">
            <button
              onClick={() => onNavigate('shop', 'rings')}
              className="block w-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none"
              aria-label="Shop engagement rings"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=85"
                  alt="ÉLARA engagement rings"
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  loading="lazy"
                  style={{ filter: 'brightness(0.7) saturate(0.85)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.75) 0%, transparent 55%)' }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
                    Engagement Rings
                  </h3>
                  <p className="font-sans text-[var(--elara-taupe-light)] mt-1" style={{ fontSize: '0.72rem' }}>
                    The moment that changes everything.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[var(--elara-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-label" style={{ fontSize: '0.58rem' }}>Explore</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </button>
          </AnimatedSection>

          {/* Panel 2: Wedding (taller center) */}
          <AnimatedSection delay={200} className="group md:-mt-8">
            <button
              onClick={() => onNavigate('shop', 'bridal')}
              className="block w-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none"
              aria-label="Shop wedding bands"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '2/3.5' }}>
                <img
                  src="https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=700&q=85"
                  alt="ÉLARA bridal collection"
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  loading="lazy"
                  style={{ filter: 'brightness(0.65) saturate(0.85)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.8) 0%, transparent 55%)' }}
                  aria-hidden="true"
                />
                {/* Gold line border */}
                <div
                  className="absolute top-4 left-4 right-4 bottom-4 border border-[rgba(201,169,110,0.2)] pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
                  aria-hidden="true"
                />
                <div className="absolute top-6 left-6">
                  <span className="badge badge-exclusive">Bridal Collection</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.05 }}>
                    Complete
                    <br />
                    Bridal Sets
                  </h3>
                  <p className="font-sans text-[var(--elara-taupe-light)] mt-2" style={{ fontSize: '0.72rem', lineHeight: 1.6 }}>
                    Engagement ring and wedding band, designed from the first moment to be worn together.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[var(--elara-gold)]">
                    <span className="text-label" style={{ fontSize: '0.58rem' }}>Discover the Collection</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </button>
          </AnimatedSection>

          {/* Panel 3: Anniversary / Occasions */}
          <AnimatedSection delay={300} className="group">
            <button
              onClick={() => onNavigate('shop', 'earrings')}
              className="block w-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none"
              aria-label="Shop occasion jewellery"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=85"
                  alt="Occasion and anniversary jewellery"
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  loading="lazy"
                  style={{ filter: 'brightness(0.65) saturate(0.85)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.75) 0%, transparent 55%)' }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
                    Occasions
                  </h3>
                  <p className="font-sans text-[var(--elara-taupe-light)] mt-1" style={{ fontSize: '0.72rem' }}>
                    Anniversary, birthday, milestones.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[var(--elara-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-label" style={{ fontSize: '0.58rem' }}>Explore</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </button>
          </AnimatedSection>
        </div>

        {/* Bespoke nudge */}
        <AnimatedSection delay={400} className="text-center mt-14">
          <p className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.82rem' }}>
            Can't find exactly what you're looking for?
          </p>
          <button onClick={() => onNavigate('bespoke')} className="btn-text mt-3 mx-auto" style={{ fontSize: '0.62rem' }}>
            Create a bespoke piece with ÉLARA
            <ArrowRight size={13} />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}

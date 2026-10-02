import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection.jsx';

export default function SignatureCollection({ onNavigate }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '80vh' }}
      aria-labelledby="signature-heading"
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573408301185-9519f94815b4?w=1800&q=85"
          alt=""
          role="presentation"
          className="w-full h-full object-cover animate-pan"
          style={{ filter: 'brightness(0.4) saturate(0.8)' }}
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(10,9,8,0.85) 0%, rgba(10,9,8,0.3) 60%, rgba(10,9,8,0.5) 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container-elara py-24 md:py-36 flex items-center min-h-[80vh]">
        <div className="max-w-2xl">

          <AnimatedSection>
            <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
              — The Signature Collection
            </span>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h2
              id="signature-heading"
              className="font-display text-[var(--elara-ivory)] mt-5"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.02em' }}
            >
              Crafted to
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--elara-gold-light)' }}>Last Lifetimes.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="font-sans text-[var(--elara-cream)] mt-7" style={{ fontSize: '0.92rem', lineHeight: 1.8, maxWidth: 420, fontWeight: 300 }}>
              The Signature collection is built on a single principle: true luxury is found not in excess, but in the extraordinary quality of what is barely visible. Each piece is crafted to the highest possible standard, by hand, from the finest materials in the world.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={350} className="flex flex-col sm:flex-row items-start gap-4 mt-10">
            <button onClick={() => onNavigate('collection-detail', 'signature')} className="btn-primary">
              <span>Explore Signature</span>
              <ArrowRight size={14} />
            </button>
            <button onClick={() => onNavigate('bespoke')} className="btn-outline">
              <span>Create Bespoke</span>
            </button>
          </AnimatedSection>

          {/* Stats row */}
          <AnimatedSection delay={450} className="flex gap-10 mt-16 pt-10 border-t border-[rgba(245,240,232,0.1)]">
            {[
              { value: '18K', label: 'Pure Gold Standard' },
              { value: 'GIA', label: 'Certified Diamonds' },
              { value: 'Atelier', label: 'Hand Crafted' },
            ].map(({ value, label }) => (
              <div key={value}>
                <p className="font-display text-[var(--elara-gold-light)]" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
                  {value}
                </p>
                <p className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>
                  {label}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

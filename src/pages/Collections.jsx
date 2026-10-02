import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection.jsx';
import { collections } from '../data/collections.js';

export default function Collections({ onNavigate }) {
  return (
    <div className="bg-[var(--elara-black)] min-h-screen pt-20" id="main-content">

      {/* Page Hero */}
      <div className="relative overflow-hidden" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4) saturate(0.8)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.9) 0%, rgba(10,9,8,0.3) 60%, transparent 100%)' }} aria-hidden="true" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-elara pb-14">
            <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>ÉLARA</span>
            <h1 className="font-display text-[var(--elara-ivory)] mt-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
              Our Collections
            </h1>
            <p className="font-sans text-[var(--elara-cream)] mt-4" style={{ fontSize: '0.88rem', maxWidth: '500px', fontWeight: 300, lineHeight: 1.75 }}>
              Four distinct worlds of jewellery, each with its own philosophy, palette and spirit.
            </p>
          </div>
        </div>
      </div>

      {/* Collections grid */}
      <div className="container-elara section-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((col, i) => (
            <AnimatedSection key={col.id} delay={i * 100}>
              <button
                onClick={() => onNavigate('collection-detail', col.slug)}
                className="group block w-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none"
                aria-label={`Explore the ${col.name} collection`}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={col.heroImage}
                    alt={`${col.name} collection`}
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                    loading="lazy"
                    style={{ filter: 'brightness(0.7) saturate(0.85)' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.75) 0%, transparent 55%)' }}
                    aria-hidden="true"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="badge badge-exclusive">{col.pieces} Pieces</span>
                  </div>
                </div>

                {/* Info */}
                <div className="pt-5 pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.58rem' }}>
                        Collection
                      </p>
                      <h2 className="font-display text-[var(--elara-ivory)] mt-1.5 group-hover:text-[var(--elara-gold-light)] transition-colors" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400 }}>
                        {col.name}
                      </h2>
                    </div>
                    <ArrowRight size={18} className="text-[var(--elara-taupe)] group-hover:text-[var(--elara-gold)] transition-colors mt-2 flex-shrink-0" strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-[var(--elara-taupe-light)] mt-1" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                    {col.tagline}
                  </p>
                  <p className="font-sans text-[var(--elara-taupe)] mt-2" style={{ fontSize: '0.72rem' }}>
                    {col.palette}
                  </p>
                </div>

                <div className="divider-subtle mt-2 group-hover:bg-[rgba(201,169,110,0.2)] transition-colors" />
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}

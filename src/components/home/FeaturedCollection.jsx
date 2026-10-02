import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection.jsx';

export default function FeaturedCollection({ onNavigate }) {
  return (
    <section className="section-pad bg-[var(--elara-black)]" aria-labelledby="featured-heading">
      <div className="container-elara">

        {/* Section label */}
        <AnimatedSection className="flex items-center gap-3 mb-14">
          <span className="block w-8 h-px bg-[var(--elara-gold)]" aria-hidden="true" />
          <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
            Featured Collection
          </span>
        </AnimatedSection>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">

          {/* Large featured piece — left */}
          <AnimatedSection className="lg:col-span-7 relative group" delay={100}>
            <button
              onClick={() => onNavigate('product', 'elan-solitaire-ring')}
              className="block w-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none"
              aria-label="View Élan Solitaire Ring"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85"
                  alt="Élan Solitaire Ring — 18K Gold, Round Brilliant Diamond"
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.7) 0%, rgba(10,9,8,0.15) 50%, transparent 80%)' }}
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-label text-[var(--elara-gold)] mb-2" style={{ fontSize: '0.58rem' }}>Signature Collection</p>
                  <h2 id="featured-heading" className="font-display text-[var(--elara-ivory)]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, lineHeight: 1.1 }}>
                    Élan Solitaire Ring
                  </h2>
                  <p className="font-sans text-[var(--elara-taupe-light)] mt-2" style={{ fontSize: '0.75rem' }}>
                    18K Gold · Round Brilliant Diamond
                  </p>
                  <div className="flex items-center justify-between mt-5">
                    <span className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.2rem' }}>$8,200</span>
                    <span className="btn-text text-[var(--elara-ivory)] group-hover:text-[var(--elara-gold-light)] transition-colors" style={{ fontSize: '0.6rem' }}>
                      View Ring <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </AnimatedSection>

          {/* Right column — two stacked pieces */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-5">

            {/* Piece 2 */}
            <AnimatedSection className="relative group flex-1" delay={200}>
              <button
                onClick={() => onNavigate('product', 'celeste-diamond-pendant')}
                className="block w-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none h-full"
                aria-label="View Celeste Diamond Pendant"
              >
                <div className="relative overflow-hidden w-full h-full" style={{ minHeight: '240px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=85"
                    alt="Celeste Diamond Pendant — 18K Gold, 0.50ct Diamond"
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.65) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-label text-[var(--elara-gold)] mb-1" style={{ fontSize: '0.56rem' }}>Celestial</p>
                    <h3 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.35rem', fontWeight: 400 }}>
                      Celeste Diamond Pendant
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-sans text-[var(--elara-taupe-light)]" style={{ fontSize: '0.7rem' }}>from $4,850</span>
                      <ArrowRight size={14} className="text-[var(--elara-gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </button>
            </AnimatedSection>

            {/* Piece 3 with text treatment */}
            <AnimatedSection className="relative group flex-1 bg-[var(--elara-charcoal)] flex" delay={300}>
              <button
                onClick={() => onNavigate('product', 'seraphine-pearl-earrings')}
                className="flex w-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none"
                aria-label="View Seraphine Pearl Earrings"
              >
                {/* Image half */}
                <div className="w-1/2 overflow-hidden" style={{ minHeight: '200px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=85"
                    alt="Seraphine Pearl Earrings"
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                {/* Text half */}
                <div className="w-1/2 flex flex-col justify-between p-5">
                  <div>
                    <p className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.56rem' }}>New · Lumière</p>
                    <h3 className="font-display text-[var(--elara-ivory)] mt-2" style={{ fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.2 }}>
                      Seraphine Pearl Earrings
                    </h3>
                    <p className="font-sans text-[var(--elara-taupe)] mt-2" style={{ fontSize: '0.68rem', lineHeight: 1.6 }}>
                      Baroque South Sea pearls. Each pair a singular expression.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1rem' }}>$2,400</span>
                    <ArrowRight size={13} className="text-[var(--elara-gold)]" />
                  </div>
                </div>
              </button>
            </AnimatedSection>
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection className="flex justify-center mt-12" delay={400}>
          <button onClick={() => onNavigate('collections')} className="btn-outline">
            <span>View All Collections</span>
            <ArrowRight size={14} />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}

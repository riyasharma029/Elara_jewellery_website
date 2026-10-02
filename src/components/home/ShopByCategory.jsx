import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection.jsx';
import { categories } from '../../data/categories.js';

export default function ShopByCategory({ onNavigate }) {
  return (
    <section className="bg-[var(--elara-ivory)] section-pad" aria-labelledby="categories-heading">
      <div className="container-elara">

        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-label text-[var(--elara-gold-dark)]" style={{ fontSize: '0.6rem' }}>
              Shop by Category
            </span>
            <h2
              id="categories-heading"
              className="font-display text-[var(--elara-black)] mt-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              Every Jewel,
              <br />
              <em style={{ fontStyle: 'italic' }}>Every Occasion.</em>
            </h2>
          </div>
          <button onClick={() => onNavigate('shop')} className="btn-dark self-start md:self-auto">
            <span>Shop All Jewellery</span>
            <ArrowRight size={14} />
          </button>
        </AnimatedSection>

        {/* Categories — varied heights, non-uniform layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat, i) => {
            // Alternate heights for visual rhythm
            const tallClass = i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square';
            return (
              <AnimatedSection
                key={cat.id}
                delay={i * 80}
                className={i === 0 ? 'col-span-2 md:col-span-1 lg:col-span-2' : ''}
              >
                <button
                  onClick={() => onNavigate('shop', cat.slug)}
                  className="group relative w-full overflow-hidden bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none block"
                  aria-label={`Shop ${cat.name}`}
                  id={`cat-${cat.id}`}
                >
                  <div className={`relative overflow-hidden w-full ${i === 0 ? 'aspect-[4/3] md:aspect-[3/4]' : tallClass}`}>
                    <img
                      src={cat.imagePortrait}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    {/* Dark overlay */}
                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.68) 0%, rgba(10,9,8,0.1) 55%, transparent 80%)' }}
                      aria-hidden="true"
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 bg-[rgba(201,169,110,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      aria-hidden="true"
                    />

                    {/* Category name */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: i === 0 ? '1.5rem' : '1.1rem', fontWeight: 400 }}>
                        {cat.name}
                      </h3>
                      <p className="font-sans text-[var(--elara-taupe-light)] mt-0.5" style={{ fontSize: '0.62rem', letterSpacing: '0.06em' }}>
                        {cat.count} pieces
                      </p>
                      <div
                        className="flex items-center gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ transform: 'translateY(4px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}
                      >
                        <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.56rem' }}>Explore</span>
                        <ArrowRight size={10} className="text-[var(--elara-gold)]" />
                      </div>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

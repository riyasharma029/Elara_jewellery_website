import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection.jsx';
import ProductCard from '../components/shop/ProductCard.jsx';
import { getCollectionBySlug } from '../data/collections.js';
import { getProductsByCollection } from '../data/products.js';

export default function CollectionDetail({ onNavigate, collectionSlug }) {
  const collection = getCollectionBySlug(collectionSlug || 'signature');
  const collectionProducts = getProductsByCollection(collection?.id || 'signature');

  if (!collection) return null;

  return (
    <div className="bg-[var(--elara-black)] min-h-screen" id="main-content">
      {/* Full-bleed collection hero */}
      <div className="relative overflow-hidden" style={{ height: '80vh', minHeight: '500px' }}>
        <img
          src={collection.heroImage}
          alt={`${collection.name} collection hero`}
          className="w-full h-full object-cover animate-pan"
          style={{ filter: 'brightness(0.45) saturate(0.85)' }}
          fetchpriority="high"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,9,8,1) 0%, rgba(10,9,8,0.4) 50%, transparent 80%)' }} aria-hidden="true" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-elara pb-16">
            <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
              ÉLARA Collection
            </span>
            <h1 className="font-display text-[var(--elara-ivory)] mt-4" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 0.92, letterSpacing: '-0.025em' }}>
              {collection.name}
            </h1>
            <p className="font-display text-[var(--elara-gold-light)] mt-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontStyle: 'italic', fontWeight: 300 }}>
              {collection.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Collection story */}
      <div className="container-elara py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <p className="font-sans text-[var(--elara-cream)]" style={{ fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300 }}>
              {collection.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-2">
            <div>
              <p className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.58rem' }}>Palette</p>
              <p className="font-sans text-[var(--elara-taupe-light)] mt-1" style={{ fontSize: '0.78rem' }}>{collection.palette}</p>
            </div>
            <div>
              <p className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.58rem' }}>Pieces in Collection</p>
              <p className="font-display text-[var(--elara-ivory)] mt-1" style={{ fontSize: '1.5rem', fontWeight: 400 }}>{collection.pieces}</p>
            </div>
          </div>
        </div>

        <div className="divider-gold mb-16" />

        {/* Products */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 400 }}>
            The Pieces
          </h2>
          <button onClick={() => onNavigate('shop')} className="btn-text text-[var(--elara-taupe)]" style={{ fontSize: '0.6rem' }}>
            View All Jewellery <ArrowRight size={12} />
          </button>
        </div>

        {collectionProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {collectionProducts.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 80}>
                <ProductCard product={product} onNavigate={onNavigate} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="skeleton aspect-[3/4]" aria-hidden="true" />
            ))}
          </div>
        )}
      </div>

      {/* Bespoke nudge */}
      <div className="bg-[var(--elara-charcoal)] border-t border-[rgba(201,169,110,0.1)]">
        <div className="container-elara py-14 text-center">
          <AnimatedSection>
            <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>Bespoke Service</span>
            <h3 className="font-display text-[var(--elara-ivory)] mt-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300 }}>
              Commission a piece from the {collection.name} palette.
            </h3>
            <p className="font-sans text-[var(--elara-taupe)] mt-3 mx-auto" style={{ fontSize: '0.82rem', maxWidth: 480, lineHeight: 1.75 }}>
              Work directly with our master jewellers to create a {collection.name.toLowerCase()} piece that is entirely your own.
            </p>
            <button onClick={() => onNavigate('bespoke')} className="btn-gold mt-8 mx-auto">
              <span>Request a Consultation</span>
              <ArrowRight size={14} />
            </button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

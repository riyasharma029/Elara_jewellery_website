import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection.jsx';
import WishlistButton from '../common/WishlistButton.jsx';
import Lightbox from '../common/Lightbox.jsx';
import { getBestsellers } from '../../data/products.js';

export default function Bestsellers({ onNavigate }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightbox, setLightbox] = useState(null); // { image, alt }
  const bestsellers = getBestsellers();

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const by = dir === 'left' ? -360 : 360;
    el.scrollBy({ left: by, behavior: 'smooth' });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  return (
    <>
      <section className="section-pad bg-[var(--elara-charcoal)]" aria-labelledby="bestsellers-heading">
        <div className="container-elara">

          {/* Header */}
          <AnimatedSection className="flex items-end justify-between mb-10">
            <div>
              <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
                Most Loved
              </span>
              <h2 id="bestsellers-heading" className="font-display text-[var(--elara-ivory)] mt-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400 }}>
                Bestsellers
              </h2>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll carousel left"
                className={`w-10 h-10 border flex items-center justify-center transition-all ${canScrollLeft ? 'border-[rgba(201,169,110,0.35)] text-[var(--elara-ivory)] hover:border-[var(--elara-gold)] hover:text-[var(--elara-gold)]' : 'border-[rgba(245,240,232,0.1)] text-[var(--elara-stone)]'} bg-transparent cursor-pointer focus-visible:outline-none`}
              >
                <ArrowLeft size={16} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll carousel right"
                className={`w-10 h-10 border flex items-center justify-center transition-all ${canScrollRight ? 'border-[rgba(201,169,110,0.35)] text-[var(--elara-ivory)] hover:border-[var(--elara-gold)] hover:text-[var(--elara-gold)]' : 'border-[rgba(245,240,232,0.1)] text-[var(--elara-stone)]'} bg-transparent cursor-pointer focus-visible:outline-none`}
              >
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </AnimatedSection>

          {/* Carousel */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-4 overflow-x-auto hide-scrollbar pb-2"
            role="list"
            aria-label="Bestselling jewellery"
          >
            {bestsellers.map((product, i) => (
              <AnimatedSection
                key={product.id}
                delay={i * 80}
                className="flex-shrink-0 w-[280px] sm:w-[300px] group"
                role="listitem"
              >
                <div className="product-card">
                  {/* Image */}
                  <button
                    onClick={() => setLightbox({ image: product.images[0], alt: product.name })}
                    className="block w-full bg-transparent border-none p-0 cursor-zoom-in focus-visible:outline-none"
                    aria-label={`View full image of ${product.name}`}
                  >
                    <div className="card-image-wrap relative" style={{ aspectRatio: '3/4' }}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="card-img-primary w-full h-full object-cover"
                        loading="lazy"
                      />

                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-3 left-3">
                          <span className={`badge badge-${product.badge}`}>
                            {product.badge === 'new' ? 'New' : product.badge === 'bestseller' ? 'Bestseller' : product.badge === 'limited' ? 'Limited' : 'Exclusive'}
                          </span>
                        </div>
                      )}

                      {/* Wishlist */}
                      <div className="absolute top-3 right-3">
                        <WishlistButton productId={product.id} />
                      </div>
                    </div>
                  </button>

                  {/* Info */}
                  <div className="pt-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.56rem' }}>
                          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                        </p>
                        <h3 className="font-display text-[var(--elara-ivory)] mt-1" style={{ fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.2 }}>
                          {product.name}
                        </h3>
                        <p className="font-sans text-[var(--elara-taupe)] mt-1" style={{ fontSize: '0.68rem' }}>
                          {product.materials?.metal}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.05rem' }}>
                        {product.priceFormatted}
                      </span>
                      <button
                        onClick={() => onNavigate('product', product.slug)}
                        className="btn-text"
                        style={{ fontSize: '0.58rem' }}
                        aria-label={`View ${product.name}`}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* View all CTA */}
          <AnimatedSection delay={200} className="flex justify-center mt-10">
            <button onClick={() => onNavigate('shop')} className="btn-outline">
              <span>View All Jewellery</span>
              <ArrowRight size={14} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {lightbox && (
        <Lightbox
          image={lightbox.image}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}



  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const by = dir === 'left' ? -360 : 360;
    el.scrollBy({ left: by, behavior: 'smooth' });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  return (
    <section className="section-pad bg-[var(--elara-charcoal)]" aria-labelledby="bestsellers-heading">
      <div className="container-elara">

        {/* Header */}
        <AnimatedSection className="flex items-end justify-between mb-10">
          <div>
            <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
              Most Loved
            </span>
            <h2 id="bestsellers-heading" className="font-display text-[var(--elara-ivory)] mt-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400 }}>
              Bestsellers
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll carousel left"
              className={`w-10 h-10 border flex items-center justify-center transition-all ${canScrollLeft ? 'border-[rgba(201,169,110,0.35)] text-[var(--elara-ivory)] hover:border-[var(--elara-gold)] hover:text-[var(--elara-gold)]' : 'border-[rgba(245,240,232,0.1)] text-[var(--elara-stone)]'} bg-transparent cursor-pointer focus-visible:outline-none`}
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll carousel right"
              className={`w-10 h-10 border flex items-center justify-center transition-all ${canScrollRight ? 'border-[rgba(201,169,110,0.35)] text-[var(--elara-ivory)] hover:border-[var(--elara-gold)] hover:text-[var(--elara-gold)]' : 'border-[rgba(245,240,232,0.1)] text-[var(--elara-stone)]'} bg-transparent cursor-pointer focus-visible:outline-none`}
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-2"
          role="list"
          aria-label="Bestselling jewellery"
        >
          {bestsellers.map((product, i) => (
            <AnimatedSection
              key={product.id}
              delay={i * 80}
              className="flex-shrink-0 w-[280px] sm:w-[300px] group"
              role="listitem"
            >
              <div className="product-card">
                {/* Image */}
                <button
                  onClick={() => onNavigate('product', product.slug)}
                  className="block w-full bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none"
                  aria-label={`View ${product.name}`}
                >
                  <div className="card-image-wrap relative" style={{ aspectRatio: '3/4' }}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="card-img-primary w-full h-full object-cover"
                      loading="lazy"
                    />
                    {product.images[1] && (
                      <img
                        src={product.images[1]}
                        alt={`${product.name} — alternate view`}
                        className="card-img-secondary w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className={`badge badge-${product.badge}`}>
                          {product.badge === 'new' ? 'New' : product.badge === 'bestseller' ? 'Bestseller' : product.badge === 'limited' ? 'Limited' : 'Exclusive'}
                        </span>
                      </div>
                    )}

                    {/* Wishlist */}
                    <div className="absolute top-3 right-3">
                      <WishlistButton productId={product.id} />
                    </div>
                  </div>
                </button>

                {/* Info */}
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.56rem' }}>
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </p>
                      <h3 className="font-display text-[var(--elara-ivory)] mt-1" style={{ fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.2 }}>
                        {product.name}
                      </h3>
                      <p className="font-sans text-[var(--elara-taupe)] mt-1" style={{ fontSize: '0.68rem' }}>
                        {product.materials?.metal}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.05rem' }}>
                      {product.priceFormatted}
                    </span>
                    <button
                      onClick={() => onNavigate('product', product.slug)}
                      className="btn-text"
                      style={{ fontSize: '0.58rem' }}
                      aria-label={`View ${product.name}`}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View all CTA */}
        <AnimatedSection delay={200} className="flex justify-center mt-10">
          <button onClick={() => onNavigate('shop')} className="btn-outline">
            <span>View All Jewellery</span>
            <ArrowRight size={14} />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}

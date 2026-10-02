import React, { useState } from 'react';
import WishlistButton from '../common/WishlistButton.jsx';
import Lightbox from '../common/Lightbox.jsx';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onNavigate }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <article className="product-card">
        {/* Image area */}
        <div className="relative">
          <button
            onClick={() => setLightboxOpen(true)}
            className="block w-full bg-transparent border-none p-0 cursor-zoom-in focus-visible:outline-none"
            aria-label={`View full image of ${product.name}`}
          >
            <div className="card-image-wrap" style={{ aspectRatio: '3/4', background: 'var(--elara-charcoal)' }}>
              <img
                src={product.images[0]}
                alt={`${product.name} — ${product.materials?.metal || ''}`}
                className="card-img-primary w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </button>

          {/* Overlays on image */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badge && (
              <span className={`badge badge-${product.badge}`}>
                {product.badge === 'new' ? 'New' :
                 product.badge === 'bestseller' ? 'Bestseller' :
                 product.badge === 'limited' ? 'Limited' : 'Exclusive'}
              </span>
            )}
            {product.availability === 'limited' && !product.badge && (
              <span className="badge badge-limited">Limited</span>
            )}
          </div>

          <div className="absolute top-3 right-3">
            <WishlistButton productId={product.id} />
          </div>
        </div>

        {/* Product info */}
        <div className="pt-4">
          <p className="text-label text-[var(--elara-gold)] capitalize" style={{ fontSize: '0.56rem' }}>
            {product.category} · {product.collection ? product.collection.charAt(0).toUpperCase() + product.collection.slice(1) : ''}
          </p>

          <button
            onClick={() => onNavigate('product', product.slug)}
            className="block text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none mt-1 w-full"
          >
            <h3
              className="font-display text-[var(--elara-ivory)] hover:text-[var(--elara-gold-light)] transition-colors"
              style={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.25 }}
            >
              {product.name}
            </h3>
          </button>

          {product.materials?.metal && (
            <p className="font-sans text-[var(--elara-taupe)] mt-1" style={{ fontSize: '0.68rem' }}>
              {product.materials.metal}
            </p>
          )}

          <div className="flex items-center justify-between mt-3">
            <span className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1rem' }}>
              {product.priceFormatted}
            </span>
            <button
              onClick={() => onNavigate('product', product.slug)}
              className="text-[var(--elara-taupe)] hover:text-[var(--elara-gold)] transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none"
              aria-label={`View details for ${product.name}`}
            >
              <ArrowRight size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </article>

      {lightboxOpen && (
        <Lightbox
          image={product.images[0]}
          alt={product.name}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}

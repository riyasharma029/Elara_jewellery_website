import React from 'react';
import AnimatedSection from '../common/AnimatedSection.jsx';
import { Instagram } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=85', alt: 'Solitaire ring on elegant hand' },
  { src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=85', alt: 'Diamond pendant jewellery close-up' },
  { src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=85', alt: 'Baroque pearl earrings editorial' },
  { src: 'https://images.unsplash.com/photo-1573408301185-9519f94815b4?w=400&q=85', alt: 'Gold bracelet on wrist' },
  { src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=85', alt: 'Diamond pendant lifestyle shot' },
  { src: 'https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=400&q=85', alt: 'Bridal jewellery editorial' },
  { src: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=85', alt: 'Diamond stud earrings' },
  { src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=85', alt: 'Fine jewellery macro photography' },
];

export default function SocialGallery() {
  return (
    <section className="bg-[var(--elara-black)] section-pad" aria-labelledby="social-heading">
      <div className="container-elara">

        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram size={14} className="text-[var(--elara-gold)]" />
            <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
              @elarajewelry
            </span>
          </div>
          <h2
            id="social-heading"
            className="font-display text-[var(--elara-ivory)]"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 400 }}
          >
            ÉLARA in the World
          </h2>
          <p className="font-sans text-[var(--elara-taupe)] mt-3" style={{ fontSize: '0.8rem' }}>
            Share your ÉLARA moment with <span className="text-[var(--elara-gold)]">#ElaraJewelry</span>
          </p>
        </AnimatedSection>

        {/* Editorial mosaic — non-uniform grid */}
        <div className="grid grid-cols-4 gap-1 md:gap-2" role="list" aria-label="ÉLARA gallery">
          {GALLERY_IMAGES.map((img, i) => {
            // Create editorial asymmetry with some spanning
            const spanClass =
              i === 0 ? 'col-span-2 row-span-2' :
              i === 4 ? 'col-span-2' :
              i === 7 ? 'col-span-2' : '';

            const aspectClass =
              i === 0 ? '' :
              i === 4 || i === 7 ? 'aspect-[2/1]' : 'aspect-square';

            return (
              <AnimatedSection
                key={i}
                delay={i * 50}
                className={`group overflow-hidden ${spanClass}`}
                role="listitem"
              >
                <a
                  href="#"
                  aria-label={img.alt}
                  className="block relative overflow-hidden focus-visible:outline-none"
                  style={{ aspectRatio: i === 0 ? '1' : i === 4 || i === 7 ? '2/1' : '1' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                    loading="lazy"
                    style={{ filter: 'brightness(0.9) saturate(0.85)' }}
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 bg-[rgba(201,169,110,0.08)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    aria-hidden="true"
                  >
                    <Instagram size={20} className="text-[var(--elara-ivory)]" />
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={200} className="text-center mt-8">
          <a
            href="https://instagram.com/elarajewelry"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-text mx-auto"
            style={{ fontSize: '0.62rem' }}
          >
            Follow @elarajewelry on Instagram
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

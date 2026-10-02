import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: 'min(100svh, 900px)', minHeight: '600px' }}
      aria-label="ÉLARA hero — Fine Jewelry"
    >
      {/* Background Image with parallax */}
      <div
        className="absolute inset-0 bg-[var(--elara-charcoal)]"
        style={{ transform: `translateY(${parallaxOffset}px)`, willChange: 'transform' }}
      >
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800&q=90"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.08)', filter: 'brightness(0.55) saturate(0.9)' }}
          fetchpriority="high"
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,9,8,0.75) 0%, rgba(10,9,8,0.2) 60%, transparent 100%)' }} aria-hidden="true" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.8) 0%, rgba(10,9,8,0.1) 50%, transparent 100%)' }} aria-hidden="true" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container-elara pb-16 md:pb-20">
          <div
            className="max-w-2xl"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.8s ease',
            }}
          >
            {/* Editorial label */}
            <div
              className="flex items-center gap-3 mb-6"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(16px)', transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s' }}
            >
              <span className="block w-8 h-px bg-[var(--elara-gold)]" aria-hidden="true" />
              <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.62rem' }}>
                New Collection — Lumière
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-[var(--elara-ivory)]"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(24px)',
                transition: 'opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s',
              }}
            >
              Architecture
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--elara-gold-light)' }}>of Light.</em>
            </h1>

            {/* Brand statement */}
            <p
              className="font-sans text-[var(--elara-cream)] mt-6"
              style={{
                fontSize: 'clamp(0.82rem, 1.5vw, 0.95rem)',
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: '420px',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s',
              }}
            >
              Fine jewellery designed to carry light, memory and meaning through every moment of a life well lived.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 mt-10"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s',
              }}
            >
              <button
                onClick={() => onNavigate('shop')}
                className="btn-primary"
                id="hero-explore-btn"
              >
                <span>Explore Collection</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="btn-outline"
                id="hero-story-btn"
              >
                <span>Discover Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right: scroll indicator */}
      <div
        className="absolute bottom-6 right-6 md:right-12 flex flex-col items-center gap-2"
        style={{ opacity: loaded ? 0.5 : 0, transition: 'opacity 1s ease 1.2s' }}
        aria-hidden="true"
      >
        <span className="font-sans text-[var(--elara-taupe-light)]" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--elara-gold)] to-transparent" />
      </div>
    </section>
  );
}

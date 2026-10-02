import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection.jsx';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--elara-black)' }}
      aria-labelledby="newsletter-heading"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true" style={{
        backgroundImage: 'radial-gradient(circle, var(--elara-gold) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Top gold divider */}
      <div className="divider-gold" />

      <div className="container-elara section-pad text-center">
        <AnimatedSection>
          <span className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>
            Private Access
          </span>
          <h2
            id="newsletter-heading"
            className="font-display text-[var(--elara-ivory)] mt-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.015em' }}
          >
            Enter the World
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--elara-gold-light)' }}>of Fine Jewellery.</em>
          </h2>
          <p className="font-sans text-[var(--elara-taupe)] mt-5 mx-auto" style={{ fontSize: '0.85rem', lineHeight: 1.75, maxWidth: '420px', fontWeight: 300 }}>
            Receive early access to new collections, private events, editorial stories and exclusive offers reserved for ÉLARA members.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-10 flex justify-center">
          {submitted ? (
            <div className="text-center">
              <p className="font-display text-[var(--elara-gold-light)]" style={{ fontSize: '1.4rem' }}>
                Welcome to ÉLARA.
              </p>
              <p className="font-sans text-[var(--elara-taupe)] mt-2" style={{ fontSize: '0.78rem' }}>
                We'll be in touch with something worth your attention.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md" aria-label="Newsletter subscription form">
              <div className="flex" role="group" aria-label="Email subscription">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  required
                  className="flex-1 bg-transparent border border-r-0 border-[rgba(245,240,232,0.18)] px-5 py-4 text-[var(--elara-ivory)] font-sans outline-none placeholder:text-[var(--elara-taupe)] focus:border-[rgba(201,169,110,0.45)] transition-colors"
                  style={{ fontSize: '0.83rem' }}
                />
                <button
                  type="submit"
                  className="px-6 bg-[var(--elara-gold)] text-[var(--elara-black)] hover:bg-[var(--elara-gold-light)] transition-colors flex items-center gap-2 border-none cursor-pointer focus-visible:outline-none font-sans font-medium flex-shrink-0"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  aria-label="Subscribe to newsletter"
                >
                  <span className="hidden sm:inline">Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </div>
              <p className="font-sans text-[var(--elara-taupe)] mt-3 text-center" style={{ fontSize: '0.62rem', letterSpacing: '0.04em' }}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </AnimatedSection>

        {/* Trust badges */}
        <AnimatedSection delay={350} className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-16 pt-12 border-t border-[rgba(245,240,232,0.06)]">
          {[
            { icon: '🔒', label: 'SSL Secured Checkout' },
            { icon: '✦', label: 'Authenticity Guaranteed' },
            { icon: '↩', label: 'Free Returns, 30 Days' },
            { icon: '✈', label: 'Worldwide Delivery' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>{icon}</span>
              <span className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.68rem', letterSpacing: '0.08em' }}>
                {label}
              </span>
            </div>
          ))}
        </AnimatedSection>
      </div>

      <div className="divider-gold" />
    </section>
  );
}

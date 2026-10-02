import React from 'react';
import { ArrowRight, Compass, Shield, Award, Sparkles, Feather } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection.jsx';
import Breadcrumb from '../components/common/Breadcrumb.jsx';

const PILLARS = [
  {
    icon: Compass,
    title: 'Ethical Provenance',
    description: 'Every diamond is Kimberley Process compliant and conflict-free. We only work with RJC-certified suppliers and 100% recycled 18K gold and 950 platinum.',
  },
  {
    icon: Award,
    title: 'Atelier Mastery',
    description: 'Our goldsmiths bring generations of bench training. Every pavé bead, prong, and bezel is carved under microscopic magnification.',
  },
  {
    icon: Feather,
    title: 'Intimate Ergonomics',
    description: 'A jewel must feel like silk against the skin. We weight-balance every ring and articulate every link to move harmoniously with the wearer.',
  },
  {
    icon: Sparkles,
    title: 'Archival Permanence',
    description: 'We do not follow fleeting fashion seasons. ÉLARA designs are created as modern heirlooms intended to be passed down through generations.',
  },
];

const NUMBERS = [
  { value: '18K & 950', label: 'Gold Purity & Platinum' },
  { value: '100%', label: 'Conflict-Free Diamonds' },
  { value: '80+ hrs', label: 'Artisan Craft per High Jewel' },
  { value: 'Lifetime', label: 'Atelier Care & Warranty' },
];

export default function About({ onNavigate }) {
  return (
    <div className="bg-[var(--elara-black)] min-h-screen text-[var(--elara-ivory)] pt-20" id="main-content">
      {/* Breadcrumb */}
      <div className="container-elara py-4">
        <Breadcrumb
          items={[
            { label: 'Home', page: 'home' },
            { label: 'The Maison' },
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800&q=85"
            alt="Maison ÉLARA"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35) saturate(0.8)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--elara-black)] via-[var(--elara-black)]/60 to-transparent" />
        </div>

        <div className="container-elara relative z-10 py-20 text-center max-w-4xl mx-auto">
          <span className="text-label text-[var(--elara-gold)] mb-4 block" style={{ fontSize: '0.65rem' }}>
            MAISON ÉLARA • ESTABLISHED IN PERPETUITY
          </span>
          <h1
            className="font-display font-light text-[var(--elara-ivory)] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Sculpting Light, <br />
            <span className="italic text-[var(--elara-gold-light)] font-light">Honouring Eternity</span>
          </h1>
          <p className="font-sans text-[var(--elara-taupe-light)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            ÉLARA was born of a singular conviction: fine jewelry is not an accessory, but an intimate reliquary of emotion, memory, and personal sovereignty.
          </p>
        </div>
      </section>

      {/* Origin Story Split Section */}
      <section className="section-pad">
        <div className="container-elara">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <AnimatedSection className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] overflow-hidden border border-[rgba(201,169,110,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=85"
                  alt="Jewelry Artisan at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-60 border border-[var(--elara-gold)]/40 overflow-hidden bg-[var(--elara-charcoal)] p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=85"
                  alt="Fine Solitaire"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} className="lg:col-span-6">
              <span className="text-label text-[var(--elara-gold)] mb-3 block">OUR PHILOSOPHY</span>
              <h2 className="font-display text-3xl md:text-5xl text-[var(--elara-ivory)] mb-6 leading-tight">
                Where Pure Geometry Meets Organic Brilliance
              </h2>
              <p className="font-sans text-sm md:text-base text-[var(--elara-taupe-light)] leading-relaxed mb-4">
                In an era dominated by rapid synthetic production and fleeting trend cycles, ÉLARA recommits to the deliberate pace of true haute joaillerie. Each stone is individually sought, examined under natural morning light, and matched with an architectural setting designed solely to amplify its optical life.
              </p>
              <p className="font-sans text-sm md:text-base text-[var(--elara-taupe-light)] leading-relaxed mb-8">
                We view gold and platinum not merely as precious metals, but as warm mirrors to human touch. Our goldsmiths hand-burnish internal edges so every piece glides effortlessly onto the finger, neck, or wrist.
              </p>
              <div className="border-l-2 border-[var(--elara-gold)] pl-6 py-2 italic font-display text-xl text-[var(--elara-ivory)]">
                &ldquo;True luxury is never loud. It is the silent confidence of unmatched proportion and irreproachable craft.&rdquo;
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="border-y border-[rgba(201,169,110,0.18)] bg-[var(--elara-charcoal)] py-14">
        <div className="container-elara">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {NUMBERS.map((item, idx) => (
              <AnimatedSection key={item.label} delay={idx * 60}>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--elara-gold)] mb-2 font-light">
                  {item.value}
                </div>
                <div className="font-sans text-[0.68rem] tracking-[0.14em] uppercase text-[var(--elara-taupe)]">
                  {item.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="section-pad">
        <div className="container-elara">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-label text-[var(--elara-gold)] mb-3 block">THE ÉLARA COMMITMENT</span>
            <h2 className="font-display text-3xl md:text-5xl text-[var(--elara-ivory)] mb-4">
              Four Pillars of Mastery
            </h2>
            <p className="font-sans text-sm text-[var(--elara-taupe)] leading-relaxed">
              Our code of honour governs every gem, cut, and polish leaving our benches.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection
                  key={pillar.title}
                  delay={idx * 80}
                  className="border border-[rgba(245,240,232,0.1)] bg-[var(--elara-charcoal)]/60 p-8 hover:border-[var(--elara-gold)]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-[var(--elara-gold)]/30 text-[var(--elara-gold)] flex items-center justify-center mb-6">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-xl text-[var(--elara-ivory)] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs text-[var(--elara-taupe)] leading-relaxed">
                    {pillar.description}
                  </p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Sourcing Deep-Dive */}
      <section className="bg-[var(--elara-charcoal)] section-pad border-t border-[rgba(201,169,110,0.15)]">
        <div className="container-elara">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection className="lg:col-span-6 order-2 lg:order-1">
              <span className="text-label text-[var(--elara-gold)] mb-3 block">TRACEABLE RESPONSIBILITY</span>
              <h2 className="font-display text-3xl md:text-5xl text-[var(--elara-ivory)] mb-6">
                Conscious Beauty Without Compromise
              </h2>
              <p className="font-sans text-sm text-[var(--elara-taupe-light)] leading-relaxed mb-4">
                We believe that a jewel celebrating love or personal triumph must never come at human or planetary cost. We reject opaque supply chains. All diamonds over 0.50 carats are laser-inscribed with international laboratory certifications and originate from nations with stringent labor and environmental mandates.
              </p>
              <p className="font-sans text-sm text-[var(--elara-taupe-light)] leading-relaxed mb-8">
                Our precious metals are refined from audited recycled sources, drastically diminishing new mining impact while upholding the identical molecular excellence of newly refined gold and platinum.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('bespoke')}
                  className="btn-gold"
                >
                  <span>Commission Bespoke</span>
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => onNavigate('shop')}
                  className="btn-outline-gold"
                >
                  <span>View All Jewellery</span>
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120} className="lg:col-span-6 order-1 lg:order-2">
              <div className="aspect-[4/3] overflow-hidden border border-[rgba(201,169,110,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85"
                  alt="Refined gemstone"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

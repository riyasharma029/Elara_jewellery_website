import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection.jsx';

export default function BrandStory({ onNavigate }) {
  return (
    <section className="bg-[var(--elara-ivory)] section-pad-lg" aria-labelledby="story-heading">
      <div className="container-elara">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image composition */}
          <AnimatedSection direction="right" className="relative">
            {/* Primary image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', maxWidth: '460px' }}>
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85"
                alt="ÉLARA artisan crafting fine jewellery"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Secondary image — offset overlay */}
            <div
              className="absolute overflow-hidden border-4 border-[var(--elara-ivory)] hidden md:block"
              style={{ width: '55%', aspectRatio: '1', bottom: '-6%', right: '-8%' }}
            >
              <img
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=85"
                alt="ÉLARA jewellery detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Gold accent line */}
            <div
              className="absolute hidden lg:block"
              style={{ top: '10%', left: '-5%', width: '1px', height: '40%', background: 'linear-gradient(to bottom, transparent, var(--elara-gold-dark), transparent)' }}
              aria-hidden="true"
            />
          </AnimatedSection>

          {/* Right: Text */}
          <AnimatedSection direction="left" delay={150}>
            <span className="text-label text-[var(--elara-gold-dark)]" style={{ fontSize: '0.6rem' }}>
              The ÉLARA Story
            </span>

            <h2
              id="story-heading"
              className="font-display text-[var(--elara-black)] mt-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.015em' }}
            >
              Jewellery is not
              <br />
              <em style={{ fontStyle: 'italic' }}>decoration.</em>
              <br />
              It is memory.
            </h2>

            <div className="w-10 h-px bg-[var(--elara-gold-dark)] my-7 opacity-60" aria-hidden="true" />

            <p className="font-sans text-[var(--elara-stone)] mb-4" style={{ fontSize: '0.88rem', lineHeight: 1.85, fontWeight: 300 }}>
              ÉLARA was founded on the belief that truly exceptional jewellery is inseparable from the story it carries. A ring that marks a decision. A necklace worn at a loss. A bracelet given with no occasion except love.
            </p>
            <p className="font-sans text-[var(--elara-stone)]" style={{ fontSize: '0.88rem', lineHeight: 1.85, fontWeight: 300 }}>
              Every piece we create is made to be felt as much as seen — to be a presence on the body, not merely an adornment. We work with the finest materials, in the oldest traditions, toward a single standard: permanence.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 mb-10">
              {[
                { title: 'Provenance', desc: 'Ethically sourced stones from certified mines worldwide.' },
                { title: 'Craft', desc: 'Handmade by master jewellers with decades of experience.' },
                { title: 'Design', desc: 'Timeless forms that outlast every passing trend.' },
                { title: 'Promise', desc: 'Lifetime servicing and authentication guarantee.' },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <h4 className="font-display text-[var(--elara-black)]" style={{ fontSize: '1rem', fontWeight: 500 }}>
                    {title}
                  </h4>
                  <p className="font-sans text-[var(--elara-warm-gray)] mt-1" style={{ fontSize: '0.72rem', lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <button onClick={() => onNavigate('about')} className="btn-dark">
              <span>Our Full Story</span>
              <ArrowRight size={14} />
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

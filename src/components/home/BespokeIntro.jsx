import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection.jsx';

export default function BespokeIntro({ onNavigate }) {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'A personal conversation about your vision, material preferences, and the story behind the piece.' },
    { num: '02', title: 'Inspiration', desc: 'We gather references, sketch initial ideas, and present a direction for your approval.' },
    { num: '03', title: 'Design', desc: 'Detailed drawings and, where appropriate, 3D renderings so you can see the piece before it exists.' },
    { num: '04', title: 'Craftsmanship', desc: 'Your piece is hand-made by a master jeweller. You can visit the atelier at any stage.' },
    { num: '05', title: 'Final Piece', desc: 'Delivered in ÉLARA packaging, with full documentation, certification and care instructions.' },
  ];

  return (
    <section className="bg-[var(--elara-cream)] section-pad" aria-labelledby="bespoke-heading">
      <div className="container-elara">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <AnimatedSection>
              <span className="text-label text-[var(--elara-gold-dark)]" style={{ fontSize: '0.6rem' }}>
                Bespoke Jewellery
              </span>
              <h2
                id="bespoke-heading"
                className="font-display text-[var(--elara-black)] mt-4"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.015em' }}
              >
                Made
                <br />
                <em style={{ fontStyle: 'italic' }}>For You.</em>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="font-sans text-[var(--elara-stone)] mt-7" style={{ fontSize: '0.88rem', lineHeight: 1.85, fontWeight: 300, maxWidth: 440 }}>
                Some of the most meaningful jewellery in existence was made for one person alone. ÉLARA's bespoke service allows you to collaborate directly with our master jewellers to create a piece that carries your exact vision — and no other.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={250} className="mt-8">
              <button onClick={() => onNavigate('bespoke')} className="btn-dark">
                <span>Request a Consultation</span>
                <ArrowRight size={14} />
              </button>
            </AnimatedSection>

            {/* Trust signals */}
            <AnimatedSection delay={350} className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-[rgba(44,41,38,0.12)]">
              {[
                { stat: '4–8 weeks', label: 'Typical creation time' },
                { stat: '100%', label: 'Custom & unique' },
                { stat: 'Lifetime', label: 'Warranty included' },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="font-display text-[var(--elara-black)]" style={{ fontSize: '1.4rem', fontWeight: 400 }}>{stat}</p>
                  <p className="font-sans text-[var(--elara-warm-gray)]" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 3 }}>{label}</p>
                </div>
              ))}
            </AnimatedSection>
          </div>

          {/* Right — process steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <AnimatedSection
                key={step.num}
                delay={i * 80}
                className="flex gap-6 py-6 border-b border-[rgba(44,41,38,0.1)] last:border-0 group"
              >
                <span
                  className="font-display text-[var(--elara-gold-dark)] flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ fontSize: '1.8rem', fontWeight: 300, lineHeight: 1, minWidth: '40px' }}
                >
                  {step.num}
                </span>
                <div>
                  <h3 className="font-display text-[var(--elara-black)]" style={{ fontSize: '1.2rem', fontWeight: 500 }}>
                    {step.title}
                  </h3>
                  <p className="font-sans text-[var(--elara-stone)] mt-2" style={{ fontSize: '0.78rem', lineHeight: 1.7, fontWeight: 300 }}>
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

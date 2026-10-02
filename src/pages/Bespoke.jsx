import React, { useState } from 'react';
import { ArrowRight, Sparkles, Gem, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection.jsx';
import Breadcrumb from '../components/common/Breadcrumb.jsx';

const BESPOKE_STEPS = [
  {
    num: '01',
    title: 'Private Consultation',
    subtitle: 'A Meeting of Minds & Desires',
    desc: 'Whether in our London salon or via private digital appointment, we explore your vision, aesthetics, milestones, and personal iconography. No initial design is too abstract.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=85',
  },
  {
    num: '02',
    title: 'Gemstone Curation',
    subtitle: 'Ethical Provenance & Extraordinary Fire',
    desc: 'Our certified gemologists source extraordinary rare diamonds, certified untreated sapphires, Colombian emeralds, or custom-cut stones tailored precisely to your palette.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85',
  },
  {
    num: '03',
    title: 'Gouache & Atelier Renderings',
    subtitle: 'From Hand Painting to Precision Proportion',
    desc: 'Traditional hand-painted French gouache illustrations are created alongside microscopic 3D engineering renders, allowing you to experience proportions from every facet.',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=85',
  },
  {
    num: '04',
    title: 'Master Hand-Forging',
    subtitle: 'Centuries of Goldsmithing Mastery',
    desc: 'Every bezel, claw, and band is hand-forged in recycled 18k gold or 950 platinum by our master goldsmiths in Hatton Garden, consuming up to 80 hours of meticulous craft.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=85',
  },
  {
    num: '05',
    title: 'Presentation & Heritage Vault',
    subtitle: 'An Unforgettable Unveiling',
    desc: 'Delivered in a bespoke handmade walnut jewel box, accompanied by GIA/HRD certificates, hand-bound atelier sketches, and a lifetime international provenance guarantee.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85',
  },
];

const ARCHIVE_COMMISSIONS = [
  {
    title: 'The Solstice Pear Diamond Ring',
    spec: '3.42ct D/FL Type IIa Pear Brilliant • Hand-pierced Platinum',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=85',
    tag: 'Engagement',
  },
  {
    title: 'Nocturne Ceylon Sapphire Collar',
    spec: '18.60ct Unheated Royal Blue Sapphire • 18K White Gold Micro-pavé',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=700&q=85',
    tag: 'High Jewellery',
  },
  {
    title: 'Heirloom Re-imagined Tiara Band',
    spec: 'Client Heirloom Diamonds • Hand-carved 18K Yellow Gold',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=700&q=85',
    tag: 'Heirloom Rework',
  },
];

export default function Bespoke({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Engagement Ring',
    budget: '$10,000 - $25,000',
    timeline: 'Within 2-3 months',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--elara-black)] min-h-screen text-[var(--elara-ivory)] pt-20" id="main-content">
      {/* Breadcrumb */}
      <div className="container-elara py-4">
        <Breadcrumb
          items={[
            { label: 'Home', page: 'home' },
            { label: 'Bespoke Atelier' },
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=1800&q=85"
            alt="Bespoke Jewelry Craftsmanship"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35) saturate(0.85)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, var(--elara-black) 0%, rgba(10,9,8,0.5) 60%, rgba(10,9,8,0.3) 100%)',
            }}
          />
        </div>

        <div className="container-elara relative z-10 py-24">
          <div className="max-w-3xl">
            <span className="text-label text-[var(--elara-gold)] mb-4 block" style={{ fontSize: '0.65rem' }}>
              HAUTE JOAILLERIE SUR-MESURE
            </span>
            <h1
              className="font-display font-light text-[var(--elara-ivory)] mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              One-of-a-Kind Jewels, <br />
              <span className="italic text-[var(--elara-gold-light)] font-light">Born of Your Story</span>
            </h1>
            <p
              className="font-sans text-[var(--elara-taupe-light)] text-base md:text-lg mb-8 max-w-2xl"
              style={{ lineHeight: 1.8 }}
            >
              ÉLARA Bespoke is a collaborative odyssey between you and our master artisans. From finding rare natural gems with singular fire to hand-forging in noble metals, we manifest jewels designed to outlast centuries.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#bespoke-inquiry"
                className="btn-gold"
              >
                <span>Request a Consultation</span>
                <ArrowRight size={14} />
              </a>
              <button
                onClick={() => onNavigate('shop')}
                className="btn-outline-gold"
              >
                <span>Explore Creations</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Philosophy Banner */}
      <section className="border-y border-[rgba(201,169,110,0.18)] bg-[var(--elara-charcoal)] py-12">
        <div className="container-elara grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-[var(--elara-gold)]/30 flex items-center justify-center shrink-0 text-[var(--elara-gold)]">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="font-display text-lg text-[var(--elara-ivory)] mb-1">Singular Provenance</h4>
              <p className="font-sans text-xs text-[var(--elara-taupe)] leading-relaxed">
                Hand-selected GIA certified diamonds, unheated rare sapphires, and ethically sourced gems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-[var(--elara-gold)]/30 flex items-center justify-center shrink-0 text-[var(--elara-gold)]">
              <Gem size={18} />
            </div>
            <div>
              <h4 className="font-display text-lg text-[var(--elara-ivory)] mb-1">Hand-Forged Artisanship</h4>
              <p className="font-sans text-xs text-[var(--elara-taupe)] leading-relaxed">
                Zero mass production. Every claw, bezel, and gallery is hand-carved in 18K gold and 950 platinum.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-[var(--elara-gold)]/30 flex items-center justify-center shrink-0 text-[var(--elara-gold)]">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="font-display text-lg text-[var(--elara-ivory)] mb-1">Lifetime Custodianship</h4>
              <p className="font-sans text-xs text-[var(--elara-taupe)] leading-relaxed">
                Complimentary annual inspections, ultrasonic re-polishing, and appraisal valuation updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Step Process */}
      <section className="section-pad">
        <div className="container-elara">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-label text-[var(--elara-gold)] mb-3 block">THE METHODOLOGY</span>
            <h2 className="font-display text-3xl md:text-5xl text-[var(--elara-ivory)] mb-4">
              The Bespoke Commission Journey
            </h2>
            <p className="font-sans text-sm text-[var(--elara-taupe)] leading-relaxed">
              Every commission is an intimate creative dialogue spanning 4 to 8 weeks, yielding an immortal treasure.
            </p>
          </AnimatedSection>

          <div className="space-y-16 lg:space-y-24">
            {BESPOKE_STEPS.map((step, idx) => (
              <AnimatedSection
                key={step.num}
                delay={idx * 80}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:col-start-7' : ''}`}>
                  <div className="relative group overflow-hidden border border-[rgba(201,169,110,0.15)] aspect-[4/3]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--elara-black)]/60 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 font-display text-3xl text-[var(--elara-gold)]">
                      {step.num}
                    </span>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <span className="text-label text-[var(--elara-gold)] mb-2 block">{step.subtitle}</span>
                  <h3 className="font-display text-2xl md:text-4xl text-[var(--elara-ivory)] mb-4">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[var(--elara-taupe-light)] text-sm md:text-base leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <div className="h-px w-20 bg-[var(--elara-gold)]/40" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Archive / Gallery Showcase */}
      <section className="bg-[var(--elara-charcoal)] section-pad border-y border-[rgba(201,169,110,0.15)]">
        <div className="container-elara">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-label text-[var(--elara-gold)] mb-2 block">ATELIER VAULT</span>
              <h2 className="font-display text-3xl md:text-5xl text-[var(--elara-ivory)]">
                Selected Past Commissions
              </h2>
            </div>
            <p className="font-sans text-xs text-[var(--elara-taupe)] max-w-sm mt-4 md:mt-0 leading-relaxed">
              Archived pieces designed in private collaboration with international patrons. Each design remains unique and never reproduced verbatim.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARCHIVE_COMMISSIONS.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 100} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-4 border border-[rgba(245,240,232,0.08)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--elara-black)]/80 text-[var(--elara-gold)] text-[0.62rem] uppercase tracking-wider px-2.5 py-1 border border-[var(--elara-gold)]/30 backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <h4 className="font-display text-lg text-[var(--elara-ivory)] group-hover:text-[var(--elara-gold)] transition-colors">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-[var(--elara-taupe)] mt-1">{item.spec}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Consultation Form */}
      <section id="bespoke-inquiry" className="section-pad">
        <div className="container-elara max-w-4xl mx-auto">
          <div className="border border-[rgba(201,169,110,0.25)] bg-[var(--elara-charcoal)] p-8 md:p-14 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[var(--elara-gold)]/5 blur-3xl pointer-events-none" />

            <AnimatedSection className="text-center max-w-xl mx-auto mb-10">
              <span className="text-label text-[var(--elara-gold)] mb-2 block">COMMENCE YOUR ODYSSEY</span>
              <h2 className="font-display text-3xl md:text-4xl text-[var(--elara-ivory)] mb-3">
                Request a Private Consultation
              </h2>
              <p className="font-sans text-xs md:text-sm text-[var(--elara-taupe)] leading-relaxed">
                Connect with our head gemologist and creative director. We will review your vision and arrange an in-person or virtual appointment.
              </p>
            </AnimatedSection>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full border border-[var(--elara-gold)] text-[var(--elara-gold)] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-display text-2xl text-[var(--elara-ivory)] mb-2">Inquiry Received with Distinction</h3>
                <p className="font-sans text-xs text-[var(--elara-taupe-light)] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, {formData.name}. Our bespoke concierge will review your desires and contact you within 24 business hours to arrange your bespoke preview.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-gold text-xs"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[0.68rem] tracking-wider uppercase text-[var(--elara-taupe)] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Lady / Lord / Mr / Ms..."
                      className="w-full bg-[var(--elara-black)] border border-[rgba(245,240,232,0.15)] focus:border-[var(--elara-gold)] text-[var(--elara-ivory)] px-4 py-3 text-xs outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.68rem] tracking-wider uppercase text-[var(--elara-taupe)] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="patron@domain.com"
                      className="w-full bg-[var(--elara-black)] border border-[rgba(245,240,232,0.15)] focus:border-[var(--elara-gold)] text-[var(--elara-ivory)] px-4 py-3 text-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[0.68rem] tracking-wider uppercase text-[var(--elara-taupe)] mb-2">
                      Commission Type
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[var(--elara-black)] border border-[rgba(245,240,232,0.15)] focus:border-[var(--elara-gold)] text-[var(--elara-ivory)] px-4 py-3 text-xs outline-none transition-colors"
                    >
                      <option>Engagement Ring</option>
                      <option>Wedding Bands</option>
                      <option>High Jewellery Necklace</option>
                      <option>Earrings / Bracelet</option>
                      <option>Heirloom Restoration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.68rem] tracking-wider uppercase text-[var(--elara-taupe)] mb-2">
                      Anticipated Investment
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[var(--elara-black)] border border-[rgba(245,240,232,0.15)] focus:border-[var(--elara-gold)] text-[var(--elara-ivory)] px-4 py-3 text-xs outline-none transition-colors"
                    >
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.68rem] tracking-wider uppercase text-[var(--elara-taupe)] mb-2">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[var(--elara-black)] border border-[rgba(245,240,232,0.15)] focus:border-[var(--elara-gold)] text-[var(--elara-ivory)] px-4 py-3 text-xs outline-none transition-colors"
                    >
                      <option>Within 1-2 months</option>
                      <option>Within 2-3 months</option>
                      <option>3-6 months</option>
                      <option>Flexible / Planning Ahead</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[0.68rem] tracking-wider uppercase text-[var(--elara-taupe)] mb-2">
                    Vision & Specific Desires
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the gemstone preferences, metal preference (18K Yellow, Rose, White or Platinum), occasion, or aesthetic mood..."
                    className="w-full bg-[var(--elara-black)] border border-[rgba(245,240,232,0.15)] focus:border-[var(--elara-gold)] text-[var(--elara-ivory)] px-4 py-3 text-xs outline-none transition-colors"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="btn-gold px-12 py-4 text-xs"
                  >
                    <span>Request Private Appointment</span>
                    <ArrowRight size={14} />
                  </button>
                  <p className="font-sans text-[0.65rem] text-[var(--elara-taupe)] mt-3">
                    All consultations are strictly confidential. Our salon operates by private appointment only.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

const FOOTER_LINKS = {
  Shop: [
    { label: 'New Arrivals', page: 'shop', filter: 'new-arrivals' },
    { label: 'Rings', page: 'shop', filter: 'rings' },
    { label: 'Necklaces', page: 'shop', filter: 'necklaces' },
    { label: 'Earrings', page: 'shop', filter: 'earrings' },
    { label: 'Bracelets', page: 'shop', filter: 'bracelets' },
    { label: 'Bridal', page: 'shop', filter: 'bridal' },
    { label: 'Collections', page: 'collections' },
  ],
  'Customer Care': [
    { label: 'Shipping & Returns', page: 'home' },
    { label: 'Jewellery Care', page: 'home' },
    { label: 'Ring Size Guide', page: 'home' },
    { label: 'FAQ', page: 'home' },
    { label: 'Contact Us', page: 'home' },
  ],
  About: [
    { label: 'Our Story', page: 'about' },
    { label: 'Craftsmanship', page: 'about' },
    { label: 'Sustainability', page: 'about' },
    { label: 'Press', page: 'home' },
  ],
  Services: [
    { label: 'Bespoke Jewellery', page: 'bespoke' },
    { label: 'Engraving', page: 'home' },
    { label: 'Resizing', page: 'home' },
    { label: 'Cleaning & Repair', page: 'home' },
  ],
};

export default function Footer({ onNavigate }) {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[var(--elara-charcoal)] border-t border-[rgba(201,169,110,0.1)]" role="contentinfo">

      {/* Newsletter banner */}
      <div className="border-b border-[rgba(201,169,110,0.1)]">
        <div className="container-elara py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.6rem' }}>Stay Connected</p>
            <h3 className="font-display text-[var(--elara-ivory)] mt-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400 }}>
              Enter the world of fine jewellery.
            </h3>
            <p className="font-sans text-[var(--elara-taupe)] mt-2" style={{ fontSize: '0.8rem' }}>
              New collections, private events and exclusive offers delivered to you.
            </p>
          </div>

          {subscribed ? (
            <p className="font-display text-[var(--elara-gold-light)]" style={{ fontSize: '1.1rem' }}>
              Thank you for joining ÉLARA.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-0 w-full max-w-md" aria-label="Newsletter subscription">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  required
                  className="w-full bg-transparent border border-[rgba(245,240,232,0.15)] border-r-0 text-[var(--elara-ivory)] px-4 py-3.5 outline-none font-sans placeholder:text-[var(--elara-taupe)] focus:border-[rgba(201,169,110,0.4)] transition-colors"
                  style={{ fontSize: '0.8rem' }}
                />
              </div>
              <button
                type="submit"
                className="px-5 bg-[var(--elara-gold)] text-[var(--elara-black)] hover:bg-[var(--elara-gold-light)] transition-colors flex items-center gap-2 border-none cursor-pointer focus-visible:outline-none"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer links */}
      <div className="container-elara py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <button
              onClick={() => onNavigate('home')}
              className="font-display tracking-[0.3em] text-[var(--elara-ivory)] text-lg mb-5 block bg-transparent border-none cursor-pointer p-0 focus-visible:outline-none"
            >
              ÉLARA
            </button>
            <p className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.78rem', lineHeight: 1.8, maxWidth: 220 }}>
              Fine jewellery crafted with extraordinary artistry and enduring purpose.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: 'Instagram', href: '#', Icon: Instagram },
                {
                  label: 'Pinterest',
                  href: '#',
                  Icon: () => (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.23-5.22 1.23-5.22s-.32-.63-.32-1.56c0-1.46.85-2.56 1.9-2.56.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.52-.25 1.05.52 1.9 1.55 1.9 1.86 0 3.11-2.38 3.11-5.2 0-2.14-1.44-3.74-4.03-3.74-2.94 0-4.78 2.2-4.78 4.64 0 .84.24 1.43.62 1.89.17.2.19.28.13.51-.05.18-.16.61-.21.78-.07.25-.28.34-.5.25-1.38-.56-2.03-2.07-2.03-3.76 0-2.8 2.36-6.17 7.03-6.17 3.77 0 6.25 2.74 6.25 5.68 0 3.89-2.15 6.82-5.32 6.82-1.06 0-2.06-.57-2.4-1.22l-.67 2.57c-.24.9-.7 1.81-1.13 2.51.85.26 1.75.4 2.68.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  )
                },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`ÉLARA on ${label}`}
                  className="w-8 h-8 border border-[rgba(245,240,232,0.12)] flex items-center justify-center text-[var(--elara-taupe)] hover:border-[rgba(201,169,110,0.35)] hover:text-[var(--elara-ivory)] transition-colors"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-label text-[var(--elara-taupe)] mb-5" style={{ fontSize: '0.58rem' }}>
                {section}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, page, filter }) => (
                  <li key={label}>
                    <button
                      onClick={() => onNavigate(page, filter || null)}
                      className="font-sans text-[var(--elara-taupe-light)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer p-0 focus-visible:outline-none text-left"
                      style={{ fontSize: '0.78rem' }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(245,240,232,0.06)]">
        <div className="container-elara py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.68rem', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} ÉLARA Fine Jewellery. All rights reserved.
          </p>

          {/* Payment / Trust */}
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((pay) => (
              <span key={pay} className="font-sans text-[var(--elara-taupe)] border border-[rgba(245,240,232,0.1)] px-2 py-1" style={{ fontSize: '0.58rem', letterSpacing: '0.06em' }}>
                {pay}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <button
                key={link}
                className="font-sans text-[var(--elara-taupe)] hover:text-[var(--elara-taupe-light)] transition-colors bg-transparent border-none cursor-pointer p-0 focus-visible:outline-none"
                style={{ fontSize: '0.63rem' }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

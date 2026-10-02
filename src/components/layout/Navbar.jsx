import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ShoppingBag, Heart, Menu, ChevronDown, ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'new-arrivals', label: 'NEW ARRIVALS', type: 'link', page: 'shop', param: 'new-arrivals' },
  {
    id: 'jewelry',
    label: 'JEWELRY',
    type: 'dropdown',
    page: 'shop',
    param: null,
    categories: [
      { label: 'Rings', desc: 'Solitaires, Bands & Halos', page: 'shop', filter: 'rings' },
      { label: 'Necklaces', desc: 'Collars, Chains & Statement Pieces', page: 'shop', filter: 'necklaces' },
      { label: 'Earrings', desc: 'Studs, Drops & Baroque Pearls', page: 'shop', filter: 'earrings' },
      { label: 'Bracelets', desc: 'Tennis, Bangles & Fluid Chains', page: 'shop', filter: 'bracelets' },
      { label: 'Pendants', desc: 'Solitaire & Diamond Jewels', page: 'shop', filter: 'pendants' },
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=85',
      label: 'Signature Collection',
      title: 'Élan Solitaire Ring',
      page: 'product',
      slug: 'elan-solitaire-ring',
    },
  },
  {
    id: 'collections',
    label: 'COLLECTIONS',
    type: 'dropdown',
    page: 'collections',
    param: null,
    categories: [
      { label: 'Celestial', desc: 'Drawn from the Stars', page: 'collection-detail', filter: 'celestial' },
      { label: 'Signature', desc: 'The ÉLARA Standard', page: 'collection-detail', filter: 'signature' },
      { label: 'Lumière', desc: 'Architecture of Pure Light', page: 'collection-detail', filter: 'lumiere' },
      { label: 'Bridal', desc: 'For the Beginning of Everything', page: 'collection-detail', filter: 'bridal' },
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=85',
      label: 'New Collection',
      title: 'Celestial Suite',
      page: 'collection-detail',
      slug: 'celestial',
    },
  },
  { id: 'bridal', label: 'BRIDAL', type: 'link', page: 'shop', param: 'bridal' },
  { id: 'bespoke', label: 'BESPOKE', type: 'link', page: 'bespoke', param: null },
  { id: 'about', label: 'ABOUT', type: 'link', page: 'about', param: null },
];

export default function Navbar({
  currentPage,
  pageParam,
  onNavigate,
  cartCount = 0,
  onCartOpen,
  onSearchOpen,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState('up');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [showAccountNotice, setShowAccountNotice] = useState(false);
  const [showWishlistNotice, setShowWishlistNotice] = useState(false);
  const lastScrollY = useRef(0);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setScrollDir(y > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleDropdownEnter = (id) => {
    clearTimeout(hoverTimeout.current);
    setActiveDropdown(id);
  };

  const handleDropdownLeave = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  // Check which top-level item is active
  const isItemActive = (item) => {
    if (item.id === 'bridal') {
      return currentPage === 'shop' && pageParam === 'bridal';
    }
    if (item.id === 'new-arrivals') {
      return currentPage === 'shop' && pageParam === 'new-arrivals';
    }
    if (item.id === 'jewelry') {
      return (
        currentPage === 'shop' &&
        pageParam !== 'bridal' &&
        pageParam !== 'new-arrivals'
      );
    }
    if (item.id === 'collections') {
      return currentPage === 'collections' || currentPage === 'collection-detail';
    }
    if (item.id === 'bespoke') return currentPage === 'bespoke';
    if (item.id === 'about') return currentPage === 'about';
    return false;
  };

  const navBg = scrolled
    ? 'glass-dark border-b border-[rgba(201,169,110,0.15)] shadow-2xl backdrop-blur-md'
    : 'bg-[var(--elara-black)]/80 border-b border-[rgba(245,240,232,0.05)] backdrop-blur-sm';

  const navTranslate = scrollDir === 'down' && scrolled ? '-translate-y-full' : 'translate-y-0';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${navTranslate}`}
        role="banner"
      >
        <div className="container-elara">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Brand Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex-shrink-0 bg-transparent border-none cursor-pointer p-0 focus-visible:outline-none group"
              aria-label="ÉLARA — Return to homepage"
            >
              <span
                className="font-display font-light tracking-[0.28em] text-[var(--elara-ivory)] group-hover:text-[var(--elara-gold)] transition-colors duration-300"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', letterSpacing: '0.3em' }}
              >
                ÉLARA
              </span>
            </button>

            {/* Desktop Navigation: Simplified Premium 6-item Structure */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                const hasMenu = item.type === 'dropdown';

                return (
                  <div
                    key={item.id}
                    className="relative py-2"
                    onMouseEnter={() => hasMenu && handleDropdownEnter(item.id)}
                    onMouseLeave={() => hasMenu && handleDropdownLeave()}
                  >
                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        onNavigate(item.page, item.param);
                      }}
                      className={`flex items-center gap-1.5 py-1 text-label transition-colors duration-200 bg-transparent border-none cursor-pointer focus-visible:outline-none relative group ${
                        active
                          ? 'text-[var(--elara-gold)] font-semibold'
                          : 'text-[var(--elara-taupe-light)] hover:text-[var(--elara-ivory)]'
                      }`}
                      style={{ fontSize: '0.66rem', letterSpacing: '0.14em' }}
                      aria-haspopup={hasMenu ? 'true' : undefined}
                      aria-expanded={hasMenu ? activeDropdown === item.id : undefined}
                    >
                      <span>{item.label}</span>
                      {hasMenu && (
                        <ChevronDown
                          size={11}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.id ? 'rotate-180 text-[var(--elara-gold)]' : 'text-[var(--elara-taupe)]'
                          }`}
                        />
                      )}
                      {/* Active Indicator Underline */}
                      {active && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--elara-gold)] shadow-[0_0_8px_rgba(201,169,110,0.5)]" />
                      )}
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Utility Action Icons */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Search */}
              <button
                onClick={onSearchOpen}
                aria-label="Search jewelry"
                className="w-9 h-9 flex items-center justify-center text-[var(--elara-taupe-light)] hover:text-[var(--elara-gold)] transition-colors focus-visible:outline-none bg-transparent border-none cursor-pointer"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              {/* Account */}
              <div className="relative">
                <button
                  onClick={() => setShowAccountNotice(prev => !prev)}
                  aria-label="Client account"
                  className="hidden md:flex w-9 h-9 items-center justify-center text-[var(--elara-taupe-light)] hover:text-[var(--elara-gold)] transition-colors focus-visible:outline-none bg-transparent border-none cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </button>
                {showAccountNotice && (
                  <div className="absolute right-0 top-full mt-2 w-56 p-4 bg-[var(--elara-charcoal)] border border-[rgba(201,169,110,0.3)] shadow-2xl z-50 text-left">
                    <p className="text-label text-[var(--elara-gold)] text-[0.6rem]">ÉLARA Maison</p>
                    <p className="font-sans text-xs text-[var(--elara-taupe-light)] mt-1">
                      Private concierge client portal.
                    </p>
                    <button
                      onClick={() => { setShowAccountNotice(false); onNavigate('about'); }}
                      className="mt-3 text-[0.7rem] text-[var(--elara-ivory)] hover:text-[var(--elara-gold)] flex items-center gap-1 font-sans bg-transparent border-none p-0 cursor-pointer"
                    >
                      Contact Atelier <ArrowRight size={10} />
                    </button>
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <div className="relative">
                <button
                  onClick={() => setShowWishlistNotice(prev => !prev)}
                  aria-label="Wishlist"
                  className="hidden md:flex w-9 h-9 items-center justify-center text-[var(--elara-taupe-light)] hover:text-[var(--elara-gold)] transition-colors focus-visible:outline-none bg-transparent border-none cursor-pointer"
                >
                  <Heart size={18} strokeWidth={1.5} />
                </button>
                {showWishlistNotice && (
                  <div className="absolute right-0 top-full mt-2 w-56 p-4 bg-[var(--elara-charcoal)] border border-[rgba(201,169,110,0.3)] shadow-2xl z-50 text-left">
                    <p className="text-label text-[var(--elara-gold)] text-[0.6rem]">Curated Wishlist</p>
                    <p className="font-sans text-xs text-[var(--elara-taupe-light)] mt-1">
                      Save pieces to view in private consultation.
                    </p>
                    <button
                      onClick={() => { setShowWishlistNotice(false); onNavigate('shop'); }}
                      className="mt-3 text-[0.7rem] text-[var(--elara-ivory)] hover:text-[var(--elara-gold)] flex items-center gap-1 font-sans bg-transparent border-none p-0 cursor-pointer"
                    >
                      Browse Jewels <ArrowRight size={10} />
                    </button>
                  </div>
                )}
              </div>

              {/* Shopping Bag */}
              <button
                onClick={onCartOpen}
                aria-label={`Shopping bag, ${cartCount} items`}
                className="w-9 h-9 flex items-center justify-center text-[var(--elara-taupe-light)] hover:text-[var(--elara-gold)] transition-colors focus-visible:outline-none bg-transparent border-none cursor-pointer relative"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[var(--elara-black)] font-sans font-semibold"
                    style={{ fontSize: '0.55rem', background: 'var(--elara-gold)' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="lg:hidden flex w-9 h-9 items-center justify-center text-[var(--elara-taupe-light)] hover:text-[var(--elara-ivory)] transition-colors focus-visible:outline-none bg-transparent border-none cursor-pointer ml-1"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Dropdowns for JEWELRY and COLLECTIONS */}
        {NAV_ITEMS.filter(item => item.type === 'dropdown').map((item) => {
          const isOpen = activeDropdown === item.id;
          return (
            <div
              key={item.id}
              className={`mega-menu ${isOpen ? 'open' : ''}`}
              onMouseEnter={() => { clearTimeout(hoverTimeout.current); setActiveDropdown(item.id); }}
              onMouseLeave={handleDropdownLeave}
              aria-hidden={!isOpen}
            >
              <div className="container-elara py-10">
                <div className="flex gap-16 items-start">
                  {/* Category Links Column */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between pb-3 mb-6 border-b border-[rgba(201,169,110,0.15)]">
                      <p className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.65rem' }}>
                        {item.id === 'jewelry' ? 'Shop Fine Jewelry by Category' : 'Haute Joaillerie Collections'}
                      </p>
                      <button
                        onClick={() => { onNavigate(item.page); setActiveDropdown(null); }}
                        className="text-label text-[var(--elara-taupe-light)] hover:text-[var(--elara-ivory)] flex items-center gap-1.5 transition-colors bg-transparent border-none cursor-pointer p-0"
                        style={{ fontSize: '0.62rem' }}
                      >
                        {item.id === 'jewelry' ? 'View All Jewelry' : 'Explore All Collections'}
                        <ArrowRight size={11} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                      {item.categories.map((cat) => (
                        <button
                          key={cat.label}
                          onClick={() => {
                            onNavigate(cat.page, cat.filter);
                            setActiveDropdown(null);
                          }}
                          className="flex flex-col items-start py-3 text-left group bg-transparent border-none cursor-pointer focus-visible:outline-none w-full border-b border-solid"
                          style={{ borderBottom: '1px solid rgba(245,240,232,0.06)' }}
                        >
                          <span
                            className="font-display text-[var(--elara-ivory)] group-hover:text-[var(--elara-gold)] transition-colors"
                            style={{ fontSize: '1.15rem', fontWeight: 400 }}
                          >
                            {cat.label}
                          </span>
                          <span
                            className="text-[var(--elara-taupe)] group-hover:text-[var(--elara-taupe-light)] font-sans transition-colors"
                            style={{ fontSize: '0.72rem', marginTop: '3px' }}
                          >
                            {cat.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Featured Spotlight Card */}
                  {item.featured && (
                    <div className="w-64 flex-shrink-0 bg-[var(--elara-charcoal)]/60 border border-[rgba(201,169,110,0.15)] p-4">
                      <p className="text-label text-[var(--elara-taupe)] mb-3" style={{ fontSize: '0.6rem' }}>
                        Curated Highlight
                      </p>
                      <button
                        onClick={() => {
                          onNavigate(item.featured.page, item.featured.slug);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left group cursor-pointer bg-transparent border-none p-0 focus-visible:outline-none block"
                      >
                        <div className="aspect-[4/5] overflow-hidden mb-3 bg-[var(--elara-stone)]">
                          <img
                            src={item.featured.image}
                            alt={item.featured.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-label text-[var(--elara-gold)]" style={{ fontSize: '0.58rem' }}>
                          {item.featured.label}
                        </p>
                        <p
                          className="font-display text-[var(--elara-ivory)] mt-1 group-hover:text-[var(--elara-gold-light)] transition-colors"
                          style={{ fontSize: '1.05rem' }}
                        >
                          {item.featured.title}
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-nav ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-[rgba(245,240,232,0.08)]">
          <span className="font-display tracking-[0.3em] text-[var(--elara-ivory)]" style={{ fontSize: '1.15rem' }}>
            ÉLARA
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center text-[var(--elara-taupe-light)] hover:text-[var(--elara-ivory)] bg-transparent border-none cursor-pointer focus-visible:outline-none"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="px-6 py-6 flex flex-col gap-1 overflow-y-auto flex-1" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            const hasMenu = item.type === 'dropdown';

            return (
              <div key={item.id} className="border-b border-[rgba(245,240,232,0.06)]">
                <button
                  onClick={() => {
                    if (hasMenu) {
                      setMobileExpanded(mobileExpanded === item.id ? null : item.id);
                    } else {
                      onNavigate(item.page, item.param);
                      setMobileOpen(false);
                    }
                  }}
                  className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer focus-visible:outline-none"
                >
                  <span
                    className={`font-display transition-colors ${
                      active ? 'text-[var(--elara-gold)]' : 'text-[var(--elara-ivory)]'
                    }`}
                    style={{ fontSize: '1.3rem', fontWeight: 400 }}
                  >
                    {item.label}
                  </span>
                  {hasMenu && (
                    <ChevronDown
                      size={18}
                      className={`text-[var(--elara-taupe)] transition-transform duration-300 ${
                        mobileExpanded === item.id ? 'rotate-180 text-[var(--elara-gold)]' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Submenu Accordion */}
                {hasMenu && mobileExpanded === item.id && (
                  <div className="pl-4 pb-4 flex flex-col gap-1">
                    <button
                      onClick={() => {
                        onNavigate(item.page);
                        setMobileOpen(false);
                      }}
                      className="py-2 text-left text-[var(--elara-gold)] hover:underline font-sans text-xs tracking-wider uppercase bg-transparent border-none cursor-pointer"
                    >
                      {item.id === 'jewelry' ? 'View All Jewelry' : 'View All Collections'}
                    </button>
                    {item.categories.map((cat) => (
                      <button
                        key={cat.label}
                        onClick={() => {
                          onNavigate(cat.page, cat.filter);
                          setMobileOpen(false);
                        }}
                        className="py-2.5 text-left text-[var(--elara-taupe-light)] hover:text-[var(--elara-ivory)] transition-colors font-sans bg-transparent border-none cursor-pointer focus-visible:outline-none flex items-center justify-between"
                        style={{ fontSize: '0.9rem' }}
                      >
                        <span>{cat.label}</span>
                        <ArrowRight size={12} className="opacity-40" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Utilities Footer */}
        <div className="px-6 py-6 border-t border-[rgba(245,240,232,0.08)] flex items-center justify-between">
          <button
            onClick={() => { onSearchOpen(); setMobileOpen(false); }}
            className="flex items-center gap-2 text-[var(--elara-taupe-light)] hover:text-[var(--elara-gold)] bg-transparent border-none cursor-pointer font-sans focus-visible:outline-none"
            style={{ fontSize: '0.78rem', letterSpacing: '0.1em' }}
          >
            <Search size={16} strokeWidth={1.5} />
            Search
          </button>
          <button
            onClick={() => { onCartOpen(); setMobileOpen(false); }}
            className="flex items-center gap-2 text-[var(--elara-taupe-light)] hover:text-[var(--elara-gold)] bg-transparent border-none cursor-pointer font-sans focus-visible:outline-none"
            style={{ fontSize: '0.78rem', letterSpacing: '0.1em' }}
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            Bag ({cartCount})
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[79] bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

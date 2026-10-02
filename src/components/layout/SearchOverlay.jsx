import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { products } from '../../data/products.js';

const POPULAR_SEARCHES = ['Diamond rings', 'Pearl earrings', 'Gold necklace', 'Engagement rings', 'Bridal sets'];
const CATEGORIES = ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants', 'Bridal'];

export default function SearchOverlay({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const results = query.length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <div className={`search-overlay ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Search">
      <div className="container-elara flex flex-col h-full pt-20 pb-10">
        {/* Close */}
        <div className="flex justify-end mb-10">
          <button
            onClick={onClose}
            aria-label="Close search"
            className="flex items-center gap-2 text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none"
          >
            <span className="font-sans" style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Close</span>
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Search input */}
        <div className="relative mb-12">
          <Search
            size={20}
            strokeWidth={1.5}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--elara-taupe)]"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jewellery, collections, stones..."
            aria-label="Search ÉLARA"
            className="w-full bg-transparent border-none border-b text-[var(--elara-ivory)] outline-none font-display pl-10"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              fontWeight: 300,
              lineHeight: 1.3,
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(245,240,232,0.18)',
              color: 'var(--elara-ivory)',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Results or suggestions */}
          <div className="lg:col-span-2">
            {results.length > 0 ? (
              <div>
                <p className="text-label text-[var(--elara-taupe)] mb-5" style={{ fontSize: '0.6rem' }}>
                  Results for "{query}"
                </p>
                <div className="flex flex-col gap-0">
                  {results.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => { onNavigate('product', product.slug); onClose(); }}
                      className="flex items-center gap-4 py-4 border-b border-[rgba(245,240,232,0.07)] hover:border-[rgba(201,169,110,0.2)] transition-colors group bg-transparent border-none cursor-pointer focus-visible:outline-none w-full text-left"
                      style={{ borderBottom: '1px solid rgba(245,240,232,0.07)' }}
                    >
                      <div className="w-14 h-14 flex-shrink-0 overflow-hidden bg-[var(--elara-stone)]">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-display text-[var(--elara-ivory)] group-hover:text-[var(--elara-gold-light)] transition-colors" style={{ fontSize: '1.05rem' }}>
                          {product.name}
                        </p>
                        <p className="font-sans text-[var(--elara-taupe)] mt-0.5 capitalize" style={{ fontSize: '0.7rem' }}>
                          {product.category} · {product.priceFormatted}
                        </p>
                      </div>
                      <ArrowRight size={14} className="text-[var(--elara-taupe)] group-hover:text-[var(--elara-gold)] transition-colors" />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => { onNavigate('shop'); onClose(); }}
                  className="btn-text mt-6"
                >
                  View all results
                  <ArrowRight size={13} />
                </button>
              </div>
            ) : (
              <div>
                <p className="text-label text-[var(--elara-taupe)] mb-5" style={{ fontSize: '0.6rem' }}>
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-3">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2.5 border border-[rgba(245,240,232,0.12)] text-[var(--elara-taupe-light)] hover:border-[rgba(201,169,110,0.35)] hover:text-[var(--elara-ivory)] transition-colors font-sans bg-transparent cursor-pointer focus-visible:outline-none"
                      style={{ fontSize: '0.72rem' }}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Categories */}
          <div>
            <p className="text-label text-[var(--elara-taupe)] mb-5" style={{ fontSize: '0.6rem' }}>
              Shop by Category
            </p>
            <div className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { onNavigate('shop', cat.toLowerCase()); onClose(); }}
                  className="flex items-center justify-between py-3 border-b border-[rgba(245,240,232,0.07)] group bg-transparent border-none cursor-pointer focus-visible:outline-none w-full text-left"
                  style={{ borderBottom: '1px solid rgba(245,240,232,0.07)' }}
                >
                  <span className="font-display text-[var(--elara-ivory)] group-hover:text-[var(--elara-gold-light)] transition-colors" style={{ fontSize: '1.15rem', fontWeight: 400 }}>
                    {cat}
                  </span>
                  <ArrowRight size={13} className="text-[var(--elara-taupe)] group-hover:text-[var(--elara-gold)] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

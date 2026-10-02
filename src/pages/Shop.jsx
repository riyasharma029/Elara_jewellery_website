import React, { useState, useEffect, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb.jsx';
import AnimatedSection from '../components/common/AnimatedSection.jsx';
import ProductCard from '../components/shop/ProductCard.jsx';
import FilterSidebar from '../components/shop/FilterSidebar.jsx';
import { products } from '../data/products.js';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'bestselling', label: 'Bestselling' },
];

const CATEGORY_MAP = {
  rings: 'Rings',
  necklaces: 'Necklaces',
  earrings: 'Earrings',
  bracelets: 'Bracelets',
  pendants: 'Pendants',
  bridal: 'Bridal',
};

const CATEGORY_TO_SLUG = {
  Rings: 'rings',
  Necklaces: 'necklaces',
  Earrings: 'earrings',
  Bracelets: 'bracelets',
  Pendants: 'pendants',
  Bridal: 'bridal',
};

export default function Shop({ onNavigate, initialFilter }) {
  const [sort, setSort] = useState('featured');
  const [filters, setFilters] = useState({});
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Synchronize initialFilter from route / navbar with filters state
  useEffect(() => {
    if (!initialFilter) {
      setFilters(prev => {
        const next = { ...prev };
        delete next.category;
        return next;
      });
      return;
    }

    const lower = initialFilter.toLowerCase();

    if (lower === 'new-arrivals') {
      setSort('newest');
      setFilters(prev => {
        const next = { ...prev };
        delete next.category;
        return next;
      });
      return;
    }

    if (CATEGORY_MAP[lower]) {
      const catName = CATEGORY_MAP[lower];
      setFilters(prev => ({
        ...prev,
        category: [catName],
      }));
    } else {
      // Possible collection slug (celestial, signature, lumiere)
      const colName = lower.charAt(0).toUpperCase() + lower.slice(1);
      setFilters(prev => ({
        ...prev,
        collection: [colName],
      }));
    }
  }, [initialFilter]);

  const handleFilterChange = (groupId, values) => {
    setFilters(prev => {
      const next = { ...prev, [groupId]: values };
      if (!values || (Array.isArray(values) && values.length === 0)) {
        delete next[groupId];
      }
      return next;
    });

    // Keep URL and navbar synchronized when category filter changes in sidebar
    if (groupId === 'category') {
      if (Array.isArray(values) && values.length === 1) {
        const slug = CATEGORY_TO_SLUG[values[0]] || values[0].toLowerCase();
        onNavigate('shop', slug);
      } else if (!values || values.length === 0) {
        onNavigate('shop', null);
      }
    }
  };

  const handleClearFilters = () => {
    setFilters({});
    onNavigate('shop', null);
  };

  const isNewArrivals = initialFilter?.toLowerCase() === 'new-arrivals';
  const activeCategory = filters.category?.length === 1 ? filters.category[0] : null;

  // Compute title, description, and breadcrumbs
  const { pageTitle, pageDesc, breadcrumbItems } = useMemo(() => {
    if (activeCategory) {
      if (activeCategory === 'Bridal') {
        return {
          pageTitle: 'Bridal Collection',
          pageDesc: 'Engagement rings, eternity bands, and bridal suites crafted for the beginning of everything.',
          breadcrumbItems: [
            { label: 'Home', page: 'home' },
            { label: 'Bridal' },
          ],
        };
      }
      if (activeCategory === 'Rings') {
        return {
          pageTitle: 'Rings',
          pageDesc: 'Solitaires, halo rings, and statement gemstone bands crafted in 18K gold and platinum.',
          breadcrumbItems: [
            { label: 'Home', page: 'home' },
            { label: 'Jewelry', page: 'shop' },
            { label: 'Rings' },
          ],
        };
      }
      if (activeCategory === 'Necklaces') {
        return {
          pageTitle: 'Necklaces',
          pageDesc: 'Chains, articulated collars, and gemstone necklaces designed with effortless grace.',
          breadcrumbItems: [
            { label: 'Home', page: 'home' },
            { label: 'Jewelry', page: 'shop' },
            { label: 'Necklaces' },
          ],
        };
      }
      if (activeCategory === 'Earrings') {
        return {
          pageTitle: 'Earrings',
          pageDesc: 'Diamond studs, Australian baroque pearl drops, and ruby statement jewels.',
          breadcrumbItems: [
            { label: 'Home', page: 'home' },
            { label: 'Jewelry', page: 'shop' },
            { label: 'Earrings' },
          ],
        };
      }
      if (activeCategory === 'Bracelets') {
        return {
          pageTitle: 'Bracelets',
          pageDesc: 'Handcrafted fluid chain bracelets, pavé bangles, and diamond tennis bracelets.',
          breadcrumbItems: [
            { label: 'Home', page: 'home' },
            { label: 'Jewelry', page: 'shop' },
            { label: 'Bracelets' },
          ],
        };
      }
      if (activeCategory === 'Pendants') {
        return {
          pageTitle: 'Pendants',
          pageDesc: 'Solitaire floating diamonds and celestial pendant motifs on gossamer-fine chains.',
          breadcrumbItems: [
            { label: 'Home', page: 'home' },
            { label: 'Jewelry', page: 'shop' },
            { label: 'Pendants' },
          ],
        };
      }
    }

    if (isNewArrivals) {
      return {
        pageTitle: 'New Arrivals',
        pageDesc: 'The newest creations from the ÉLARA atelier, exploring light, form, and pure materials.',
        breadcrumbItems: [
          { label: 'Home', page: 'home' },
          { label: 'New Arrivals' },
        ],
      };
    }

    if (filters.collection?.length === 1) {
      return {
        pageTitle: `${filters.collection[0]} Collection`,
        pageDesc: 'Explore the signature designs and bespoke artistry of this exclusive collection.',
        breadcrumbItems: [
          { label: 'Home', page: 'home' },
          { label: 'Collections', page: 'collections' },
          { label: filters.collection[0] },
        ],
      };
    }

    return {
      pageTitle: 'Fine Jewellery',
      pageDesc: 'Discover handcrafted fine jewelry crafted with exceptional artistry and enduring purpose.',
      breadcrumbItems: [
        { label: 'Home', page: 'home' },
        { label: 'All Jewellery' },
      ],
    };
  }, [activeCategory, isNewArrivals, filters.collection]);

  // Unified Filtering Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // If "New Arrivals" is active
    if (isNewArrivals) {
      result = result.filter(p => p.newArrival);
    }

    // 1. Category Filter (exact category match)
    if (filters.category?.length) {
      result = result.filter(p =>
        filters.category.some(c => c.toLowerCase() === p.category.toLowerCase())
      );
    }

    // 2. Collection Filter
    if (filters.collection?.length) {
      result = result.filter(p =>
        p.collection && filters.collection.some(c => c.toLowerCase() === p.collection.toLowerCase())
      );
    }

    // 3. Metal Filter
    if (filters.metal?.length) {
      result = result.filter(p => {
        const metalStr = (p.materials?.metal || '').toLowerCase();
        const variantMetals = (p.variants || []).map(v => (v.metal || '').toLowerCase());
        return filters.metal.some(m => {
          const mLower = m.toLowerCase();
          return metalStr.includes(mLower) || variantMetals.some(vm => vm.includes(mLower));
        });
      });
    }

    // 4. Stone Filter
    if (filters.stone?.length) {
      result = result.filter(p => {
        const stoneStr = (p.materials?.stone || '').toLowerCase();
        const tags = (p.tags || []).map(t => t.toLowerCase());
        return filters.stone.some(s => {
          const sLower = s.toLowerCase();
          if (sLower === 'no stone') {
            return !p.materials?.stone || p.materials.stone.toLowerCase().includes('none');
          }
          return stoneStr.includes(sLower) || tags.includes(sLower);
        });
      });
    }

    // 5. Occasion Filter
    if (filters.occasion?.length) {
      result = result.filter(p => {
        const tags = (p.tags || []).map(t => t.toLowerCase());
        return filters.occasion.some(o => tags.includes(o.toLowerCase()));
      });
    }

    // 6. Availability Filter
    if (filters.availability?.length) {
      result = result.filter(p => {
        return filters.availability.some(a => {
          const key = a.toLowerCase().replace(/\s+/g, '_');
          return p.availability === key;
        });
      });
    }

    // 7. Max Price Filter
    if (filters.maxPrice) {
      result = result.filter(p => p.price <= filters.maxPrice);
    }

    // Sort
    switch (sort) {
      case 'newest':
        result = result.filter(p => p.newArrival).concat(result.filter(p => !p.newArrival));
        break;
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        result = result.filter(p => p.bestseller).concat(result.filter(p => !p.bestseller));
        break;
      default: // featured
        result = result.filter(p => p.featured).concat(result.filter(p => !p.featured));
    }

    return result;
  }, [sort, filters, isNewArrivals]);

  const selectedSort = SORT_OPTIONS.find(o => o.value === sort);

  return (
    <div className="bg-[var(--elara-black)] min-h-screen pt-20" id="main-content">
      {/* Page Header */}
      <div className="container-elara pt-10 pb-8">
        <Breadcrumb items={breadcrumbItems} onNavigate={onNavigate} />

        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1
              className="font-display text-[var(--elara-ivory)]"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.015em' }}
            >
              {pageTitle}
            </h1>
            <p className="font-sans text-[var(--elara-taupe)] mt-2 max-w-2xl" style={{ fontSize: '0.85rem' }}>
              {pageDesc}
            </p>
            <p className="font-sans text-[var(--elara-gold)] mt-2" style={{ fontSize: '0.8rem' }}>
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          {/* Sort + Filter Controls Bar */}
          <div className="flex items-center gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setFilterDrawerOpen(true)}
              className="flex lg:hidden items-center gap-2 px-4 py-2.5 border border-[rgba(245,240,232,0.15)] text-[var(--elara-taupe-light)] hover:border-[rgba(201,169,110,0.35)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent cursor-pointer focus-visible:outline-none"
              aria-label="Open filters"
              aria-expanded={filterDrawerOpen}
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              <span className="font-sans" style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Filter
              </span>
              {Object.values(filters).flat().length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[var(--elara-gold)] text-[var(--elara-black)] flex items-center justify-center font-sans font-semibold" style={{ fontSize: '0.5rem' }}>
                  {Object.values(filters).flat().length}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2.5 border border-[rgba(245,240,232,0.15)] text-[var(--elara-taupe-light)] hover:border-[rgba(201,169,110,0.35)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent cursor-pointer focus-visible:outline-none"
                aria-haspopup="listbox"
                aria-expanded={sortOpen}
              >
                <span className="font-sans" style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {selectedSort?.label}
                </span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <div
                  className="absolute top-full right-0 mt-1 w-48 bg-[var(--elara-charcoal)] border border-[rgba(201,169,110,0.25)] shadow-2xl z-20"
                  role="listbox"
                >
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSort(opt.value); setSortOpen(false); }}
                      role="option"
                      aria-selected={sort === opt.value}
                      className={`w-full px-4 py-3 text-left font-sans hover:bg-[rgba(201,169,110,0.1)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none ${
                        sort === opt.value ? 'text-[var(--elara-gold)] font-medium' : 'text-[var(--elara-taupe-light)]'
                      }`}
                      style={{ fontSize: '0.75rem' }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="divider-subtle" />

      {/* Main Layout Area */}
      <div className="container-elara py-10">
        <div className="flex gap-12">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClear={handleClearFilters}
              totalCount={filteredProducts.length}
            />
          </div>

          {/* Product Grid Area */}
          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-display text-[var(--elara-taupe-light)]" style={{ fontSize: '1.6rem' }}>
                  No pieces found
                </p>
                <p className="font-sans text-[var(--elara-taupe)] mt-2 mb-6" style={{ fontSize: '0.85rem' }}>
                  No jewellery matches your current selection. Clear filters to explore all creations.
                </p>
                <button onClick={handleClearFilters} className="btn-outline">
                  <span>Clear Filters</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product, i) => (
                  <AnimatedSection key={product.id} delay={Math.min(i * 50, 300)}>
                    <ProductCard product={product} onNavigate={onNavigate} />
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Slide-over Drawer */}
      {filterDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[88] backdrop-blur-sm"
            onClick={() => setFilterDrawerOpen(false)}
            aria-hidden="true"
          />
          <div
            className="filter-drawer open"
            role="dialog"
            aria-modal="true"
            aria-label="Filter products"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(201,169,110,0.15)]">
              <h2 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
                Filter Jewellery
              </h2>
              <button
                onClick={() => setFilterDrawerOpen(false)}
                aria-label="Close filters"
                className="text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="px-6 py-6 overflow-y-auto flex-1">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClear={handleClearFilters}
                totalCount={filteredProducts.length}
              />
            </div>
            <div className="px-6 pb-8 pt-4 border-t border-[rgba(201,169,110,0.15)]">
              <button
                onClick={() => setFilterDrawerOpen(false)}
                className="w-full btn-primary justify-center"
              >
                <span>View {filteredProducts.length} Pieces</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

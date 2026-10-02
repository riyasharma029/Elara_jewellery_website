import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

const FILTER_CONFIG = [
  {
    id: 'category',
    label: 'Category',
    options: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants', 'Bridal'],
  },
  {
    id: 'collection',
    label: 'Collection',
    options: ['Celestial', 'Signature', 'Lumière', 'Bridal'],
  },
  {
    id: 'metal',
    label: 'Metal',
    options: ['18K Yellow Gold', '18K White Gold', '18K Rose Gold', 'Platinum'],
  },
  {
    id: 'stone',
    label: 'Stone',
    options: ['Diamond', 'Sapphire', 'Emerald', 'Ruby', 'Pearl'],
  },
  {
    id: 'occasion',
    label: 'Occasion',
    options: ['Everyday', 'Bridal', 'Anniversary', 'Gift'],
  },
  {
    id: 'availability',
    label: 'Availability',
    options: ['In Stock', 'Limited'],
  },
];

function FilterGroup({ group, selected, onToggle }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-[rgba(245,240,232,0.08)] pb-5 mb-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full bg-transparent border-none cursor-pointer focus-visible:outline-none py-1"
        aria-expanded={open}
      >
        <span className="text-label text-[var(--elara-taupe-light)] tracking-widest uppercase font-medium" style={{ fontSize: '0.62rem' }}>
          {group.label}
        </span>
        {open
          ? <ChevronUp size={12} className="text-[var(--elara-taupe)]" />
          : <ChevronDown size={12} className="text-[var(--elara-taupe)]" />
        }
      </button>

      {open && (
        <div className="flex flex-col gap-2.5 mt-3.5">
          {group.options.map((opt) => {
            const isSelected = selected.includes(opt);
            return (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group select-none">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggle(group.id, opt)}
                  className="sr-only"
                  aria-label={`Filter by ${opt}`}
                />
                <span
                  className="w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    borderColor: isSelected ? 'var(--elara-gold)' : 'rgba(245,240,232,0.25)',
                    background: isSelected ? 'rgba(201,169,110,0.15)' : 'transparent',
                  }}
                >
                  {isSelected && (
                    <svg width="8" height="8" viewBox="0 0 10 10">
                      <path d="M1 5l3 3 5-5" stroke="var(--elara-gold)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <span
                  className="font-sans transition-colors duration-200"
                  style={{
                    fontSize: '0.78rem',
                    color: isSelected ? 'var(--elara-gold-light)' : 'var(--elara-taupe-light)',
                    fontWeight: isSelected ? 500 : 400,
                  }}
                >
                  {opt}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function FilterSidebar({ filters, onFilterChange, onClear, totalCount }) {
  const selectedCount = Object.entries(filters).reduce((acc, [key, val]) => {
    if (Array.isArray(val)) return acc + val.length;
    if (key === 'maxPrice' && val < 25000) return acc + 1;
    return acc;
  }, 0);

  const handleToggle = (groupId, option) => {
    const current = filters[groupId] || [];
    const updated = current.includes(option)
      ? current.filter(o => o !== option)
      : [...current, option];
    onFilterChange(groupId, updated);
  };

  return (
    <aside className="w-56 flex-shrink-0" aria-label="Product filters">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-[rgba(201,169,110,0.15)]">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-[var(--elara-gold)]" />
          <span className="text-label text-[var(--elara-ivory)] tracking-wider" style={{ fontSize: '0.66rem' }}>
            Filters
          </span>
          {selectedCount > 0 && (
            <span
              className="w-4 h-4 rounded-full bg-[var(--elara-gold)] text-[var(--elara-black)] flex items-center justify-center font-sans font-semibold ml-1"
              style={{ fontSize: '0.55rem' }}
            >
              {selectedCount}
            </span>
          )}
        </div>
        {selectedCount > 0 && (
          <button
            onClick={onClear}
            className="font-sans text-[var(--elara-gold)] hover:underline transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none p-0"
            style={{ fontSize: '0.68rem' }}
          >
            Clear all
          </button>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b border-[rgba(245,240,232,0.08)] pb-5 mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-label text-[var(--elara-taupe-light)] tracking-widest uppercase font-medium" style={{ fontSize: '0.62rem' }}>
            Price Range
          </span>
          <span className="font-sans text-[var(--elara-gold)] font-medium" style={{ fontSize: '0.72rem' }}>
            Up to ${(filters.maxPrice ?? 25000).toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min="1000"
          max="25000"
          step="500"
          value={filters.maxPrice ?? 25000}
          onChange={(e) => onFilterChange('maxPrice', Number(e.target.value))}
          className="w-full cursor-pointer accent-[var(--elara-gold)]"
          aria-label="Maximum price filter"
        />
        <div className="flex items-center justify-between mt-1 text-[var(--elara-taupe)] font-sans text-[0.65rem]">
          <span>$1,000</span>
          <span>$25,000+</span>
        </div>
      </div>

      {/* Filter groups */}
      {FILTER_CONFIG.map((group) => (
        <FilterGroup
          key={group.id}
          group={group}
          selected={filters[group.id] || []}
          onToggle={handleToggle}
        />
      ))}
    </aside>
  );
}

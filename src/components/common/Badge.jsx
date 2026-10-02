import React from 'react';

export default function Badge({ type = 'new', className = '' }) {
  const configs = {
    new: {
      text: 'New Arrival',
      bg: 'rgba(201,169,110,0.12)',
      color: 'var(--elara-gold)',
      border: 'rgba(201,169,110,0.3)',
    },
    bestseller: {
      text: 'Bestseller',
      bg: 'rgba(245,240,232,0.1)',
      color: 'var(--elara-ivory)',
      border: 'rgba(245,240,232,0.2)',
    },
    limited: {
      text: 'Limited Edition',
      bg: 'rgba(158,122,66,0.15)',
      color: 'var(--elara-gold-light)',
      border: 'rgba(158,122,66,0.35)',
    },
  };

  const config = configs[type] || configs.new;

  return (
    <span
      className={`inline-block px-2.5 py-1 text-[0.62rem] font-sans tracking-[0.14em] uppercase font-medium border ${className}`}
      style={{
        backgroundColor: config.bg,
        color: config.color,
        borderColor: config.border,
      }}
    >
      {config.text}
    </span>
  );
}

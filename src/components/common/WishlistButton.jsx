import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export default function WishlistButton({ productId, small = false }) {
  const [wished, setWished] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setWished(prev => !prev);
  };

  const size = small ? 13 : 15;

  return (
    <button
      onClick={handleToggle}
      className={`wishlist-btn ${wished ? 'active' : ''}`}
      style={{ width: small ? 30 : 36, height: small ? 30 : 36 }}
      aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
      title={wished ? 'Remove from wishlist' : 'Save to wishlist'}
    >
      <Heart
        size={size}
        style={{
          fill: wished ? 'var(--elara-gold)' : 'none',
          color: wished ? 'var(--elara-gold)' : 'var(--elara-taupe)',
          transition: 'fill 0.25s ease, color 0.25s ease',
        }}
      />
    </button>
  );
}

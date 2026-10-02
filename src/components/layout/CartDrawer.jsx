import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight, Gift } from 'lucide-react';

const SAMPLE_CART_ITEMS = [
  {
    id: 'elara-001',
    name: 'Celeste Diamond Pendant',
    variant: '18K Yellow Gold',
    price: 4850,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&q=80',
  },
  {
    id: 'elara-007',
    name: 'Aurelie Stud Earrings',
    variant: '18K White Gold',
    price: 3200,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=200&q=80',
  },
];

export default function CartDrawer({
  isOpen,
  onClose,
  onNavigate,
  items: externalItems,
  onUpdateQty: externalUpdateQty,
  onRemoveItem: externalRemoveItem,
}) {
  const [internalItems, setInternalItems] = useState(SAMPLE_CART_ITEMS);
  const [giftWrapping, setGiftWrapping] = useState(false);

  const items = externalItems !== undefined ? externalItems : internalItems;

  const updateQty = (id, delta) => {
    if (externalUpdateQty) {
      externalUpdateQty(id, delta);
    } else {
      setInternalItems(prev =>
        prev
          .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
          .filter(item => item.quantity > 0)
      );
    }
  };

  const removeItem = (id) => {
    if (externalRemoveItem) {
      externalRemoveItem(id);
    } else {
      setInternalItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 45;
  const giftFee = giftWrapping ? 35 : 0;

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`cart-drawer ${isOpen ? 'open' : ''}`}
        aria-label="Shopping bag"
        role="complementary"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(201,169,110,0.12)]">
          <div>
            <h2 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
              Your Bag
            </h2>
            <p className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.7rem', marginTop: 2, letterSpacing: '0.08em' }}>
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close bag"
            className="w-9 h-9 flex items-center justify-center text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag size={36} strokeWidth={1} className="text-[var(--elara-taupe)] mb-4" />
              <p className="font-display text-[var(--elara-taupe-light)]" style={{ fontSize: '1.2rem' }}>
                Your bag is empty
              </p>
              <p className="font-sans text-[var(--elara-taupe)] mt-2 mb-6" style={{ fontSize: '0.8rem' }}>
                Discover pieces crafted for a lifetime.
              </p>
              <button onClick={() => { onNavigate('shop'); onClose(); }} className="btn-outline" style={{ fontSize: '0.6rem' }}>
                <span>Explore Collection</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Image */}
                  <button
                    onClick={() => { onNavigate('product', item.id); onClose(); }}
                    className="w-20 h-20 flex-shrink-0 bg-[var(--elara-stone)] overflow-hidden cursor-pointer bg-transparent border-none p-0 focus-visible:outline-none"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </button>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '0.95rem', lineHeight: 1.3 }}>
                      {item.name}
                    </p>
                    <p className="font-sans text-[var(--elara-taupe)] mt-0.5" style={{ fontSize: '0.7rem' }}>
                      {item.variant}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center border border-[rgba(245,240,232,0.15)] text-[var(--elara-taupe)] hover:border-[rgba(201,169,110,0.4)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent cursor-pointer focus-visible:outline-none"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="font-sans text-[var(--elara-ivory)] w-4 text-center" style={{ fontSize: '0.8rem' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center border border-[rgba(245,240,232,0.15)] text-[var(--elara-taupe)] hover:border-[rgba(201,169,110,0.4)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent cursor-pointer focus-visible:outline-none"
                        >
                          <Plus size={10} />
                        </button>
                      </div>

                      <p className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1rem' }}>
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors mt-0.5 bg-transparent border-none cursor-pointer focus-visible:outline-none self-start"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <>
              <div className="divider-subtle my-6" />

              {/* Gift Wrapping */}
              <button
                onClick={() => setGiftWrapping(!giftWrapping)}
                className={`w-full flex items-center justify-between p-4 border transition-colors bg-transparent cursor-pointer focus-visible:outline-none ${
                  giftWrapping
                    ? 'border-[rgba(201,169,110,0.4)] bg-[rgba(201,169,110,0.05)]'
                    : 'border-[rgba(245,240,232,0.1)] hover:border-[rgba(201,169,110,0.25)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Gift size={15} className={giftWrapping ? 'text-[var(--elara-gold)]' : 'text-[var(--elara-taupe)]'} strokeWidth={1.5} />
                  <div className="text-left">
                    <p className="font-sans text-[var(--elara-ivory)]" style={{ fontSize: '0.75rem' }}>
                      Premium Gift Wrapping
                    </p>
                    <p className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.65rem', marginTop: 1 }}>
                      Luxury ÉLARA gift box & ribbon
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.7rem' }}>+$35</span>
                  <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${giftWrapping ? 'border-[var(--elara-gold)] bg-[var(--elara-gold)]' : 'border-[rgba(245,240,232,0.3)]'}`}>
                    {giftWrapping && (
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="var(--elara-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            </>
          )}
        </div>

        {/* Footer summary */}
        {items.length > 0 && (
          <div className="px-6 pb-6 pt-4 border-t border-[rgba(201,169,110,0.12)]">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex justify-between">
                <span className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.72rem' }}>Subtotal</span>
                <span className="font-sans text-[var(--elara-ivory)]" style={{ fontSize: '0.72rem' }}>${subtotal.toLocaleString()}</span>
              </div>
              {giftFee > 0 && (
                <div className="flex justify-between">
                  <span className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.72rem' }}>Gift wrapping</span>
                  <span className="font-sans text-[var(--elara-ivory)]" style={{ fontSize: '0.72rem' }}>$35</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.72rem' }}>Shipping</span>
                <span className="font-sans text-[var(--elara-ivory)]" style={{ fontSize: '0.72rem' }}>
                  {shipping === 0 ? 'Complimentary' : `$${shipping}`}
                </span>
              </div>
              <div className="divider-subtle my-1" />
              <div className="flex justify-between">
                <span className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1rem' }}>Total</span>
                <span className="font-display text-[var(--elara-ivory)]" style={{ fontSize: '1.05rem' }}>
                  ${(subtotal + shipping + giftFee).toLocaleString()}
                </span>
              </div>
            </div>

            {shipping > 0 && (
              <p className="font-sans text-[var(--elara-gold)] mb-4 text-center" style={{ fontSize: '0.65rem', letterSpacing: '0.06em' }}>
                Add ${(5000 - subtotal).toLocaleString()} more for complimentary shipping
              </p>
            )}

            <button
              onClick={() => onNavigate('checkout')}
              className="w-full btn-primary justify-center mb-3"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={onClose}
              className="w-full text-center font-sans text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer py-2 focus-visible:outline-none"
              style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Continue Shopping
            </button>

            {/* Trust */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-[rgba(245,240,232,0.06)]">
              {['Secure Checkout', 'Free Returns', 'Authenticity Guaranteed'].map((t) => (
                <span key={t} className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.57rem', letterSpacing: '0.06em' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

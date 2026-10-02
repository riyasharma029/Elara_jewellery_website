import React, { useState } from 'react';
import { ArrowRight, Star, Heart, Shield, Package, RotateCcw, ChevronDown, ChevronUp, ZoomIn, X, Minus, Plus } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb.jsx';
import AnimatedSection from '../components/common/AnimatedSection.jsx';
import WishlistButton from '../components/common/WishlistButton.jsx';
import ProductCard from '../components/shop/ProductCard.jsx';
import { products, getProductBySlug } from '../data/products.js';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
        {[1,2,3,4,5].map(n => (
          <Star key={n} size={12} style={{ fill: n <= Math.round(rating) ? 'var(--elara-gold)' : 'none', color: 'var(--elara-gold)' }} />
        ))}
      </div>
      <span className="font-sans text-[var(--elara-taupe)]" style={{ fontSize: '0.72rem' }}>
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(245,240,232,0.1)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left bg-transparent border-none cursor-pointer focus-visible:outline-none"
        aria-expanded={open}
      >
        <span className="font-sans text-[var(--elara-ivory)]" style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em' }}>
          {title}
        </span>
        {open
          ? <ChevronUp size={14} className="text-[var(--elara-taupe)]" />
          : <ChevronDown size={14} className="text-[var(--elara-taupe)]" />
        }
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div className="pb-5 font-sans text-[var(--elara-taupe-light)]" style={{ fontSize: '0.8rem', lineHeight: 1.75 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail({ onNavigate, productSlug, onAddToCart }) {
  const product = getProductBySlug(productSlug) || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState(product.variants?.[0]?.metal || product.materials?.metal);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const currentPrice = product.variants?.find(v => v.metal === selectedMetal)?.price || product.price;

  const handleAddToCart = () => {
    setAddedToCart(true);
    if (onAddToCart) {
      onAddToCart({
        id: `${product.id}-${selectedMetal || 'default'}`,
        productId: product.id,
        name: product.name,
        variant: selectedMetal ? `${selectedMetal}${selectedSize ? ` • Size ${selectedSize}` : ''}` : 'Standard',
        price: currentPrice,
        quantity: quantity,
        image: product.images[0],
      });
    }
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="bg-[var(--elara-black)] min-h-screen pt-20" id="main-content">
      {/* Breadcrumb */}
      <div className="container-elara pt-8 pb-6">
        <Breadcrumb
          items={[
            { label: 'Home', page: 'home' },
            { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), page: 'shop' },
            { label: product.name },
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Main PDP layout */}
      <div className="container-elara pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">

          {/* Left: Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex flex-col gap-2 w-16 flex-shrink-0">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`block overflow-hidden border-2 transition-colors focus-visible:outline-none ${selectedImage === i ? 'border-[var(--elara-gold)]' : 'border-transparent hover:border-[rgba(201,169,110,0.4)]'}`}
                    style={{ aspectRatio: '1' }}
                    aria-label={`View image ${i + 1}`}
                    aria-pressed={selectedImage === i}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}

            {/* Main image */}
            <div className="flex-1 relative group">
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', background: 'var(--elara-charcoal)' }}>
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.name} — detail view`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Zoom button */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-4 right-4 w-9 h-9 glass-dark flex items-center justify-center text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors border border-[rgba(245,240,232,0.1)] cursor-pointer focus-visible:outline-none"
                  aria-label="Zoom image"
                >
                  <ZoomIn size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Badge on image */}
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className={`badge badge-${product.badge}`}>
                    {product.badge === 'new' ? 'New' : product.badge === 'bestseller' ? 'Bestseller' : product.badge === 'limited' ? 'Limited' : 'Exclusive'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="lg:sticky lg:top-24 self-start">
            <AnimatedSection direction="left">
              {/* Category / collection */}
              <p className="text-label text-[var(--elara-gold)] capitalize" style={{ fontSize: '0.6rem' }}>
                {product.category} · {product.collection ? product.collection.charAt(0).toUpperCase() + product.collection.slice(1) : 'ÉLARA'}
              </p>

              <h1 className="font-display text-[var(--elara-ivory)] mt-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, lineHeight: 1.1 }}>
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mt-3">
                <StarRating rating={product.rating} count={product.reviewCount} />
              </div>

              <p className="font-display text-[var(--elara-ivory)] mt-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                ${currentPrice.toLocaleString()}
              </p>

              <p className="font-sans text-[var(--elara-taupe)] mt-4" style={{ fontSize: '0.82rem', lineHeight: 1.75, fontWeight: 300 }}>
                {product.shortDescription}
              </p>

              <div className="divider-subtle my-7" />

              {/* Metal Selection */}
              {product.variants && (
                <div className="mb-6">
                  <p className="text-label text-[var(--elara-taupe-light)] mb-3" style={{ fontSize: '0.6rem' }}>
                    Metal: <span className="text-[var(--elara-ivory)]">{selectedMetal}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map(v => (
                      <button
                        key={v.metal}
                        onClick={() => setSelectedMetal(v.metal)}
                        className={`px-3 py-2 border font-sans transition-all cursor-pointer focus-visible:outline-none ${selectedMetal === v.metal ? 'border-[var(--elara-gold)] bg-[rgba(201,169,110,0.08)] text-[var(--elara-ivory)]' : 'border-[rgba(245,240,232,0.15)] text-[var(--elara-taupe)] hover:border-[rgba(201,169,110,0.4)] hover:text-[var(--elara-ivory)]'}`}
                        style={{ fontSize: '0.7rem' }}
                        aria-pressed={selectedMetal === v.metal}
                      >
                        {v.metal}
                        {v.price !== product.price && (
                          <span className="text-[var(--elara-gold)] ml-1" style={{ fontSize: '0.6rem' }}>
                            +${(v.price - product.price).toLocaleString()}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-label text-[var(--elara-taupe-light)]" style={{ fontSize: '0.6rem' }}>
                      Ring Size: <span className="text-[var(--elara-ivory)]">{selectedSize || 'Select a size'}</span>
                    </p>
                    <button className="btn-text text-[var(--elara-gold)]" style={{ fontSize: '0.58rem' }}>
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(sz => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`w-10 h-10 border font-sans transition-all cursor-pointer focus-visible:outline-none ${selectedSize === sz ? 'border-[var(--elara-gold)] bg-[rgba(201,169,110,0.08)] text-[var(--elara-ivory)]' : 'border-[rgba(245,240,232,0.15)] text-[var(--elara-taupe)] hover:border-[rgba(201,169,110,0.4)] hover:text-[var(--elara-ivory)]'}`}
                        style={{ fontSize: '0.72rem' }}
                        aria-pressed={selectedSize === sz}
                        aria-label={`Ring size ${sz}`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <p className="text-label text-[var(--elara-taupe-light)]" style={{ fontSize: '0.6rem' }}>Quantity</p>
                <div className="flex items-center border border-[rgba(245,240,232,0.15)]">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-8 text-center font-sans text-[var(--elara-ivory)]" style={{ fontSize: '0.82rem' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-9 h-9 flex items-center justify-center text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none"
                    aria-label="Increase quantity"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 mb-4">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 btn-primary justify-center transition-all ${addedToCart ? 'opacity-80' : ''}`}
                  aria-label="Add to bag"
                >
                  <span>{addedToCart ? 'Added to Bag ✓' : 'Add to Bag'}</span>
                </button>
                <WishlistButton productId={product.id} />
              </div>

              <button
                onClick={() => onNavigate('checkout')}
                className="w-full btn-gold justify-center mb-6"
                aria-label="Buy now"
              >
                <span>Buy Now</span>
                <ArrowRight size={14} />
              </button>

              {/* Delivery info */}
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { icon: Package, text: `Delivery: ${product.deliveryEstimate}` },
                  { icon: RotateCcw, text: 'Free returns within 30 days' },
                  { icon: Shield, text: product.certification || 'Authenticity guaranteed with every purchase' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon size={14} className="text-[var(--elara-gold)] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-sans text-[var(--elara-taupe-light)]" style={{ fontSize: '0.74rem' }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Accordions */}
              <div className="border-t border-[rgba(245,240,232,0.1)]">
                <AccordionItem title="Description">
                  {product.description}
                </AccordionItem>
                <AccordionItem title="Materials & Certification">
                  <ul className="flex flex-col gap-1.5">
                    {product.materials && Object.entries(product.materials).map(([k, v]) => (
                      <li key={k} className="flex gap-2">
                        <span className="text-[var(--elara-taupe)] capitalize" style={{ minWidth: 60 }}>{k}:</span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                  {product.certification && (
                    <p className="mt-3 text-[var(--elara-gold-light)]">{product.certification}</p>
                  )}
                </AccordionItem>
                {product.dimensions && (
                  <AccordionItem title="Dimensions & Weight">
                    {Object.entries(product.dimensions).map(([k, v]) => (
                      <p key={k}><span className="text-[var(--elara-taupe)] capitalize">{k}: </span>{v}</p>
                    ))}
                    {product.weight && <p><span className="text-[var(--elara-taupe)]">Weight: </span>{product.weight}</p>}
                  </AccordionItem>
                )}
                <AccordionItem title="Shipping & Returns">
                  <p>Complimentary shipping on all orders over $5,000. Standard orders ship within {product.deliveryEstimate}. Express options available at checkout.</p>
                  <p className="mt-2">Returns accepted within 30 days of delivery in unworn, original condition. Custom and engraved pieces are excluded from standard returns.</p>
                </AccordionItem>
                <AccordionItem title="Jewellery Care">
                  {product.care || 'Store separately in the provided ÉLARA pouch or box. Clean gently with a soft, lint-free cloth. Avoid contact with perfume, hairspray, and harsh chemicals. Remove before swimming, bathing, or physical activity.'}
                </AccordionItem>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {related.length > 0 && (
        <div className="border-t border-[rgba(245,240,232,0.06)] bg-[var(--elara-charcoal)]">
          <div className="container-elara section-pad">
            <AnimatedSection className="flex items-center justify-between mb-10">
              <h2 className="font-display text-[var(--elara-ivory)]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400 }}>
                You May Also Like
              </h2>
              <button onClick={() => onNavigate('shop')} className="btn-text text-[var(--elara-taupe)]" style={{ fontSize: '0.6rem' }}>
                View All <ArrowRight size={12} />
              </button>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 80}>
                  <ProductCard product={p} onNavigate={onNavigate} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged product image"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-[var(--elara-taupe)] hover:text-[var(--elara-ivory)] transition-colors bg-transparent border-none cursor-pointer focus-visible:outline-none"
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <img
            src={product.images[selectedImage]}
            alt={`${product.name} — enlarged`}
            className="max-w-full max-h-full object-contain"
            style={{ maxHeight: '90vh' }}
          />
        </div>
      )}
    </div>
  );
}

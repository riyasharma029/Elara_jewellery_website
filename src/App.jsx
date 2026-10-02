import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import CartDrawer from './components/layout/CartDrawer.jsx';
import SearchOverlay from './components/layout/SearchOverlay.jsx';
import CursorSpotlight from './components/common/CursorSpotlight.jsx';

// Pages
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Collections from './pages/Collections.jsx';
import CollectionDetail from './pages/CollectionDetail.jsx';
import Bespoke from './pages/Bespoke.jsx';
import About from './pages/About.jsx';

const INITIAL_CART = [
  {
    id: 'elara-001-18K Yellow Gold',
    productId: 'elara-001',
    name: 'Celeste Diamond Pendant',
    variant: '18K Yellow Gold',
    price: 4850,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
  },
  {
    id: 'elara-007-18K White Gold',
    productId: 'elara-007',
    name: 'Aurelie Stud Earrings',
    variant: '18K White Gold',
    price: 3200,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
  },
];

function parseHash(hash) {
  const clean = (hash || '').replace(/^#\/?/, '').trim();
  if (!clean) return { page: 'home', param: null };
  const parts = clean.split('/');
  const rawPage = parts[0]?.toLowerCase() || 'home';
  const param = parts.slice(1).join('/') || null;

  if (rawPage === 'bridal') {
    return { page: 'shop', param: 'bridal' };
  }
  if (['rings', 'necklaces', 'earrings', 'bracelets', 'pendants', 'new-arrivals'].includes(rawPage)) {
    return { page: 'shop', param: rawPage };
  }
  return { page: rawPage, param };
}

export default function App() {
  const initialRoute = parseHash(typeof window !== 'undefined' ? window.location.hash : '');
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [pageParam, setPageParam] = useState(initialRoute.param);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [toastMessage, setToastMessage] = useState(null);

  // Synchronize browser history and document title
  useEffect(() => {
    let title = 'ÉLARA — Fine Jewelry | Timeless Design, Modern Elegance';
    if (currentPage === 'shop') {
      if (pageParam === 'bridal') title = 'Bridal Collection — ÉLARA Fine Jewelry';
      else if (pageParam === 'rings') title = 'Rings Collection — ÉLARA';
      else if (pageParam === 'necklaces') title = 'Necklaces Collection — ÉLARA';
      else if (pageParam === 'earrings') title = 'Fine Earrings — ÉLARA';
      else if (pageParam === 'bracelets') title = 'Bracelets & Bangles — ÉLARA';
      else if (pageParam === 'pendants') title = 'Fine Pendants — ÉLARA';
      else if (pageParam === 'new-arrivals') title = 'New Arrivals — ÉLARA Fine Jewelry';
      else title = 'Fine Jewelry Collection — ÉLARA';
    } else if (currentPage === 'product') {
      title = 'Fine Jewelry Piece — ÉLARA';
    } else if (currentPage === 'collections') {
      title = 'Haute Joaillerie Collections — ÉLARA';
    } else if (currentPage === 'collection-detail') {
      title = 'Collection — ÉLARA Fine Jewelry';
    } else if (currentPage === 'bespoke') {
      title = 'Haute Joaillerie Bespoke Atelier — ÉLARA';
    } else if (currentPage === 'about') {
      title = 'The Maison & Craftsmanship Heritage — ÉLARA';
    }
    document.title = title;
  }, [currentPage, pageParam]);

  // Handle URL hash changes and browser back/forward buttons
  useEffect(() => {
    const handleSync = () => {
      const { page, param } = parseHash(window.location.hash);
      setCurrentPage(page);
      setPageParam(param);
    };

    window.addEventListener('hashchange', handleSync);
    window.addEventListener('popstate', handleSync);
    return () => {
      window.removeEventListener('hashchange', handleSync);
      window.removeEventListener('popstate', handleSync);
    };
  }, []);

  const handleNavigate = (page, param = null) => {
    setCurrentPage(page);
    setPageParam(param);
    setIsCartOpen(false);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const targetHash = `#${page}${param ? `/${param}` : ''}`;
    if (window.location.hash !== targetHash) {
      try {
        window.history.pushState({ page, param }, '', targetHash);
      } catch {
        window.location.hash = targetHash;
      }
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (newItem) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === newItem.id);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += newItem.quantity;
        return copy;
      }
      return [newItem, ...prev];
    });

    showToast(`Added "${newItem.name}" to your shopping bag.`);
    setIsCartOpen(true);
  };

  const handleUpdateQty = (id, delta) => {
    setCartItems(prev =>
      prev
        .map(item => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[var(--elara-black)] text-[var(--elara-ivory)] selection:bg-[var(--elara-gold)]/20 selection:text-[var(--elara-gold-light)] relative">
      {/* Ambient Cursor Light */}
      <CursorSpotlight />

      {/* Skip to Main Content Link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[var(--elara-gold)] text-[var(--elara-black)] px-4 py-2 text-xs font-sans tracking-widest uppercase font-medium"
      >
        Skip to content
      </a>

      {/* Header Navigation with Synchronized Active State */}
      <Navbar
        currentPage={currentPage}
        pageParam={pageParam}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onCartOpen={() => setIsCartOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
      />

      {/* Main Pages Router */}
      <div className="relative">
        {currentPage === 'shop' ? (
          <Shop onNavigate={handleNavigate} initialFilter={pageParam} />
        ) : currentPage === 'product' ? (
          <ProductDetail
            onNavigate={handleNavigate}
            productSlug={pageParam}
            onAddToCart={handleAddToCart}
          />
        ) : currentPage === 'collections' ? (
          <Collections onNavigate={handleNavigate} />
        ) : currentPage === 'collection-detail' ? (
          <CollectionDetail onNavigate={handleNavigate} collectionSlug={pageParam} />
        ) : currentPage === 'bespoke' ? (
          <Bespoke onNavigate={handleNavigate} />
        ) : currentPage === 'about' ? (
          <About onNavigate={handleNavigate} />
        ) : (
          <Home onNavigate={handleNavigate} />
        )}
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onNavigate={handleNavigate}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      {/* Fullscreen Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[var(--elara-charcoal)] border border-[var(--elara-gold)]/50 text-[var(--elara-ivory)] px-5 py-3 shadow-2xl backdrop-blur-md flex items-center gap-3 animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--elara-gold)] animate-pulse" />
          <span className="font-sans text-xs tracking-wider">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

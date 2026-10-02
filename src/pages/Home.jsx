import React from 'react';
import Hero from '../components/home/Hero.jsx';
import FeaturedCollection from '../components/home/FeaturedCollection.jsx';
import ShopByCategory from '../components/home/ShopByCategory.jsx';
import SignatureCollection from '../components/home/SignatureCollection.jsx';
import Craftsmanship from '../components/home/Craftsmanship.jsx';
import Bestsellers from '../components/home/Bestsellers.jsx';
import BrandStory from '../components/home/BrandStory.jsx';
import BridalSection from '../components/home/BridalSection.jsx';
import BespokeIntro from '../components/home/BespokeIntro.jsx';
import SocialGallery from '../components/home/SocialGallery.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Newsletter from '../components/home/Newsletter.jsx';

export default function Home({ onNavigate }) {
  return (
    <main id="main-content">
      {/* 01 — Cinematic Hero */}
      <Hero onNavigate={onNavigate} />

      {/* 02 — Featured Collection (asymmetric editorial) */}
      <FeaturedCollection onNavigate={onNavigate} />

      {/* 03 — Shop by Category */}
      <ShopByCategory onNavigate={onNavigate} />

      {/* 04 — Signature Collection (immersive) */}
      <SignatureCollection onNavigate={onNavigate} />

      {/* 05 — Craftsmanship */}
      <Craftsmanship />

      {/* 06 — Bestsellers (carousel) */}
      <Bestsellers onNavigate={onNavigate} />

      {/* 07 — Brand Story */}
      <BrandStory onNavigate={onNavigate} />

      {/* 08 — Bridal / Occasion */}
      <BridalSection onNavigate={onNavigate} />

      {/* 09 — Bespoke Intro */}
      <BespokeIntro onNavigate={onNavigate} />

      {/* 10 — Social Gallery */}
      <SocialGallery />

      {/* 11 — Testimonials */}
      <Testimonials />

      {/* 12 — Newsletter */}
      <Newsletter />
    </main>
  );
}

// ÉLARA Fine Jewelry — Category Data
import { products } from './products.js';

export const categories = [
  {
    id: 'rings',
    name: 'Rings',
    slug: 'rings',
    description: 'Solitaires, halo rings, eternity bands and gemstone cocktail designs.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=90',
    imagePortrait: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&q=90&fit=crop',
    get count() {
      return products.filter(p => p.category === 'rings').length;
    },
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    description: 'Articulated collars, delicate chains, and statement gemstone necklaces.',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=90',
    imagePortrait: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&q=90&fit=crop',
    get count() {
      return products.filter(p => p.category === 'necklaces').length;
    },
  },
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    description: 'Diamond studs, South Sea baroque pearl drops, and ruby statement earrings.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=90',
    imagePortrait: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&q=90&fit=crop',
    get count() {
      return products.filter(p => p.category === 'earrings').length;
    },
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    slug: 'bracelets',
    description: 'Fluid handmade gold chains, pavé bangles, and diamond tennis bracelets.',
    image: 'https://images.unsplash.com/photo-1573408301185-9519f94815b4?w=800&q=90',
    imagePortrait: 'https://images.unsplash.com/photo-1573408301185-9519f94815b4?w=600&h=800&q=90&fit=crop',
    get count() {
      return products.filter(p => p.category === 'bracelets').length;
    },
  },
  {
    id: 'pendants',
    name: 'Pendants',
    slug: 'pendants',
    description: 'Solitaire diamonds and floral diamond motifs on delicate 18K chains.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=90',
    imagePortrait: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&q=90&fit=crop',
    get count() {
      return products.filter(p => p.category === 'pendants').length;
    },
  },
  {
    id: 'bridal',
    name: 'Bridal',
    slug: 'bridal',
    description: 'Complete engagement and wedding band suites, eternity bands, and bridal suites.',
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=800&q=90',
    imagePortrait: 'https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&h=800&q=90&fit=crop',
    get count() {
      return products.filter(p => p.category === 'bridal').length;
    },
  },
];

export const getCategoryBySlug = (slug) => categories.find(c => c.slug.toLowerCase() === (slug || '').toLowerCase());

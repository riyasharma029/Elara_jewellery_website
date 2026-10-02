// ÉLARA Fine Jewelry — Collection Data

export const collections = [
  {
    id: 'celestial',
    name: 'Celestial',
    slug: 'celestial',
    tagline: 'Drawn from the Language of Stars',
    description: 'The Celestial collection finds its inspiration in the quiet drama of the night sky — in the precise moment before a star becomes visible to the naked eye. Each piece captures the tension between darkness and light, using stones of exceptional brilliance set in fluid architectural forms.',
    heroImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=90',
    gridImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=90',
    palette: 'White Gold · Platinum · Sapphire · Diamond',
    pieces: 8,
    featured: true,
  },
  {
    id: 'signature',
    name: 'Signature',
    slug: 'signature',
    tagline: 'The ÉLARA Standard of Timelessness',
    description: 'The Signature collection represents ÉLARA\'s foundational philosophy: that true luxury resides not in ostentation, but in the quality of what is unseen. These are pieces crafted to the highest standard, designed for lifetimes of wear, and created with the kind of technical precision that only reveals itself on close inspection.',
    heroImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=90',
    gridImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=90',
    palette: 'Yellow Gold · White Gold · Rose Gold · Diamond',
    pieces: 12,
    featured: true,
  },
  {
    id: 'lumière',
    name: 'Lumière',
    slug: 'lumiere',
    tagline: 'Architecture of Light',
    description: 'Lumière explores how a jewel interacts with the light that surrounds it. Every stone is selected for its unique optical properties; every setting is engineered to maximise the stone\'s natural radiance. The result is jewellery that transforms with the hour and the atmosphere — never the same piece twice.',
    heroImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=90',
    gridImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=90',
    palette: 'White Gold · Platinum · Emerald · Ruby · Sapphire · Diamond',
    pieces: 10,
    featured: true,
  },
  {
    id: 'bridal',
    name: 'Bridal',
    slug: 'bridal',
    tagline: 'For the Beginning of Everything',
    description: 'ÉLARA\'s Bridal collection is an act of devotion to the most meaningful moments of a life. Each engagement ring, wedding band, and bridal jewel is created with an awareness of the occasion it will mark — and the decades it will endure. We craft these pieces knowing they will be passed down.',
    heroImage: 'https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=1200&q=90',
    gridImage: 'https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=800&q=90',
    palette: 'White Gold · Platinum · Rose Gold · Diamond',
    pieces: 14,
    featured: true,
  },
];

export const getCollectionBySlug = (slug) =>
  collections.find(c => c.slug === slug || c.id === slug);

export const getFeaturedCollections = () =>
  collections.filter(c => c.featured);

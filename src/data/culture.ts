export type Category = 'cuisine' | 'tradition' | 'literature' | 'art' | 'music' | 'geography' | 'architecture';

export interface Stat {
  l: string;
  v: string;
}

export interface CultureItem {
  id: string;
  title: string;
  category: Category;
  pillarId: string;
  year?: number | string;
  summary: string;
  details?: string[];
  stats?: Stat[];
  sources?: { title: string; url: string; }[];
  featured?: boolean;
}

export interface CulturalPillar {
  id: string;
  label: string;
  intro: string;
}

export const PILLARS: CulturalPillar[] = [
  { id: 'flavors', label: 'Cuisine & Tastes', intro: 'The heart of Ukrainian hospitality.' },
  { id: 'rituals', label: 'Traditions & Holidays', intro: 'Ancient rituals and vibrant celebrations.' },
  { id: 'verses', label: 'Literature & Folklore', intro: 'The voices of bards and poets.' },
  { id: 'strokes', label: 'Arts & Crafts', intro: 'Unique visual language.' },
  { id: 'sounds', label: 'Music & Rhythm', intro: 'Soulful melodies and modern beats.' },
  { id: 'places', label: 'Geography & Landscapes', intro: 'From the Carpathian peaks to the Black Sea shores.' },
  { id: 'structures', label: 'Architecture & Design', intro: 'Historic churches and modern urban spaces.' }
];

export const CULTURE_ITEMS: CultureItem[] = [
  {
    id: 'borscht',
    pillarId: 'flavors',
    title: 'Ukrainian Borscht',
    category: 'cuisine',
    summary: 'A symbol of national identity and unity, recognized by UNESCO as Intangible Cultural Heritage.',
    details: [
      'Each region has its own unique recipe.',
      'Traditionally served with sour cream and pampushky with garlic.'
    ],
    stats: [{ l: 'UNESCO Status', v: 'Inscribed 2022' }],
    sources: [{ title: 'UNESCO', url: 'https://ich.unesco.org/en/USL/culture-of-ukrainian-borscht-cooking-01852' }],
    featured: true
  },
  {
    id: 'vyshyvanka',
    pillarId: 'rituals',
    title: 'Vyshyvanka',
    category: 'tradition',
    summary: 'The traditional embroidered shirt, where each pattern and color carries ancient symbolic meaning.',
    details: [
      'Ornaments serve as talismans for the wearer.',
      'Celebrated globally on Vyshyvanka Day.'
    ],
    stats: [{ l: 'Symbolism', v: 'Code of the Nation' }],
    featured: true
  }
];

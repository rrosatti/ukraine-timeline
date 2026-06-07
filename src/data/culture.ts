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

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/['".]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getItemId = (item: CultureItem) =>
  `item-${item.pillarId}-${slugify(item.title)}`;

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
  // Cuisine
  {
    id: 'borscht',
    pillarId: 'flavors',
    title: 'Ukrainian Borscht',
    category: 'cuisine',
    summary: 'A symbol of national identity and unity, recognized by UNESCO as Intangible Cultural Heritage.',
    details: ['Beet-based soup, rich in flavor and history.', 'Each region has its own unique recipe.'],
    stats: [{ l: 'UNESCO Status', v: 'Inscribed 2022' }],
    sources: [{ title: 'UNESCO', url: 'https://ich.unesco.org/en/USL/culture-of-ukrainian-borscht-cooking-01852' }],
    featured: true
  },
  {
    id: 'varenyky',
    pillarId: 'flavors',
    title: 'Varenyky',
    category: 'cuisine',
    summary: 'Traditional boiled dumplings with various fillings, a staple of Ukrainian holiday tables.',
    details: ['Fillings range from potato and cheese to sour cherries.', 'Often served with fried onions or sour cream.'],
    stats: [{ l: 'Popularity', v: 'National Dish' }],
    sources: [{ title: 'Encyclopedia of Ukraine - Food', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CF%5CO%5CFood.htm' }]
  },
  // Traditions
  {
    id: 'vyshyvanka',
    pillarId: 'rituals',
    title: 'Vyshyvanka',
    category: 'tradition',
    summary: 'Traditional embroidered clothing, symbolizing heritage and protection.',
    details: ['Each pattern holds specific symbolic meaning.', 'Vyshyvanka Day is celebrated globally.'],
    stats: [{ l: 'Symbolism', v: 'Code of the Nation' }],
    featured: true,
    sources: [{ title: 'Encyclopedia of Ukraine - Embroidery', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CE%5CM%5CEmbroidery.htm' }]
  },
  {
    id: 'ivana-kupala',
    pillarId: 'rituals',
    title: 'Ivana Kupala',
    category: 'tradition',
    summary: 'A vibrant summer solstice celebration filled with ancient pagan roots.',
    details: ['Includes gathering herbs, jumping over bonfires, and floating wreaths on water.'],
    stats: [{ l: 'Theme', v: 'Solstice/Purification' }],
    sources: [{ title: 'Encyclopedia of Ukraine - Kupalo', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CU%5CKupalo.htm' }]
  },
  // Literature
  {
    id: 'kobzar',
    pillarId: 'verses',
    title: 'Kobzar',
    category: 'literature',
    summary: 'The monumental poetry collection by Taras Shevchenko, foundational for modern Ukrainian literature.',
    details: ['Unified the Ukrainian nation through language.', 'Taras Shevchenko remains the national bard.'],
    stats: [{ l: 'Author', v: 'Taras Shevchenko' }],
    sources: [{ title: 'Encyclopedia of Ukraine - Kobzar', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CO%5CKobzar.htm' }]
  },
  // Art
  {
    id: 'maria-prymachenko',
    pillarId: 'strokes',
    title: 'Maria Prymachenko',
    category: 'art',
    summary: 'A legendary master of Ukrainian naive art, creating visionary worlds of mythical creatures.',
    details: ['Works deeply rooted in Ukrainian folk mythology.', 'Inspired artists like Pablo Picasso.'],
    stats: [{ l: 'Style', v: 'Naive Art / Folk' }],
    featured: true,
    sources: [{ title: 'Encyclopedia of Ukraine - Prymachenko', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CR%5CPrymachenkoMaria.htm' }]
  },
  // Music
  {
    id: 'bandura',
    pillarId: 'sounds',
    title: 'The Bandura',
    category: 'music',
    summary: 'The national folk instrument of Ukraine, deeply connected to the history of the wandering bards (kobzari).',
    details: ['A plucked string instrument with a unique resonant sound.', 'Symbol of the Ukrainian struggle for freedom.'],
    stats: [{ l: 'Instrument', v: 'Stringed' }],
    sources: [{ title: 'Encyclopedia of Ukraine - Bandura', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CA%5CBandura.htm' }]
  },
  // Geography
  {
    id: 'carpathian-mountains',
    pillarId: 'places',
    title: 'Carpathian Mountains',
    category: 'geography',
    summary: 'The majestic mountain range in Western Ukraine, home to unique Hutsul culture and pristine nature.',
    details: ['Highest peak: Hoverla.', 'Rich in biodiversity and traditional folklore.'],
    stats: [{ l: 'Key Region', v: 'Western Ukraine' }],
    sources: [{ title: 'Encyclopedia of Ukraine - Carpathian Mountains', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CA%5CCarpathianMountains.htm' }]
  },
  // Architecture
  {
    id: 'st-sophia-cathedral',
    pillarId: 'structures',
    title: 'St. Sophia Cathedral',
    category: 'architecture',
    summary: 'A magnificent 11th-century monument of Kyivan Rus' architecture, famous for its Byzantine mosaics and frescoes.',
    details: ['A UNESCO World Heritage site.', 'A testament to the grandeur of medieval Kyiv.'],
    stats: [{ l: 'Status', v: 'UNESCO Heritage' }],
    featured: true,
    sources: [{ title: 'Encyclopedia of Ukraine - St. Sophia', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CA%5CSaintSophiaCathedral.htm' }]
  }
];

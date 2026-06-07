export type Category =
  | "cuisine"
  | "tradition"
  | "literature"
  | "art"
  | "music"
  | "geography"
  | "architecture";

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
  sources?: { title: string; url: string }[];
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
  {
    id: "flavors",
    label: "Cuisine & Tastes",
    intro: "The heart of Ukrainian hospitality.",
  },
  {
    id: "rituals",
    label: "Traditions & Holidays",
    intro: "Ancient rituals and vibrant celebrations.",
  },
  {
    id: "verses",
    label: "Literature & Folklore",
    intro: "The voices of bards and poets.",
  },
  { id: "strokes", label: "Arts & Crafts", intro: "Unique visual language." },
  {
    id: "sounds",
    label: "Music & Rhythm",
    intro: "Soulful melodies and modern beats.",
  },
  {
    id: "places",
    label: "Geography & Landscapes",
    intro: "From the Carpathian peaks to the Black Sea shores.",
  },
  {
    id: "structures",
    label: "Architecture & Design",
    intro: "Historic churches and modern urban spaces.",
  },
];

export const CULTURE_ITEMS: CultureItem[] = [
  // Cuisine
  {
    id: "borscht",
    pillarId: "flavors",
    title: "Ukrainian Borscht",
    category: "cuisine",
    summary:
      "A symbol of national identity and unity, recognized by UNESCO as Intangible Cultural Heritage.",
    details: [
      "Beet-based soup, rich in flavor and history.",
      "Each region has its own unique recipe.",
    ],
    stats: [{ l: "UNESCO Status", v: "Inscribed 2022" }],
    sources: [
      {
        title: "UNESCO",
        url: "https://ich.unesco.org/en/USL/culture-of-ukrainian-borscht-cooking-01852",
      },
    ],
    featured: true,
  },
  {
    id: "varenyky",
    pillarId: "flavors",
    title: "Varenyky",
    category: "cuisine",
    summary:
      "Traditional boiled dumplings with various fillings, a staple of Ukrainian holiday tables.",
    details: [
      "Fillings range from potato and cheese to sour cherries.",
      "Often served with fried onions or sour cream.",
    ],
    stats: [{ l: "Popularity", v: "National Dish" }],
    sources: [
      {
        title: "Encyclopedia of Ukraine - Food",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/F/O/Food.htm",
      },
    ],
  },
  {
    id: "holubtsi",
    pillarId: "flavors",
    title: "Holubtsi",
    category: "cuisine",
    summary:
      "Cabbage rolls stuffed with a savory mixture of rice, meat, and vegetables.",
    details: [
      "Often served with tomato sauce or sour cream.",
      "A common dish for family celebrations.",
    ],
    stats: [{ l: "Type", v: "Main Dish" }],
    sources: [
      {
        title: "Encyclopedia of Ukraine - Food",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/F/O/Food.htm",
      },
    ],
  },
  // Traditions
  {
    id: "vyshyvanka",
    pillarId: "rituals",
    title: "Vyshyvanka",
    category: "tradition",
    summary:
      "Traditional embroidered clothing, symbolizing heritage and protection.",
    details: [
      "Each pattern holds specific symbolic meaning.",
      "Vyshyvanka Day is celebrated globally.",
    ],
    stats: [{ l: "Symbolism", v: "Code of the Nation" }],
    featured: true,
    sources: [
      {
        title: "Encyclopedia of Ukraine - Embroidery",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/E/M/Embroidery.htm",
      },
    ],
  },
  {
    id: "ivana-kupala",
    pillarId: "rituals",
    title: "Ivana Kupala",
    category: "tradition",
    summary:
      "A vibrant summer solstice celebration filled with ancient pagan roots.",
    details: [
      "Includes gathering herbs, jumping over bonfires, and floating wreaths on water.",
    ],
    stats: [{ l: "Theme", v: "Solstice/Purification" }],
    sources: [
      {
        title: "Encyclopedia of Ukraine - Kupalo",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/U/Kupalo.htm",
      },
    ],
  },
  // Literature
  {
    id: "kobzar",
    pillarId: "verses",
    title: "Kobzar",
    category: "literature",
    summary:
      "The monumental poetry collection by Taras Shevchenko, foundational for modern Ukrainian literature.",
    details: [
      "Unified the Ukrainian nation through language.",
      "Taras Shevchenko remains the national bard.",
    ],
    stats: [{ l: "Author", v: "Taras Shevchenko" }],
    sources: [
      {
        title: "Encyclopedia of Ukraine - Kobzar",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/O/Kobzar.htm",
      },
    ],
  },
  {
    id: "lesya-ukrainka",
    pillarId: "verses",
    title: "Lesya Ukrainka",
    category: "literature",
    summary:
      "A prolific writer and poet whose works became a symbol of Ukrainian national spirit and resilience.",
    details: [
      'Best known for her "Forest Song".',
      "A central figure in modern Ukrainian literature.",
    ],
    stats: [{ l: "Legacy", v: "National Icon" }],
    sources: [
      {
        title: "Encyclopedia of Ukraine - Lesya Ukrainka",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/O/KosachLesia.htm",
      },
    ],
  },
  // Art
  {
    id: "maria-prymachenko",
    pillarId: "strokes",
    title: "Maria Prymachenko",
    category: "art",
    summary:
      "A legendary master of Ukrainian naive art, creating visionary worlds of mythical creatures.",
    details: [
      "Works deeply rooted in Ukrainian folk mythology.",
      "Inspired artists like Pablo Picasso.",
    ],
    stats: [{ l: "Style", v: "Naive Art / Folk" }],
    featured: true,
    sources: [
      {
        title: "Encyclopedia of Ukraine - Prymachenko",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/P/R/PrymachenkoMaria.htm",
      },
    ],
  },
  // Music
  {
    id: "bandura",
    pillarId: "sounds",
    title: "The Bandura",
    category: "music",
    summary:
      "The national folk instrument of Ukraine, deeply connected to the history of the wandering bards (kobzari).",
    details: [
      "A plucked string instrument with a unique resonant sound.",
      "Symbol of the Ukrainian struggle for freedom.",
    ],
    stats: [{ l: "Instrument", v: "Stringed" }],
    sources: [
      {
        title: "Encyclopedia of Ukraine - Bandura",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/B/A/Bandura.htm",
      },
    ],
  },
  {
    id: "shchedryk",
    pillarId: "sounds",
    title: "Shchedryk",
    category: "music",
    summary:
      'The world-famous Ukrainian Christmas carol, known globally as "Carol of the Bells".',
    details: [
      "Based on a traditional Ukrainian folk chant.",
      "Arranged by Mykola Leontovych.",
    ],
    stats: [{ l: "Composer", v: "Mykola Leontovych" }],
    sources: [
      {
        title: "Encyclopedia of Ukraine - Music",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/M/U/Music.htm",
      },
    ],
  },
  // Geography
  {
    id: "carpathian-mountains",
    pillarId: "places",
    title: "Carpathian Mountains",
    category: "geography",
    summary:
      "The majestic mountain range in Western Ukraine, home to unique Hutsul culture and pristine nature.",
    details: [
      "Highest peak: Hoverla.",
      "Rich in biodiversity and traditional folklore.",
    ],
    stats: [{ l: "Key Region", v: "Western Ukraine" }],
    sources: [
      {
        title: "Encyclopedia of Ukraine - Carpathian Mountains",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/C/A/CarpathianMountains.htm",
      },
    ],
  },
  // Architecture
  {
    id: "st-sophia-cathedral",
    pillarId: "structures",
    title: "St. Sophia Cathedral",
    category: "architecture",
    summary:
      "A magnificent 11th-century monument of Kyivan Rus' architecture, famous for its Byzantine mosaics and frescoes.",
    details: [
      "A UNESCO World Heritage site.",
      "A testament to the grandeur of medieval Kyiv.",
    ],
    stats: [{ l: "Status", v: "UNESCO Heritage" }],
    featured: true,
    sources: [
      {
        title: "Encyclopedia of Ukraine - St. Sophia",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/S/A/SaintSophiaCathedral.htm",
      },
    ],
  },
  {
    id: "saint-andrews-church",
    pillarId: "structures",
    title: "St. Andrew's Church",
    category: "architecture",
    summary:
      "A prime example of Baroque architecture in Kyiv, designed by Bartolomeo Rastrelli.",
    details: [
      "Overlooks the historic Podil district.",
      "Famous for its elegant proportions.",
    ],
    stats: [{ l: "Architect", v: "Bartolomeo Rastrelli" }],
    sources: [
      {
        title: "Encyclopedia of Ukraine - Kyiv",
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/Y/Kyiv.htm",
      },
    ],
  },
];

export type Category = 'ruler' | 'culture' | 'milestone' | 'conflict';

export interface Stat {
  l: string;
  v: string;
}

export interface HistoricalEvent {
  id: string;
  year: number | string;
  title: string;
  category: Category;
  eraId: 'medieval' | 'cossack' | 'revival' | 'avant-garde' | 'modern';
  summary: string;
  details?: string[];
  stats?: Stat[];
  sources?: {
    title: string;
    url: string;
  }[];
  featured?: boolean;
}

export interface Era {
  id: string;
  label: string;
  intro: string;
  years: [number, number | string];
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/['".]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getEventId = (event: HistoricalEvent) =>
  `event-${event.year}-${slugify(event.title)}`;

export const eras: Era[] = [
  { 
    id: 'medieval', 
    label: 'Kyivan Rus\' · 988 – 1240',
    intro: 'The foundational era of Ukrainian statehood, marked by the Christianization of Rus\' and the rise of Kyiv as a major European power.',
    years: [988, 1240]
  },
  { 
    id: 'cossack', 
    label: 'The Cossack Hetmanate · 1648 – 1764',
    intro: 'The era of the Zaporizhian Sich and the struggle for independence against the Polish-Lithuanian Commonwealth and the Tsardom of Russia.',
    years: [1648, 1764]
  },
  { 
    id: 'revival', 
    label: 'The Cultural Revival · 1798 – 1900',
    intro: 'A period of national awakening, the birth of modern Ukrainian literature, and the development of national identity.',
    years: [1798, 1900]
  },
  { 
    id: 'avant-garde', 
    label: 'The Executed Renaissance · 1920 – 1930s',
    intro: 'A vibrant explosion of Ukrainian arts and culture, tragically cut short by Soviet repression.',
    years: [1920, 1939]
  },
  { 
    id: 'modern', 
    label: 'Modern Independence · 1991 – Present',
    intro: 'The restoration of Ukrainian independence and the ongoing journey towards a democratic European future.',
    years: [1991, 2030]
  }
];

export const events: HistoricalEvent[] = [
  {
    id: 'christianization-rus',
    year: 988,
    title: 'Christianization of Kyivan Rus\'',
    category: 'milestone',
    eraId: 'medieval',
    summary: 'Prince Volodymyr the Great adopts Christianity, aligning Rus\' with European civilization.',
    details: [
      'Volodymyr the Great was baptized in Crimea.',
      'Mass baptism of Kyiv residents in the Dnipro River.',
      'Established the Orthodox Church as the state religion.'
    ],
    stats: [
      { l: 'Prince', v: 'Volodymyr the Great' },
      { l: 'Religion', v: 'Eastern Orthodoxy' }
    ],
    featured: true
  },
  {
    id: 'yaroslav-wise',
    year: '1019-1054',
    title: 'Reign of Yaroslav the Wise',
    category: 'ruler',
    eraId: 'medieval',
    summary: 'A golden age of Kyivan Rus\', known for legal reforms and cultural expansion.',
    stats: [
      { l: 'Title', v: 'Grand Prince of Kyiv' },
      { l: 'Legacy', v: 'Rus\' Justice (Code of Laws)' }
    ]
  },
  {
    id: 'khmelnytsky-uprising',
    year: 1648,
    title: 'Khmelnytsky Uprising',
    category: 'conflict',
    eraId: 'cossack',
    summary: 'Bohdan Khmelnytsky leads a massive Cossack revolt against Polish rule.',
    featured: true,
    stats: [
      { l: 'Leader', v: 'Bohdan Khmelnytsky' },
      { l: 'Entity', v: 'Cossack Hetmanate' }
    ]
  },
  {
    id: 'kotlyarevsky-eneida',
    year: 1798,
    title: 'Publication of Eneida',
    category: 'culture',
    eraId: 'revival',
    summary: 'Ivan Kotlyarevsky publishes the first work in the modern Ukrainian vernacular.',
    stats: [
      { l: 'Author', v: 'Ivan Kotlyarevsky' },
      { l: 'Significance', v: 'Birth of modern literature' }
    ]
  },
  {
    id: 'independence-1991',
    year: 1991,
    title: 'Declaration of Independence',
    category: 'milestone',
    eraId: 'modern',
    summary: 'Ukraine restores its independence following the collapse of the Soviet Union.',
    featured: true,
    stats: [
      { l: 'Date', v: 'August 24, 1991' },
      { l: 'Referendum Support', v: '92.3%' }
    ]
  }
];

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
    years: [800, 1240]
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
    details: [
      'Compiled the first legal code, "Rus\' Justice" (Ruska Pravda).',
      'Established the first schools and library at St. Sophia Cathedral.',
      'Strengthened international ties through dynastic marriages across Europe.'
    ],
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
    details: [
      'Formation of the Cossack Hetmanate.',
      'Major battles at Zhovti Vody and Korsun.',
      'Significant shift in the geopolitical balance of Eastern Europe.'
    ],
    stats: [
      { l: 'Leader', v: 'Bohdan Khmelnytsky' },
      { l: 'Entity', v: 'Cossack Hetmanate' }
    ]
  },
  {
    id: 'constitution-pylyp-orlyk',
    year: 1710,
    title: 'Constitution of Pylyp Orlyk',
    category: 'milestone',
    eraId: 'cossack',
    summary: 'One of the first democratic constitutions in the world, drafted by Hetman Pylyp Orlyk.',
    details: [
      'Established the separation of powers between executive, legislative, and judicial branches.',
      'Defined the rights and obligations of the government and the governed.',
      'Drafted in exile after the Battle of Poltava.'
    ],
    stats: [
      { l: 'Author', v: 'Pylyp Orlyk' },
      { l: 'Type', v: 'Democratic Constitution' }
    ]
  },
  {
    id: 'kotlyarevsky-eneida',
    year: 1798,
    title: 'Publication of Eneida',
    category: 'culture',
    eraId: 'revival',
    summary: 'Ivan Kotlyarevsky publishes the first work in the modern Ukrainian vernacular.',
    details: [
      'A mock-heroic poem based on Virgil\'s Aeneid.',
      'Preserved Ukrainian folk traditions and language.',
      'Sparked the Ukrainian national awakening.'
    ],
    stats: [
      { l: 'Author', v: 'Ivan Kotlyarevsky' },
      { l: 'Significance', v: 'Birth of modern literature' }
    ]
  },
  {
    id: 'shevchenko-kobzar',
    year: 1840,
    title: 'Publication of Kobzar',
    category: 'culture',
    eraId: 'revival',
    summary: 'Taras Shevchenko publishes his first collection of poems, becoming the national bard.',
    featured: true,
    details: [
      'Central work of Ukrainian literature.',
      'Expressed the aspirations for national freedom and social justice.',
      'Unified the Ukrainian people through shared language and history.'
    ],
    stats: [
      { l: 'Author', v: 'Taras Shevchenko' },
      { l: 'Impact', v: 'National Bard' }
    ]
  },
  {
    id: 'executed-renaissance',
    year: '1920-1930',
    title: 'The Executed Renaissance',
    category: 'culture',
    eraId: 'avant-garde',
    summary: 'A vibrant explosion of Ukrainian arts and culture, tragically cut short by Soviet repression.',
    details: [
      'Thriving of literature, theater, and visual arts.',
      'Emphasis on "European orientation" (Mykola Khvylovy).',
      'Mass arrests and executions of intellectuals by the Soviet regime.'
    ],
    stats: [
      { l: 'Key Figure', v: 'Mykola Khvylovy' },
      { l: 'Fate', v: 'Soviet Repression' }
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
    details: [
      'Adopted by the Verkhovna Rada (Parliament) on August 24.',
      'Confirmed by a national referendum with overwhelming support.',
      'Beginning of the modern sovereign Ukrainian state.'
    ],
    stats: [
      { l: 'Date', v: 'August 24, 1991' },
      { l: 'Referendum Support', v: '92.3%' }
    ]
  },
  {
    id: 'revolution-of-dignity',
    year: '2013-2014',
    title: 'Revolution of Dignity',
    category: 'milestone',
    eraId: 'modern',
    summary: 'Protests in Kyiv lead to the ousting of pro-Russian president Viktor Yanukovych.',
    details: [
      'Sparked by the government\'s refusal to sign the EU Association Agreement.',
      'Centered on Maidan Nezalezhnosti (Independence Square).',
      'Reaffirmed Ukraine\'s European choice and democratic values.'
    ],
    stats: [
      { l: 'Outcome', v: 'Ousting of Yanukovych' },
      { l: 'Focus', v: 'European Integration' }
    ]
  }
];

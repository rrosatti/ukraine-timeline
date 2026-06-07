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
    intro: 'The era of the Zaporizhian Sich and the struggle for independence and self-governance.',
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
    intro: 'A vibrant explosion of Ukrainian arts and culture, highlighting the intellectual depth of the nation.',
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
    sources: [
      { title: 'UNESCO - St. Sophia Cathedral', url: 'https://whc.unesco.org/en/list/527' },
      { title: 'Encyclopedia of Ukraine', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CH%5CChristianizationofUkraine.htm' }
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
    ],
    sources: [
      { title: 'Britannica - Yaroslav I', url: 'https://www.britannica.com/biography/Yaroslav-I' }
    ]
  },
  {
    id: 'foundation-lviv',
    year: 1256,
    title: 'Foundation of Lviv',
    category: 'milestone',
    eraId: 'medieval',
    summary: 'Prince Danylo of Galicia founds the city of Lviv, naming it after his son Lev.',
    details: [
      'First mentioned in the Galician-Volhynian Chronicle.',
      'Became a major commercial and cultural hub of the region.',
      'Served as the capital of the Kingdom of Galicia-Volhynia.'
    ],
    stats: [
      { l: 'Founder', v: 'Daniel of Galicia' },
      { l: 'Named after', v: 'Lev Danylovych' }
    ],
    sources: [
      { title: 'Lviv City Council - History', url: 'https://city-adm.lviv.ua/lviv/history' },
      { title: 'UNESCO - Lviv Historic Centre', url: 'https://whc.unesco.org/en/list/865' }
    ]
  },
  {
    id: 'ostroh-academy',
    year: 1576,
    title: 'Foundation of Ostroh Academy',
    category: 'culture',
    eraId: 'cossack',
    summary: 'The first institution of higher education in Eastern Europe, established by Prince Vasyl-Konstiantyn Ostrozky.',
    details: [
      'The "Greek-Slavic-Latin Academy" combined traditional Slavic and Western European educational models.',
      'Printed the famous Ostroh Bible in 1581.',
      'A center for the defense of Orthodox culture and Ukrainian identity.'
    ],
    stats: [
      { l: 'Founder', v: 'Vasyl-Konstiantyn Ostrozky' },
      { l: 'Key Publication', v: 'Ostroh Bible (1581)' }
    ],
    sources: [
      { title: 'Ostroh Academy Official Site', url: 'https://www.oa.edu.ua/en/about/history/' }
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
      'Established self-governance based on Cossack traditions.'
    ],
    stats: [
      { l: 'Leader', v: 'Bohdan Khmelnytsky' },
      { l: 'Entity', v: 'Cossack Hetmanate' }
    ],
    sources: [
      { title: 'Ukraine.ua - Cossack Era', url: 'https://ukraine.ua/visit/history/cossacks/' }
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
    ],
    sources: [
      { title: 'Pylyp Orlyk Constitution', url: 'https://mfa.gov.ua/en/news-history/341-pylyp-orlyk-constitution' }
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
    ],
    sources: [
      { title: 'Kotlyarevsky Foundation', url: 'https://kotlyarevsky.com.ua/history/' }
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
    ],
    sources: [
      { title: 'Shevchenko Museum', url: 'https://museumshevchenko.org.ua/en/' }
    ]
  },
  {
    id: 'brotherhood-cyril-methodius',
    year: 1845,
    title: 'Brotherhood of Saints Cyril and Methodius',
    category: 'milestone',
    eraId: 'revival',
    summary: 'A secret political society in Kyiv that envisioned a democratic federation of Slavic nations with Ukraine as a central part.',
    details: [
      'Members included Taras Shevchenko, Mykola Kostomarov, and Panteleimon Kulish.',
      'Advocated for the abolition of serfdom and social equality.',
      'Promoted the development of Ukrainian culture and language.'
    ],
    stats: [
      { l: 'Key Member', v: 'Mykola Kostomarov' },
      { l: 'Goal', v: 'Democratic Federation' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Brotherhood', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CR%5CBrotherhoodofSaintsCyrilandMethodius.htm' }
    ]
  },
  {
    id: 'executed-renaissance',
    year: '1920-1930',
    title: 'The Executed Renaissance',
    category: 'culture',
    eraId: 'avant-garde',
    summary: 'A vibrant explosion of Ukrainian arts and culture, tragically cut short by repression.',
    details: [
      'Thriving of literature, theater, and visual arts.',
      'Emphasis on "European orientation" (Mykola Khvylovy).',
      'Loss of an entire generation of creative minds.'
    ],
    stats: [
      { l: 'Key Figure', v: 'Mykola Khvylovy' },
      { l: 'Context', v: 'Cultural Boom' }
    ],
    sources: [
      { title: 'Ukrainian Institute - Executed Renaissance', url: 'https://ui.org.ua/en/executed-renaissance/' }
    ]
  },
  {
    id: 'chornobyl-disaster',
    year: 1986,
    title: 'Chornobyl Nuclear Disaster',
    category: 'milestone',
    eraId: 'modern',
    summary: 'The world\'s worst nuclear accident occurs at the Chornobyl Nuclear Power Plant, sparking global awareness and local mobilization.',
    details: [
      'Occurred on April 26, 1986.',
      'Massive environmental and social consequences.',
      'Played a significant role in the weakening of the Soviet system and the push for independence.'
    ],
    stats: [
      { l: 'Date', v: 'April 26, 1986' },
      { l: 'Status', v: 'UNESCO Heritage Site Proposal' }
    ],
    sources: [
      { title: 'IAEA - Chornobyl Recovery', url: 'https://www.iaea.org/topics/chornobyl' },
      { title: 'National Chornobyl Museum', url: 'http://chornobylmuseum.kiev.ua/en/' }
    ]
  },
  {
    id: 'independence-1991',
    year: 1991,
    title: 'Declaration of Independence',
    category: 'milestone',
    eraId: 'modern',
    summary: 'Ukraine restores its independence, leading to a new era of sovereignty.',
    featured: true,
    details: [
      'Adopted by the Verkhovna Rada (Parliament) on August 24.',
      'Confirmed by a national referendum with overwhelming support.',
      'Beginning of the modern sovereign Ukrainian state.'
    ],
    stats: [
      { l: 'Date', v: 'August 24, 1991' },
      { l: 'Referendum Support', v: '92.3%' }
    ],
    sources: [
      { title: 'Verkhovna Rada - Act of Independence', url: 'https://zakon.rada.gov.ua/laws/show/1427-12?lang=en' }
    ]
  },
  {
    id: 'eurovision-wins',
    year: '2004, 2016, 2022',
    title: 'Eurovision Song Contest Triumphs',
    category: 'culture',
    eraId: 'modern',
    summary: 'Ukraine establishes itself as a musical powerhouse in Europe with three historic wins.',
    details: [
      'Ruslana won in 2004 with "Wild Dances".',
      'Jamala won in 2016 with "1944", highlighting Crimean Tatar history.',
      'Kalush Orchestra won in 2022 with "Stefania".'
    ],
    stats: [
      { l: 'First Win', v: 'Ruslana (2004)' },
      { l: 'Most Recent', v: 'Kalush Orchestra (2022)' }
    ],
    sources: [
      { title: 'Eurovision.tv - Ukraine Profile', url: 'https://eurovision.tv/country/ukraine' }
    ]
  },
  {
    id: 'revolution-of-dignity',
    year: '2013-2014',
    title: 'Revolution of Dignity',
    category: 'milestone',
    eraId: 'modern',
    summary: 'Citizens mobilize in Kyiv to reaffirm the nation\'s European choice and democratic values.',
    details: [
      'Sparked by the government\'s sudden refusal to sign a major EU agreement.',
      'Centered on Maidan Nezalezhnosti (Independence Square).',
      'Led to significant reforms and a stronger civil society.'
    ],
    stats: [
      { l: 'Outcome', v: 'Democratic Pivot' },
      { l: 'Focus', v: 'European Integration' }
    ],
    sources: [
      { title: 'National Museum of the Revolution of Dignity', url: 'https://www.maidanmuseum.org/en' }
    ]
  }
];

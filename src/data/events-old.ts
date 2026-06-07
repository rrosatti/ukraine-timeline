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
    intro: 'The foundational era of Ukrainian statehood, marked by administrative reforms, the rise of Kyiv, and the Christianization of Rus\'.',
    years: [800, 1240]
  },
  { 
    id: 'cossack', 
    label: 'The Cossack Hetmanate · 1648 – 1764',
    intro: 'The era of the Zaporizhian Sich, the struggle for independence, and the emergence of early democratic governance.',
    years: [1648, 1764]
  },
  { 
    id: 'revival', 
    label: 'The Cultural Revival · 1798 – 1917',
    intro: 'A period of national awakening, the birth of modern Ukrainian literature, and the first steps toward modern sovereignty.',
    years: [1798, 1917]
  },
  { 
    id: 'avant-garde', 
    label: 'The War of Independence · 1917 – 1930s',
    intro: 'A turbulent period of state-building, intellectual explosion, and the struggle to maintain freedom.',
    years: [1917, 1939]
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
    id: 'princess-olga',
    year: '945-964',
    title: 'Regency of Princess Olga',
    category: 'ruler',
    eraId: 'medieval',
    summary: 'The first female ruler of Kyivan Rus\', known for her administrative reforms and early diplomatic ties with Europe.',
    details: [
      'Established a structured tax system (pohosts), replacing irregular tribute collection.',
      'One of the first Rus\' rulers to adopt Christianity personally.',
      'Successfully maintained the stability of the state during a critical transition period.'
    ],
    stats: [
      { l: 'Title', v: 'Princess of Kyiv' },
      { l: 'Reforms', v: 'First structured tax system' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Olga, Princess', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/O/L/Olha.htm' }
    ],
    featured: true
  },
  {
    id: 'christianization-rus',
    year: 988,
    title: 'Christianization of Kyivan Rus\'',
    category: 'milestone',
    eraId: 'medieval',
    summary: 'Prince Volodymyr the Great adopts Christianity, aligning Rus\' with European civilization.',
    details: [
      'Mass baptism of Kyiv residents in the Dnipro River.',
      'Established the Orthodox Church as the state religion.',
      'Integrated the state into the broader European cultural and political sphere.'
    ],
    stats: [
      { l: 'Prince', v: 'Volodymyr the Great' },
      { l: 'Religion', v: 'Eastern Orthodoxy' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Christianization', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/C/H/ChristianizationofUkraine.htm' },
      { title: 'Britannica - St. Vladimir', url: 'https://www.britannica.com/biography/Saint-Vladimir' }
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
      'Built St. Sophia Cathedral and the Golden Gate in Kyiv.',
      'Consolidated state power and international prestige through diplomacy.'
    ],
    stats: [
      { l: 'Title', v: 'Grand Prince of Kyiv' },
      { l: 'Legacy', v: 'Rus\' Justice (Code of Laws)' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Yaroslav the Wise', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/Y/A/YaroslavtheWise.htm' },
      { title: 'Britannica - Yaroslav I', url: 'https://www.britannica.com/biography/Yaroslav-I' }
    ]
  },
  {
    id: 'ukraine-first-mention',
    year: 1187,
    title: 'First Mention of "Ukraine"',
    category: 'milestone',
    eraId: 'medieval',
    summary: 'The name "Ukraina" first appears in the Hypatian Chronicle to describe the land of the Pereyaslav Principality.',
    details: [
      'Found in an entry mourning the death of Prince Volodymyr Hlibovych.',
      'Reflects the early usage of the term in describing Ukrainian borderlands and territories.',
      'A key linguistic milestone for national identity.'
    ],
    stats: [
      { l: 'Source', v: 'Hypatian Chronicle' },
      { l: 'Region', v: 'Pereyaslav Principality' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Ukraine (the name)', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/U/K/UkraineName.htm' }
    ],
    featured: true
  },
  {
    id: 'foundation-lviv',
    year: 1256,
    title: 'Foundation of Lviv',
    category: 'milestone',
    eraId: 'medieval',
    summary: 'Prince Danylo of Galicia founds the city of Lviv, naming it after his son Lev.',
    stats: [
      { l: 'Founder', v: 'Daniel of Galicia' },
      { l: 'Named after', v: 'Lev Danylovych' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Lviv', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/L/V/Lviv.htm' },
      { title: 'UNESCO - Lviv Historic Centre', url: 'https://whc.unesco.org/en/list/865' }
    ]
  },
  {
    id: 'ostroh-academy',
    year: 1576,
    title: 'Foundation of Ostroh Academy',
    category: 'culture',
    eraId: 'cossack',
    summary: 'The first institution of higher education in Eastern Europe, established by Prince Ostrozky.',
    stats: [
      { l: 'Founder', v: 'Vasyl-Konstiantyn Ostrozky' },
      { l: 'Key Publication', v: 'Ostroh Bible (1581)' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Ostroh Academy', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/O/S/OstrohAcademy.htm' }
    ]
  },
  {
    id: 'khmelnytsky-uprising',
    year: 1648,
    title: 'Khmelnytsky Uprising',
    category: 'conflict',
    eraId: 'cossack',
    summary: 'Bohdan Khmelnytsky leads a massive Cossack revolt, establishing the Cossack Hetmanate.',
    details: [
      'Formation of a sovereign Cossack state entity.',
      'Major victory at the Battle of Zhovti Vody.',
      'Secured rights and privileges for the Cossack estate.'
    ],
    stats: [
      { l: 'Leader', v: 'Bohdan Khmelnytsky' },
      { l: 'Entity', v: 'Cossack Hetmanate' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Khmelnytsky Uprising', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/H/KhmelnytskyUprising.htm' },
      { title: 'Britannica - Cossack', url: 'https://www.britannica.com/topic/Cossack' }
    ],
    featured: true
  },
  {
    id: 'battle-konotop',
    year: 1659,
    title: 'Battle of Konotop',
    category: 'conflict',
    eraId: 'cossack',
    summary: 'A decisive military victory for the Cossack Hetmanate under Ivan Vyhovsky.',
    details: [
      'Cossack forces, allied with Tatars and Poles, defeated a large invading army.',
      'A brilliant tactical success during the period known as "The Ruin".',
      'Demonstrated the military capability and strategic depth of the Hetmanate.'
    ],
    stats: [
      { l: 'Leader', v: 'Ivan Vyhovsky' },
      { l: 'Outcome', v: 'Cossack Victory' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Battle of Konotop', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/O/KonotopBattleof.htm' }
    ]
  },
  {
    id: 'hetman-mazepa',
    year: '1687-1709',
    title: 'Era of Ivan Mazepa',
    category: 'ruler',
    eraId: 'cossack',
    summary: 'A period of cultural flourishing and a bold attempt to secure full independence for Ukraine.',
    details: [
      'Generous patron of arts and architecture, leading to the "Cossack Baroque" style.',
      'Sought to unify Ukrainian lands and free them from foreign oversight.',
      'Led the Hetmanate during the turbulent Great Northern War.'
    ],
    stats: [
      { l: 'Hetman', v: 'Ivan Mazepa' },
      { l: 'Style', v: 'Cossack Baroque' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Ivan Mazepa', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/M/A/MazepaIvan.htm' }
    ],
    featured: true
  },
  {
    id: 'constitution-pylyp-orlyk',
    year: 1710,
    title: 'Constitution of Pylyp Orlyk',
    category: 'milestone',
    eraId: 'cossack',
    summary: 'One of the first democratic constitutions in the world, drafted by Hetman Pylyp Orlyk.',
    stats: [
      { l: 'Author', v: 'Pylyp Orlyk' },
      { l: 'Type', v: 'Democratic Constitution' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Constitution of Pylyp Orlyk', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/C/O/ConstitutionofPylypOrlyk.htm' }
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
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Kotliarevsky', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/O/KotliarevskyIvan.htm' }
    ]
  },
  {
    id: 'shevchenko-kobzar',
    year: 1840,
    title: 'Publication of Kobzar',
    category: 'culture',
    eraId: 'revival',
    summary: 'Taras Shevchenko publishes his first collection of poems, becoming the national bard.',
    sources: [
      { title: 'Encyclopedia of Ukraine - Shevchenko National Museum', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/S/H/ShevchenkoNationalMuseum.htm' },
      { title: 'Britannica - Taras Shevchenko', url: 'https://www.britannica.com/biography/Taras-Shevchenko' }
    ]
  },
  {
    id: 'war-of-independence',
    year: '1917-1921',
    title: 'Ukrainian War of Independence',
    category: 'conflict',
    eraId: 'avant-garde',
    summary: 'The struggle of the Ukrainian People\'s Republic (UNR) to establish and maintain a sovereign state.',
    details: [
      'Followed the collapse of the Russian and Austro-Hungarian empires.',
      'Proclaimed the independence of the UNR in 1918.',
      'Defended sovereignty against multiple invading forces in a complex multi-front war.'
    ],
    stats: [
      { l: 'Entity', v: 'Ukrainian People\'s Republic' },
      { l: 'Key Result', v: 'First modern sovereign statehood' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Ukrainian-Soviet War', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/U/K/Ukrainian-SovietWarin1917-21.htm' },
      { title: 'Britannica - Independent Ukraine 1917-20', url: 'https://www.britannica.com/place/Ukraine/The-struggle-for-independence' }
    ],
    featured: true
  },
  {
    id: 'mykhailo-hrushevsky',
    year: 1917,
    title: 'Leadership of Mykhailo Hrushevsky',
    category: 'ruler',
    eraId: 'avant-garde',
    summary: 'Ukraine\'s preeminent historian leads the Central Rada and the first modern Ukrainian state.',
    details: [
      'Served as the head of the Central Rada of the UNR.',
      'Authored the monumental 10-volume "History of Ukraine-Rus\'".',
      'Central figure in the political and cultural awakening of the 20th century.'
    ],
    stats: [
      { l: 'Role', v: 'President of Central Rada' },
      { l: 'Impact', v: 'Architect of modern statehood' }
    ],
    sources: [
      { title: 'Encyclopedia of Ukraine - Hrushevsky, Mykhailo', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/H/R/HrushevskyMykhailo.htm' }
    ]
  },
  {
    id: 'holodomor-genocide',
    year: '1932-1933',
    title: 'The Holodomor Genocide',
    category: 'conflict',
    eraId: 'avant-garde',
    summary: 'A man-made famine used as a tool of repression, now recognized globally as an act of genocide against the Ukrainian people.',
    details: [
      'Resulted in the deaths of millions of innocent Ukrainians.',
      'Aimed at breaking the resistance of the Ukrainian peasantry and intelligentsia.',
      'Recognized by dozens of nations and international organizations as genocide.'
    ],
    stats: [
      { l: 'Nature', v: 'Man-made famine' },
      { l: 'Status', v: 'Recognized Genocide' }
    ],
    sources: [
      { title: 'Holodomor Museum', url: 'https://holodomormuseum.org.ua/en/' },
      { title: 'Britannica - Holodomor', url: 'https://www.britannica.com/event/Holodomor' }
    ],
    featured: true
  },
  {
    id: 'chornobyl-disaster',
    year: 1986,
    title: 'Chornobyl Nuclear Disaster',
    category: 'milestone',
    eraId: 'modern',
    summary: 'The world\'s worst nuclear accident occurs at the Chornobyl Nuclear Power Plant.',
    sources: [
      { title: 'IAEA - Chornobyl Recovery', url: 'https://www.iaea.org/topics/chornobyl' },
      { title: 'Britannica - Chernobyl Disaster', url: 'https://www.britannica.com/event/Chernobyl-disaster' }
    ]
  },
  {
    id: 'independence-1991',
    year: 1991,
    title: 'Declaration of Independence',
    category: 'milestone',
    eraId: 'modern',
    summary: 'Ukraine restores its independence, leading to a new era of sovereignty.',
    sources: [
      { title: 'United Nations Peacemaker - Independence Act', url: 'https://peacemaker.un.org/ukraine-independence-act91' },
      { title: 'Britannica - Independent Ukraine', url: 'https://www.britannica.com/place/Ukraine/Independent-Ukraine' }
    ],
    featured: true
  },
  {
    id: 'eurovision-wins',
    year: '2004, 2016, 2022',
    title: 'Eurovision Song Contest Triumphs',
    category: 'culture',
    eraId: 'modern',
    summary: 'Ukraine establishes itself as a musical powerhouse in Europe with three historic wins.',
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
    sources: [
      { title: 'Encyclopedia of Ukraine - Euromaidan', url: 'http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/E/U/Euromaidan.htm' },
      { title: 'Britannica - Maidan Protest', url: 'https://www.britannica.com/topic/Maidan-protest-of-2013-2014' }
    ]
  },
  {
    id: 'unesco-borscht',
    year: 2022,
    title: 'UNESCO Recognition of Ukrainian Borscht',
    category: 'culture',
    eraId: 'modern',
    summary: 'UNESCO inscribes the culture of Ukrainian borscht cooking as Intangible Cultural Heritage.',
    sources: [
      { title: 'UNESCO Official Listing', url: 'https://ich.unesco.org/en/USL/culture-of-ukrainian-borscht-cooking-01852' }
    ]
  },
  {
    id: 'eu-candidate-status',
    year: 2022,
    title: 'Ukraine Becomes EU Candidate',
    category: 'milestone',
    eraId: 'modern',
    summary: 'The European Union officially grants Ukraine candidate status, opening a path toward a shared European future.',
    sources: [
      { title: 'European Council - June 2022 Conclusions', url: 'https://www.consilium.europa.eu/en/press/press-releases/2022/06/24/european-council-conclusions-23-24-june-2022/' }
    ],
    featured: true
  },
  {
    id: 'national-resilience',
    year: '2022-Present',
    title: 'Unbreakable Spirit: The Power of Unity',
    category: 'culture',
    eraId: 'modern',
    summary: 'The Ukrainian nation demonstrates unprecedented resilience and unity amidst the challenges of war.',
    details: [
      'Massive volunteer movement supporting every aspect of society.',
      'A new level of national identity and global solidarity.',
      'A cultural and existential triumph showing that Ukraine stays stronger than ever.'
    ],
    stats: [
      { l: 'Spirit', v: 'Unbreakable' },
      { l: 'Future', v: 'Hopeful & European' }
    ],
    sources: [
      { title: 'United Nations - Resilience in Ukraine', url: 'https://ukraine.un.org/en' }
    ],
    featured: true
  }
];

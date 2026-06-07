import type { Locale, Localized, LocalizedArray, LocalizedText } from "./localization";

export type Category =
  | "cuisine"
  | "tradition"
  | "literature"
  | "art"
  | "music"
  | "geography"
  | "architecture";

export interface Stat {
  label: string;
  value: string;
}

export interface CultureItem {
  id: string;
  title: LocalizedText;
  category: Category;
  pillarId: string;
  year?: number | string;
  summary: LocalizedText;
  details?: LocalizedArray;
  stats?: Localized<Stat[]>;
  sources?: { title: LocalizedText; url: string }[];
  featured?: boolean;
  image?: string;
}

export interface CulturalPillar {
  id: string;
  label: LocalizedText;
  intro: LocalizedText;
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/['".]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getItemId = (item: CultureItem) =>
  `item-${item.pillarId}-${item.id}`;

export const getLegacyItemId = (item: CultureItem) =>
  `item-${item.pillarId}-${slugify(item.title.en)}`;

export const CATEGORY_LABELS: Record<Locale, Record<Category, string>> = {
  en: {
    cuisine: "Cuisine",
    tradition: "Tradition",
    literature: "Literature",
    art: "Art",
    music: "Music",
    geography: "Geography",
    architecture: "Architecture",
  },
  uk: {
    cuisine: "Кухня",
    tradition: "Традиції",
    literature: "Література",
    art: "Мистецтво",
    music: "Музика",
    geography: "Географія",
    architecture: "Архітектура",
  },
};

export const PILLARS: CulturalPillar[] = [
  {
    id: "flavors",
    label: {
      en: "Cuisine & Tastes",
      uk: "Кухня та смаки",
    },
    intro: {
      en: "The heart of Ukrainian hospitality.",
      uk: "Серце української гостинності.",
    },
  },
  {
    id: "rituals",
    label: {
      en: "Traditions & Holidays",
      uk: "Традиції та свята",
    },
    intro: {
      en: "Ancient rituals and vibrant celebrations.",
      uk: "Стародавні обряди та яскраві святкування.",
    },
  },
  {
    id: "verses",
    label: {
      en: "Literature & Folklore",
      uk: "Література та фольклор",
    },
    intro: {
      en: "The voices of bards and poets.",
      uk: "Голоси співців і поетів.",
    },
  },
  {
    id: "strokes",
    label: {
      en: "Arts & Crafts",
      uk: "Мистецтво та ремесла",
    },
    intro: {
      en: "A unique visual language.",
      uk: "Унікальна візуальна мова.",
    },
  },
  {
    id: "sounds",
    label: {
      en: "Music & Rhythm",
      uk: "Музика та ритм",
    },
    intro: {
      en: "Soulful melodies and modern beats.",
      uk: "Душевні мелодії та сучасні ритми.",
    },
  },
  {
    id: "places",
    label: {
      en: "Geography & Landscapes",
      uk: "Географія та ландшафти",
    },
    intro: {
      en: "From the Carpathian peaks to the Black Sea shores.",
      uk: "Від карпатських вершин до берегів Чорного моря.",
    },
  },
  {
    id: "structures",
    label: {
      en: "Architecture & Design",
      uk: "Архітектура та дизайн",
    },
    intro: {
      en: "Historic churches and modern urban spaces.",
      uk: "Історичні храми та сучасні міські простори.",
    },
  },
];

export const CULTURE_ITEMS: CultureItem[] = [
  {
    id: "borscht",
    pillarId: "flavors",
    title: {
      en: "Ukrainian Borscht",
      uk: "Український борщ",
    },
    category: "cuisine",
    summary: {
      en: "A symbol of national identity and unity, recognized by UNESCO as Intangible Cultural Heritage.",
      uk: "Символ національної ідентичності та єдності, визнаний ЮНЕСКО нематеріальною культурною спадщиною.",
    },
    details: {
      en: [
        "Beet-based soup, rich in flavor and history.",
        "Each region has its own unique recipe.",
      ],
      uk: [
        "Буряковий суп, насичений смаком та історією.",
        "Кожен регіон має власний унікальний рецепт.",
      ],
    },
    stats: {
      en: [{ label: "UNESCO Status", value: "Inscribed 2022" }],
      uk: [{ label: "Статус ЮНЕСКО", value: "Внесено у 2022" }],
    },
    sources: [
      {
        title: {
          en: "UNESCO",
          uk: "ЮНЕСКО",
        },
        url: "https://ich.unesco.org/en/USL/culture-of-ukrainian-borscht-cooking-01852",
      },
    ],
    featured: true,
    image: "src/assets/borscht.png",
  },
  {
    id: "varenyky",
    pillarId: "flavors",
    title: {
      en: "Varenyky",
      uk: "Вареники",
    },
    category: "cuisine",
    summary: {
      en: "Traditional boiled dumplings with various fillings, a staple of Ukrainian holiday tables.",
      uk: "Традиційні варені вареники з різними начинками, незамінна страва на українських святкових столах.",
    },
    details: {
      en: [
        "Fillings range from potato and cheese to sour cherries.",
        "Often served with fried onions or sour cream.",
      ],
      uk: [
        "Начинки бувають від картоплі та сиру до вишень.",
        "Подаються з підсмаженою цибулею або сметаною.",
      ],
    },
    stats: {
      en: [{ label: "Popularity", value: "National Dish" }],
      uk: [{ label: "Поширеність", value: "Національна страва" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Food",
          uk: "Енциклопедія України - Їжа",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/F/O/Food.htm",
      },
    ],
    image: "src/assets/vareniki.png",
  },
  {
    id: "holubtsi",
    pillarId: "flavors",
    title: {
      en: "Holubtsi",
      uk: "Голубці",
    },
    category: "cuisine",
    summary: {
      en: "Cabbage rolls stuffed with a savory mixture of rice, meat, and vegetables.",
      uk: "Капустяні рулетики, начинені смачною сумішшю рису, м'яса та овочів.",
    },
    details: {
      en: [
        "Often served with tomato sauce or sour cream.",
        "A common dish for family celebrations.",
      ],
      uk: [
        "Часто подаються з томатним соусом або сметаною.",
        "Поширена страва для родинних святкувань.",
      ],
    },
    stats: {
      en: [{ label: "Type", value: "Main Dish" }],
      uk: [{ label: "Тип", value: "Основна страва" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Food",
          uk: "Енциклопедія України - Їжа",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/F/O/Food.htm",
      },
    ],
    image: "src/assets/holubtsi.png",
  },
  {
    id: "vyshyvanka",
    pillarId: "rituals",
    title: {
      en: "Vyshyvanka",
      uk: "Вишиванка",
    },
    category: "tradition",
    summary: {
      en: "Traditional embroidered clothing, symbolizing heritage and protection.",
      uk: "Традиційний вишитий одяг, що символізує спадщину та захист.",
    },
    details: {
      en: [
        "Each pattern holds specific symbolic meaning.",
        "Vyshyvanka Day is celebrated globally.",
      ],
      uk: [
        "Кожен орнамент має власне символічне значення.",
        "День вишиванки відзначають у всьому світі.",
      ],
    },
    stats: {
      en: [{ label: "Symbolism", value: "Code of the Nation" }],
      uk: [{ label: "Символіка", value: "Код нації" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Embroidery",
          uk: "Енциклопедія України - Вишивка",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/E/M/Embroidery.htm",
      },
    ],
    image: "src/assets/vyshyvanka.png",
  },
  {
    id: "ivana-kupala",
    pillarId: "rituals",
    title: {
      en: "Ivana Kupala",
      uk: "Івана Купала",
    },
    category: "tradition",
    summary: {
      en: "A vibrant summer solstice celebration filled with ancient pagan roots.",
      uk: "Яскраве святкування літнього сонцестояння з давніми язичницькими коренями.",
    },
    details: {
      en: [
        "Includes gathering herbs, jumping over bonfires, and floating wreaths on water.",
      ],
      uk: [
        "Передбачає збирання трав, стрибки через вогнище та пускання вінків по воді.",
      ],
    },
    stats: {
      en: [{ label: "Theme", value: "Solstice / Purification" }],
      uk: [{ label: "Тема", value: "Сонцестояння / очищення" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Kupalo",
          uk: "Енциклопедія України - Купало",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/U/Kupalo.htm",
      },
    ],
    image: "src/assets/IVANA_KUPALA.png",
  },
  {
    id: "kobzar",
    pillarId: "verses",
    title: {
      en: "Kobzar",
      uk: "Кобзар",
    },
    category: "literature",
    summary: {
      en: "The monumental poetry collection by Taras Shevchenko, foundational for modern Ukrainian literature.",
      uk: "Знакова поетична збірка Тараса Шевченка, що стала основою модерної української літератури.",
    },
    details: {
      en: [
        "Unified the Ukrainian nation through language.",
        "Taras Shevchenko remains the national bard.",
      ],
      uk: [
        "Об'єднала українську націю через мову.",
        "Тарас Шевченко й досі залишається національним поетом.",
      ],
    },
    stats: {
      en: [{ label: "Author", value: "Taras Shevchenko" }],
      uk: [{ label: "Автор", value: "Тарас Шевченко" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Kobzar",
          uk: "Енциклопедія України - Кобзар",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/O/Kobzar.htm",
      },
    ],
    image: "src/assets/kobzar.png",
  },
  {
    id: "lesya-ukrainka",
    pillarId: "verses",
    title: {
      en: "Lesya Ukrainka",
      uk: "Леся Українка",
    },
    category: "literature",
    summary: {
      en: "A prolific writer and poet whose works became a symbol of Ukrainian national spirit and resilience.",
      uk: "Плідна письменниця й поетеса, чиї твори стали символом українського духу та стійкості.",
    },
    details: {
      en: [
        'Best known for her "Forest Song".',
        "A central figure in modern Ukrainian literature.",
      ],
      uk: [
        'Найбільш відома завдяки драмі-феєрії "Лісова пісня".',
        "Центральна постать модерної української літератури.",
      ],
    },
    stats: {
      en: [{ label: "Legacy", value: "National Icon" }],
      uk: [{ label: "Спадщина", value: "Національна ікона" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Lesya Ukrainka",
          uk: "Енциклопедія України - Леся Українка",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/O/KosachLesia.htm",
      },
    ],
    image: "src/assets/lesya-ukrainka.png",
  },
  {
    id: "maria-prymachenko",
    pillarId: "strokes",
    title: {
      en: "Maria Prymachenko",
      uk: "Марія Примаченко",
    },
    category: "art",
    summary: {
      en: "A legendary master of Ukrainian naive art, creating visionary worlds of mythical creatures.",
      uk: "Легендарна майстриня українського наївного мистецтва, що створювала візійні світи міфічних істот.",
    },
    details: {
      en: [
        "Works deeply rooted in Ukrainian folk mythology.",
        "Inspired artists like Pablo Picasso.",
      ],
      uk: [
        "Твори глибоко вкорінені в українській народній міфології.",
        "Надихала митців, зокрема Пабло Пікассо.",
      ],
    },
    stats: {
      en: [{ label: "Style", value: "Naive Art / Folk" }],
      uk: [{ label: "Стиль", value: "Наївне мистецтво / фольклор" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Prymachenko",
          uk: "Енциклопедія України - Примаченко",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/P/R/PrymachenkoMaria.htm",
      },
    ],
    image: "src/assets/maria-prymachenko.png",
  },
  {
    id: "bandura",
    pillarId: "sounds",
    title: {
      en: "The Bandura",
      uk: "Бандура",
    },
    category: "music",
    summary: {
      en: "The national folk instrument of Ukraine, deeply connected to the history of the wandering bards (kobzari).",
      uk: "Національний народний інструмент України, тісно пов'язаний з історією мандрівних співців-кобзарів.",
    },
    details: {
      en: [
        "A plucked string instrument with a unique resonant sound.",
        "Symbol of the Ukrainian struggle for freedom.",
      ],
      uk: [
        "Щипковий струнний інструмент з унікальним резонансним звучанням.",
        "Символ української боротьби за свободу.",
      ],
    },
    stats: {
      en: [{ label: "Instrument", value: "Stringed" }],
      uk: [{ label: "Інструмент", value: "Струнний" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Bandura",
          uk: "Енциклопедія України - Бандура",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/B/A/Bandura.htm",
      },
    ],
    image: "src/assets/bandura.png",
  },
  {
    id: "shchedryk",
    pillarId: "sounds",
    title: {
      en: "Shchedryk",
      uk: "Щедрик",
    },
    category: "music",
    summary: {
      en: 'The world-famous Ukrainian Christmas carol, known globally as "Carol of the Bells".',
      uk: 'Світовідомий український різдвяний щедрівка, відомий у світі як "Carol of the Bells".',
    },
    details: {
      en: [
        "Based on a traditional Ukrainian folk chant.",
        "Arranged by Mykola Leontovych.",
      ],
      uk: [
        "Побудований на основі традиційного українського народного наспіву.",
        "Оброблений Миколою Леонтовичем.",
      ],
    },
    stats: {
      en: [{ label: "Composer", value: "Mykola Leontovych" }],
      uk: [{ label: "Композитор", value: "Микола Леонтович" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Music",
          uk: "Енциклопедія України - Музика",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/M/U/Music.htm",
      },
    ],
    image: "src/assets/shchedryk.png",
  },
  {
    id: "carpathian-mountains",
    pillarId: "places",
    title: {
      en: "Carpathian Mountains",
      uk: "Карпати",
    },
    category: "geography",
    summary: {
      en: "The majestic mountain range in Western Ukraine, home to unique Hutsul culture and pristine nature.",
      uk: "Величний гірський масив у Західній Україні, осередок унікальної гуцульської культури та незайманої природи.",
    },
    details: {
      en: ["Highest peak: Hoverla.", "Rich in biodiversity and traditional folklore."],
      uk: ["Найвища вершина: Говерла.", "Багаті на біорізноманіття та традиційний фольклор."],
    },
    stats: {
      en: [{ label: "Key Region", value: "Western Ukraine" }],
      uk: [{ label: "Ключовий регіон", value: "Західна Україна" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Carpathian Mountains",
          uk: "Енциклопедія України - Карпати",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/C/A/CarpathianMountains.htm",
      },
    ],
    image: "src/assets/carpathian-mountains.png",
  },
  {
    id: "st-sophia-cathedral",
    pillarId: "structures",
    title: {
      en: "St. Sophia Cathedral",
      uk: "Софійський собор",
    },
    category: "architecture",
    summary: {
      en: "A magnificent 11th-century monument of Kyivan Rus' architecture, famous for its Byzantine mosaics and frescoes.",
      uk: "Величний пам'ятник архітектури XI століття доби Київської Русі, відомий візантійськими мозаїками та фресками.",
    },
    details: {
      en: ["A UNESCO World Heritage site.", "A testament to the grandeur of medieval Kyiv."],
      uk: ["Пам'ятка Світової спадщини ЮНЕСКО.", "Свідчення величі середньовічного Києва."],
    },
    stats: {
      en: [{ label: "Status", value: "UNESCO Heritage" }],
      uk: [{ label: "Статус", value: "Спадщина ЮНЕСКО" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - St. Sophia",
          uk: "Енциклопедія України - Софія Київська",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/S/A/SaintSophiaCathedral.htm",
      },
    ],
    image: "src/assets/st-sophia-cathedral.png",
  },
  {
    id: "saint-andrews-church",
    pillarId: "structures",
    title: {
      en: "St. Andrew's Church",
      uk: "Андріївська церква",
    },
    category: "architecture",
    summary: {
      en: "A prime example of Baroque architecture in Kyiv, designed by Bartolomeo Rastrelli.",
      uk: "Яскравий зразок барокової архітектури в Києві, спроєктований Бартоломео Растреллі.",
    },
    details: {
      en: ["Overlooks the historic Podil district.", "Famous for its elegant proportions."],
      uk: ["Підноситься над історичним Подолом.", "Відома своїми витонченими пропорціями."],
    },
    stats: {
      en: [{ label: "Architect", value: "Bartolomeo Rastrelli" }],
      uk: [{ label: "Архітектор", value: "Бартоломео Растреллі" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Kyiv",
          uk: "Енциклопедія України - Київ",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/Y/Kyiv.htm",
      },
    ],
    image: "src/assets/st-andrews-church.png",
  },
];

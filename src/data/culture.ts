import type {
  Locale,
  Localized,
  LocalizedArray,
  LocalizedText,
} from "./localization";
import borschtImg from "../assets/borscht.png";
import varenikiImg from "../assets/vareniki.png";
import holubtsiImg from "../assets/holubtsi.png";
import vyshyvankaImg from "../assets/vyshyvanka.png";
import ivanaKupalaImg from "../assets/IVANA_KUPALA.png";
import kobzarImg from "../assets/kobzar.png";
import lesyaUkrainkaImg from "../assets/lesya-ukrainka.png";
import mariaPrymachenkoImg from "../assets/maria-prymachenko.png";
import banduraImg from "../assets/bandura.png";
import shchedrykImg from "../assets/shchedryk.png";
import carpathianMountainsImg from "../assets/carpathian-mountains.png";
import stSophiaCathedralImg from "../assets/st-sophia-cathedral.png";
import stAndrewsChurchImg from "../assets/st-andrews-church.png";
import derunyImg from "../assets/deruny.png";
import nalysnykyImg from "../assets/nalysnyky.png";
import pysankaImg from "../assets/pysanka.png";
import petrykivkaPaintingStyleImg from "../assets/petrykivka-painting-style.png";
import mykolaLysenkoImg from "../assets/Mykola-Lysenko.png";
import dnieperRiverImg from "../assets/Dnieper-River.png";
import steppeImg from "../assets/steppe.png";
import kyivPecherskLavraImg from "../assets/Kyiv-Pechersk-Lavra.png";
import kamianetsPodilskyiFortressImg from "../assets/Kamianets-Podilskyi-Fortress.png";
import ivanFrankoImg from "../assets/Ivan-Franko.png";
import banoshImg from "../assets/Banosh.png";
import syrnykyImg from "../assets/Syrnyky.png";
import domovykImg from "../assets/Domovyk.png";
import mavkaImg from "../assets/Mavka.png";
import rusalkaImg from "../assets/Rusalka.png";
import kosivCeramicsImg from "../assets/Kosiv-Ceramics.png";
import ukrainianWoodcarvingImg from "../assets/Ukrainian-Woodcarving.png";
import ivanMazepaImg from "../assets/Ivan-Mazepa.png";
import declarationOfIndependenceImg from "../assets/Declaration-of-Independence.png";
import zaporozhianSichImage from "../assets/Zaporozhian-Sich.png";
import bohdanKhmelnytskyImg from "../assets/Bohdan-Khmelnytsky.png";
import orangeRevolutionImg from "../assets/Orange-Revolution.png";

export type Category =
  | "cuisine"
  | "tradition"
  | "literature"
  | "art"
  | "music"
  | "geography"
  | "architecture"
  | "history";

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
    history: "History & Legacy",
  },
  uk: {
    cuisine: "Кухня",
    tradition: "Традиції",
    literature: "Література",
    art: "Мистецтво",
    music: "Музика",
    geography: "Географія",
    architecture: "Архітектура",
    history: "Історія",
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
  {
    id: "legacy",
    label: {
      en: "History & Legacy",
      uk: "Історія та спадщина",
    },
    intro: {
      en: "Pivotal moments and figures that shaped the nation.",
      uk: "Ключові моменти та постаті, що сформували націю.",
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
    image: borschtImg,
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
    image: varenikiImg,
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
    image: holubtsiImg,
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
    image: vyshyvankaImg,
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
    image: ivanaKupalaImg,
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
    image: kobzarImg,
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
    image: lesyaUkrainkaImg,
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
    image: mariaPrymachenkoImg,
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
    image: banduraImg,
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
    image: shchedrykImg,
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
      en: [
        "Highest peak: Hoverla.",
        "Rich in biodiversity and traditional folklore.",
      ],
      uk: [
        "Найвища вершина: Говерла.",
        "Багаті на біорізноманіття та традиційний фольклор.",
      ],
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
    image: carpathianMountainsImg,
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
      en: [
        "A UNESCO World Heritage site.",
        "A testament to the grandeur of medieval Kyiv.",
      ],
      uk: [
        "Пам'ятка Світової спадщини ЮНЕСКО.",
        "Свідчення величі середньовічного Києва.",
      ],
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
    image: stSophiaCathedralImg,
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
      en: [
        "Overlooks the historic Podil district.",
        "Famous for its elegant proportions.",
      ],
      uk: [
        "Підноситься над історичним Подолом.",
        "Відома своїми витонченими пропорціями.",
      ],
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
    image: stAndrewsChurchImg,
  },
  {
    id: "deruny",
    pillarId: "flavors",
    title: {
      en: "Deruny",
      uk: "Деруни",
    },
    category: "cuisine",
    summary: {
      en: "Crispy potato pancakes, a beloved staple of home-cooked Ukrainian cuisine.",
      uk: "Хрусткі картопляні оладки, улюблена страва домашньої української кухні.",
    },
    details: {
      en: [
        "Usually served with sour cream.",
        "Can be filled with minced meat or mushrooms.",
      ],
      uk: [
        "Зазвичай подаються зі сметаною.",
        "Можуть бути з м'ясною або грибною начинкою.",
      ],
    },
    stats: {
      en: [{ label: "Type", value: "Popular Dish" }],
      uk: [{ label: "Тип", value: "Популярна страва" }],
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
    image: derunyImg,
  },
  {
    id: "pysanka",
    pillarId: "rituals",
    title: {
      en: "Pysanka",
      uk: "Писанка",
    },
    category: "tradition",
    summary: {
      en: "Ukrainian Easter eggs decorated with intricate, symbolic patterns using a wax-resist method.",
      uk: "Українські великодні яйця, прикрашені складними символічними візерунками за допомогою техніки воскового розпису.",
    },
    details: {
      en: [
        "Each symbol has a specific protective or celebratory meaning.",
        "A deeply rooted pre-Christian tradition.",
      ],
      uk: [
        "Кожен символ має певне захисне або святкове значення.",
        "Давня дохристиянська традиція.",
      ],
    },
    stats: {
      en: [{ label: "Method", value: "Wax-resist (Batik)" }],
      uk: [{ label: "Метод", value: "Восковий розпис" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Pysanka",
          uk: "Енциклопедія України - Писанка",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/P/Y/Pysanka.htm",
      },
    ],
    image: pysankaImg,
  },
  {
    id: "ivan-franko",
    pillarId: "verses",
    title: {
      en: "Ivan Franko",
      uk: "Іван Франко",
    },
    category: "literature",
    summary: {
      en: "A titan of Ukrainian literature, scholar, and public figure, known for his vast body of poetry, prose, and critical works.",
      uk: "Титан української літератури, вчений і громадський діяч, відомий своїм величезним доробком поезії, прози та критичних праць.",
    },
    details: {
      en: [
        "Known as 'Kameniar' (The Stonecutter).",
        "A central figure in modernizing Ukrainian literature.",
      ],
      uk: [
        "Відомий як 'Каменяр'.",
        "Центральна постать модернізації української літератури.",
      ],
    },
    stats: {
      en: [{ label: "Legacy", value: "National Poet" }],
      uk: [{ label: "Спадщина", value: "Національний поет" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Ivan Franko",
          uk: "Енциклопедія України - Іван Франко",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/F/R/FrankoIvan.htm",
      },
    ],
    image: ivanFrankoImg,
  },
  {
    id: "nalysnyky",
    pillarId: "flavors",
    title: {
      en: "Nalysnyky",
      uk: "Налисники",
    },
    category: "cuisine",
    summary: {
      en: "Delicate thin crepes, typically rolled with cottage cheese or other sweet/savory fillings.",
      uk: "Ніжні тонкі млинці, зазвичай згорнуті з сиром або іншими солодкими чи солоними начинками.",
    },
    details: {
      en: [
        "A popular dish for festive occasions.",
        "Often served with sour cream or honey.",
      ],
      uk: [
        "Популярна страва для святкових подій.",
        "Часто подаються зі сметаною або медом.",
      ],
    },
    stats: {
      en: [{ label: "Type", value: "Traditional Pastry" }],
      uk: [{ label: "Тип", value: "Традиційна випічка" }],
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
    image: nalysnykyImg,
  },
  {
    id: "petrykivka-painting",
    pillarId: "strokes",
    title: {
      en: "Petrykivka Painting",
      uk: "Петриківський розпис",
    },
    category: "art",
    summary: {
      en: "A traditional decorative folk art style from the village of Petrykivka, recognized by UNESCO for its vibrant floral motifs.",
      uk: "Традиційний декоративний народний стиль із села Петриківка, визнаний ЮНЕСКО за яскраві квіткові мотиви.",
    },
    details: {
      en: [
        "Features stylized flowers, birds, and berries.",
        "Originally used to decorate interior walls and household items.",
      ],
      uk: [
        "Характеризується стилізованими квітами, птахами та ягодами.",
        "Спочатку використовувався для оздоблення внутрішніх стін та побутових речей.",
      ],
    },
    stats: {
      en: [{ label: "UNESCO Status", value: "Inscribed 2013" }],
      uk: [{ label: "Статус ЮНЕСКО", value: "Внесено у 2013" }],
    },
    sources: [
      {
        title: {
          en: "UNESCO",
          uk: "ЮНЕСКО",
        },
        url: "https://ich.unesco.org/en/RL/petrykivka-decorative-painting-as-a-phenomenon-of-the-ukrainian-ornamental-folk-art-00893",
      },
    ],
    image: petrykivkaPaintingStyleImg,
  },
  {
    id: "mykola-lysenko",
    pillarId: "sounds",
    title: {
      en: "Mykola Lysenko",
      uk: "Микола Лисенко",
    },
    category: "music",
    summary: {
      en: "The founder of the Ukrainian national school of composition, who integrated folklore into classical music.",
      uk: "Засновник української національної композиторської школи, який інтегрував фольклор у класичну музику.",
    },
    details: {
      en: [
        "Author of many operas, choral works, and piano pieces.",
        "Collected and arranged thousands of folk songs.",
      ],
      uk: [
        "Автор багатьох опер, хорових творів та фортепіанних п'єс.",
        "Зібрав і опрацював тисячі народних пісень.",
      ],
    },
    stats: {
      en: [{ label: "Role", value: "Composer / Ethnomusicologist" }],
      uk: [{ label: "Роль", value: "Композитор / Етномузиколог" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Lysenko",
          uk: "Енциклопедія України - Лисенко",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/L/Y/LysenkoMykola.htm",
      },
    ],
    image: mykolaLysenkoImg,
  },
  {
    id: "dnieper-river",
    pillarId: "places",
    title: {
      en: "Dnieper River",
      uk: "Дніпро",
    },
    category: "geography",
    summary: {
      en: "The majestic river that splits Ukraine and has served as a central artery for its history and development.",
      uk: "Велична річка, що розділяє Україну і є центральною артерією її історії та розвитку.",
    },
    details: {
      en: [
        "The largest river in Ukraine.",
        "Historically known as Borysthenes in ancient times.",
      ],
      uk: [
        "Найбільша річка України.",
        "Історично відома як Борисфен у давнину.",
      ],
    },
    stats: {
      en: [{ label: "Significance", value: "National Artery" }],
      uk: [{ label: "Значення", value: "Національна артерія" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Dnieper",
          uk: "Енциклопедія України - Дніпро",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/D/N/DnieperRiver.htm",
      },
    ],
    image: dnieperRiverImg,
  },
  {
    id: "the-steppe",
    pillarId: "places",
    title: {
      en: "The Ukrainian Steppe",
      uk: "Український степ",
    },
    category: "geography",
    summary: {
      en: "Vast, fertile grasslands that have shaped Ukraine's agriculture and history.",
      uk: "Великі родючі трав'янисті рівнини, які сформували сільське господарство та історію України.",
    },
    details: {
      en: [
        "Crucial for Ukraine's status as a 'breadbasket of Europe'.",
        "Home to diverse plant and animal species.",
      ],
      uk: [
        "Вирішальні для статусу України як 'житниці Європи'.",
        "Дім для різноманітних видів рослин і тварин.",
      ],
    },
    stats: {
      en: [{ label: "Type", value: "Grassland" }],
      uk: [{ label: "Тип", value: "Степ" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Geography",
          uk: "Енциклопедія України - Географія",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/G/E/Geography.htm",
      },
    ],
    image: steppeImg,
  },
  {
    id: "kyiv-pechersk-lavra",
    pillarId: "structures",
    title: {
      en: "Kyiv-Pechersk Lavra",
      uk: "Києво-Печерська лавра",
    },
    category: "architecture",
    summary: {
      en: "An ancient monastery founded in the 11th century, famous for its underground caves and golden-domed churches.",
      uk: "Давній монастир, заснований у XI столітті, відомий своїми підземними печерами та золотоверхими церквами.",
    },
    details: {
      en: [
        "A UNESCO World Heritage site.",
        "A major center of Eastern Orthodox Christianity.",
      ],
      uk: [
        "Пам'ятка Світової спадщини ЮНЕСКО.",
        "Важливий центр Східного православного християнства.",
      ],
    },
    stats: {
      en: [{ label: "Status", value: "UNESCO Heritage" }],
      uk: [{ label: "Статус", value: "Спадщина ЮНЕСКО" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Lavra",
          uk: "Енциклопедія України - Лавра",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/Y/Kyiv-PecherskLavraMonastery.htm",
      },
    ],
    image: kyivPecherskLavraImg,
  },
  {
    id: "banosh",
    pillarId: "flavors",
    title: {
      en: "Banosh",
      uk: "Банош",
    },
    category: "cuisine",
    summary: {
      en: "A traditional Hutsul cornmeal porridge cooked in sour cream, often served with brynza and mushrooms.",
      uk: "Традиційна гуцульська кукурудзяна каша, зварена на сметані, часто подається з бринзою та грибами.",
    },
    details: {
      en: [
        "Iconic dish of the Carpathian region.",
        "Cooked over an open fire for a smoky flavor.",
      ],
      uk: [
        "Знакова страва карпатського регіону.",
        "Готується на відкритому вогні для димного аромату.",
      ],
    },
    stats: {
      en: [{ label: "Region", value: "Carpathian Mountains" }],
      uk: [{ label: "Регіон", value: "Карпати" }],
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
    image: banoshImg,
  },
  {
    id: "mavka",
    pillarId: "verses",
    title: {
      en: "Mavka",
      uk: "Мавка",
    },
    category: "literature",
    summary: {
      en: "A mythical forest spirit in Ukrainian folklore, often depicted as a beautiful young girl, influential in art and literature.",
      uk: "Міфічний лісовий дух в українському фольклорі, часто зображуваний як красива молода дівчина, що впливає на мистецтво та літературу.",
    },
    details: {
      en: [
        "Central figure in Lesya Ukrainka's 'Forest Song'.",
        "Represents the connection between nature and humanity.",
      ],
      uk: [
        "Центральна постастать 'Лісової пісні' Лесі Українки.",
        "Уособлює зв'язок між природою та людством.",
      ],
    },
    stats: {
      en: [{ label: "Type", value: "Mythical Creature" }],
      uk: [{ label: "Тип", value: "Міфічна істота" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Folklore",
          uk: "Енциклопедія України - Фольклор",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/F/O/Folklore.htm",
      },
    ],
    image: mavkaImg,
  },
  {
    id: "ivan-mazepa",
    pillarId: "legacy",
    title: {
      en: "Ivan Mazepa",
      uk: "Іван Мазепа",
    },
    category: "history",
    summary: {
      en: "A prominent Hetman of the Zaporozhian Host, known for his efforts to establish Ukrainian autonomy.",
      uk: "Видатний гетьман Війська Запорозького, відомий своїми зусиллями щодо утвердження української автономії.",
    },
    details: {
      en: [
        "A key figure in the history of Ukrainian statehood.",
        "Known for patronizing arts and church architecture.",
      ],
      uk: [
        "Ключова постать в історії української державності.",
        "Відомий меценатством мистецтв та церковної архітектури.",
      ],
    },
    stats: {
      en: [{ label: "Title", value: "Hetman of Ukraine" }],
      uk: [{ label: "Титул", value: "Гетьман України" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Ivan Mazepa",
          uk: "Енциклопедія України - Іван Мазепа",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/M/A/MazepaIvan.htm",
      },
    ],
    image: ivanMazepaImg,
  },
  {
    id: "declaration-of-independence",
    pillarId: "legacy",
    title: {
      en: "Declaration of Independence",
      uk: "Акт проголошення незалежності",
    },
    category: "history",
    summary: {
      en: "The historic act adopted by the Ukrainian parliament in 1991, establishing the modern Ukrainian state.",
      uk: "Історичний акт, прийнятий українським парламентом у 1991 році, що започаткував сучасну українську державу.",
    },
    details: {
      en: [
        "Adopted on August 24, 1991.",
        "A turning point in the nation's history.",
      ],
      uk: [
        "Прийнятий 24 серпня 1991 року.",
        "Поворотний момент в історії нації.",
      ],
    },
    stats: {
      en: [{ label: "Year", value: "1991" }],
      uk: [{ label: "Рік", value: "1991" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Independence",
          uk: "Енциклопедія України - Незалежність",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/I/N/Independence.htm",
      },
    ],
    image: declarationOfIndependenceImg,
  },
  {
    id: "zaporozhian-sich",
    pillarId: "legacy",
    title: {
      en: "Zaporozhian Sich",
      uk: "Запорозька Січ",
    },
    category: "history",
    summary: {
      en: "The administrative and military center of the Zaporozhian Cossacks, a symbol of Ukrainian freedom.",
      uk: "Адміністративний та військовий центр Запорозьких козаків, символ української свободи.",
    },
    details: {
      en: [
        "A unique semi-state formation.",
        "Fostered a strong sense of democratic Cossack tradition.",
      ],
      uk: [
        "Унікальне напівдержавне утворення.",
        "Сприяло формуванню сильного відчуття демократичної козацької традиції.",
      ],
    },
    stats: {
      en: [{ label: "Type", value: "Cossack Center" }],
      uk: [{ label: "Тип", value: "Козацький центр" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Zaporozhian Cossacks",
          uk: "Енциклопедія України - Запорозькі козаки",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/Z/A/ZaporozhianCossacks.htm",
      },
    ],
    image: zaporozhianSichImage,
  },
  {
    id: "bohdan-khmelnytsky",
    pillarId: "legacy",
    title: {
      en: "Bohdan Khmelnytsky",
      uk: "Богдан Хмельницький",
    },
    category: "history",
    summary: {
      en: "The prominent Hetman who led the massive uprising against Polish rule, establishing the Cossack Hetmanate.",
      uk: "Видатний гетьман, який очолив масштабне повстання проти польського правління, заснувавши Козацьке Гетьманство.",
    },
    details: {
      en: [
        "Central figure in 17th-century Ukrainian history.",
        "Known for unifying much of the Ukrainian lands.",
      ],
      uk: [
        "Центральна постать в українській історії XVII століття.",
        "Відомий об'єднанням значної частини українських земель.",
      ],
    },
    stats: {
      en: [{ label: "Role", value: "Hetman" }],
      uk: [{ label: "Роль", value: "Гетьман" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Bohdan Khmelnytsky",
          uk: "Енциклопедія України - Богдан Хмельницький",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/H/KhmelnytskyBohdan.htm",
      },
    ],
    image: bohdanKhmelnytskyImg,
  },
  {
    id: "domovyk",
    pillarId: "verses",
    title: {
      en: "Domovyk",
      uk: "Домовик",
    },
    category: "literature",
    summary: {
      en: "A household spirit in Ukrainian folklore, believed to protect and live within the home.",
      uk: "Домашній дух в українському фольклорі, який, як вважається, захищає дім і живе в ньому.",
    },
    details: {
      en: [
        "A guardian of the family and livestock.",
        "Requires respect and proper rituals to keep him happy.",
      ],
      uk: [
        "Охоронець сім'ї та худоби.",
        "Потребує поваги та належних обрядів для підтримки гарних стосунків.",
      ],
    },
    stats: {
      en: [{ label: "Type", value: "Household Spirit" }],
      uk: [{ label: "Тип", value: "Домашній дух" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Folklore",
          uk: "Енциклопедія України - Фольклор",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/F/O/Folklore.htm",
      },
    ],
    image: domovykImg,
  },
  {
    id: "rusalka",
    pillarId: "verses",
    title: {
      en: "Rusalka",
      uk: "Русалка",
    },
    category: "literature",
    summary: {
      en: "A water spirit in Slavic and Ukrainian mythology, often appearing in folklore and literature.",
      uk: "Водяний дух у слов'янській та українській міфології, що часто з'являється у фольклорі та літературі.",
    },
    details: {
      en: [
        "Can be both benevolent and malevolent.",
        "Deeply embedded in seasonal and ritual themes.",
      ],
      uk: [
        "Може бути як доброзичливою, так і зловтісною.",
        "Глибоко вкорінена в сезонних та ритуальних темах.",
      ],
    },
    stats: {
      en: [{ label: "Type", value: "Water Spirit" }],
      uk: [{ label: "Тип", value: "Водяний дух" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Folklore",
          uk: "Енциклопедія України - Фольклор",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/F/O/Folklore.htm",
      },
    ],
    image: rusalkaImg,
  },
  {
    id: "kamianets-podilskyi-fortress",
    pillarId: "structures",
    title: {
      en: "Kamianets-Podilskyi Fortress",
      uk: "Кам'янець-Подільська фортеця",
    },
    category: "architecture",
    summary: {
      en: "A medieval fortress city perched on a rocky island, renowned for its strategic significance and architectural beauty.",
      uk: "Середньовічне місто-фортеця на скелястому острові, відоме своїм стратегічним значенням та архітектурною красою.",
    },
    details: {
      en: [
        "One of Ukraine's Seven Wonders.",
        "Connected to the mainland by a massive stone bridge.",
      ],
      uk: [
        "Одне з семи чудес України.",
        "З'єднується з материком масивним кам'яним мостом.",
      ],
    },
    stats: {
      en: [{ label: "Status", value: "Seven Wonders of Ukraine" }],
      uk: [{ label: "Статус", value: "Сім чудес України" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Kamianets-Podilskyi",
          uk: "Енциклопедія України - Кам'янець-Подільський",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/K/A/Kamianets-Podilskyi.htm",
      },
    ],
    image: kamianetsPodilskyiFortressImg,
  },
  {
    id: "kosiv-ceramics",
    pillarId: "strokes",
    title: {
      en: "Kosiv Ceramics",
      uk: "Косівська кераміка",
    },
    category: "art",
    summary: {
      en: "A traditional Hutsul pottery style from Kosiv, characterized by intricate floral and geometric patterns in warm earth tones.",
      uk: "Традиційний гуцульський стиль кераміки з Косова, що вирізняється складними квітковими та геометричними візерунками в теплих земляних тонах.",
    },
    details: {
      en: [
        "Recognized as intangible cultural heritage of Ukraine.",
        "Each piece is hand-painted with unique designs.",
      ],
      uk: [
        "Визнана нематеріальною культурною спадщиною України.",
        "Кожен виріб розписується вручну унікальними візерунками.",
      ],
    },
    stats: {
      en: [{ label: "Region", value: "Kosiv" }],
      uk: [{ label: "Регіон", value: "Косів" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Ceramics",
          uk: "Енциклопедія України - Кераміка",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/C/E/Ceramics.htm",
      },
    ],
    image: kosivCeramicsImg,
  },
  {
    id: "ukrainian-woodcarving",
    pillarId: "strokes",
    title: {
      en: "Ukrainian Woodcarving",
      uk: "Українське різьблення по дереву",
    },
    category: "art",
    summary: {
      en: "A centuries-old craft of intricate woodcarving, especially vibrant in the Carpathian region with Hutsul traditions.",
      uk: "Багатовікове ремесло художнього різьблення по дереву, особливо поширене в Карпатському регіоні в гуцульських традиціях.",
    },
    details: {
      en: [
        "Used to decorate household items, furniture, and architectural elements.",
        "Passed down through generations of master carvers.",
      ],
      uk: [
        "Використовується для оздоблення побутових речей, меблів та архітектурних елементів.",
        "Передається з покоління в покоління майстрами-різьбярами.",
      ],
    },
    stats: {
      en: [{ label: "Craft", value: "Woodcarving" }],
      uk: [{ label: "Ремесло", value: "Різьблення" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Woodcarving",
          uk: "Енциклопедія України - Різьблення",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/W/O/Woodcarving.htm",
      },
    ],
    image: ukrainianWoodcarvingImg,
  },
  {
    id: "syrnyky",
    pillarId: "flavors",
    title: {
      en: "Syrnyky",
      uk: "Сирники",
    },
    category: "cuisine",
    summary: {
      en: "Traditional Ukrainian cottage cheese pancakes, lightly fried until golden and served with sour cream or jam.",
      uk: "Традиційні українські оладки з сиру, обсмажені до золотистого кольору та подані зі сметаною або варенням.",
    },
    details: {
      en: [
        "A beloved breakfast dish across Ukraine.",
        "Soft and fluffy on the inside, crispy on the outside.",
      ],
      uk: [
        "Улюблена страва на сніданок по всій Україні.",
        "М'які та пухкі всередині, хрусткі зовні.",
      ],
    },
    stats: {
      en: [{ label: "Type", value: "Breakfast Dish" }],
      uk: [{ label: "Тип", value: "Сніданок" }],
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
    image: syrnykyImg,
  },
  {
    id: "orange-revolution",
    pillarId: "legacy",
    title: {
      en: "Orange Revolution",
      uk: "Помаранчева революція",
    },
    category: "history",
    summary: {
      en: "A peaceful mass protest movement in 2004–2005 that defended democracy and Ukraine's path toward European integration.",
      uk: "Мирний масовий протестний рух у 2004–2005 роках, що захистив демократію та шлях України до європейської інтеграції.",
    },
    details: {
      en: [
        "Symbolized by the color orange.",
        "Led to a rerun of the presidential election.",
      ],
      uk: [
        "Символізувалася помаранчевим кольором.",
        "Призвела до переголосування президентських виборів.",
      ],
    },
    stats: {
      en: [{ label: "Year", value: "2004–2005" }],
      uk: [{ label: "Рік", value: "2004–2005" }],
    },
    sources: [
      {
        title: {
          en: "Encyclopedia of Ukraine - Revolution",
          uk: "Енциклопедія України - Революція",
        },
        url: "http://www.encyclopediaofukraine.com/display.asp?linkpath=pages/O/R/OrangeRevolution.htm",
      },
    ],
    image: orangeRevolutionImg,
  },
];

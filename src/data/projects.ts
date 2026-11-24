import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

const all = import.meta.glob<{ default: ImageMetadata }>('../assets/foto/*/*.jpg', { eager: true });

function photos(folder: string): ImageMetadata[] {
  return Object.keys(all)
    .filter((k) => k.includes(`/foto/${folder}/`))
    .sort()
    .map((k) => all[k].default);
}

export type Category = 'foto' | 'video' | 'dizajn' | 'eventy';
type T = { sk: string; en: string };

interface ProjectSource {
  slug: string;
  folder: string;
  coverIndex?: number;
  featured?: boolean;
  categories: Category[];
  year: string;
  title: T;
  short: T;
  client: T;
  service: T;
  role: T;
  tags: T[];
  brief: T;
  solution: T;
  result: T;
  alt: T;
  quote?: { text: T; author: string };
}

export interface Project {
  slug: string;
  featured: boolean;
  categories: Category[];
  year: string;
  title: string;
  short: string;
  client: string;
  service: string;
  role: string;
  tags: string[];
  brief: string;
  solution: string;
  result: string;
  alt: string;
  quote?: { text: string; author: string };
  cover: ImageMetadata;
  gallery: ImageMetadata[];
}

export const categories: (Category | 'all')[] = ['all', 'foto', 'video', 'dizajn', 'eventy'];

const t = (sk: string, en: string): T => ({ sk, en });
const YEAR = '[Rok / Year]';

const sources: ProjectSource[] = [
  {
    slug: 'popradska-produktove-foto', folder: 'popradska', featured: true, categories: ['foto'], year: YEAR,
    title: t('Popradská: chuť, ktorá chce byť videná', 'Popradská: flavour that wants to be seen'),
    short: t('Popradská – produktové fotky', 'Popradská – product photography'),
    client: t('Popradská', 'Popradská'),
    service: t('Produktová fotografia', 'Product photography'),
    role: t('[Koncept, foto, postprodukcia]', '[Concept, photography, post-production]'),
    tags: [t('Produktová fotografia', 'Product photography')],
    brief: t('[Čo klient potreboval: napr. produktové fotky čajov a kávy pre sociálne siete a e-shop, ktoré budú farebné, hravé a v jednotnom štýle.]', '[What the client needed: e.g. product shots of teas and coffee for social media and the online shop – colourful, playful and consistent.]'),
    solution: t('[Ako som to urobila: koncept, farebné pozadia, rekvizity, svetlo, počet záberov a formáty pre web a siete.]', '[How I approached it: concept, colour backdrops, props, lighting, number of shots and formats for web and social.]'),
    result: t('[Výsledok: napr. počet hotových fotiek, kde sa použili, reakcie na sociálnych sieťach.]', '[Result: e.g. number of final images, where they were used, social media response.]'),
    alt: t('Produktová fotografia Popradská', 'Popradská product photography'),
  },
  {
    slug: 'koncertna-fotografia', folder: 'koncerty', featured: true, categories: ['foto', 'eventy'], year: YEAR,
    title: t('Koncerty: energia, ktorú počuť aj na fotke', 'Concerts: energy you can hear in a photo'),
    short: t('Koncerty – kapely, kluby a festivaly', 'Concerts – bands, clubs and festivals'),
    client: t('Kapely a kluby, The Youniverse', 'Bands and clubs, The Youniverse'),
    service: t('Koncertná fotografia', 'Concert photography'),
    role: t('Fotografka', 'Photographer'),
    tags: [t('Koncertné foto', 'Concert photography')],
    brief: t('Kapely a kluby potrebujú fotky, ktoré prenesú atmosféru koncertu na sociálne siete, plagáty aj do tlače.', 'Bands and venues need photos that carry the atmosphere of a gig onto social media, posters and print.'),
    solution: t('[Doplniť: s akými kapelami a v akých kluboch som fotila, ako pracujem so svetlom a pohybom na pódiu.]', '[Add: which bands and venues I shot, how I work with stage light and movement.]'),
    result: t('[Výsledok: napr. fotky použité na sociálnych sieťach kapiel, v médiách alebo na plagátoch.]', '[Result: e.g. photos used on the bands’ social media, in press or on posters.]'),
    alt: t('Koncertná fotografia', 'Concert photography'),
  },
  {
    slug: 'zakulisie-natacania-reklamy', folder: 'zakulisie-reklamy', featured: true, categories: ['foto', 'video'], year: YEAR,
    title: t('Zákulisie natáčania reklamy', 'Behind the scenes of an ad shoot'),
    short: t('Zákulisie natáčania reklamy', 'Behind the scenes of an ad shoot'),
    client: t('[Klient / agentúra]', '[Client / agency]'),
    service: t('BTS fotografia', 'BTS photography'),
    role: t('Fotografka na pľaci', 'On-set photographer'),
    tags: [t('BTS foto', 'BTS photo'), t('Video', 'Video')],
    brief: t('[Čo bolo zadaním: napr. zachytiť zákulisie natáčania reklamy pre PR a sociálne siete značky.]', '[The brief: e.g. capture behind the scenes of a commercial shoot for the brand’s PR and social media.]'),
    solution: t('[Ako som pracovala: nenápadne počas natáčania, štáb, herci, technika, momenty medzi zábermi.]', '[How I worked: unobtrusively during the shoot – crew, cast, kit and the moments between takes.]'),
    result: t('[Výsledok: kde sa fotky použili.]', '[Result: where the photos were used.]'),
    alt: t('Zákulisie natáčania reklamy', 'Behind the scenes of an ad shoot'),
  },
  {
    slug: 'popradska-grafika', folder: 'popradska-grafika', coverIndex: 1, featured: true, categories: ['dizajn'], year: YEAR,
    title: t('Popradská: grafika na sociálne siete', 'Popradská: social media graphics'),
    short: t('Popradská – grafika na sociálne siete', 'Popradská – social media graphics'),
    client: t('Popradská', 'Popradská'),
    service: t('Grafický dizajn', 'Graphic design'),
    role: t('[Grafika, foto, copy]', '[Design, photography, copy]'),
    tags: [t('Grafický dizajn', 'Graphic design'), t('Sociálne siete', 'Social media')],
    brief: t('[Zadanie: príspevky a súťaže na sociálne siete Popradskej.]', '[Brief: posts and giveaways for Popradská’s social media.]'),
    solution: t('[Riešenie: spojenie produktovej fotky s výraznou typografiou a hravými nápadmi.]', '[Approach: product photography combined with bold typography and playful ideas.]'),
    result: t('[Výsledok: dosah, interakcie, počet príspevkov.]', '[Result: reach, engagement, number of posts.]'),
    alt: t('Grafika na sociálne siete pre Popradskú', 'Social media graphics for Popradská'),
  },
  {
    slug: 'eventy-a-party', folder: 'eventy', categories: ['foto', 'eventy'], year: YEAR,
    title: t('Eventy a párty', 'Events and parties'),
    short: t('Reportáže z podujatí a párty', 'Event and party coverage'),
    client: t('[Organizátori podujatí]', '[Event organisers]'),
    service: t('Eventová fotografia', 'Event photography'),
    role: t('Fotografka', 'Photographer'),
    tags: [t('Eventy', 'Events')],
    brief: t('[Zadanie: zachytiť atmosféru podujatia pre organizátorov a sociálne siete.]', '[Brief: capture the atmosphere of the event for the organisers and social media.]'),
    solution: t('[Riešenie: reportáž z davu, detaily, ľudia a nálada večera.]', '[Approach: reportage from the crowd – details, people and the mood of the night.]'),
    result: t('[Výsledok.]', '[Result.]'),
    alt: t('Fotografia z eventu', 'Event photography'),
  },
  {
    slug: 'portrety', folder: 'portrety', categories: ['foto'], year: YEAR,
    title: t('Portréty s charakterom', 'Portraits with character'),
    short: t('Portréty s charakterom', 'Portraits with character'),
    client: t('[Hudobníci, umelci, súkromní klienti]', '[Musicians, artists, private clients]'),
    service: t('Portrétna fotografia', 'Portrait photography'),
    role: t('Koncept, foto, postprodukcia', 'Concept, photography, post-production'),
    tags: [t('Portréty', 'Portraits')],
    brief: t('[Zadanie: portréty pre umelcov, hudobníkov a osobné značky.]', '[Brief: portraits for artists, musicians and personal brands.]'),
    solution: t('[Riešenie: výrazné svetlo, lokácie a nálada, ktorá sedí k osobnosti.]', '[Approach: bold light, locations and a mood that fits the personality.]'),
    result: t('[Výsledok.]', '[Result.]'),
    alt: t('Portrétna fotografia', 'Portrait photography'),
  },
  {
    slug: 'vzdusna-akrobacia', folder: 'vzdusna-akrobacia', categories: ['foto'], year: YEAR,
    title: t('Vzdušná akrobacia v prírode', 'Aerial acrobatics outdoors'),
    short: t('Vzdušná akrobacia – tematické portréty', 'Aerial acrobatics – themed portraits'),
    client: t('[Akrobatky / štúdio]', '[Aerialists / studio]'),
    service: t('Tematické portréty', 'Themed portraits'),
    role: t('Koncept, foto, postprodukcia', 'Concept, photography, post-production'),
    tags: [t('Tematické foto', 'Themed photography')],
    brief: t('[Zadanie: fotky akrobatiek na šáloch a kruhu v prírode.]', '[Brief: photos of aerialists on silks and hoop outdoors.]'),
    solution: t('[Riešenie: jarné magnólie, jesenný park a jazero ako kulisa pre pohyb.]', '[Approach: spring magnolias, an autumn park and a lake as the backdrop for movement.]'),
    result: t('[Výsledok.]', '[Result.]'),
    alt: t('Vzdušná akrobacia na šáloch a kruhu', 'Aerial acrobatics on silks and hoop'),
  },
];

function localize(s: ProjectSource, lang: Lang): Project {
  const gallery = photos(s.folder);
  return {
    slug: s.slug,
    featured: !!s.featured,
    categories: s.categories,
    year: s.year,
    title: s.title[lang], short: s.short[lang], client: s.client[lang], service: s.service[lang], role: s.role[lang],
    tags: s.tags.map((x) => x[lang]),
    brief: s.brief[lang], solution: s.solution[lang], result: s.result[lang], alt: s.alt[lang],
    quote: s.quote && { text: s.quote.text[lang], author: s.quote.author },
    cover: gallery[s.coverIndex ?? 0],
    gallery,
  };
}

export const getProjects = (lang: Lang) => sources.map((s) => localize(s, lang));
export const getFeatured = (lang: Lang) => getProjects(lang).filter((p) => p.featured);

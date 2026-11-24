import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('../assets/foto/*/*.jpg', { eager: true });

function photos(folder: string): ImageMetadata[] {
  return Object.keys(all)
    .filter((k) => k.includes(`/foto/${folder}/`))
    .sort()
    .map((k) => all[k].default);
}

export type Category = 'foto' | 'video' | 'dizajn' | 'eventy';

export interface Project {
  slug: string;
  title: string;
  short: string; // krátky názov na karte
  client: string;
  service: string;
  role: string;
  year: string;
  categories: Category[];
  tags: string[];
  brief: string;
  solution: string;
  result: string;
  quote?: { text: string; author: string };
  alt: string; // spoločný popis fotiek pre alt text
  cover: ImageMetadata;
  gallery: ImageMetadata[];
  featured?: boolean;
}

function make(p: Omit<Project, 'cover' | 'gallery'> & { folder: string; coverIndex?: number }): Project {
  const g = photos(p.folder);
  const { folder, coverIndex = 0, ...rest } = p;
  return { ...rest, cover: g[coverIndex], gallery: g };
}

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Všetko' },
  { id: 'foto', label: 'Fotografia' },
  { id: 'video', label: 'Video & Reels' },
  { id: 'dizajn', label: 'Grafický dizajn' },
  { id: 'eventy', label: 'Koncerty & eventy' },
];

export const projects: Project[] = [
  make({
    slug: 'popradska-produktove-foto',
    title: 'Popradská: chuť, ktorá chce byť videná',
    short: 'Popradská – produktové fotky',
    client: 'Popradská',
    service: 'Produktová fotografia',
    role: '[Koncept, foto, postprodukcia]',
    year: '[Rok]',
    categories: ['foto'],
    tags: ['Produktová fotografia'],
    brief: '[Čo klient potreboval: napr. produktové fotky čajov a kávy pre sociálne siete a e-shop, ktoré budú farebné, hravé a v jednotnom štýle.]',
    solution: '[Ako som to urobila: koncept, farebné pozadia, rekvizity, svetlo, počet záberov a formáty pre web a siete.]',
    result: '[Výsledok: napr. počet hotových fotiek, kde sa použili, reakcie na sociálnych sieťach.]',
    alt: 'Produktová fotografia Popradská',
    folder: 'popradska',
    featured: true,
  }),
  make({
    slug: 'koncertna-fotografia',
    title: 'Koncerty: energia, ktorú počuť aj na fotke',
    short: 'Koncerty – kapely, kluby a festivaly',
    client: 'Kapely a kluby, The Youniverse',
    service: 'Koncertná fotografia',
    role: 'Fotografka',
    year: '[Rok]',
    categories: ['foto', 'eventy'],
    tags: ['Koncertné foto'],
    brief: 'Kapely a kluby potrebujú fotky, ktoré prenesú atmosféru koncertu na sociálne siete, plagáty aj do tlače.',
    solution: '[Doplniť: s akými kapelami a v akých kluboch som fotila, ako pracujem so svetlom a pohybom na pódiu.]',
    result: '[Výsledok: napr. fotky použité na sociálnych sieťach kapiel, v médiách alebo na plagátoch.]',
    alt: 'Koncertná fotografia',
    folder: 'koncerty',
    featured: true,
  }),
  make({
    slug: 'zakulisie-natacania-reklamy',
    title: 'Zákulisie natáčania reklamy',
    short: 'Zákulisie natáčania reklamy',
    client: '[Klient / agentúra]',
    service: 'BTS fotografia',
    role: 'Fotografka na pľaci',
    year: '[Rok]',
    categories: ['foto', 'video'],
    tags: ['BTS foto', 'Video'],
    brief: '[Čo bolo zadaním: napr. zachytiť zákulisie natáčania reklamy pre PR a sociálne siete značky.]',
    solution: '[Ako som pracovala: nenápadne počas natáčania, štáb, herci, technika, momenty medzi zábermi.]',
    result: '[Výsledok: kde sa fotky použili.]',
    alt: 'Zákulisie natáčania reklamy',
    folder: 'zakulisie-reklamy',
    featured: true,
  }),
  make({
    slug: 'popradska-grafika',
    title: 'Popradská: grafika na sociálne siete',
    short: 'Popradská – grafika na sociálne siete',
    client: 'Popradská',
    service: 'Grafický dizajn',
    role: '[Grafika, foto, copy]',
    year: '[Rok]',
    categories: ['dizajn'],
    tags: ['Grafický dizajn', 'Sociálne siete'],
    brief: '[Zadanie: príspevky a súťaže na sociálne siete Popradskej.]',
    solution: '[Riešenie: spojenie produktovej fotky s výraznou typografiou a hravými nápadmi.]',
    result: '[Výsledok: dosah, interakcie, počet príspevkov.]',
    alt: 'Grafika na sociálne siete pre Popradskú',
    folder: 'popradska-grafika',
    coverIndex: 1,
    featured: true,
  }),
  make({
    slug: 'eventy-a-party',
    title: 'Eventy a párty',
    short: 'Reportáže z podujatí a párty',
    client: '[Organizátori podujatí]',
    service: 'Eventová fotografia',
    role: 'Fotografka',
    year: '[Rok]',
    categories: ['foto', 'eventy'],
    tags: ['Eventy'],
    brief: '[Zadanie: zachytiť atmosféru podujatia pre organizátorov a sociálne siete.]',
    solution: '[Riešenie: reportáž z davu, detaily, ľudia a nálada večera.]',
    result: '[Výsledok.]',
    alt: 'Fotografia z eventu',
    folder: 'eventy',
  }),
  make({
    slug: 'portrety',
    title: 'Portréty s charakterom',
    short: 'Portréty s charakterom',
    client: '[Hudobníci, umelci, súkromní klienti]',
    service: 'Portrétna fotografia',
    role: 'Koncept, foto, postprodukcia',
    year: '[Rok]',
    categories: ['foto'],
    tags: ['Portréty'],
    brief: '[Zadanie: portréty pre umelcov, hudobníkov a osobné značky.]',
    solution: '[Riešenie: výrazné svetlo, lokácie a nálada, ktorá sedí k osobnosti.]',
    result: '[Výsledok.]',
    alt: 'Portrétna fotografia',
    folder: 'portrety',
  }),
  make({
    slug: 'vzdusna-akrobacia',
    title: 'Vzdušná akrobacia v prírode',
    short: 'Vzdušná akrobacia – tematické portréty',
    client: '[Akrobatky / štúdio]',
    service: 'Tematické portréty',
    role: 'Koncept, foto, postprodukcia',
    year: '[Rok]',
    categories: ['foto'],
    tags: ['Tematické foto'],
    brief: '[Zadanie: fotky akrobatiek na šáloch a kruhu v prírode.]',
    solution: '[Riešenie: jarné magnólie, jesenný park a jazero ako kulisa pre pohyb.]',
    result: '[Výsledok.]',
    alt: 'Vzdušná akrobacia na šáloch a kruhu',
    folder: 'vzdusna-akrobacia',
  }),
];

export const featured = projects.filter((p) => p.featured);

# simkovabarb.com

Portfólio Barbary Šimkovej – fotografia, video & reels a grafický dizajn pre značky.
Statický web postavený na [Astro](https://astro.build).

## Spustenie

```bash
npm install
npm run dev      # vývoj na http://localhost:4321
npm run build    # hotový web do priečinka dist/
npm run preview  # náhľad hotového webu
```

## Kde čo upraviť

| Čo | Kde |
| --- | --- |
| E-mail, telefón, sociálne siete, CV | `src/data/site.ts` |
| Projekty (texty case studies v SK aj EN, poradie, ktoré sú na úvode) | `src/data/projects.ts` |
| Texty stránok v slovenčine a angličtine | `src/i18n/ui.ts` (služby a FAQ v `src/views/Services.astro`) |
| Fotky projektov | `src/assets/foto/<projekt>/01.jpg, 02.jpg…` (prvá je titulná) |
| Reels (YouTube ID) | `src/data/site.ts` → `reels` |
| Farby a písmo | `src/styles/global.css` (premenné v `:root`) |
| Rozloženie stránok (spoločné pre oba jazyky) | `src/views/` |
| Adresy stránok | `src/pages/` (SK v koreni, EN v `src/pages/en/`) |

Novú fotku stačí pridať do priečinka projektu, Astro ju pri builde zmenší a prevedie do WebP.

## Jazyky, galéria a animácie

- Slovenčina je na `/`, angličtina na `/en/`. Prepínač SK / EN v hlavičke vedie na tú istú stránku v druhom jazyku.
- Fotky v galérii projektu sa po kliknutí otvoria zväčšené (šípky, Esc, swipe na mobile). Stačí odkaz s atribútom `data-lightbox`.
- Animácie sú v `src/scripts/animations.ts` (GSAP + ScrollTrigger). Prvok sa pri scrollovaní objaví, ak má atribút `data-reveal`. Ak má návštevník v systéme zapnuté obmedzenie pohybu, animácie sa vypnú.

Texty v `[hranatých zátvorkách]` a hodnoty `TODO` treba doplniť.

## Formulár

Formulár na stránke Kontakt je pripravený pre **Netlify Forms** (funguje bez ďalšieho nastavenia po nasadení na Netlify).
Po odoslaní presmeruje na `/dakujem` alebo `/en/thank-you`. Pri inom hostingu zmeňte `action` formulára v `src/views/Contact.astro`, napríklad na adresu z Formspree.

## Nasadenie

Hocijaký statický hosting (Netlify, Cloudflare Pages, Vercel, GitHub Pages): build príkaz `npm run build`, výstupný priečinok `dist`.

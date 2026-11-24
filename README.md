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
| E-mail, telefón, sociálne siete, CV, adresa formulára | `src/data/site.ts` |
| Projekty (texty case studies, poradie, ktoré sú na úvode) | `src/data/projects.ts` |
| Fotky projektov | `src/assets/foto/<projekt>/01.jpg, 02.jpg…` (prvá je titulná) |
| Reels (YouTube ID) | `src/data/site.ts` → `reels` |
| Farby a písmo | `src/styles/global.css` (premenné v `:root`) |
| Stránky | `src/pages/` |

Novú fotku stačí pridať do priečinka projektu, Astro ju pri builde zmenší a prevedie do WebP.

Texty v `[hranatých zátvorkách]` a hodnoty `TODO` treba doplniť.

## Formulár

Formulár na stránke Kontakt je pripravený pre **Netlify Forms** (funguje bez ďalšieho nastavenia po nasadení na Netlify).
Pri inom hostingu nastavte `formAction` v `src/data/site.ts`, napríklad na adresu z Formspree.

## Nasadenie

Hocijaký statický hosting (Netlify, Cloudflare Pages, Vercel, GitHub Pages): build príkaz `npm run build`, výstupný priečinok `dist`.

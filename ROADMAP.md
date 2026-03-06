# QM Fest — Ruta de producte / Roadmap

Idees prioritzades: pàgines, animacions, contingut, pagaments i més.

---

## 1. Pàgines noves

| Pàgina                        | Descripció                                                                                                                                | Prioritat |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| **Contacte**                  | Formulari (nom, email, missatge) + email d’contacte + xarxes socials. Opcional: mapa o enllaç a ubicació.                                 | Alta      |
| **FAQ**                       | Preguntes freqüents: entrades, accés, horaris, què portar, política de devolucions, accessibilitat. Contingut en JSON o MD per idioma.    | Alta      |
| **Programa / Horari**         | Programació per dies i escenaris (taula o llistat). Dades des de JSON o MD.                                                               | Alta      |
| **Lineup ampliat**            | Ara és placeholder. Afegir llistat d’artistes amb foto, nom, bio curta, enllaç (Spotify/IG). Dades a `content/lineup/[locale].json` o MD. | Alta      |
| **Privacitat / Legal**        | Avís legal, política de privacitat, cookies. Pàgines estàtiques (MD o component amb text).                                                | Mitjana   |
| **Accessibilitat**            | Com arribar-hi, entrades adaptades, WCs, punts de suport. Una pàgina o secció dins Location.                                              | Mitjana   |
| **Col·laboradors / Sponsors** | Logos i enllaços. Contingut a JSON.                                                                                                       | Baixa     |
| **Premsa**                    | Kit de premsa, contacte premsa, logos.                                                                                                    | Baixa     |
| **Voluntariat**               | Crida a voluntaris + formulari o enllaç.                                                                                                  | Baixa     |

---

## 2. Animacions

| Tipus                       | Descripció                                                                                                | Com                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Hero**                    | Ja tens fade-in escalonat. Opcional: parallax suau de la imatge de fons o gradient animat.                | CSS / Framer Motion                                 |
| **Sections en scroll**      | Quan una secció entra en viewport: fade-in + lleu translateY. Aplicar a About, Lineup, Location, Tickets. | Intersection Observer + CSS classes o Framer Motion |
| **Cards (tickets, valors)** | Hover: lleu scale, ombra, border color. Transicions suaus.                                                | Tailwind `transition`, `hover:scale-[1.02]`         |
| **Botons**                  | Hover/active més clar; opcional: micro-animació (icona que es desplaça).                                  | Tailwind o Framer Motion                            |
| **Navegació**               | Menú mòbil: animació d’obertura/tancament (opacity + translate). Ja en tens part.                         | Revisar durades i easing                            |
| **Page transitions**        | Canvi de pàgina amb fade breu (opcional, més complex en App Router).                                      | view transitions o Framer Motion layout             |

**Recomanació:** Afegir **Framer Motion** per a scroll-based i hover; la resta amb Tailwind. Mantenir animacions lleus per no sobrecarregar.

---

## 3. Contingut

| Àrea         | Què afegir                                                                                                                        |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **Hero**     | Possibilitat d’imatge de fons editable (URL a `content/site/[locale].json` o camp `hero.image`).                                  |
| **Lineup**   | Fitxer `content/lineup/artists.json` (o per locale): nom, slug, foto, bio, link. Pàgina lineup que llegeix i renderitza targetes. |
| **Programa** | `content/schedule.json`: dia, hora, escenari, artista. Taula o llistat a pàgina Programa.                                         |
| **Location** | Mapa (iframe Google Maps o link), com arribar (transports, cotxe, bicis), parkings, entrades.                                     |
| **Tickets**  | Descripcions per tipus (què inclou Early Bird / Regular / VIP), limit d’entrades si n’hi ha.                                      |
| **About**    | Ja tens MD; opcional: fotos de l’equip, edicions anteriors, números (assistents, artistes).                                       |
| **Footer**   | Newsletter (email), xarxes, enllaços legals (Privacitat, Cookies), contacte.                                                      |

---

## 4. Plataforma de pagament

| Pas                     | Què fer                                                                                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Elecció de producte** | Stripe (recomanat): compte Stripe, productes/Preços per cada tipus d’entrada (Early Bird, Regular, VIP).                                                                                                         |
| **Checkout**            | Opció A: **Stripe Checkout** (hosted). Botó “Comprar” → redirect a Stripe → pagament → redirect tornada + thank-you page. Opció B: **Stripe Elements** al teu lloc (formulari de targeta a la teva pàgina).      |
| **Flux**                | 1) Usuari tria tipus d’entrada i quantitat → 2) Pàgina de checkout (o Stripe Checkout) → 3) Pagament → 4) Pàgina “Gràcies” + email de confirmació (Stripe envía receipt; opcional: email propi amb entrada PDF). |
| **Backend**             | API routes (Next.js): crear Session de Stripe Checkout o PaymentIntent. Variables d’entorn: `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.                                 |
| **Legal**               | Condicions de venda, política de devolucions, dades que guardes (email, nom) i link a privacitat.                                                                                                                |

**Dependències:** `stripe` (server), opcional `@stripe/stripe-js` + `@stripe/react-stripe-js` si fas checkout in-house.

---

## 5. SEO i metadades

- **Per pàgina:** `metadata` (title, description) per ruta i per locale (e.g. `/[locale]/about` → títol “Sobre el festival | QM Fest”).
- **Open Graph / Twitter:** Imatge compartida (OG image) per defecte i opcional per pàgina.
- **Canonical i hreflang:** URLs canòniques i `hreflang` per en/es/ca per evitar duplicats.
- **Sitemap:** `app/sitemap.js` generat dinàmicament (home, about, lineup, tickets, contact, etc.).
- **robots.txt:** Permetre indexació; opcional: excloure `/api` o rutes privades.

---

## 6. UX i tècnic

- **Newsletter:** Camp d’email al footer; enviar a Mailchimp, Sendinblue, Resend, etc. via API route.
- **Cookies / GDPR:** Banner de consentiment (necessari, analytics, marketing) + pàgina de cookies; guardar preferències a `localStorage`.
- **404 i errors:** Pàgina 404 amigable amb enllaços a Inici i idioma.
- **Accessibilitat:** Revisar contrast, focus visible, `aria-labels` on cal, headings jeràrquics.
- **Performance:** Imatges amb `next/image`, lazy load; fonts ja optimitzades amb `next/font`.
- **Analytics:** Google Analytics 4 o Plausible; només activar si l’usuari accepta cookies de analytics.

---

## 7. Ordre suggerit d’implementació

1. **Fase 1 — Contingut i pàgines bàsiques**  
   Contacte, FAQ, Programa (dades en JSON), Lineup amb llistat d’artistes (JSON). Footer amb links i newsletter.

2. **Fase 2 — Animacions i polish**  
   Animacions en scroll (sections), millores hover a cards i botons, revisió mòbil.

3. **Fase 3 — Pagaments**  
   Stripe (Checkout o Elements), pàgina de confirmació, emails, condicions de venda i privacitat.

4. **Fase 4 — Legal i SEO**  
   Privacitat, cookies, SEO per pàgina, sitemap, analytics amb consentiment.

Si em dius per quina fase vols començar (pàgines, animacions, pagaments o contingut), puc proposar passos concrets i fitxers a crear al projecte.

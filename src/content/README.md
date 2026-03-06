# Contingut del lloc (sense CMS)

El contingut es gestiona amb **JSON** i opcionalment **Markdown**.

## JSON — `site/`

Fitxers per idioma: `en.json`, `es.json`, `ca.json`.

Inclou: navegació, hero, about, lineup, location, tickets.  
S’utilitzen per a les traduccions i per a tot el contingut estructurat.  
Si modifiqueu aquests fitxers, el canvi es reflecteix a tot el lloc (després de reiniciar el servidor o fer build).

## Markdown — `pages/`

Per pàgines amb text llarg podeu afegir `.md` amb **frontmatter** (YAML).

- **About**: `pages/about/en.md`, `pages/about/es.md`, `pages/about/ca.md`  
  Si existeix el fitxer per a l’idioma actual, la pàgina About es renderitza des del Markdown (títol, valors i cos en Markdown).  
  Si no existeix, es fa servir el contingut del JSON (`site/[locale].json`).

Estructura d’un `.md`:

```markdown
---
title: Títol de la pàgina
valuesTitle: Títol de la secció valors
values:
  - title: Valor 1
    description: Descripció
  - title: Valor 2
    description: Descripció
---

Cos del text en **Markdown**. Es renderitza amb react-markdown.
```

Per afegir més pàgines en Markdown: crear `pages/[nom]/[locale].md` i cridar `getPageMarkdown('nom', locale)` des del component de la pàgina.

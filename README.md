# Ondo Asesores — landing one-page

Sitio estático (HTML + CSS + JS, sin librerías) listo para GitHub Pages.

## Publicación

Sitio publicado con GitHub Pages: https://alexiscrew.github.io/ondo-asesores/
(rama `main`, carpeta `/`). Las rutas internas son relativas.

## Estructura

- `index.html` — las 8 secciones (cabecera, portada, para quién, servicios, cómo trabajamos, precios, contacto, pie).
- `css/styles.css`, `js/main.js` (menú móvil + validación del formulario; el formulario no envía datos, muestra confirmación).
- `img/` — fotos en WebP con `srcset`; `og-image.webp` (1200×630) y `mapa-800.webp` generadas con Pillow.
- `fonts/` — DM Serif Display y DM Sans en WOFF2 autoalojadas (subset latin).
- `favicon.svg`, `apple-touch-icon.png`, `robots.txt`, `sitemap.xml`, `llms.txt`.
- `docs/` — `HUMANIZADO.md` y capturas de QuillBot y del detector (evidencia del humanizado).
- `PROMPT-MAESTRO.md` (estructura de prompts para generar la web) y `NOTA-ENTREGA.md`.

## Notas

- Teléfono, correo, dirección y horarios son ficticios (prueba técnica).
- Fotos de Unsplash: autor y enlace en `CREDITOS-IMAGENES.md`.

# Prompt maestro — landing one-page para un pequeño negocio local

Estructura de prompt para que una IA de programación (en nuestro caso, Claude Code con
Claude Opus 5.5) genere desde cero una landing como la de Ondo Asesores. Los bloques
entre `[corchetes]` se rellenan con los datos de cada cliente; abajo, en **Ejemplo**,
están los valores usados en esta web.

Se usa en 4 fases: **1 · construir**, **2 · verificar**, **3 · iterar** y **4 · entregar**.
Un único prompt largo funciona peor que este orden: primero la base completa,
después la verificación con evidencias y, por último, los ajustes pequeños de uno en uno.

---

## FASE 1 · Construir (prompt principal)

```text
ROL
Actúa como diseñador UI y desarrollador frontend senior. Construye una landing
one-page para [NEGOCIO], [SECTOR] en [BARRIO, CIUDAD]. Trabaja solo dentro de esta
carpeta. No hagas git init ni publiques nada.

REGLAS DURAS
- HTML + CSS + JS puros. Sin frameworks, sin librerías, sin CDN, sin plantillas
  ni constructores. Archivos: index.html, css/styles.css, js/main.js.
- JS mínimo: solo el menú móvil y la validación del formulario.
- Mobile-first, con cortes a 768 px y 1024 px. Contenedor de [1120] px como máximo
  y 20 px de margen lateral.
- Idioma: [español de España], tratamiento de [tú], frases cortas, sin jerga. Si
  aparece un tecnicismo, se explica en la misma frase.
- Usa LITERALMENTE los textos del brief que te paso abajo. Los textos que falten
  los redactas tú siguiendo el tono, y los marcas en un archivo aparte para
  humanizarlos después.

OBJETIVO Y CTA
Una única acción: «[CTA]». El botón principal es el único elemento con el color
de acento.

BRANDING
- Fondo [#F7F5F0] · texto [#14213D] · principal [#2B4C7E] · acento SOLO en el
  botón principal [#F2B134] con texto [#14213D].
- Títulos: [DM Serif Display]. Texto: [DM Sans]. Fuentes autoalojadas en WOFF2,
  precargadas, con font-display: swap. Tipografía fluida con clamp().
- Logotipo: el nombre en texto con la fuente de títulos.
- Sensación: [orden, confianza, cercanía]. Mucho aire, jerarquía tipográfica
  fuerte, esquinas de 16-24 px, sombras muy suaves. Las secciones contiguas
  nunca comparten fondo.

SECCIONES (en este orden; un solo h1)
1. Cabecera fija: logotipo · [menú] · botón CTA. En móvil, hamburguesa de 3 barras
   pegada a la derecha que se convierte en X; el panel se despliega con una
   cortinilla y los enlaces aparecen escalonados. aria-expanded, aria-controls,
   cierre con Esc y foco gestionado; con el menú cerrado, sus enlaces no reciben foco.
2. Portada: h1 [TÍTULO], subtítulo [SUBTÍTULO], botón CTA + enlace secundario
   «[Ver precios →]», microcopy debajo. Foto a la derecha en escritorio y apilada
   en móvil, con 2 etiquetas flotantes de datos clave. Fondo con degradado suave
   y esquinas inferiores redondeadas para separarla de lo siguiente.
3. Cinta decorativa (aria-hidden) entre la portada y la sección 2: palabras clave
   en mayúsculas en bucle infinito sin huecos a cualquier ancho (cada mitad de la
   pista debe medir más que la pantalla más ancha), con pausa al pasar el ratón.
4. Para quién es: etiqueta pequeña sobre el h2 [PREGUNTA], primer párrafo con
   frase de entidad citable («[NEGOCIO] es [QUÉ ES] en [DÓNDE]») + foto.
5. Servicios: [3] tarjetas con icono SVG en línea dentro de un cuadro de color,
   número grande y tenue (01-03) en la esquina, borde fino, sombra y hover
   (sube, el icono se invierte de color y gira un poco).
6. Cómo trabajamos: título e intro a todo el ancho; debajo, rejilla de [3] pasos
   a la izquierda y foto a la derecha con LA MISMA ALTURA que los pasos. Los
   números se colorean y una línea vertical se rellena al hacer scroll. La foto,
   con parallax suave.
7. Precios: sección estrecha ([800] px) con título y texto centrados. [2] planes
   con el importe grande, «Incluye» con check y botón; el plan recomendado,
   destacado en el color oscuro. Al entrar en pantalla, cada tarjeta llega desde
   su lado. Nota «[Sin permanencia…]» debajo, a 14 px.
8. Contacto: datos en <address> (dirección, tel:, mailto:, horario), mapa ESTÁTICO
   en imagen con enlace a Google Maps (sin iframe, rel="noopener"), que rellena
   la columna hasta la altura del formulario. Formulario: [campos], select de
   [tipo de negocio], casilla de privacidad obligatoria, labels visibles,
   autocomplete, errores asociados con aria-describedby, validación con la
   Constraint Validation API y confirmación en una región aria-live. No envía datos.
9. Pie: banda CTA arriba («[¿Hablamos 20 minutos?]» + botón), 4 columnas (marca
   con chips de confianza · servicios · contacto · horario con tarjeta de
   «[primera consulta gratis]»), barra legal con © [AÑO] [NEGOCIO], Aviso legal
   y Privacidad.

ANIMACIONES
Solo CSS y solo transform, opacity y clip-path. Las animaciones de scroll
(animation-timeline: view()) van dentro de @supports, de modo que sin soporte
todo se ve completo. Con prefers-reduced-motion se desactivan todas. Ojo: un
contenedor con overflow:hidden se convierte en el contenedor de scroll de
view(); para el parallax usa una view-timeline con nombre en el contenedor.

IMÁGENES
Fotos de [Unsplash/Pexels] con licencia de uso comercial: pequeños negocios
reales, nada de apretones de manos ni oficinas corporativas. Guarda el autor y
la URL en CREDITOS-IMAGENES.md. Recórtalas al encuadre de cada marco (caras y
manos dentro), en WebP con srcset (480/800/1200-1280), width y height reales,
loading="lazy" fuera de la primera pantalla y fetchpriority="high" en la
portada. Alt descriptivo.

SEO PARA GOOGLE E IAs (GEO)
- <html lang="[es]">, title de 60 caracteres como máximo, meta description de
  155 como máximo con «[KEYWORD]», canonical, robots con max-image-preview:large,
  hreflang, geo.region y geo.placename.
- Open Graph + Twitter con imagen JPG de 1200×630 (medidas, tipo y alt).
- JSON-LD en un único @graph: AccountingService/LocalBusiness ([tipo de negocio])
  con dirección, mapa, horario, ContactPoint, knowsAbout, audience y slogan;
  City; un Service por servicio; un Offer por plan con UnitPriceSpecification
  (mensual, IVA no incluido) más la consulta gratuita; WebSite; WebPage con
  primaryImageOfPage, speakable y potentialAction.
- Los datos (precios, plazos, dirección, horario) deben ser IDÉNTICOS en el texto
  visible, en el JSON-LD y en llms.txt.
- robots.txt que permita explícitamente Googlebot, Bingbot, Google-Extended,
  GPTBot, OAI-SearchBot, ClaudeBot y PerplexityBot. sitemap.xml con lastmod e
  imágenes. llms.txt con un resumen, servicios, precios, pasos, preguntas
  frecuentes con respuestas directas y enlaces.

ACCESIBILIDAD (AA)
Contraste de 4,5:1 como mínimo en cada par, foco visible (outline de 3 px),
enlace de salto «Saltar al contenido», objetivos táctiles de 44 px como mínimo,
scroll-margin-top por la cabecera fija y navegación completa con teclado.

DATOS DEL BRIEF
[Pega aquí los textos literales, precios, dirección, teléfono, correo y horario.]
```

## FASE 2 · Verificar (prompt de control)

```text
Verifica tu trabajo con evidencias reales; no inventes cifras:
1. Sirve la carpeta en http://localhost:8000/.
2. Haz capturas con scroll REAL (Playwright o Chrome headless) a 360, 768, 1024 y
   1440 px. Revísalas tú mismo: desbordes, textos cortados, solapes. Haz al
   menos 2 iteraciones de corrección.
3. Comprueba que scrollWidth == clientWidth en cada ancho.
4. Pasa el validador W3C Nu: 0 errores, 0 avisos. Un solo h1 y jerarquía sin saltos.
5. Pasa axe-core (wcag2a, wcag2aa, best-practice) a cada ancho, también con el
   menú móvil abierto: 0 fallos.
6. Cruza el HTML con el CSS: ninguna clase sin estilo ni selector huérfano.
   Comprueba que todas las anclas apuntan a un id existente.
7. Prueba prefers-reduced-motion: todo visible y quieto.
8. Valida el JSON-LD (que se parsee bien) y el XML del sitemap.
Resume en 10 líneas como máximo e indica lo que NO has podido verificar.
```

## FASE 3 · Iterar (un ajuste por prompt)

Plantilla para cada ajuste visual, con una captura marcada si hace falta:

```text
En [SECCIÓN]: [QUÉ CAMBIAR]. Mantén las reglas duras, la accesibilidad AA y el
movimiento reducido. Verifica con una captura a 1440 y 390 px y dime qué no has
verificado.
```

Ajustes reales que hicimos así en esta web: cinta infinita sin cortes; quitar el
numerado de la etiqueta; tarjetas de servicios con más estilo; pasos que se
colorean con el scroll y foto a su altura con parallax; rediseño de precios a
800 px; nota a 14 px; quitar la foto de contacto; mapa a la altura del
formulario; sustituir las fotos por otras de stock con créditos; menú
hamburguesa animado; quitar el wordmark y «Volver arriba» del pie.

## FASE 4 · Humanizar y entregar

```text
1. Pasa por un humanizador ([QuillBot]) SOLO los textos creados por la IA, nunca los
   literales del brief. Revisa la salida frase a frase: descarta el «usted», los
   calcos, las variantes no peninsulares y los cambios de datos. Documenta el antes
   y el después en docs/HUMANIZADO.md.
2. Sustituye el dominio de ejemplo por la URL final en canonical, og:url,
   JSON-LD, sitemap.xml, robots.txt y llms.txt.
3. Publica en [GitHub Pages] y genera un .zip con el código.
```

---

## Ejemplo: valores usados en Ondo Asesores

| Campo | Valor |
|---|---|
| Negocio · sector · zona | Ondo Asesores · asesoría fiscal y contable · Abando, Bilbao |
| Público | Autónomos y pequeñas empresas (28-55 años) |
| CTA | Pedir consulta gratuita (20 min) |
| Título · subtítulo | «Tus impuestos, en orden. Tú, a lo tuyo.» · «Asesoría para autónomos y pequeñas empresas en Bilbao. Cuota fija y un asesor que te contesta en menos de 24 horas.» |
| Precios | Autónomo 60 €/mes + IVA · Pequeña empresa desde 150 €/mes + IVA · Sin permanencia |
| Contacto | Calle Ejemplo 8, 48001 Bilbao · 600 000 000 · hola@ondoasesores.es · L-V 9:00-18:00 |
| Paleta · fuentes | #F7F5F0 · #14213D · #2B4C7E · #F2B134 · DM Serif Display + DM Sans |
| Fotos | Unsplash (ver CREDITOS-IMAGENES.md) |
| Humanizador | QuillBot (Humanizador de IA, español) + revisión manual |

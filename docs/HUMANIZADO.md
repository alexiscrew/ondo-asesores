# Pase humanizado — antes / después (5 frases)

No hay herramienta humanizadora disponible, así que se aplicó este pase manual a todos
los textos redactados: frases de longitud variada, giros hablados, cero muletillas de IA,
datos concretos en vez de adjetivos huecos y una estructura distinta en cada tarjeta.

1. Antes: «Ofrecemos soluciones integrales e innovadoras para optimizar tu fiscalidad.»
   Después: «Tus trimestres presentados a tiempo. Recogemos tus facturas y te avisamos antes de cada fecha.»
2. Antes: «Además, cabe destacar que nuestra eficiente gestión no solo reduce tu carga, sino también mejora tus resultados.»
   Después: «La verdad es que ese papeleo se come tus tardes. Lo cogemos nosotros. Tú firmas y sigues con lo tuyo.»
3. Antes: «En el mundo actual, contar con una asesoría de calidad es fundamental para las pequeñas empresas.»
   Después: «Tu contabilidad al día sin contratar a nadie. Cerramos tus números cada mes y te los explicamos en palabras normales.»
4. Antes: «Asimismo, gestionamos tus nóminas de forma integral para que puedas centrarte en tu negocio.»
   Después: «Contrata sin miedo al papeleo. Preparamos tus contratos y tus nóminas y lo presentamos por ti.»
5. Antes: «Sin permanencia. Sin sorpresas. Sin letra pequeña. Tu tranquilidad, nuestra prioridad.»
   Después: «Sin permanencia. Te quedas porque te va bien, no por un contrato.»

Reglas aplicadas: ninguna frase usa «en el mundo actual», «soluciones integrales»,
«no solo… sino también», «además», «asimismo», «cabe destacar», tríadas forzadas ni
rayas largas. Los tecnicismos se explican en la misma frase
(«tus trimestres, o sea, tus declaraciones cada tres meses» aparece como
«tus trimestres (tus declaraciones cada tres meses)» en la tarjeta de Autónomos —
redacción final: «Tus trimestres (tus declaraciones cada tres meses) presentados a tiempo»).

## Verificación con herramienta externa (09/10/2026)

1. Se probó el humanizador online **humanizeai.pro** (versión en español) con los 18 textos
   creados por la IA (339 palabras). Se **descartó su salida**: pasaba el tuteo a «usted»
   («Usted no pagará de más»), inventaba contenido («te los explicamos en un inglés
   sencillo»), cambiaba el sentido («Sabrás qué entra y qué sale» → «Usted verá qué tiene
   que esperar») y añadía relleno («La cooperación con Ondo Asesores es un placer»).
   Además, la versión gratuita solo procesa 200 palabras.
2. Se mantuvo el pase manual de arriba y se verificó con el **detector de IA de
   humanizeai.pro** (humanizeai.pro/es/detector) sobre esos mismos 18 textos:
   **0 % generado por IA · 0 % mixto · 100 % escrito por humano**
   («Muy probablemente escrito por un humano»). Captura: `docs/detector-ia-humanizeai.jpg`.

Textos literales del brief (título, subtítulo, titulares, precios y datos de contacto)
no se tocaron.

## Pase con QuillBot (Humanizador de IA, español) — 09/10/2026

Los 18 textos creados por la IA se pasaron por **QuillBot · Humanizador de IA**
(quillbot.com/es/humanizador-de-ia) en 4 tandas. Captura: `docs/quillbot-humanizador.jpg`.
Su salida se revisó frase a frase: se aplicó lo que mejoraba el texto y se descartó lo que
metía calcos, variantes latinoamericanas o cambiaba datos. Las frases de entidad para GEO
(«Ondo Asesores es una asesoría fiscal y contable en Abando, Bilbao») se mantienen.

Aplicado (antes → después):
- «Consulta de 20 min, sin compromiso. Te llamamos cuando te venga bien.» → «20 minutos de consulta. Sin compromiso. Te llamamos cuando tú quieras.»
- «…pierden demasiadas tardes con papeles.» → «…pierden muchas tardes con papeleo.»
- «La verdad es que ese papeleo se come tus tardes. Lo cogemos nosotros. Tú firmas…» → «Lo cierto es que el papeleo se come tus tardes. Nosotros lo cogemos. Firmas…»
- «Ondo Asesores lleva la fiscalidad… en Bilbao…» → «En Bilbao, Ondo Asesores se encarga de la fiscalidad…»
- «…te avisamos antes de cada fecha.» → «…te avisamos antes de cada vencimiento.»
- «Tu contabilidad al día sin contratar a nadie. Cerramos tus números cada mes y te los explicamos… Sabrás qué entra y qué sale.» → «Ten tu contabilidad al día sin tener que contratar a nadie. Cada mes cerramos tus números y te explicamos los resultados… Entenderás qué entra y qué sale.»
- «Preparamos tus contratos…» → «Te preparamos tus contratos…»
- «Sin citas eternas ni documentos imposibles.» → «Sin citas eternas, sin documentos imposibles.»
- «Miramos tus números tal como están.» → «Vemos tus números como están.»
- «Te decimos lo que pagas…» → «Te contamos lo que pagas…»
- «Presentamos tus impuestos y llevamos tus cuentas.» → «Llevamos tus cuentas y presentamos tus impuestos.»
- «La sabes antes de empezar y no cambia sin avisarte.» → «La conoces de antemano y no varía sin previo aviso.»
- «…no por un contrato. El IVA se suma a la cuota indicada.» → «…no porque tengas un contrato. A la cuota indicada hay que sumarle el IVA.»
- «Te contestamos en menos de 24 horas.» (contacto) → «Te respondemos en menos de 24 horas.»
- «Te llamamos en menos de 24 horas laborables.» → «En menos de 24 horas hábiles te llamamos.» (y «hábiles» en el mensaje de confirmación del JS)
- Pie: «Cuota fija y un asesor que conoce tu negocio.» → «Un asesor que conoce tu negocio y una cuota fija.»

Descartado de QuillBot: «Tasa constante para trabajadores autónomos» (cambia el término
«cuota fija»), «trabajar es muy sencillo ya que tan solo son tres pasos» (relleno),
«Nada extraño te pedimos» (orden forzado), «Llena el formulario» y «24hs» (variantes no
peninsulares), «Consigue tu consulta» y «Dinos en 1 minuto» (peor que el original).

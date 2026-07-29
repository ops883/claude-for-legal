# Modelo de negocio — Law Offices of Jose R. Santiago, PLLC

Documento de estudio y planificación estratégica. Toma la descripción
estructural de una firma legal estadounidense —figura jurídica, jerarquía
interna, tipologías de firma— y la convierte en un modelo de negocio operable,
escrito con esta firma como protagonista.

**Entregable:** [`Modelo-de-Negocio-Law-Offices-of-Jose-R-Santiago-PLLC.docx`](./Modelo-de-Negocio-Law-Offices-of-Jose-R-Santiago-PLLC.docx)
— 50 páginas, con índice, tablas y ejemplos numéricos trabajados.

## Contenido

| Parte | Tema |
|---|---|
| 0 | Punto de partida: perfil de la firma y los tres hechos que definen el modelo |
| 1 | Marco jurídico y de gobierno — LLP / PLLC / PC, Company Agreement, quién decide qué |
| 2 | Jerarquía de una firma estadounidense y la pirámide que sí aplica a nuestra escala |
| 3 | El motor económico — R-U-L-E-S, apalancamiento, realización, punto de equilibrio |
| 4 | Modelos de ingreso — hora facturable, precio cerrado, alcance limitado, retainer |
| 5–6 | Segmentos de cliente y canales de adquisición |
| 7–9 | Costos, reparto entre propietarios, capital y cuenta fiduciaria |
| 10–11 | Tipologías de firma y Business Model Canvas |
| 12 | Unit economics — cuatro ejemplos trabajados |
| 13 | Cuadro de mando |
| 14 | Riesgos y restricciones regulatorias |
| 15 | Palancas de crecimiento y el efecto de la automatización |
| 16 | Hoja de ruta 0–24 meses |
| Anexo A | Datos a levantar para sustituir los supuestos por cifras reales |

## Sobre las cifras

**Todos los números del documento son ilustrativos.** Existen para mostrar la
mecánica del modelo, no para reportar datos de mercado ni la situación
financiera real de la firma. Donde aparece `[DATO A COMPLETAR]` es información
que la firma tiene y el documento no; el Anexo A lista exactamente qué levantar.

El documento no constituye asesoría legal, fiscal ni contable. Las referencias
a reglas de conducta profesional son orientativas y están descritas **por su
contenido, no por su número**, porque la numeración de las Texas Disciplinary
Rules of Professional Conduct no coincide con la del modelo ABA que cita la
mayoría de la literatura del sector.

## Cómo regenerar el `.docx`

La fuente vive en `src/`. El texto está en literales dentro de los módulos
`content-*.js`, así que es diffable y se puede buscar con grep.

```bash
cd internal/modelo-de-negocio
npm install docx        # solo la primera vez
node src/build.js "Modelo-de-Negocio-Law-Offices-of-Jose-R-Santiago-PLLC.docx"
```

Para verificar el resultado visualmente (requiere LibreOffice Writer y poppler):

```bash
soffice --headless --convert-to pdf --outdir . *.docx
pdftoppm -jpeg -r 80 *.pdf page      # revisar las imágenes page-*.jpg
```

### Estructura de `src/`

| Archivo | Qué contiene |
|---|---|
| `build.js` | Ensamblado del documento: página, estilos, pie de página, orden de las partes |
| `build-helpers.js` | Constructores reutilizables: encabezados, tablas, recuadros, bloques monoespaciados, viñetas |
| `content-1.js` | Portada, nota preliminar, índice y Partes 0–4 |
| `content-2.js` | Partes 5–13 |
| `content-3.js` | Partes 14–16, resumen ejecutivo y Anexo A |

Al editar: el ancho útil de página es **9360 DXA** y las columnas de cada tabla
deben sumar exactamente esa cifra — `build-helpers.js` lanza un error si no
cuadra, así que un desajuste se detecta al compilar y no al abrir el archivo.

## No versionado aquí

`node_modules/`, los PDF intermedios y las imágenes de verificación
(`page-*.jpg`) son artefactos de compilación y están excluidos por el
`.gitignore` de esta carpeta.

Un detalle si instalas las dependencias aquí: el chequeo de sanidad de JSON del
`CLAUDE.md` de la raíz filtra `node_modules/`. Sin ese filtro falla, porque
algunas dependencias traen `tsconfig.json` en formato JSONC (con comentarios) y
el parser estándar los rechaza. El fallo sería de una dependencia ajena, no de
un JSON del repositorio.

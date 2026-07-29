# Memos internos

Notas de cumplimiento y memorandos de decisión para
**Law Offices of Jose R. Santiago, PLLC**. Material de trabajo interno; no
forma parte del marketplace de plugins.

## Documentos

### [Nota de cumplimiento — Preparación de escritos presentados *pro se*](./Nota-Cumplimiento-Escritos-Pro-Se.docx)

Panorama de autoridad sobre el modelo de habeas de alcance limitado: la firma
prepara el escrito íntegro y el cliente lo presenta en su propio nombre.

**Conclusión:** no hay regla uniforme en Estados Unidos. El Quinto Circuito
—el nuestro— no se ha pronunciado, lo que deja el riesgo **sin resolver**, que
no es lo mismo que resuelto a favor. La recomendación es adoptar una nota de
divulgación en todos los escritos: cuesta cero, no exige identificar al
abogado bajo los criterios más permisivos, y no toca el margen del producto.

Autoridades principales citadas:

| Autoridad | Posición |
|---|---|
| *Duran v. Carris*, 238 F.3d 1268 (10th Cir. 2001) | Exige que la participación se reconozca **con la firma del abogado** |
| *Ellis v. Maine*, 448 F.2d 1325 (1st Cir. 1971) | Desaprueba la práctica no revelada |
| *In re Fengling Liu*, 664 F.3d 367 (2d Cir. 2011) | No sancionable a falta de regla o precedente propios — **surgido en materia migratoria** |
| ABA, Op. Formal 07-446 (2007) | Admite la asistencia no revelada |
| NYCLA, Op. 742 (2010) | Divulgación solo cuando la exige una regla; basta «preparado con la asistencia de un abogado» |
| *Whiting v. City of Athens*, 6th Cir. (2026) | Los tribunales federales siguen preguntando activamente quién redactó qué |

**Límite importante, indicado en el propio documento:** la investigación se
apoya en la base de opiniones de CourtListener, que **no indexa reglas locales
ni órdenes permanentes** — que es precisamente donde suele vivir una exigencia
de divulgación. La matriz por distrito de la sección 6 está sin completar y
debe rellenarse consultando el sitio de cada tribunal.

### [Memorando de decisión — Camino A o Camino B](./Memo-Decision-Camino-A-o-B.docx)

Resuelve la disyuntiva que el documento de modelo de negocio dejó abierta:
escalar el volumen o construir la boutique de defensa y habeas.

**El hallazgo que reordena la decisión:** la métrica correcta no es el margen
por caso sino el **margen por hora de abogado**, porque la hora de abogado es
el recurso escaso de la firma. Con esa métrica, la defensa en corte tiene el
mayor margen por caso de la cartera y el **peor** margen por hora de abogado
—por debajo de la naturalización—, consumiendo el 41 % de las horas de abogado
para producir el 20 % del margen.

**Recomendación:** Camino A financiando un Camino B selectivo, construido
sobre habeas y detención en lugar de defensa en corte, con la defensa acotada
a un número declarado de casos al año.

**Condición explícita:** las horas de entrega de las que sale toda la tabla son
supuestos ilustrativos. La conclusión cualitativa es robusta; las magnitudes no.
Medir las horas reales es lo que convierte el memorando de un argumento en una
decisión, y es la primera casilla de la hoja de ruta.

## Cómo regenerar los `.docx`

Las dependencias se instalan una sola vez en `internal/`, que es donde vive el
`node_modules` compartido por los dos generadores.

```bash
cd internal && npm install docx        # solo la primera vez
cd memos && node src/build-memos.js
```

Para verificar visualmente (requiere LibreOffice Writer y poppler):

```bash
soffice --headless --convert-to pdf --outdir . *.docx
pdftoppm -jpeg -r 78 <archivo>.pdf page    # revisar las imágenes page-*.jpg
```

### Estructura de `src/`

| Archivo | Qué contiene |
|---|---|
| `build-memos.js` | Ensamblado: página, estilos, pie de página, portada de cada memo |
| `memo-content.js` | El texto de los dos memos, en literales |

Los constructores compartidos (encabezados, tablas, recuadros, bloques
monoespaciados) viven en [`../lib/build-helpers.js`](../lib/build-helpers.js) y
los usan también los generadores de `modelo-de-negocio/`.

## Advertencia

Ninguno de estos documentos constituye asesoría legal, fiscal ni contable. Las
citas de la nota de cumplimiento deben verificarse en su texto vigente antes de
apoyar en ellas cualquier decisión operativa.

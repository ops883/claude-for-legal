const { Paragraph, TextRun, PageBreak, AlignmentType, BorderStyle } = require('docx');
const H = require('../../lib/build-helpers');
const { h1, h2, h3, p, bullet, check, numbered, spacer, mono, callout, table, NAVY, SLATE, ACCENT } = H;

const FIRM = 'Law Offices of Jose R. Santiago, PLLC';
const pb = () => new Paragraph({ children: [new PageBreak()] });

function cover(kicker, l1, l2, sub, fecha) {
  return [
    spacer(2400),
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 120 },
      children: [new TextRun({ text: kicker, size: 19, color: ACCENT, bold: true, characterSpacing: 40 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 100 },
      border: { top: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 14 } },
      children: [],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 60 },
      children: [new TextRun({ text: l1, size: 40, bold: true, color: NAVY })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 200 },
      children: [new TextRun({ text: l2, size: 40, bold: true, color: NAVY })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 500 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 14 } },
      children: [new TextRun({ text: sub, size: 21, color: SLATE, italics: true })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 40 },
      children: [new TextRun({ text: FIRM, size: 24, bold: true, color: ACCENT })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 40 },
      children: [new TextRun({ text: fecha, size: 20, color: SLATE })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: 'Documento interno — no distribuir fuera de la firma', size: 18, color: '999999', italics: true })],
    }),
    pb(),
  ];
}

// ══════════════════════════════════════════════ MEMO 1: GHOSTWRITING
const memo1 = [
  ...cover('NOTA DE CUMPLIMIENTO', 'Preparación de escritos', 'presentados pro se',
    'El modelo de habeas de alcance limitado — panorama de autoridad y recomendación',
    '29 de julio de 2026'),

  h1('1. La pregunta'),
  p('La firma prepara íntegramente peticiones de habeas corpus y escritos relacionados que el cliente presenta **pro se**, en su propio nombre, sin que el nombre de la firma ni la firma del abogado aparezcan en el documento. El objetivo declarado es reducir el costo para el cliente sin sacrificar la calidad del escrito.'),
  p('La pregunta de esta nota es concreta: **¿exige alguna autoridad que se revele la participación del abogado, y qué pasa si no se revela?**'),

  h1('2. Respuesta corta'),
  callout('Lo que la investigación establece', [
    '**No hay una regla uniforme en Estados Unidos.** Hay tres posiciones vivas y la que aplica depende del tribunal.',
    '**El Quinto Circuito —el nuestro— no se ha pronunciado.** No se localizó ninguna opinión publicada del Quinto Circuito ni de los distritos federales de Texas que aborde la preparación de escritos por abogado para un litigante pro se. Eso significa que el riesgo está **sin resolver**, que no es lo mismo que resuelto a favor.',
    '**La autoridad más favorable disponible surgió precisamente en un caso de inmigración** (*In re Fengling Liu*, Segundo Circuito, 2011) y descansa en la ausencia de una regla — un fundamento que una regla local o una orden permanente puede eliminar en cualquier momento.',
    '**La recomendación es adoptar una nota de divulgación en todos los escritos.** Cuesta cero, no exige identificar al abogado bajo los criterios más permisivos, elimina prácticamente toda la categoría de riesgo y no toca la economía del producto — porque el margen viene del proceso, no de la omisión.',
  ]),

  h1('3. El panorama nacional: tres posiciones'),

  h2('3.1 Tribunales que exigen divulgación, y algunos la firma del abogado'),
  p('La posición más estricta es la del **Décimo Circuito** en *Duran v. Carris*, 238 F.3d 1268 (10th Cir. 2001) (per curiam). El tribunal sostuvo que:'),
  mono([
    '"We hold that the participation by an attorney in drafting an appellate',
    ' brief is per se substantial, and must be acknowledged by signature."',
    '',
    '"We do not allow anonymous testimony in court; nor does this circuit',
    ' allow ghostwritten briefs."',
    '                                        Duran v. Carris, 238 F.3d at 1273',
  ]),
  spacer(120),
  p('Los tres fundamentos que da el tribunal son los que se repiten en toda la línea restrictiva, y conviene entenderlos porque explican cuándo el riesgo es real:'),
  bullet('**La construcción liberal del escrito pro se.** Bajo *Haines v. Kerner*, 404 U.S. 519 (1972), los escritos de un litigante sin abogado reciben una lectura indulgente para compensar su falta de asistencia letrada. Si el tribunal no sabe que hubo abogado, aplica esa indulgencia a un escrito que no la necesita.'),
  bullet('**La rendición de cuentas.** El abogado que no firma escapa de la responsabilidad que la firma conlleva.'),
  bullet('**La regla de la firma.** La Regla 11(a) de las Reglas Federales de Procedimiento Civil exige que todo escrito vaya firmado.'),
  spacer(80),
  p('*Duran* cita a su vez a *Ellis v. Maine*, 448 F.2d 1325, 1328 (1st Cir. 1971), donde el Primer Circuito desaprobó que los abogados preparen escritos que no firman «y así escapen a la obligación... de representar al tribunal que hay fundamento suficiente para las afirmaciones hechas».'),
  p('*Duran* también recoge, con aprobación, el criterio de que **el abogado debe negarse a prestar esta asistencia salvo que el cliente se comprometa a revelar la participación del abogado al presentar el escrito**.'),

  h2('3.2 Tribunales que no sancionan a falta de una regla propia'),
  p('La posición contraria —y la más relevante para nosotros, porque surgió en materia migratoria— es la del **Segundo Circuito** en *In re Fengling Liu*, 664 F.3d 367 (2d Cir. 2011).'),
  p('Liu era abogada de inmigración. Entre otros cargos, se le imputó haber ayudado a clientes a redactar peticiones de revisión que luego se presentaron *pro se*, sin revelar su participación. El comité disciplinario concluyó que eso violaba su deber de candor. **El Segundo Circuito rechazó ese cargo concreto:**'),
  mono([
    '"In light of this Court\'s lack of any rule or precedent governing',
    ' attorney ghostwriting, and the various authorities that permit that',
    ' practice, we conclude that Liu could not have been aware of any',
    ' general obligation to disclose her participation to this Court."',
    '                                     In re Fengling Liu, 664 F.3d at 372',
  ]),
  spacer(120),
  p('El tribunal añadió que no había indicio de mala fe, y que las peticiones en cuestión eran sencillas y difícilmente podían haber causado confusión o perjuicio.'),
  spacer(80),
  callout('Por qué este caso importa y por qué no basta apoyarse en él', [
    '**Por qué importa:** es el pronunciamiento más favorable disponible, procede de un tribunal federal de apelaciones, y **el contexto era inmigración** — el mismo terreno en el que operamos.',
    '**Por qué no basta:** el razonamiento no dice que la práctica sea correcta. Dice que la abogada **no podía saber** que existía una obligación, porque ese tribunal no tenía regla ni precedente. Es una defensa que se apoya en un vacío. **El día que el tribunal adopta una regla local, la defensa desaparece** — y no de forma prospectiva y anunciada, sino desde la fecha de la regla.',
    'Dicho de otro modo: *Liu* protege a quien actuó de buena fe en un vacío normativo. No protege a quien conocía el debate, no verificó, y siguió adelante.',
  ], { edge: ACCENT, fill: 'FBF6EC' }),

  h2('3.3 Comités de ética: la tendencia hacia la permisividad'),
  p('Los comités de ética han sido considerablemente más permisivos que los tribunales, y la propia opinión en *Liu* recoge esa evolución:'),
  table(
    ['Autoridad', 'Año', 'Criterio'],
    [
      ['Colegio de Abogados de la Ciudad de Nueva York, Op. Formal 1987-2', '1987', 'Exige revelar al tribunal y a la parte contraria que el escrito fue preparado por abogado, **pero sin identificar al abogado**'],
      ['ABA, Opinión Formal 07-446', '2007', 'Admite la asistencia no revelada en la preparación de escritos para litigantes pro se. Es el punto de inflexión de toda la materia'],
      ['NYCLA, Op. 742', '2010', 'La divulgación solo es necesaria cuando la exige una regla, orden o ley, o cuando no revelar constituiría una tergiversación. Cuando hay que revelar, basta indicar en el documento que fue **«preparado con la asistencia de un abogado»**, sin nombrarlo'],
    ],
    [3400, 900, 5060],
  ),
  spacer(140),
  p('*Liu* cita además a Ira P. Robbins, *Ghostwriting: Filling in the Gaps of Pro se Prisoners\' Access to the Courts*, 23 Geo. J. Legal Ethics 271 (2010), que hace dos observaciones que conviene tener presentes a la vez:'),
  bullet('«**Los tribunales federales han condenado la práctica de forma casi universal.**» (recopilando casos)'),
  bullet('Pero «casi todos los casos federales y las opiniones éticas estatales contrarias son anteriores a la opinión de la ABA de mayo de 2007», por lo que cabía esperar una relajación posterior.'),
  p('Esa relajación se ha producido en los comités de ética. **En los tribunales, mucho menos.**'),

  h2('3.4 El entorno reciente: la vigilancia no ha aflojado'),
  p('Un dato de 2026 que conviene no ignorar. En *Whiting v. City of Athens, Tenn.*, Nos. 24-5918/5919/25-5424 (6th Cir. 13 de marzo de 2026), el Sexto Circuito, al sancionar a dos abogados por conducta de mala fe, incluyó entre sus requerimientos expresos que explicaran **«si los escritos fueron preparados por otra persona, en todo o en parte»** — junto a preguntas sobre el uso de IA generativa y sobre cómo verificaron las citas.'),
  p('El tribunal se apoyó, además, en una resolución disciplinaria de 2025 del Distrito Este de Tennessee que había concluido que uno de los abogados **preparó indebidamente escritos** para otro. Y añadió una observación que amplía el problema más allá del contexto pro se:'),
  mono([
    '"[W]e see no reason why rules regulating ghostwriting should apply in',
    ' only the pro se context. The primary concern ... is that the true',
    ' author would escape liability for his conduct ... and that concern is',
    ' just as acute when a lawyer ultimately signs the ghostwritten',
    ' pleading."',
    '                     Whiting v. City of Athens (6th Cir. 2026), n.3',
  ]),
  spacer(120),
  p('**Lectura para nosotros:** la materia está viva y los tribunales federales están preguntando activamente quién redactó qué. La tendencia permisiva de los comités de ética no se ha trasladado a la sala.'),
  pb(),

  h1('4. El Quinto Circuito y los distritos de Texas'),
  p('Se consultó la base de opiniones de CourtListener para el Quinto Circuito y para los cuatro distritos federales de Texas (Sur, Norte, Oeste y Este), además de los distritos de Luisiana y Misisipi que integran el circuito.'),
  spacer(80),
  table(
    ['Jurisdicción', 'Resultado de la búsqueda'],
    [
      ['**Quinto Circuito**', 'Sin opinión publicada sobre preparación de escritos por abogado para litigante pro se. El único resultado por el término, *Di Angelo Publications v. Kelley*, 9 F.4th 256 (5th Cir. 2021), es una disputa sobre contratos editoriales y no guarda relación'],
      ['**Distrito Sur de Texas**', 'Sin opinión indexada sobre la materia'],
      ['**Distritos Norte, Oeste y Este de Texas**', 'Sin opinión indexada sobre la materia'],
      ['**Distritos de Luisiana y Misisipi**', 'Sin opinión indexada sobre la materia'],
    ],
    [2600, 6760],
  ),
  spacer(160),
  callout('La limitación de esta investigación — leer esto antes que la conclusión', [
    '**1. Ausencia de resultados no es prueba de ausencia.** La cobertura de opiniones de tribunales de distrito es incompleta, y buena parte de las resoluciones relevantes —órdenes, autos, resoluciones disciplinarias— no se publican ni se indexan.',
    '**2. Y sobre todo: una exigencia de divulgación normalmente no vive en una opinión, vive en una regla local o en una orden permanente.** CourtListener indexa jurisprudencia; **no indexa reglas locales**. Esta nota mapea el estado de la jurisprudencia y **no** el de las reglas locales de ningún distrito.',
    'Esa es exactamente la razón por la que la recomendación de la sección 5 no depende de completar el mapa: está diseñada para funcionar sin saber qué dice cada regla local.',
    '**3. Las citas de esta nota deben verificarse en su texto vigente** antes de apoyar en ellas ninguna decisión. Las reglas cambian; esta nota es un punto de partida, no una opinión legal.',
  ], { edge: ACCENT, fill: 'FBF6EC' }),
  spacer(160),
  h2('4.1 Qué significa para nosotros que el circuito no se haya pronunciado'),
  bullet('**No estamos protegidos por un precedente favorable.** Estamos en un vacío, que es una posición distinta y menos cómoda.'),
  bullet('**El argumento de *Liu* está disponible** —ausencia de regla, ausencia de mala fe, escritos sencillos— y es el mejor que hay. Pero es de otro circuito y se apoya en el vacío, no en un permiso.'),
  bullet('**El vacío puede cerrarse sin aviso**, y en la dirección restrictiva: un distrito adopta una regla local, o un juez dicta una orden permanente, y a partir de ahí la práctica no revelada es una infracción.'),
  bullet('**El riesgo no es solo disciplinario.** Un tribunal que descubre la participación no revelada puede negar la construcción liberal del escrito, con perjuicio directo para el cliente en su caso — que es el resultado que más importa evitar.'),
  pb(),

  h1('5. Recomendación'),
  h2('5.1 Adoptar la nota de divulgación en todos los escritos, sin excepción'),
  p('Incluir en cada escrito preparado por la firma y presentado por el cliente en su propio nombre una línea de este tipo:'),
  mono([
    'Preparado con la asistencia de un abogado licenciado para ejercer',
    'en los Estados Unidos.',
    '',
    'Prepared with the assistance of an attorney licensed to practice law',
    'in the United States.',
  ]),
  spacer(140),
  p('**Las razones, en orden de peso:**'),
  numbered('**Satisface el criterio de la práctica totalidad de los regímenes de divulgación** —incluidos los de la Op. 1987-2 de Nueva York y la Op. 742 de NYCLA— sin necesidad de identificar al abogado.'),
  numbered('**Elimina la categoría de riesgo entera sin tener que mapear noventa y cuatro distritos.** Un mapa de reglas locales hay que mantenerlo, y una regla nueva lo desactualiza en silencio. La nota funciona igual el día que cambia la regla.'),
  numbered('**No toca la economía del producto.** El margen del habeas de alcance limitado —53 %, hasta 61 % con automatización madura— viene de la repetibilidad y del proceso, no de que el escrito sea anónimo. Nada en el modelo de negocio depende de la omisión.'),
  numbered('**Neutraliza el peor de los tres fundamentos de *Duran*:** la aplicación indebida de la indulgencia del pro se. Si el tribunal sabe que hubo abogado, no hay engaño posible sobre ese punto.'),
  numbered('**Preserva el argumento de buena fe.** Si algún día la práctica se cuestiona, la existencia de una política escrita y aplicada de forma sistemática es la mejor prueba de que no hubo intención de ocultar.'),

  spacer(120),
  callout('Lo que la nota NO resuelve', [
    'En jurisdicciones del tipo *Duran* —el Décimo Circuito de forma expresa— la exigencia no es una nota: es **la firma del abogado**. Ahí la nota de divulgación es insuficiente y hace falta comparecer o firmar.',
    '**Consecuencia práctica:** para escritos de apelación, y para cualquier presentación en un circuito o distrito con posición restrictiva conocida, hay que decidir caso por caso entre comparecer formalmente o no aceptar el encargo. La matriz de la sección 6 sigue haciendo falta para eso, aunque la nota resuelva el grueso del volumen.',
  ]),

  h2('5.2 Reforzar el acuerdo de servicios de alcance limitado'),
  p('Con independencia de la divulgación, el acuerdo escrito con el cliente debe dejar constancia expresa de:'),
  check('**Qué incluye** el encargo: qué documentos se preparan, en qué plazo, con cuántas revisiones.'),
  check('**Qué NO incluye**, dicho con nombre y apellido: comparecencias, respuesta a la oposición, réplica, apelación, cualquier actuación posterior.'),
  check('**Que el cliente comparece en su propio nombre** y es quien presenta, quien recibe las notificaciones y quien responde a los plazos.'),
  check('**Que el resultado no está garantizado**, y que la firma no controla ni el calendario ni la decisión del tribunal.'),
  check('**Cómo termina el encargo** y qué pasa si el cliente quiere ampliarlo.'),
  check('**La política de divulgación** de la sección 5.1, para que el cliente sepa de antemano que el escrito llevará esa línea y por qué.'),
  spacer(80),
  p('La claridad del alcance protege a las dos partes: al cliente, porque sabe exactamente qué compró; a la firma, porque el desbordamiento de alcance es una de las tres fugas de margen identificadas en el modelo de negocio, y aquí es también una fuente de queja.'),

  h2('5.3 Lo que no cambia'),
  bullet('**Competencia.** El deber de competencia técnica se aplica igual, y con más razón, cuando el cliente va a comparecer solo con lo que nosotros le dimos.'),
  bullet('**Supervisión.** El trabajo del paralegal se hace bajo supervisión de abogado, con constancia de quién revisó qué y cuándo. Vale también para cualquier salida de un sistema automatizado.'),
  bullet('**Honorarios razonables** y acuerdo escrito.'),
  bullet('**Confidencialidad**, con especial atención a qué información entra en qué herramienta.'),
  pb(),

  h1('6. La matriz por distrito — plantilla a completar'),
  p('La nota de divulgación resuelve el grueso del riesgo, pero para los distritos donde presentamos con frecuencia conviene tener verificado el terreno. Esta tabla se rellena consultando **directamente el sitio del tribunal** —reglas locales y órdenes permanentes—, no una base de jurisprudencia.'),
  spacer(100),
  table(
    ['Distrito', 'Circuito', 'Reglas locales revisadas (fecha)', '¿Exige divulgación?', 'Forma aceptada', 'Revisó'],
    [
      ['S.D. Tex.', '5.º', '', '', '', ''],
      ['W.D. Tex.', '5.º', '', '', '', ''],
      ['N.D. Tex.', '5.º', '', '', '', ''],
      ['E.D. Tex.', '5.º', '', '', '', ''],
      ['W.D. La.', '5.º', '', '', '', ''],
      ['Quinto Circuito', '5.º', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ],
    [1700, 900, 2400, 1800, 1660, 900],
  ),
  spacer(160),
  h2('6.1 Cómo mantenerla viva'),
  bullet('**Revisión anual con fecha fija.** Una regla local nueva no avisa.'),
  bullet('**Revisión adicional al entrar en un distrito nuevo**, antes de la primera presentación, no después.'),
  bullet('**Registro de quién revisó y cuándo.** Si algún día hay que demostrar diligencia, la fecha es la prueba.'),
  spacer(140),

  h1('7. Alcance y límites de esta nota'),
  bullet('**No es una opinión legal** ni sustituye la verificación del texto vigente de cada autoridad citada.'),
  bullet('**No verifica reglas locales ni órdenes permanentes de ningún tribunal.** Esa verificación es la sección 6 y está pendiente.'),
  bullet('**Se apoya en la base de opiniones de CourtListener**, cuya cobertura de tribunales de distrito es incompleta.'),
  bullet('**No aborda el régimen disciplinario propio de EOIR y USCIS**, que es adicional al del colegio estatal y merece su propia revisión.'),
  bullet('**Las citas deben confirmarse** antes de apoyar en ellas cualquier decisión operativa.'),
  spacer(140),
  callout('Resumen en tres líneas', [
    '**1.** No hay regla uniforme; el Quinto Circuito no se ha pronunciado; el vacío es una posición sin resolver, no una autorización.',
    '**2.** Adoptar la nota de divulgación en todos los escritos elimina casi todo el riesgo, cuesta cero y no toca el margen.',
    '**3.** Queda pendiente verificar reglas locales en los distritos donde presentamos, y decidir por separado el tratamiento de escritos de apelación.',
  ]),
];

// ══════════════════════════════════════════════ MEMO 2: CAMINO A vs B
const memo2 = [
  ...cover('MEMORANDO DE DECISIÓN', 'Camino A o Camino B', '',
    'Escalar el volumen o construir la boutique — con una recomendación',
    '29 de julio de 2026'),

  h1('1. La pregunta y por qué no puede quedar abierta'),
  p('El documento de modelo de negocio planteó dos rutas de evolución y las dejó sin resolver:'),
  bullet('**Camino A — Escala de volumen.** Doblar la máquina de casos repetibles, invertir en intake y automatización, crecer en paralegales antes que en abogados.'),
  bullet('**Camino B — Boutique de defensa y habeas.** Menos casos, ticket mucho mayor, admisiones federales en distritos clave, reputación como activo principal.'),
  p('No elegir tiene un costo concreto, y no es abstracto: **cada camino pide una contratación distinta, un marketing distinto y una estructura de precios distinta.** Hacer las dos cosas a la vez con los recursos de una es la forma más común de no hacer ninguna.'),

  h1('2. La métrica que reordena la decisión'),
  p('El modelo de negocio calculaba el margen por caso. Esa métrica es correcta pero incompleta, porque trata todos los casos como si consumieran el mismo recurso escaso. No lo hacen.'),
  spacer(60),
  callout('El recurso escaso de esta firma no es el capital ni la demanda: son las horas del abogado', [
    'Un paralegal se contrata. Un abogado con criterio para llevar una defensa en corte, no — o no rápido, ni barato. En una firma de este tamaño **la hora de abogado es el cuello de botella real**, y por tanto la métrica que decide el mix no es el margen por caso, sino el **margen por hora de abogado**.',
  ]),
  spacer(140),
  p('Con los supuestos ilustrativos del modelo, el orden cambia por completo:'),
  spacer(80),
  table(
    ['Tipo de caso', 'Precio', 'Horas\nabogado', 'Margen\npor caso', 'Margen\n%', 'Margen por\nhora de abogado'],
    [
      ['Ajuste de estatus', '$4,200', '2.0', '$2,367', '56 %', '**$1,184**'],
      ['Preparación de habeas', '$2,800', '1.5', '$1,246', '44 %', '**$830**'],
      ['Cumplimiento I-9 (empleador)', '$7,200', '6.0', '$4,250', '59 %', '**$708**'],
      ['Petición familiar (I-130)', '$2,600', '1.5', '$922', '35 %', '**$614**'],
      ['Asilo afirmativo', '$6,500', '8.0', '$3,860', '59 %', '**$482**'],
      ['Naturalización', '$1,800', '1.0', '$343', '19 %', '**$343**'],
      ['Defensa en corte (removal)', '$9,000', '20.0', '$4,952', '55 %', '**$248**'],
    ],
    [2350, 1100, 1100, 1300, 1050, 2460],
  ),
  spacer(160),
  callout('El hallazgo', [
    '**La defensa en corte tiene el mayor margen por caso de toda la cartera —$4,952, un 55 %— y el PEOR margen por hora de abogado: $248.** Por debajo de la naturalización, que es el producto que instintivamente se considera el de menor valor.',
    'Con el mix ilustrativo, la defensa en corte consume **720 horas de abogado al año — el 41 % de todas las horas de abogado de la firma— para producir el 20 % del margen.**',
    'El ajuste de estatus, en el otro extremo, produce **$1,184 por hora de abogado: casi cinco veces más que la defensa en corte.**',
    '**Consecuencia directa:** el producto que parece «el importante» es el que peor usa el recurso más escaso de la firma. Y esa es exactamente la trampa del Camino B mal construido.',
  ], { edge: ACCENT, fill: 'FBF6EC' }),
  pb(),

  h1('3. Los dos caminos, evaluados con esa métrica'),

  h2('3.1 Camino A — Escala de volumen'),
  table(
    ['Dimensión', 'Lectura'],
    [
      ['**Qué es**', 'Más casos repetibles: naturalización, peticiones familiares, ajuste. Crecer en intake, paralegales y automatización'],
      ['**Recurso que consume**', 'Capacidad de captación y de entrega. Poca hora de abogado por caso'],
      ['**Techo**', 'Alto. El mercado federal no es local (la práctica ante agencias es nacional)'],
      ['**Margen por caso**', 'Menor'],
      ['**Margen por hora de abogado**', '**Alto** — el ajuste de estatus encabeza toda la cartera'],
      ['**Qué exige**', 'Disciplina operativa constante, proceso escrito, medición semanal'],
      ['**Riesgo**', 'Se degrada en silencio: la calidad cae antes de que lo diga ningún indicador'],
      ['**Velocidad**', 'Rápido. Las palancas actúan en meses'],
    ],
    [2600, 6760],
  ),
  spacer(160),
  h2('3.2 Camino B — Boutique de defensa y habeas'),
  table(
    ['Dimensión', 'Lectura'],
    [
      ['**Qué es**', 'Menos casos, mayor complejidad: defensa en corte, detención, habeas federal'],
      ['**Recurso que consume**', '**Hora de abogado sénior — el recurso más escaso**'],
      ['**Techo**', 'Bajo en volumen; alto en precio por caso'],
      ['**Margen por caso**', 'El mayor de la cartera'],
      ['**Margen por hora de abogado**', '**Depende radicalmente del producto:** habeas $830, defensa en corte $248'],
      ['**Qué exige**', 'Talento sénior escaso, admisiones federales, reputación construida en años'],
      ['**Riesgo**', 'Consume la capacidad sénior y ahoga al resto de la firma'],
      ['**Velocidad**', 'Lento. La reputación no se compra'],
    ],
    [2600, 6760],
  ),
  spacer(160),
  p('**Lo que la tabla revela y la formulación original del dilema escondía:** «Camino B» no es una cosa. Contiene dos productos con economías opuestas. El habeas de alcance limitado es de los mejores usos de la hora de abogado de toda la firma; la defensa en corte es el peor.'),
  pb(),

  h1('4. Recomendación'),
  callout('Camino A financiando un Camino B selectivo — construido sobre habeas y detención, no sobre defensa en corte', [
    '**1. El motor es el Camino A**, y dentro de él, el ajuste de estatus y las peticiones familiares antes que la naturalización. La naturalización se mantiene porque alimenta el canal de referidos —que es el más barato que existe—, no por su margen.',
    '**2. El Camino B se construye sobre el habeas de alcance limitado y el trabajo de detención**, no sobre la defensa en corte. Rinde $830 por hora de abogado, es repetible, se automatiza bien, no exige comparecencias y —con la política de divulgación de la nota de cumplimiento— no depende de un vacío normativo.',
    '**3. La defensa en corte se acota deliberadamente.** No se abandona: se limita a un número declarado de casos al año, elegidos por su valor estratégico o reputacional, y se cotiza sabiendo que consume el recurso más caro de la firma. Hoy absorbe el 41 % de las horas de abogado por el 20 % del margen; eso es una decisión, y debe tomarse como tal en vez de ocurrir por inercia.',
    '**4. El cumplimiento para empleadores se lanza igualmente**, porque es la única línea con ingreso recurrente y la única que no depende del ciclo político. A $708 por hora de abogado no es la mejor de la cartera, pero es la única que estabiliza la nómina.',
  ]),
  spacer(160),

  h2('4.1 La secuencia'),
  table(
    ['Fase', 'Qué se hace', 'Qué demuestra que funcionó'],
    [
      ['**Meses 0–6**', 'Instrumentación y conversión. Medir horas reales de entrega por tipo de caso. Instalar el intake', 'La tasa de conversión sube y las horas reales aparecen en el modelo'],
      ['**Meses 6–12**', 'Productizar los tres tipos de mayor volumen. Acotar por escrito la defensa en corte', 'El margen por hora de abogado del conjunto sube'],
      ['**Meses 12–18**', 'Escalar habeas con la política de divulgación resuelta. Lanzar el producto de cumplimiento', 'Aparece ingreso recurrente y el habeas crece sin consumir sénior'],
      ['**Meses 18–24**', 'Contratar según la restricción real. Evaluar admisiones federales adicionales', 'La firma crece sin que caiga el margen por hora de abogado'],
    ],
    [1500, 4400, 3460],
  ),
  spacer(160),

  h2('4.2 El indicador que dice si la decisión está funcionando'),
  callout('Margen por hora de abogado del conjunto de la cartera', [
    'Con el mix ilustrativo actual: **$497 por hora de abogado** ($879,390 de margen ÷ 1,770 horas de abogado al año).',
    'Ese número, y no el ingreso, es el que dice si el mix está mejorando. Puede subir el ingreso y bajar este indicador — y cuando eso pasa, la firma está trabajando más para ganar lo mismo.',
    '**Objetivo sugerido para 24 meses: superar los $700 por hora de abogado**, sin que baje el margen total. Se consigue por mix (más ajuste y habeas, defensa acotada) y por proceso (menos horas de abogado por caso), no por precio.',
    'Un dato que conviene tener presente: con 1,770 horas de abogado al año, el mix actual ya requiere **1.18 abogados a tiempo completo** solo para sostenerse. La restricción no es teórica.',
  ]),
  spacer(140),

  h2('4.3 Lo que NO hay que hacer'),
  bullet('**No perseguir los dos caminos con la misma cola de trabajo.** Procesos distintos, plazos distintos, criterios de aceptación distintos. El trabajo complejo y el de volumen no pueden compartir la misma bandeja de entrada.'),
  bullet('**No contratar un abogado para resolver un problema de proceso.** Es la forma más cara de no resolverlo. Primero intake y paralegal; abogado cuando el flujo exceda la capacidad de forma sostenida.'),
  bullet('**No escalar el habeas antes de cerrar la casilla de divulgación.** Escalar primero y verificar después convierte una casilla pendiente en un problema multiplicado.'),
  bullet('**No decidir el mix por quién llama por teléfono.** Sin un objetivo declarado de mezcla, la mezcla la decide la demanda entrante, que no tiene ninguna opinión sobre nuestro margen.'),
  pb(),

  h1('5. La advertencia que hace falta leer antes de actuar'),
  callout('Esta recomendación es condicional, y la condición es concreta', [
    'Los supuestos de horas de entrega —2 horas de abogado en un ajuste, 20 en una defensa, 1.5 en un habeas— son **ilustrativos**. Vienen del modelo de negocio, no de una medición.',
    '**Todo el orden de la tabla de la sección 2 depende de esos números.** Si una defensa en corte se lleva realmente 12 horas de abogado y no 20, su margen por hora sube a $413 y sigue siendo bajo, pero cambia la magnitud del ajuste. Si un ajuste de estatus se lleva 4 horas y no 2, su margen por hora cae a $592 y deja de encabezar la tabla.',
    '**La conclusión cualitativa es robusta:** la defensa en corte casi con seguridad seguirá siendo el peor uso de la hora de abogado, porque la brecha con el resto es demasiado grande para invertirse. **Las magnitudes no lo son.**',
    '**Por eso la Fase 1 no es opcional.** Medir las horas reales de entrega —aunque no se facturen— es lo que convierte este memorando de un argumento en una decisión. Es la primera casilla de la hoja de ruta y la que desbloquea todo lo demás.',
    'La hoja **TiposDeCaso** del modelo financiero está construida exactamente para eso: se cargan las horas reales y la tabla se reordena sola.',
  ], { edge: ACCENT, fill: 'FBF6EC' }),
  spacer(160),

  h1('6. La decisión, en una línea'),
  p('**Escalar el volumen —con el ajuste de estatus como producto principal— para financiar una boutique construida sobre habeas y detención, acotando deliberadamente la defensa en corte a un número declarado de casos al año.**'),
  spacer(80),
  p('Y medir el resultado con un solo número: el **margen por hora de abogado**, hoy en $497 con supuestos ilustrativos, con objetivo de superar $700 en veinticuatro meses.'),
];

module.exports = { memo1, memo2 };

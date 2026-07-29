const { Paragraph, TextRun, PageBreak, AlignmentType, TableOfContents, BorderStyle } = require('docx');
const H = require('../../lib/build-helpers');
const { h1, h2, h3, p, bullet, numbered, spacer, mono, callout, table, NAVY, SLATE, ACCENT } = H;

const FIRM = 'Law Offices of Jose R. Santiago, PLLC';

const cover = [
  spacer(2600),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [new TextRun({ text: 'DOCUMENTO DE ESTUDIO Y PLANIFICACIÓN ESTRATÉGICA', size: 19, color: ACCENT, bold: true, characterSpacing: 40 })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
    border: { top: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 14 } },
    children: [],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60 },
    children: [new TextRun({ text: 'Modelo de Negocio de una', size: 44, bold: true, color: NAVY })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [new TextRun({ text: 'Firma Legal en Estados Unidos', size: 44, bold: true, color: NAVY })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 400 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 14 } },
    children: [new TextRun({ text: 'Estructura corporativa · jerarquía · economía · escalamiento', size: 22, color: SLATE, italics: true })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [new TextRun({ text: 'Aplicado a', size: 20, color: SLATE, allCaps: true, characterSpacing: 30 })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 700 },
    children: [new TextRun({ text: FIRM, size: 30, bold: true, color: ACCENT })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [new TextRun({ text: 'Katy, Texas  ·  Práctica de inmigración y habeas corpus federal', size: 20, color: SLATE })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [new TextRun({ text: '29 de julio de 2026  ·  Versión 1.0', size: 20, color: SLATE })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'Documento interno — no distribuir fuera de la firma', size: 18, color: '999999', italics: true })],
  }),
  new Paragraph({ children: [new PageBreak()] }),
];

const preliminar = [
  h1('Nota preliminar'),
  p('Este documento toma la descripción estructural de una firma legal estadounidense —figura jurídica, jerarquía interna y tipologías de firma— y la convierte en un **modelo de negocio operable**: qué vendemos, cómo se genera el margen, dónde está la restricción y qué hay que medir para saber si el modelo funciona.'),
  p(`Está escrito con ${FIRM} como firma protagonista. Cada sección tiene dos capas: la **teoría general** —cómo funciona el modelo estadounidense, incluida la BigLaw que nunca seremos, porque entender su mecánica explica la nuestra— y una **aplicación concreta a nuestra firma**, marcada en recuadros.`),
  spacer(80),
  callout('Cómo leer las cifras de este documento', [
    'Todos los números son **ilustrativos**. Existen para mostrar la mecánica del modelo —cómo se mueve el margen cuando mueves una palanca—, no para reportar datos de mercado ni para describir la situación financiera real de la firma.',
    'Donde aparece **[DATO A COMPLETAR]**, es información que la firma tiene y este documento no. El Anexo A lista exactamente qué números hay que levantar para sustituir los supuestos por realidad.',
    'Este documento no constituye asesoría legal, fiscal, contable ni de inversión. Las referencias a reglas de conducta profesional son orientativas: la fuente que gobierna es el texto vigente de las Texas Disciplinary Rules of Professional Conduct y de la normativa federal aplicable (EOIR / USCIS / reglas locales de cada distrito).',
  ], { edge: ACCENT, fill: 'FBF6EC' }),
  spacer(200),
  new Paragraph({ children: [new PageBreak()] }),
  h1('Contenido'),
  ...[
    ['Parte 0', 'Punto de partida: dónde estamos', 'Perfil de la firma · Los tres hechos que definen nuestro modelo'],
    ['Parte 1', 'Marco jurídico y de gobierno', 'LLP · PLLC · PC · Qué significa ser PLLC · Quién decide qué'],
    ['Parte 2', 'La jerarquía de una firma estadounidense', 'Socios equity y non-equity · Of Counsel · Asociados · Personal de apoyo · La pirámide que sí nos toca'],
    ['Parte 3', 'El motor económico', 'La fórmula R-U-L-E-S · Apalancamiento · Realización · La aritmética de la hora facturable'],
    ['Parte 4', 'Modelos de ingreso', 'Hora facturable · Precio cerrado · Alcance limitado · Contingencia · Retainer y suscripción'],
    ['Parte 5', 'Segmentos de cliente y propuesta de valor', 'Los seis mercados de la inmigración · La decisión de cartera'],
    ['Parte 6', 'Canales y adquisición de clientes', 'El mapa de canales · El embudo que hay que instalar'],
    ['Parte 7', 'Estructura de costos', 'Composición típica · Los costos que nadie presupuesta · Punto de equilibrio'],
    ['Parte 8', 'Reparto entre los propietarios', 'Lockstep · Eat What You Kill · Puntos · Lo que hay que decidir por escrito'],
    ['Parte 9', 'Capital, flujo de caja y cuenta fiduciaria', 'El ciclo de caja · Lockup · IOLTA y sus cuatro controles'],
    ['Parte 10', 'Tipologías de firma como modelos de negocio', 'BigLaw · Boutique · Mid-size · Solo · Dónde estamos y hacia dónde ir'],
    ['Parte 11', 'Business Model Canvas de la firma', 'Los nueve bloques aplicados'],
    ['Parte 12', 'Unit economics: cuatro ejemplos trabajados', 'El modelo tradicional · Caso a precio cerrado · Alcance limitado · La firma completa'],
    ['Parte 13', 'Cuadro de mando', 'Financieros · Operativos · Comerciales · Los cinco números del lunes'],
    ['Parte 14', 'Riesgos y restricciones regulatorias', 'Independencia profesional · UPL · Publicidad · Riesgos propios de inmigración'],
    ['Parte 15', 'Palancas de crecimiento y automatización', 'Las cinco palancas · La ruptura del vínculo horas-valor · Las tres condiciones'],
    ['Parte 16', 'Hoja de ruta 0–24 meses', 'Instrumentación · Higiene · Productización · Ingresos · Escala'],
    ['—', 'Resumen ejecutivo', ''],
    ['Anexo A', 'Datos a levantar', 'Volumen y precio · Costo de entrega · Adquisición · Finanzas'],
  ].flatMap(([num, title, sub]) => {
    const out = [new Paragraph({
      spacing: { before: 130, after: sub ? 20 : 60 },
      children: [
        new TextRun({ text: `${num}.  `, bold: true, size: 21, color: ACCENT }),
        new TextRun({ text: title, bold: true, size: 21, color: NAVY }),
      ],
    })];
    if (sub) out.push(new Paragraph({
      spacing: { after: 60, line: 240 },
      indent: { left: 620 },
      children: [new TextRun({ text: sub, size: 18, color: SLATE })],
    }));
    return out;
  }),
  new Paragraph({ children: [new PageBreak()] }),
];

// ============================================================ PARTE 0
const parte0 = [
  h1('Parte 0. Punto de partida: dónde estamos'),
  p('Un modelo de negocio no se diseña en abstracto. Antes de la teoría, el retrato de la firma tal como es hoy.'),

  h2('0.1 Perfil de la firma'),
  table(
    ['Dimensión', 'Situación actual'],
    [
      ['Razón social', `${FIRM}`],
      ['Figura jurídica', 'PLLC de Texas (Professional Limited Liability Company)'],
      ['Sede', 'Katy, Texas'],
      ['Áreas de práctica', 'Inmigración (familiar, asilo, defensa en corte, naturalización)\nHabeas corpus federal relacionado con detención migratoria'],
      ['Principales / propietarios', 'Jose R. Santiago (abogado titular)\nEquipo directivo: COO y abogado no litigante (operaciones, asesoría, trabajo no contencioso)'],
      ['Personal', 'Paralegal de habeas federal: Roberth Suarez\nResto del equipo: [DATO A COMPLETAR]'],
      ['Modelos de ingreso en uso', 'Precio cerrado (flat fee) al consumidor\nModelo de preparación de habeas presentado *pro se* en nombre del cliente'],
      ['Volumen mensual de casos nuevos', '[DATO A COMPLETAR]'],
      ['Ticket promedio por caso', '[DATO A COMPLETAR]'],
      ['Ingreso anual', '[DATO A COMPLETAR]'],
    ],
    [2200, 7160],
  ),
  spacer(160),

  h2('0.2 Tres hechos que definen nuestro modelo antes que cualquier otra cosa'),

  h3('Hecho 1 — La inmigración es práctica federal, y eso rompe la geografía'),
  p('La mayoría de las firmas estadounidenses tienen un mercado limitado por su licencia estatal. Nosotros no, o no del todo: la representación ante USCIS y ante los tribunales de inmigración (EOIR) está abierta a cualquier abogado admitido y en buen estado en **cualquier** jurisdicción de EE. UU. Eso significa que nuestro mercado natural no es Katy, ni el condado de Harris, ni Texas.'),
  p('**Consecuencia de negocio:** el techo de crecimiento no es demográfico, es operativo. No nos limita cuántos inmigrantes viven cerca de la oficina; nos limita cuántos casos podemos captar y entregar bien. Eso cambia por completo la sección de canales (Parte 6) y la de escalamiento (Parte 16).'),
  p('**Con una excepción importante:** el trabajo de habeas corpus y cualquier litigio en corte federal de distrito sí requiere admisión ante ese tribunal específico. La regla 5.05 de Texas (práctica no autorizada) y las reglas locales de cada distrito son el límite real. La geografía vuelve a aparecer en cuanto salimos de la práctica ante agencias federales.'),

  h3('Hecho 2 — Cobramos por entregable, no por hora'),
  p('El modelo clásico de firma estadounidense —el que produce los organigramas de la Parte 2 y las cifras de PEP de la Parte 3— descansa sobre la hora facturable. Nosotros operamos casi todo a precio cerrado.'),
  p('Eso no es una versión inferior del modelo. Es un modelo **distinto**, con una matemática distinta: en la hora facturable el margen viene de vender más horas; en el precio cerrado el margen viene de **necesitar menos horas para el mismo entregable**. La eficiencia deja de ser una virtud abstracta y se convierte en la fuente literal de la utilidad. Esta es la idea central del documento y reaparece en las Partes 3, 12 y 15.'),

  h3('Hecho 3 — Somos una PLLC, no una partnership'),
  p('Los términos que estructuran el sector —equity partner, non-equity partner, partner track, PEP— nacen del modelo de asociación. Una PLLC tiene **members** (miembros) y opcionalmente **managers**, no socios en sentido estricto. La lógica económica subyacente es la misma, pero el vocabulario, los documentos y la mecánica de admisión son otros. La Parte 1 traduce un mundo al otro.'),

  spacer(120),
  callout('Lo que este documento intenta responder', [
    '**1.** ¿Cuál es exactamente el motor que genera nuestra utilidad, y qué palanca la mueve más?',
    '**2.** ¿A quién contratamos primero cuando podamos contratar, y por qué a ese rol y no a otro?',
    '**3.** ¿Cómo pasamos de vender casos sueltos a tener ingreso predecible?',
    '**4.** ¿Qué cinco números hay que mirar cada mes para saber si el negocio está sano?',
    '**5.** ¿Qué hace la automatización con nuestro margen, y qué tenemos que cambiar para capturarlo en vez de regalarlo?',
  ]),
  new Paragraph({ children: [new PageBreak()] }),
];

// ============================================================ PARTE 1
const parte1 = [
  h1('Parte 1. Marco jurídico y de gobierno'),
  p('En español decimos «bufete»; en el ámbito estadounidense el término formal es **law firm**. La firma no es una empresa cualquiera: la práctica del derecho es una profesión regulada por cada estado, y eso condiciona qué vehículo societario se puede usar y quién puede ser dueño.'),

  h2('1.1 Las figuras jurídicas disponibles'),
  table(
    ['Figura', 'Nombre completo', 'Responsabilidad', 'Fiscalidad típica', 'Uso habitual'],
    [
      ['LLP', 'Limited Liability Partnership', 'Cada socio responde por su propia negligencia, no por la de los demás', 'Pass-through (K-1)', 'Estándar en firmas medianas y grandes'],
      ['PLLC', 'Professional Limited Liability Company', 'Escudo de responsabilidad salvo negligencia propia', 'Pass-through; posible elección S-Corp', '**Nuestra figura.** Firmas pequeñas y medianas'],
      ['PC / PA', 'Professional Corporation / Association', 'Corporativa, con excepción por mala praxis propia', 'C-Corp o elección S-Corp', 'Común en CA, TX, FL'],
      ['GP', 'General Partnership', 'Ilimitada y solidaria', 'Pass-through', 'Residual; casi extinta por el riesgo'],
      ['Sole Prop.', 'Sole Proprietorship', 'Ilimitada', 'Schedule C', 'Abogado solo sin entidad'],
    ],
    [900, 2100, 2500, 1760, 2100],
  ),
  spacer(160),

  h3('Tres consecuencias que sí son de negocio, no de papeleo'),
  bullet('**El escudo nunca cubre la mala praxis propia.** Ninguna figura protege al abogado que cometió el error. Por eso el seguro de responsabilidad profesional (**LPL — Lawyers Professional Liability**) no es opcional: es una línea de costo estructural, no un gasto discrecional.'),
  bullet('**Pass-through significa que la firma no acumula utilidades retenidas.** Casi todo el beneficio se distribuye cada año y tributa en la declaración personal de los miembros. Consecuencia directa: **la firma no capitaliza como una empresa normal.** El crecimiento se financia con aportes de los miembros y deuda, no con reinversión de utilidades. Esta es una restricción estructural del sector completo, no un defecto de gestión.'),
  bullet('**Doble registro.** La entidad se registra ante el Secretario de Estado *y* debe cumplir los requisitos del colegio estatal. En Texas, los propietarios de una PLLC de práctica jurídica deben ser abogados licenciados.'),

  spacer(120),
  callout('Aplicación a nuestra firma — qué significa ser PLLC', [
    '**Vocabulario correcto.** No tenemos «socios»: tenemos **members**. No tenemos un *partnership agreement*: tenemos un **Company Agreement** (el nombre que usa el Texas Business Organizations Code para el operating agreement). Cuando la Parte 8 hable de reparto entre socios, léase «distribuciones entre members».',
    '**El documento que más rendimiento da por hora invertida.** En una firma de pocas personas la tentación es no formalizar nada porque «ya nos entendemos». El Company Agreement es donde se define, *antes* de que haya dinero o conflicto en juego: cómo se admite un miembro nuevo, cómo se valora su participación, qué pasa si uno se va o fallece, cómo se reparten las distribuciones, y quién decide qué. Sin él, la ley supletoria de Texas decide por nosotros, y decide mal para nuestro caso.',
    '**Elección fiscal.** Una PLLC puede tributar como sociedad de personas o elegir tratamiento S-Corp, lo que cambia la mezcla entre salario razonable y distribución. Es una decisión de CPA, no de este documento, pero tiene efecto directo sobre el flujo de caja personal de los miembros. Marcarla como pendiente de revisión anual.',
    '**Seguro LPL.** Verificar que la cobertura corresponde al perfil de riesgo real: inmigración de alto volumen, plazos perentorios y trabajo de habeas tienen exposiciones distintas. Un límite pensado para una práctica transaccional pequeña puede quedarse corto.',
  ]),
  spacer(160),

  h2('1.2 Gobierno: quién decide qué'),
  p('En una firma grande, el gobierno se ve así:'),
  mono([
    '                    [ Partnership / Company Agreement ]',
    '                                    |',
    '                    +---------------+----------------+',
    '        [ Managing Partner ]              [ Executive Committee ]',
    '                    |                                 |',
    '    +---------------+---------------+     +-----------+---------------+',
    '[ Practice Group  ] |  [ Office     ]   [ Compensation ] [ Conflicts /  ]',
    '[ Leaders (PGL)   ] |  [ Managing   ]   [ Committee    ] [ Ethics Cmte. ]',
    '                    |  [ Partners   ]',
    '                    |',
    '    [ C-Suite:  COO · CFO · CMO/CBDO · CIO · CHRO · GC de la firma ]',
  ]),
  spacer(140),
  bullet('**Company / Partnership Agreement** — el documento constitucional. Admisión y salida de miembros, fórmula de reparto, aportes de capital, retiro, disolución. Es el contrato que gobierna todo el reparto del valor.'),
  bullet('**Managing Partner** — equivalente funcional al CEO: estrategia, finanzas, expansión, gestión diaria. En firmas grandes puede no facturar horas.'),
  bullet('**Executive Committee** — el consejo. Se elige por votación de los miembros con participación, con mandatos de 2 a 4 años.'),
  bullet('**Practice Group Leaders** — responsables de P&L por área. Es la unidad de negocio real de la firma.'),
  bullet('**Compensation Committee** — el órgano con más poder político, porque decide el reparto de utilidades.'),
  bullet('**Conflicts / Ethics Committee** — revisa conflictos antes de abrir un asunto. Es control de negocio, no solo de cumplimiento: un conflicto no detectado puede costar el caso y la relación con el cliente.'),

  spacer(140),
  callout('Aplicación a nuestra firma — el gobierno de una firma pequeña', [
    'Ese organigrama es una firma de 400 abogados. En una firma de nuestro tamaño **las mismas funciones existen, solo que concentradas en pocas personas**. El error no es tener pocos órganos; el error es no saber quién ejerce cada función y descubrirlo el día que hay un desacuerdo.',
    '**Traducción a nuestra escala:**',
    '· *Managing Partner* → Jose R. Santiago como abogado titular, en lo que toca a criterio jurídico y responsabilidad profesional.',
    '· *COO / operaciones* → función ya existente y ya diferenciada. Esta es una ventaja poco común en firmas pequeñas: la mayoría no separa la gestión de la práctica hasta que es demasiado tarde.',
    '· *Compensation Committee* → hoy es una conversación; debería ser una fórmula escrita en el Company Agreement.',
    '· *Conflicts / Ethics* → debe ser un **paso de proceso obligatorio en la apertura de cada caso**, no una revisión mental. Un registro simple de partes contrarias y de casos rechazados basta y evita el problema antes de que exista.',
    '**Acción concreta:** escribir en una página quién decide sobre (a) aceptar o rechazar un caso, (b) fijar precio y descuentos, (c) gasto por encima de un umbral, (d) contratación, (e) criterio jurídico en un asunto. Cinco líneas. Es la mitad del gobierno de una firma pequeña.',
  ]),
  new Paragraph({ children: [new PageBreak()] }),
];

// ============================================================ PARTE 2
const parte2 = [
  h1('Parte 2. La jerarquía de una firma estadounidense'),
  p('La trayectoria clásica se rige por el esquema **«Up or Out»**: asciendes a socio o sales de la firma. En las últimas tres décadas han aparecido carriles intermedios que rompen ese binario y que hoy son parte central del modelo de negocio, porque permiten retener talento sin diluir la propiedad.'),

  h2('2.1 El organigrama completo'),
  mono([
    '              [ Managing Partner / Executive Committee ]',
    '                                 |',
    '         +-----------------------+-----------------------+',
    '  [ Equity Partners ]                          [ Non-Equity Partners ]',
    '    (senior / junior equity)                     (Income Partners)',
    '         |                                                |',
    '         +-----------------------+-----------------------+',
    '                                 |',
    '                     [ Of Counsel / Special Counsel ]',
    '                                 |',
    '                   [ Senior Associates    (5-8+ anos) ]',
    '                                 |',
    '                   [ Mid-Level Associates (3-5 anos)  ]',
    '                                 |',
    '                   [ Junior Associates    (1-3 anos)  ]',
    '                                 |',
    '        +------------------------+------------------------+',
    '[ Staff / Contract  ]   [ Summer Associates ]   [ Paralegals · Law Clerks ]',
    '[ Attorneys         ]   [ canal de recluta-  ]   [ Legal Assistants        ]',
    '                        [ miento             ]',
    '                                 |',
    '   [ Business Operations:  COO · CFO · CMO · CIO · CHRO · Legal Ops · KM ]',
  ]),
  spacer(160),

  h2('2.2 Los socios (Partners / Members)'),
  h3('Managing Partner (socio director)'),
  p('El CEO de la firma. Preside el Executive Committee y responde por estrategia global, finanzas, expansión y gestión diaria.'),

  h3('Equity Partner (socio propietario o capitalista)'),
  bullet('**Quién es:** abogado con trayectoria amplia y cartera propia. Los que generan volumen de negocio se llaman **rainmakers**.'),
  bullet('**Cómo funciona:** aporta capital a la firma (*capital contribution*, habitualmente financiado con un préstamo bancario personal). No cobra salario fijo tradicional sino una participación en las utilidades residuales — los **Profits Per Equity Partner (PEP)**. Vota en las decisiones de la firma.'),
  bullet('**Sub-escalones:** muchas firmas distinguen *junior equity* (pocos puntos, voto limitado) de *senior equity*. Subir dentro del equity puede tomar otros 5 a 8 años.'),

  h3('Non-Equity Partner / Income Partner (socio de cuota, sin participación en el capital)'),
  bullet('**Quién es:** abogado ascendido al rango de «socio» que aún no ha aportado capital social.'),
  bullet('**Cómo funciona:** salario fijo sustancial más bonos por desempeño. Tiene el título formal de *Partner* frente a los clientes, pero no participa del reparto global de utilidades ni tiene voto mayoritario.'),
  bullet('**Por qué existe — la lógica de negocio:** el escalón non-equity es una **palanca de margen**. Permite dar el título, que el cliente valora, sin diluir el PEP; y permite retener a un abogado muy productivo que no genera cartera propia. En muchas firmas es hoy el escalón más numeroso.'),

  h2('2.3 Consejeros (Of Counsel / Special Counsel / Senior Counsel)'),
  p('Abogado sénior que no encaja en la categoría de socio ni en la de asociado. Perfiles habituales:'),
  bullet('Exsocios que reducen horas sin retirarse del todo.'),
  bullet('Exjueces o exfiscales de alto nivel, contratados por prestigio y acceso.'),
  bullet('Especialistas técnicos en nichos concretos: regulatorio sectorial, marcas, fiscal internacional, apelaciones.'),
  bullet('Abogados en régimen flexible o remoto que cambiaron carrera por calidad de vida.'),
  p('Trabajan a comisión, salario fijo o por horas. **No están en el partner track.** Su función de negocio: capacidad experta bajo demanda, sin el coste fijo de una estructura de socio. Es el equivalente al contratista sénior.'),

  h2('2.4 Los asociados (Associates)'),
  p('Abogados a tiempo completo que en su mayoría aspiran a socio. Se clasifican por años desde la graduación de la *law school* (**class year**).'),
  table(
    ['Nivel', 'Experiencia', 'Qué hace', 'Rol económico'],
    [
      ['Senior Associate', '5–8+ años', 'Maneja asuntos complejos con supervisión mínima; redacta los escritos principales, lidera deposiciones, gestiona la relación directa con el cliente; supervisa a los júniors', 'Margen alto. Bajo evaluación continua para entrar al partner track'],
      ['Mid-Level Associate', '3–5 años', 'Supervisa borradores, conduce negociaciones menores, gestiona la táctica del litigio o de la transacción', 'El caballo de batalla: alta utilización y tarifa ya respetable'],
      ['Junior Associate', '1–3 años', 'Recién graduados que aprobaron el **Bar Exam**. Investigación jurídica, revisión masiva de documentos (*due diligence* / *discovery*), borradores iniciales', 'Deficitario los primeros 12–18 meses; rentable cuando sube su realización'],
    ],
    [1500, 1180, 3900, 2780],
  ),
  spacer(140),
  p('**Summer Associates:** programa de verano de 8 a 12 semanas para estudiantes de segundo año. Es el canal principal de reclutamiento de BigLaw y funciona a la vez como proceso de selección largo y como marketing hacia las escuelas de derecho.'),

  h2('2.5 Abogados de apoyo y personal no abogado'),
  bullet('**Staff Attorneys / Contract Attorneys** — contratados por horas o por proyecto (por ejemplo, revisión de miles de contratos). Salario base, tarifa de facturación menor, **fuera de la ruta a socio**. Existen precisamente para abaratar la capa baja de la pirámide.'),
  bullet('**Paralegals / Legal Assistants** — profesionales no abogados que preparan expedientes, organizan pruebas, controlan plazos y ejecutan tareas legales clave bajo supervisión. En muchas firmas **su tiempo se factura**, con margen excelente.'),
  bullet('**Legal Ops / Knowledge Management / PSL** — plantillas, precedentes, playbooks, automatización. Es la función que convierte trabajo artesanal en producto repetible: el habilitador silencioso del margen.'),
  bullet('**e-Discovery / Litigation Support** — gestión de datos y plataformas de revisión documental.'),
  bullet('**C-Suite y Business Operations** — COO, CFO, CMO/CBDO, CIO, CHRO. No son abogados. Es la capa que separa una firma administrada de un grupo de abogados compartiendo alquiler.'),

  spacer(140),
  callout('Aplicación a nuestra firma — la pirámide que sí nos toca', [
    'Nuestra estructura no es esa pirámide, y no debe intentar serlo. Pero **los roles funcionales son los mismos**, y saber cuál falta es lo que ordena las contrataciones.',
    'Hoy tenemos, en términos funcionales: el **abogado titular** (criterio, firma, responsabilidad), un **abogado de operaciones y trabajo no contencioso**, y un **paralegal especializado** en redacción de habeas federal. Falta explícitamente la capa de captación y la de entrega en volumen.',
    '**El orden de contratación que la economía sugiere** (no el que sugiere la urgencia):',
    '**1.º — Un segundo paralegal o case manager, no un abogado.** En una firma de precio cerrado, el margen por caso sube cuando baja el número de horas de abogado por caso. La forma más barata de conseguirlo es mover trabajo hacia abajo, no contratar más arriba. Un paralegal que absorbe intake, recopilación de documentos y seguimiento libera horas de abogado que valen tres o cuatro veces más.',
    '**2.º — Intake / recepción dedicada.** La tasa de conversión de consulta a caso firmado es, casi siempre, la palanca de mayor retorno en una firma de consumidor (ver Parte 12, Ejemplo D). Pasa de 35 % a 45 % y facturas 29 % más sin gastar un dólar más en marketing. Nadie convierte bien atendiendo el teléfono entre dos audiencias.',
    '**3.º — Abogado asociado.** Solo cuando el flujo de casos exceda de forma sostenida la capacidad, y con un plan explícito de qué tipo de asuntos se le delegan íntegros.',
    '**Sobre el «Of Counsel»:** es la figura más infrautilizada por firmas pequeñas. Permite incorporar a un litigante federal con admisión en el distrito que necesitemos, o a un especialista en un tipo de alivio migratorio, **sin coste fijo y sin darle propiedad**. Para nuestra restricción de admisión en corte federal (Hecho 1, Parte 0), es la respuesta natural.',
  ]),
  new Paragraph({ children: [new PageBreak()] }),
];

// ============================================================ PARTE 3
const parte3 = [
  h1('Parte 3. El motor económico'),
  p('Todo lo anterior existe para hacer funcionar una sola ecuación. Esta es la parte que convierte «estructura» en «modelo de negocio».'),

  h2('3.1 La ecuación base'),
  mono([
    'Ingreso   =  Horas facturables x Tarifa x Realizacion x N.o de timekeepers',
    'Utilidad  =  Ingreso - Gastos (incluida la compensacion de no-socios)',
    'PEP       =  Utilidad / N.o de socios equity',
  ]),
  spacer(140),
  p('Desglosada en sus cinco palancas — la regla mnemotécnica **R-U-L-E-S**:'),
  table(
    ['Palanca', 'Qué es', 'Cómo se mueve'],
    [
      ['**R** — Rate\n(tarifa)', 'Precio por hora o valor del encargo', 'Subida anual, mix hacia trabajo de mayor valor, precio por valor'],
      ['**U** — Utilization\n(utilización)', 'Horas facturables efectivas por persona', 'Flujo de trabajo estable, menos tiempo muerto, mejor asignación'],
      ['**L** — Leverage\n(apalancamiento)', 'Ratio de personal no propietario por propietario', 'Delegar hacia abajo; más gente ejecutando por cada dueño'],
      ['**E** — Expense\n(gasto)', 'Costo por abogado', 'Espacio, tecnología, personal de apoyo'],
      ['**S** — Speed\n(velocidad de cobro)', 'Días entre trabajo hecho y dinero en banco', 'Facturación puntual, cobranza activa, anticipos'],
    ],
    [1900, 3100, 4360],
  ),
  spacer(140),
  callout('El punto que casi todos leen mal', [
    'Estas cinco palancas **se multiplican, no se suman.** Una mejora del 5 % en cada una no produce +25 %; produce aproximadamente **+28 %** de utilidad.',
    'Y funciona igual en la otra dirección: descuidar dos de ellas anula el esfuerzo puesto en las otras tres. Por eso una firma puede subir precios todos los años y no ver diferencia en el banco — está regalando por el lado de la realización y del cobro lo que gana por el lado de la tarifa.',
  ]),
  spacer(160),

  h2('3.2 El apalancamiento es el corazón del modelo tradicional'),
  p('El modelo clásico de firma es una **pirámide**: el socio vende y supervisa, los asociados ejecutan, y la firma se queda con el diferencial entre lo que le paga al asociado y lo que factura por su tiempo. La matemática, con un asociado mid-level:'),
  mono([
    'Tarifa facturada                 $ 550 / hora',
    'Horas facturables al ano             1,800',
    'Facturacion bruta                $ 990,000',
    'x Realizacion (88 %)             $ 871,200   <- lo que de verdad se factura y cobra',
    '- Salario                        $ 250,000',
    '- Bono                           $  30,000',
    '- Carga laboral (25 %)           $  70,000',
    '- Overhead asignado              $ 160,000   <- espacio, tecnologia, apoyo, seguros',
    '------------------------------------------',
    'Contribucion al socio            $ 361,200   <- esto es margen del dueno',
  ]),
  spacer(140),
  p('Un socio con **cuatro** asociados así aporta ~$1.44 M de margen *antes* de contar una sola hora propia. Ese es el motor de la pirámide, y es literalmente la razón por la que existe la jerarquía de la Parte 2.'),
  spacer(80),
  p('**La regla de los tercios**, heurística clásica de gestión de firmas:'),
  mono([
    '1/3 del ingreso que genera un abogado  ->  su compensacion',
    '1/3                                    ->  overhead de la firma',
    '1/3                                    ->  utilidad de los duenos',
  ]),
  spacer(140),
  p('Si una firma se desvía mucho de esa proporción, ahí está el problema — y la desviación dice cuál es.'),

  h2('3.3 Realización: los dos descuentos invisibles'),
  p('**La facturación bruta nunca es el ingreso.** Hay dos fugas sucesivas, y la mayoría de las firmas solo mira la segunda:'),
  mono([
    'Horas registradas (worked)',
    '   |  -  descuento de facturacion  (billing realization)',
    '   |     horas que el abogado borra: ineficiencia, cortesia, tope pactado',
    'Horas facturadas (billed)',
    '   |  -  descuento de cobro  (collection realization)',
    '   |     facturas que el cliente paga parcialmente o no paga nunca',
    'Ingreso cobrado (collected)',
  ]),
  spacer(140),
  table(
    ['Escenario', 'Realización de facturación', 'Realización de cobro', 'Realización total'],
    [
      ['Firma bien gestionada', '92 %', '97 %', '**89 %**'],
      ['Firma promedio', '85 %', '94 %', '**80 %**'],
      ['Firma con problemas', '75 %', '88 %', '**66 %**'],
    ],
    [2700, 2400, 2200, 2060],
    { rightCols: [1, 2, 3] },
  ),
  spacer(140),
  p('**Diez puntos de realización valen más que diez puntos de tarifa**, porque no cuestan nada producirlos: no requieren más horas ni renegociar precios con nadie. Es la palanca más barata del negocio y la más ignorada.'),

  h2('3.4 La aritmética de la hora facturable'),
  p('Un objetivo de **2,000 horas facturables** al año no significa 2,000 horas trabajadas:'),
  mono([
    '2,000 h  facturables',
    '+ ~400 h  no facturables (formacion, comites, administracion, KM)',
    '+ ~250 h  desarrollo de negocio y marketing',
    '+ ~150 h  pro bono',
    '---------------------------------------------------------',
    '~2,800 h trabajadas al ano  ~  56 h/semana durante 50 semanas',
  ]),
  spacer(140),
  p('Ese es el costo humano real del modelo, y es la causa directa de la alta rotación de asociados — que a su vez es un costo del modelo (Parte 7).'),

  spacer(140),
  callout('Aplicación a nuestra firma — la misma física, otra ecuación', [
    'Nosotros no vendemos horas, así que la ecuación se reescribe. Pero **no desaparece**: se transforma.',
    '',
    '**Nuestra ecuación:**',
    new (require('docx').Paragraph)({ spacing: { after: 90 }, children: [new (require('docx').TextRun)({ text: 'Utilidad  =  Casos x (Precio - Costo de entrega) - Costos fijos', font: 'Consolas', size: 19, bold: true })] }),
    '**Traducción de las cinco palancas a nuestro modelo:**',
    '· *Rate* → **precio del encargo**, no tarifa horaria. Se mueve con posicionamiento y con el mix de tipos de caso, no con un aumento anual del rate card.',
    '· *Utilization* → **casos activos por persona**. Una firma de precio cerrado con gente ociosa quema margen igual que una firma de horas.',
    '· *Leverage* → **cuánto del caso hace el paralegal y cuánto el abogado**. Esta es nuestra palanca principal, y la única que además mejora la calidad si se hace con checklist.',
    '· *Expense* → **costo de entrega por caso**: horas de personal + tecnología + tasas + reproceso.',
    '· *Speed* → **cuándo cobramos**. En precio cerrado con planes de pago esta palanca es crítica: podemos entregar el caso completo y seguir cobrando a doce meses.',
    '',
    '**Y la fuga equivalente a la realización.** Nosotros no tenemos write-offs de horas, pero tenemos tres fugas que hacen exactamente lo mismo y que casi nunca se miden:',
    '**1. Alcance que se desborda** (*scope creep*). El caso que se cotizó como uno y terminó siendo tres porque apareció una cuestión de inadmisibilidad que no estaba en la consulta inicial. Es el equivalente exacto del descuento de facturación.',
    '**2. Reproceso.** Un RFE, un rechazo por forma, una notificación mal calendarizada. Horas ya pagadas que hay que gastar dos veces.',
    '**3. Planes de pago incumplidos.** Es el descuento de cobro, idéntico.',
    'Si no medimos estas tres, no sabemos cuál es nuestro margen real por tipo de caso — solo sabemos cuál creemos que es.',
  ]),
  new Paragraph({ children: [new PageBreak()] }),
];

// ============================================================ PARTE 4
const parte4 = [
  h1('Parte 4. Modelos de ingreso'),
  p('La hora facturable es el modelo por defecto del sector, no el único. Una firma moderna opera una **cartera de modelos de ingreso** y elige el que corresponde al perfil de riesgo de cada asunto.'),

  h2('4.1 El mapa completo'),
  table(
    ['Modelo', 'Cómo cobra', 'Quién asume el riesgo', '¿Aplica a nosotros?'],
    [
      ['Billable hour', 'Tarifa × horas', 'El cliente', 'Marginal. Solo para asesoría empresarial y consultas de complejidad abierta'],
      ['Flat fee / fixed fee', 'Precio cerrado por entregable', 'La firma', '**Núcleo del negocio.** Peticiones familiares, asilo, naturalización, defensa'],
      ['Capped fee', 'Por horas con techo', 'Compartido', 'Útil para asuntos empresariales de alcance incierto'],
      ['Collar', 'Por horas con banda ±X %', 'Compartido simétrico', 'No aplica a nuestra escala'],
      ['Blended rate', 'Tarifa única para todo el equipo', 'Compartido', 'No aplica'],
      ['Contingency', '% del resultado (33 %–40 %)', 'La firma, íntegro', 'No aplica a inmigración; sí en reclamaciones civiles conexas si alguna vez se abre esa línea'],
      ['Success fee / híbrido', 'Precio reducido + prima por resultado', 'Compartido', 'Ojo: en inmigración condicionar honorarios al resultado migratorio genera problemas éticos y de expectativa. **Evitar**'],
      ['Retainer / suscripción', 'Cuota mensual por acceso y volumen definido', 'Compartido', '**La mayor oportunidad no explotada.** Ver 4.3'],
      ['Portfolio pricing', 'Precio anual por una cartera completa', 'La firma', 'Aplicable a un empleador con volumen recurrente de patrocinios'],
      ['Unbundled / limited scope', 'Precio por tarea suelta', 'El cliente', '**Ya lo hacemos**, en la práctica, con el modelo de preparación de habeas'],
    ],
    [1750, 2400, 1900, 3310],
  ),
  spacer(160),

  h2('4.2 La lógica económica de los tres que nos importan'),

  h3('Flat fee — dónde vive realmente nuestro margen'),
  p('En el precio cerrado el margen no viene de la tarifa sino de la **eficiencia propia**. Si el precio es $2,500 y el asunto toma 10 horas, la tarifa implícita es $250/h. Si con plantillas y proceso lo haces en 4 horas, es $625/h. El cliente pagó lo mismo; el margen se multiplicó por 2.5.'),
  p('**Esta es la frase que resume el documento entero:** el flat fee convierte la inversión en procesos en margen directo. Es el único modelo donde mejorar la operación se paga solo, de inmediato y de forma medible.'),
  p('Su riesgo espejo es igual de directo: si el caso se desborda, el que paga es la firma. Por eso el flat fee exige tres cosas que la hora facturable perdona — **alcance escrito con precisión**, **criterio disciplinado para decir que no**, y **medición de horas reales aunque no se facturen**. Sin lo tercero no sabes si estás ganando o perdiendo en cada tipo de caso.'),

  h3('Unbundled / limited scope — el modelo de preparación de habeas'),
  p('La firma prepara íntegramente la petición y los escritos relacionados, y el cliente los presenta *pro se* en su propio nombre. El objetivo declarado es reducir el costo para el cliente sin sacrificar la calidad del documento.'),
  p('Como modelo de negocio tiene una economía atractiva: producto altamente repetible, entregable acotado, sin comparecencias, ejecutable por un paralegal formado bajo supervisión, y sin la restricción de admisión en el distrito federal correspondiente. Es, en términos de la Parte 15, un producto casi perfectamente automatizable.'),
  spacer(80),
  callout('Punto de verificación de cumplimiento — no es un obstáculo, es una casilla que hay que cerrar', [
    'El *ghostwriting* —preparar escritos que se presentan sin revelar la participación del abogado— **no tiene una regla uniforme en EE. UU.** Algunos tribunales federales lo permiten sin más, otros exigen que el escrito indique que fue preparado con asistencia de abogado, y algunos lo han tratado como problemático cuando el litigante recibe el trato deferente que se da al *pro se* mientras se beneficia de trabajo profesional.',
    'La consecuencia práctica es que **la respuesta depende del distrito**, y que la regla puede cambiar. Esto no invalida el modelo: lo convierte en un modelo que necesita un mapa.',
    '**Acción:** levantar una matriz por distrito de los tribunales donde presentamos con más frecuencia, anotando la posición vigente sobre divulgación en escritos preparados por abogado, y la forma de divulgación aceptada donde se exige. Revisar esa matriz una vez al año. Es una tarde de trabajo y protege una línea de ingreso completa.',
    'Añadir además, en el acuerdo de servicios de alcance limitado: qué incluye exactamente el encargo, qué **no** incluye (comparecencias, respuesta a la oposición, apelación), y que el cliente comparece en su propio nombre. La claridad del alcance protege a las dos partes.',
  ], { edge: ACCENT, fill: 'FBF6EC' }),

  h2('4.3 Retainer y suscripción — el modelo que cambia el perfil financiero'),
  p('Desde el punto de vista de negocio es el modelo más valioso que existe, porque genera **ingreso recurrente predecible**, amortiza el costo de adquisición sobre muchos meses y multiplica el valor de vida del cliente. Es la transformación de «vender encargos» a «vender una relación».'),
  p('Y es exactamente lo que una firma de inmigración de consumidor no suele tener, porque su cliente natural compra una vez cada varios años.'),
  spacer(80),
  callout('Aplicación a nuestra firma — dónde sí hay ingreso recurrente en inmigración', [
    'El cliente individual no genera recurrencia. **El empleador sí.** Tres productos posibles, en orden de dificultad:',
    '**1. Plan de cumplimiento de I-9 y verificación de empleo.** Cuota mensual o anual para un empleador con rotación alta: auditoría inicial, formación del personal de RR. HH., revisión periódica de expedientes, y respuesta ante una inspección. Es un producto de bajo drama, alto valor percibido y trabajo predecible. Sectores naturales en Katy y el área de Houston: construcción, restauración, logística, servicios de limpieza, atención a mayores.',
    '**2. Retainer de patrocinio para empleadores con volumen.** Precio anual por una cartera de peticiones en lugar de precio por petición. Le da al empleador previsibilidad presupuestaria y a nosotros ingreso comprometido.',
    '**3. Plan de acompañamiento familiar.** Cuota baja mensual que cubre consultas, revisión de correspondencia de USCIS, alertas de plazos y recordatorios de renovación, con descuento sobre encargos mayores. Convierte un cliente que compra una vez en una relación de años y **alimenta el canal de referidos**, que es el más barato que existe (Parte 6).',
    '**Por qué importa tanto:** con ingreso recurrente, el mes malo deja de poner en riesgo la nómina. Ese solo hecho cambia qué decisiones puede tomar la firma — se puede rechazar un mal caso, se puede invertir, se puede contratar antes de estar desbordado.',
  ]),

  h2('4.4 Ingresos auxiliares'),
  bullet('**Formación y contenido de pago** — cursos, guías y materiales prácticos. La firma ya produce guías de casos de la BIA y materiales de práctica; eso es inventario de conocimiento que hoy no genera ingreso.'),
  bullet('**Producto y tecnología** — plantillas, playbooks y automatización licenciados a otras firmas. Ver Parte 15.'),
  bullet('**Servicios adjuntos** — traducción certificada, servicios de notarización, coordinación de exámenes médicos, en la medida en que se estructuren correctamente.'),
  p('**Precaución transversal:** cualquier ingreso auxiliar debe revisarse contra las reglas de reparto de honorarios con no abogados y de práctica no autorizada del derecho. En inmigración esta frontera es especialmente delicada (Parte 14).'),
  new Paragraph({ children: [new PageBreak()] }),
];

module.exports = { cover, preliminar, parte0, parte1, parte2, parte3, parte4, FIRM };

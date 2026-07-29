const { Paragraph, TextRun, PageBreak } = require('docx');
const H = require('../../lib/build-helpers');
const { h1, h2, h3, p, bullet, check, numbered, spacer, mono, callout, table, ACCENT } = H;

const pb = () => new Paragraph({ children: [new PageBreak()] });

// ============================================================ PARTE 5
const parte5 = [
  h1('Parte 5. Segmentos de cliente y propuesta de valor'),
  p('Cada segmento compra algo distinto. Confundirlos es el error de posicionamiento más común y el más caro, porque contamina el precio, el mensaje y el canal a la vez.'),

  h2('5.1 El mapa general del sector'),
  table(
    ['Segmento', 'Qué compra realmente', 'Sensible a', 'Modelo de ingreso natural'],
    [
      ['Corporación grande', 'Cobertura de riesgo y la firma en la carátula', 'Reputación, panel aprobado, conflictos', 'Horas, portfolio pricing'],
      ['Empresa mediana', 'Juicio comercial: alguien que decida, no que investigue', 'Valor por dólar, tiempo de respuesta', 'Flat fee, capped, retainer'],
      ['Startup', 'Velocidad y previsibilidad; que no bloquee el cierre', 'Precio, agilidad', 'Flat fee, retainer'],
      ['PYME local', 'Tranquilidad y accesibilidad', 'Precio, cercanía, idioma', 'Flat fee, retainer pequeño'],
      ['Consumidor', 'Certeza sobre un resultado vital', 'Precio total, confianza, comunicación', 'Flat fee, planes de pago'],
      ['Departamento in-house', 'Capacidad excedente y especialidad puntual', 'Eficiencia, integración', 'Blended rate, secondment'],
    ],
    [1700, 2900, 2400, 2360],
  ),
  spacer(160),

  h2('5.2 Nuestros segmentos reales'),
  p('En inmigración el segmento no es «el inmigrante». Son al menos seis mercados con economía, ciclo de venta y sensibilidad al precio completamente distintos.'),
  table(
    ['Segmento', 'Qué compra', 'Ciclo', 'Precio', 'Margen esperado', 'Recurrencia'],
    [
      ['Familiar\n(peticiones, ajuste, consular)', 'Certeza sobre reunificación', 'Largo', 'Medio', 'Alto si está proceduralizado', 'Baja, pero alto referido'],
      ['Naturalización', 'Un trámite hecho bien y sin sustos', 'Corto', 'Bajo', 'Alto por volumen', 'Nula, alto referido'],
      ['Asilo', 'Protección; a menudo urgencia vital', 'Muy largo', 'Medio-alto', 'Variable — es el que más se desborda', 'Baja'],
      ['Defensa en corte\n(removal)', 'Que no lo deporten', 'Muy largo', 'Alto', 'Medio; consume mucha capacidad sénior', 'Baja'],
      ['Detención y habeas', 'Salir; velocidad', 'Corto e intenso', 'Medio', 'Alto si es producto repetible', 'Nula'],
      ['Empresarial\n(empleadores)', 'Cumplimiento y previsibilidad operativa', 'Medio', 'Alto', 'Alto', '**Alta — la única con recurrencia real**'],
    ],
    [1900, 2100, 1200, 900, 2060, 1200],
  ),
  spacer(160),

  callout('Aplicación a nuestra firma — la decisión de cartera', [
    'Una firma pequeña no puede ser excelente en los seis. La pregunta estratégica no es «¿cuál dejamos?» sino **«¿cuál es el motor y cuál es el acompañante?»**',
    '**Un patrón que funciona bien en firmas de este perfil:**',
    '· **Motor de volumen y caja:** naturalización y peticiones familiares. Alta repetibilidad, ciclo corto, proceduralizables casi por completo, y son la máquina de referidos que alimenta todo lo demás.',
    '· **Motor de margen y reputación:** detención/habeas y defensa en corte. Menos casos, ticket mayor, es lo que construye la marca profesional y lo que la comunidad recuerda.',
    '· **Motor de estabilidad:** empresarial. Es el único con ingreso recurrente y el único que no depende del ciclo político.',
    '· **El que hay que vigilar:** asilo. Alto valor humano y alta exposición reputacional, pero es el que más se desborda respecto del precio cotizado. Requiere alcance escrito con precisión quirúrgica y un criterio de aceptación explícito.',
    '**Decisión que este documento propone plantear:** fijar un objetivo de mezcla —por ejemplo, 50 % volumen / 30 % margen / 20 % empresarial— y medir cada trimestre cuánto se aleja la realidad de esa mezcla. Sin un objetivo declarado, la mezcla la decide quien llama por teléfono.',
  ]),
  spacer(160),

  h2('5.3 Propuesta de valor por arquetipo de firma'),
  bullet('**BigLaw** — *«Podemos absorber tu peor día.»* Escala global y capacidad de poner cuarenta abogados en un asunto en 48 horas.'),
  bullet('**Boutique** — *«Somos los mejores del mundo en esto exactamente.»* Profundidad vertical, socios haciendo el trabajo.'),
  bullet('**Mid-size regional** — *«Cobertura completa, con acceso al socio y precio racional.»*'),
  bullet('**Small / solo** — *«Yo me encargo personalmente y sabes cuánto va a costar.»*'),
  bullet('**Firma de consumidor de alto volumen** — *«Proceso probado, precio claro, resultado esperable.»* La propuesta es **operativa**, no artesanal, y esa es su fuerza.'),
  spacer(100),
  p('**La nuestra, escrita como debería sonar:** «Sabes qué va a costar, sabes en qué punto está tu caso, y quien lo prepara sabe exactamente lo que hace.» Precio cerrado, comunicación proactiva y competencia técnica demostrable. Las tres cosas que el mercado de inmigración de consumidor entrega mal con más frecuencia — y por eso son diferenciación real, no eslogan.'),
  pb(),
];

// ============================================================ PARTE 6
const parte6 = [
  h1('Parte 6. Canales y adquisición de clientes'),
  p('La adquisición es la función más subestimada de una firma. En la mayoría de las firmas estadounidenses **la capacidad de generar negocio, y no la habilidad técnica, es lo que determina el ascenso a socio propietario.** No es un juicio moral sobre el sector; es la descripción de dónde está el poder.'),

  h2('6.1 El mapa de canales'),
  table(
    ['Canal', 'Segmento', 'Costo', 'Ciclo', 'Notas'],
    [
      ['Referidos de clientes', 'Todos', 'Muy bajo', 'Corto', 'El de mejor conversión del mundo. Hay que medirlo y cultivarlo, no esperarlo'],
      ['Referidos de otros abogados', 'B2B y consumidor', 'Bajo', 'Medio', 'Atención a las reglas sobre comisiones por referencia (Parte 14)'],
      ['Comunidad y alianzas', 'Consumidor', 'Bajo', 'Medio', 'Consulados, iglesias, escuelas, cámaras, ONG, medios en español'],
      ['SEO y contenido local', 'Consumidor', 'Medio', 'Medio', 'El canal más rentable a largo plazo en consumidor'],
      ['Publicidad de pago (PPC / LSA)', 'Consumidor', 'Alto', 'Muy corto', 'CPC elevado en inmigración; enciende y apaga el flujo a voluntad'],
      ['Redes sociales y video', 'Consumidor', 'Medio', 'Medio', 'En inmigración hispanohablante es hoy uno de los canales de mayor alcance'],
      ['Rankings y directorios', 'Corporativo', 'Medio', 'Largo', 'Poco relevante para consumidor'],
      ['Marketplaces / lead gen', 'Consumidor', 'Alto', 'Corto', 'Verificar el cumplimiento ético del acuerdo antes de firmarlo'],
      ['Contenido profesional', 'B2B', 'Medio', 'Largo', 'Guías, formación, ponencias. Genera referidos de abogados'],
    ],
    [2200, 1500, 900, 1000, 3760],
  ),
  spacer(160),

  callout('Aplicación a nuestra firma — el embudo que hay que instalar', [
    '**La métrica que hay que instalar antes que ninguna otra:** costo de adquisición por cliente (**CAC**) **por canal**. Una firma que no sabe cuánto le cuesta un caso nuevo no puede decidir si crecer, ni dónde.',
    'El embudo mínimo, cuatro números por canal:',
    new Paragraph({ spacing: { after: 90 }, children: [new TextRun({ text: 'Impresiones -> Consultas -> Consultas atendidas -> Casos firmados', font: 'Consolas', size: 19, bold: true })] }),
    '**Lo que casi siempre encuentra una firma la primera vez que mide esto:** el problema no está en el marketing, está entre «consulta» y «consulta atendida». Llamadas que nadie devuelve, formularios que esperan tres días, mensajes fuera de horario. Es dinero ya gastado que se pierde en el último metro.',
    '**Dos ventajas estructurales que tenemos y conviene explotar deliberadamente:**',
    '**1. Atención en español como diferenciador operativo, no decorativo.** No «hablamos español» sino que todo el proceso —intake, documentos, actualizaciones, facturación— funciona en español. La mayor parte del mercado lo ofrece a medias.',
    '**2. Alcance nacional (Hecho 1, Parte 0).** El contenido y el SEO no tienen que competir solo por «abogado de inmigración en Katy». Pueden competir por el tipo de caso, que es una búsqueda nacional y a menudo menos disputada.',
    '**Y el canal que hay que construir con más disciplina:** el referido. Es gratis, convierte mejor que ningún otro y **se puede fabricar**: pedirlo explícitamente al cerrar un caso con buen resultado, hacer fácil dejar una reseña, y mantener contacto con los clientes de naturalización, que son los que más hablan con su comunidad.',
  ]),
  pb(),
];

// ============================================================ PARTE 7
const parte7 = [
  h1('Parte 7. Estructura de costos'),
  h2('7.1 Composición típica (ilustrativa, % del ingreso)'),
  table(
    ['Partida', 'Firma corporativa', 'Firma de consumidor de volumen'],
    [
      ['Compensación de abogados no propietarios', '32 %', '22 %'],
      ['Personal de apoyo y operaciones', '12 %', '18 %'],
      ['Ocupación (oficinas)', '6 %', '4 %'],
      ['Tecnología y software', '4 %', '7 %'],
      ['Marketing y desarrollo de negocio', '3 %', '**15 %**'],
      ['Seguro de responsabilidad profesional (LPL)', '1.5 %', '2 %'],
      ['Bases de datos, biblioteca, KM', '2 %', '1 %'],
      ['Otros (viajes, formación, seguros, profesionales)', '4.5 %', '6 %'],
      ['**Total gastos**', '**65 %**', '**75 %**'],
      ['**Margen operativo (a los dueños)**', '**35 %**', '**25 %**'],
    ],
    [4560, 2400, 2400],
    { rightCols: [1, 2] },
  ),
  spacer(160),
  h3('Tres lecturas de negocio'),
  bullet('**La compensación domina siempre.** Cualquier plan de mejora de margen que no toque la mezcla de personal o la productividad por persona es cosmético.'),
  bullet('**La firma de consumidor gasta en marketing lo que la corporativa gasta en talento sénior.** Son dos negocios distintos que comparten licencia profesional. Nosotros estamos en la segunda columna: el marketing no es un gasto discrecional, es una línea estructural del modelo.'),
  bullet('**La ocupación está en descenso estructural.** El trabajo híbrido convirtió los metros cuadrados en una palanca real de margen por primera vez en décadas.'),

  h2('7.2 Los costos que casi nadie presupuesta'),
  bullet('**Trabajo no facturable de los dueños** — administración, marketing, formación, contratación. En una firma pequeña es enorme y es invisible.'),
  bullet('**Reproceso y desbordamiento de alcance** — el equivalente al *write-off* de la Parte 3.4.'),
  bullet('**Rotación** — reemplazar a una persona formada cuesta entre 1.5 y 2 veces su salario anual contando reclutamiento, curva de aprendizaje y productividad perdida. En una firma de cinco personas, perder a una es perder el 20 % de la capacidad.'),
  bullet('**Deuda incobrable y planes de pago incumplidos.**'),
  bullet('**Costo de conflicto** — los casos que hay que rechazar son ingreso que no aparece en ningún reporte.'),

  h2('7.3 Punto de equilibrio por persona'),
  p('En un modelo de horas se calcula así:'),
  mono([
    'Punto de equilibrio (horas) = (Salario + carga + overhead asignado)',
    '                              / (Tarifa x Realizacion)',
    '',
    'Ejemplo:  ($250,000 + $70,000 + $160,000) / ($550 x 0.88)',
    '       =  $480,000 / $484',
    '       ~= 992 horas facturables al ano',
  ]),
  spacer(140),
  p('Todo lo que esa persona facture por encima de ~992 horas es margen. Con un objetivo de 1,800 horas, la firma captura el excedente de ~808 horas. **Esa diferencia, multiplicada por el número de personas, es el negocio.**'),
  spacer(120),
  callout('Aplicación a nuestra firma — el equivalente en precio cerrado', [
    'Nuestra versión de la misma cuenta:',
    new Paragraph({ spacing: { after: 90 }, children: [new TextRun({ text: 'Casos de equilibrio = Costo total de la persona / Margen de contribucion por caso', font: 'Consolas', size: 19, bold: true })] }),
    'Ejemplo con un paralegal de costo cargado de $62,000 al año y un margen de contribución de $1,930 por caso (Parte 12, Ejemplo D): necesita **33 casos al año** solo para pagarse. Si gestiona 90, aporta ~$111,000 de margen.',
    'La conclusión es la misma que en el modelo de horas, con otro vocabulario: **el negocio está en la diferencia entre lo que cuesta una persona y lo que produce**, y esa diferencia se ensancha con proceso, no con esfuerzo.',
  ]),
  pb(),
];

// ============================================================ PARTE 8
const parte8 = [
  h1('Parte 8. Reparto entre los propietarios'),
  p('Cómo se reparte el margen entre los dueños determina la conducta de una firma más que cualquier documento de estrategia. La gente hace aquello por lo que se le paga.'),

  h2('8.1 Los sistemas clásicos'),
  table(
    ['Sistema', 'Cómo funciona', 'Qué incentiva', 'Riesgo'],
    [
      ['Lockstep puro', 'Los puntos suben solo con la antigüedad', 'Colaboración, referencias internas, la institución sobre el individuo', 'Los grandes generadores se van a firmas que pagan por producir'],
      ['Eat What You Kill', 'Cada uno cobra según lo que origina y ejecuta', 'Generación agresiva de negocio', 'Silos, acaparamiento de clientes, guerra por el crédito de origen'],
      ['Lockstep modificado', 'Base por antigüedad + componente variable', 'Equilibrio entre las dos fuerzas', 'Complejidad; discusión anual'],
      ['Black box', 'Un comité decide sin fórmula pública', 'Flexibilidad y criterio', 'Opacidad y política interna'],
      ['Puntos / unidades', 'Cada dueño tiene N puntos; utilidad ÷ puntos totales', 'Transparencia mecánica', 'La asignación de puntos es la pelea'],
    ],
    [1700, 2900, 2500, 2260],
  ),
  spacer(160),
  p('**Origination credit** —el crédito por haber traído al cliente— es el concepto más disputado del sector. Las firmas maduras lo separan en tres: crédito de **origen**, crédito de **relación** y crédito de **trabajo**, con porcentajes explícitos. Definirlo por escrito *antes* de que haya dinero en juego evita la mayoría de las rupturas de sociedad.'),

  spacer(120),
  callout('Aplicación a nuestra firma — lo que hay que decidir por escrito', [
    'En una PLLC pequeña esto parece prematuro. No lo es: es **exactamente ahora** cuando se decide barato, porque todavía no hay un caso concreto de por medio que le ponga cara y apellido a la discusión.',
    '**Las cuatro preguntas que el Company Agreement debe responder:**',
    '**1. ¿Cómo se paga a un miembro?** La mezcla entre *guaranteed payment* (pago fijo por el trabajo, deducible para la entidad) y **distribución** (reparto de utilidad según participación). No es lo mismo fiscalmente ni psicológicamente.',
    '**2. ¿Qué pasa cuando entre alguien nuevo?** Cómo se valora la participación, si hay periodo de prueba, qué se aporta y en cuánto tiempo.',
    '**3. ¿Qué pasa cuando alguien salga?** Voluntariamente, por incapacidad o por fallecimiento. Quién se queda con qué clientes, cómo se liquida la participación, en cuántos pagos. Sin esto escrito, una salida imprevista puede paralizar la firma.',
    '**4. ¿Cómo se reconoce traer clientes?** Aunque hoy el flujo venga sobre todo de marketing y no de una persona, en cuanto se incorpore un abogado con cartera propia esta pregunta llega sola. Mejor tener la respuesta antes que la pregunta.',
    '**Recomendación para nuestro perfil:** un sistema de puntos simple y explícito, con un componente pequeño ligado a la generación de negocio. Transparente, mecánico, y revisable una vez al año en una fecha fija. Lo peor para una firma pequeña no es un reparto imperfecto — es un reparto que nadie ha escrito y que cada uno recuerda distinto.',
  ]),
  pb(),
];

// ============================================================ PARTE 9
const parte9 = [
  h1('Parte 9. Capital, flujo de caja y cuenta fiduciaria'),
  p('Una firma legal tiene un balance atípico, y eso define sus límites de crecimiento más que su demanda.'),

  h2('9.1 El ciclo de conversión de caja'),
  mono([
    'Trabajo realizado -> WIP -> Factura emitida -> Cuentas por cobrar -> Cobro',
    '     dia 0        dia 0-45      dia 45           dia 45-105',
    '                  |___________________ LOCKUP ___________________|',
  ]),
  spacer(140),
  p('**Lockup = días de trabajo en curso + días de cuentas por cobrar.** Es el indicador de salud financiera más importante de una firma y el más ignorado.'),
  table(
    ['Lockup', 'Lectura'],
    [
      ['Menos de 60 días', 'Excelente'],
      ['60 – 90 días', 'Saludable'],
      ['90 – 120 días', 'Aceptable, con un costo de capital real'],
      ['Más de 120 días', 'La firma está financiando gratis a sus clientes'],
    ],
    [2400, 6960],
  ),
  spacer(140),
  p('Cada 10 días de lockup en una firma de $10 M de ingreso equivalen a unos **$274,000 de caja inmovilizada**. En una firma de $1 M, son ~$27,400 — que en una firma de $1 M puede ser la diferencia entre poder contratar y no poder.'),

  h2('9.2 Fuentes de capital'),
  bullet('**Aportes de los propietarios**, proporcionales a la participación.'),
  bullet('**Línea de crédito revolvente** para nómina y estacionalidad. Es la herramienta correcta para un negocio con ingresos irregulares y costos fijos regulares.'),
  bullet('**Utilidades retenidas** — prácticamente inexistentes por la fiscalidad pass-through. Esta es la restricción estructural de la Parte 1.'),
  bullet('**Inversión externa de no abogados** — prohibida en la mayoría de los estados, incluido Texas (Parte 14).'),

  h2('9.3 La cuenta fiduciaria (IOLTA)'),
  p('Los fondos del cliente —anticipos aún no devengados, fondos de acuerdos— se mantienen en una cuenta **IOLTA** separada de la operativa. **No son ingreso de la firma hasta que se devengan.**'),
  spacer(80),
  callout('Aplicación a nuestra firma — el punto de mayor riesgo operativo del documento', [
    'En una práctica de inmigración a precio cerrado con planes de pago, la gestión de la cuenta fiduciaria **no es un detalle contable: es el riesgo de licencia número uno.**',
    'La razón es estructural. El cliente paga por adelantado, a menudo en cuotas, por un trabajo que se entregará durante meses o años. Cada dólar recibido y aún no devengado es dinero del cliente, no de la firma. La tentación —y el error honesto más común en firmas pequeñas— es tratar la cuenta operativa y la fiduciaria como comunicantes cuando el mes viene apretado.',
    '**Los cuatro controles que deberían estar escritos y ser verificables:**',
    '**1. Conciliación de tres vías, mensual y con fecha.** Extracto bancario, libro mayor de la cuenta y suma de los saldos individuales por cliente. Los tres números deben coincidir. Si no coinciden, se investiga ese mes, no el siguiente.',
    '**2. Un criterio escrito de devengo.** Definir por tipo de caso en qué hitos el honorario se considera ganado y puede transferirse a la operativa (por ejemplo: firma del contrato / preparación completa / presentación / resolución). Sin hitos escritos, la transferencia se hace por intuición y la intuición no se puede auditar.',
    '**3. Cero desembolsos desde la fiduciaria que no sean del cliente titular de esos fondos.** Ni tasas de otro caso, ni gastos de la firma, ni siquiera temporalmente.',
    '**4. Separación de funciones donde sea posible.** Quien concilia no debería ser quien transfiere. En un equipo pequeño no siempre se puede, pero se puede al menos hacer que un segundo par de ojos revise la conciliación mensual.',
    '**Nota sobre las tasas gubernamentales:** el dinero que el cliente entrega para tasas de USCIS o EOIR es suyo hasta que se paga la tasa. Nunca es ingreso de la firma y no debe aparecer como tal en ninguna proyección.',
  ], { edge: ACCENT, fill: 'FBF6EC' }),
  spacer(140),
  h3('Implicación para las proyecciones'),
  p('**El saldo de la IOLTA no es liquidez de la firma.** Una proyección de caja que lo incluya está inflada. La caja disponible es la de la cuenta operativa, punto.'),
  pb(),
];

// ============================================================ PARTE 10
const parte10 = [
  h1('Parte 10. Tipologías de firma como modelos de negocio'),
  p('La clasificación clásica del sector, ampliada con las variables que de verdad cambian el negocio.'),
  table(
    ['Tipo', 'Tamaño', 'Modelo de ingreso', 'Apalancamiento', 'Marketing', 'Métrica dominante'],
    [
      ['**BigLaw**', '500+ abogados, global', 'Horas, portfolio', 'Alto (4:1+)', 'Rankings, paneles, relaciones', 'PEP, ingreso por abogado'],
      ['**Boutique**', '5–50, un área', 'Horas premium, éxito', 'Bajo (1:1)', 'Reputación, referidos de pares', 'Tarifa efectiva, margen por asunto'],
      ['**Mid-size regional**', '50–200, multiárea', 'Mixto', 'Medio (2:1)', 'Comunidad empresarial local', 'Utilización, realización'],
      ['**Small / solo**', '1–10', 'Flat fee, horas', 'Muy bajo', 'Referidos, local, SEO', 'Ingreso por abogado, cobranza'],
      ['**Plaintiff / contingencia**', '5–100', 'Contingencia', 'Medio, con paralegales', 'Publicidad masiva', 'Valor esperado de cartera'],
      ['**Consumidor de alto volumen**', '5–100', 'Flat fee', 'Alto en paralegales', 'SEO / PPC / comunidad', '**CAC, casos por mes, margen por caso**'],
      ['**Virtual / distribuida**', 'Variable', 'Reparto con el abogado', 'Nulo', 'Marca de plataforma', '% de retención de la plataforma'],
      ['**ALSP / servicios**', 'Variable', 'Precio por unidad', 'Muy alto, no abogados', 'B2B directo', 'Costo por unidad entregada'],
    ],
    [1900, 1500, 1600, 1500, 1600, 1260],
  ),
  spacer(160),

  h3('Las cuatro categorías clásicas, descritas'),
  bullet('**BigLaw** — grandes firmas globales de 500+ abogados. Salarios tabulados (*Cravath scale*), exigencia de ~2,000+ horas facturables al año, clientes corporativos multinacionales. Su negocio es **vender capacidad y cobertura de riesgo a escala**.'),
  bullet('**Boutique** — firmas pequeñas o medianas especializadas en una sola área: litigio de patentes, inmigración corporativa, quiebras, antimonopolio. Abogados de alto nivel, servicio ultraespecializado, competencia directa con BigLaw en su nicho y a menor precio. Su negocio es **vender profundidad**.'),
  bullet('**Mid-size** — firmas regionales de 50 a 200 abogados, multiárea, con cultura habitualmente más equilibrada. Su negocio es **ser suficientemente completa y suficientemente cercana**.'),
  bullet('**Solo / small** — de 1 a 10 abogados, estructura plana, atención directa al consumidor o a la PYME. Su negocio es **la relación personal más un precio comprensible** — y es el segmento donde la automatización cambia el margen más rápido.'),

  spacer(140),
  callout('Aplicación a nuestra firma — dónde estamos y hacia dónde se puede ir', [
    '**Hoy somos** una firma pequeña con vocación de **boutique de inmigración** (profundidad técnica real en habeas y en defensa) operando con **economía de consumidor de volumen** (precio cerrado, captación por marketing, entrega proceduralizada).',
    'Esa combinación no es una contradicción — es una posición **poco común y defendible**, siempre que las dos mitades no se estorben. La forma de que se estorben es conocida: el trabajo de alta complejidad consume la capacidad sénior y el volumen se degrada; o el volumen consume la atención y el trabajo complejo se entrega tarde.',
    '**La solución estructural es separar las dos líneas de producción**, no separar las personas: procesos distintos, plazos distintos, criterios de aceptación distintos, y —sobre todo— **no meter los casos de volumen y los de complejidad en la misma cola de trabajo.**',
    '**Los dos caminos de evolución posibles, y son excluyentes en el corto plazo:**',
    '**Camino A — Escala de volumen.** Doblar la máquina de casos repetibles, invertir en intake y automatización, crecer en paralegales antes que en abogados. Techo alto, margen por caso menor, exige disciplina operativa constante.',
    '**Camino B — Boutique de defensa y habeas.** Menos casos, ticket mucho mayor, admisiones federales en distritos clave, reputación como activo principal. Techo más bajo en volumen, margen por caso muy superior, exige talento sénior escaso.',
    'Se puede hacer B financiado por A, que es probablemente la ruta natural. Lo que no funciona es no elegir, porque cada camino pide una contratación distinta, un marketing distinto y un sistema de precios distinto.',
  ]),
  pb(),
];

// ============================================================ PARTE 11
const parte11 = [
  h1('Parte 11. Business Model Canvas de la firma'),
  p('Los nueve bloques del modelo, aplicados a nuestra firma.'),
  spacer(80),
  table(
    ['Bloque', 'Contenido'],
    [
      ['**1. Segmentos de cliente**', 'Familias en proceso de reunificación · Solicitantes de naturalización · Solicitantes de asilo · Personas en procedimiento de remoción · Personas detenidas y sus familias · Empleadores con necesidad de cumplimiento y patrocinio'],
      ['**2. Propuesta de valor**', 'Precio cerrado y conocido de antemano · Comunicación proactiva sobre el estado del caso · Competencia técnica demostrable en materia compleja (habeas, defensa) · Atención íntegramente en español, no solo en la conversación · Alcance nacional en trámites ante agencias federales'],
      ['**3. Canales**', 'Referidos de clientes · Comunidad y alianzas locales · SEO y contenido en español · Publicidad de pago · Redes sociales y video · Referidos de otros abogados'],
      ['**4. Relación con el cliente**', 'Consulta inicial estructurada · Portal o canal único de actualizaciones · Plan de pagos gestionado · Contacto posterior al cierre para renovaciones y referidos'],
      ['**5. Fuentes de ingreso**', 'Precio cerrado por tipo de caso (núcleo) · Servicios de alcance limitado (preparación de habeas) · Retainer de cumplimiento para empleadores (a desarrollar) · Plan de acompañamiento familiar (a desarrollar) · Formación y materiales (a desarrollar)'],
      ['**6. Recursos clave**', 'Licencia y buen estado del abogado titular · Admisiones federales · Reputación en la comunidad · Biblioteca de precedentes, guías de la BIA y plantillas · Paralegal formado en habeas federal · Capital de trabajo'],
      ['**7. Actividades clave**', 'Consulta y evaluación de elegibilidad · Preparación y presentación de solicitudes · Representación en corte de inmigración · Preparación de habeas y escritos federales · Gestión del conocimiento y automatización · Captación y conversión'],
      ['**8. Socios clave**', 'Abogados corresponsales con admisión en distritos federales · Peritos (psicológicos, país de origen, médicos) · Traductores certificados · Proveedores de software de gestión de casos · Aseguradora de responsabilidad profesional · Banco (operativa, IOLTA y línea de crédito) · Organizaciones comunitarias'],
      ['**9. Estructura de costos**', 'Nómina y contratistas (dominante) · Marketing y adquisición (estructural, ~15 %) · Tecnología y software · Ocupación · Seguro LPL · Tasas y desembolsos (pass-through, no son costo propio) · Formación y colegiación'],
    ],
    [2200, 7160],
  ),
  pb(),
];

// ============================================================ PARTE 12
const parte12 = [
  h1('Parte 12. Unit economics: cuatro ejemplos trabajados'),
  p('Los números que siguen son ilustrativos. Su función es enseñar la mecánica; los valores reales se sustituyen con los datos del Anexo A.'),

  h2('12.1 Ejemplo A — Cómo se ve el modelo tradicional (referencia)'),
  p('Un socio propietario de una firma corporativa mediana, para tener la referencia del modelo que no somos:'),
  mono([
    'Horas propias:  1,400 h x $850 x 0.90 realizacion   = $ 1,071,000',
    'Margen de 4 asociados (Parte 3.2):  4 x $361,200    = $ 1,444,800',
    '---------------------------------------------------------------',
    'Contribucion bruta                                    $ 2,515,800',
    '- Overhead propio (espacio, apoyo, desarrollo)        -$   310,000',
    '---------------------------------------------------------------',
    'Contribucion neta al fondo de utilidad                $ 2,205,800',
  ]),
  spacer(140),
  p('**La lección:** dos tercios de lo que aporta un socio no vienen de sus propias horas, sino de su capacidad de apalancar equipo y de originar trabajo. El que solo trabaja bien gana bien; el que además genera y delega gana en otra escala.'),

  h2('12.2 Ejemplo B — Un caso de inmigración a precio cerrado'),
  p('Este es nuestro producto típico. La palanca no es el precio: es el costo de entrega.'),
  mono([
    'Precio del encargo                                 $ 4,200',
    '- CAC mezclado (SEO + pago + referidos)            -$   650',
    '- Costo de entrega (abogado 2 h + paralegal 4.5 h) -$   780',
    '- Overhead asignado                                -$   840',
    '  Tasas gubernamentales: pass-through, neutro          n/a',
    '--------------------------------------------------------',
    'Margen de contribucion por caso                    $ 1,930   (46 %)',
  ]),
  spacer(120),
  p('**Ahora la misma cuenta con el proceso mejorado** — mismo precio, mismo cliente, mismo resultado:'),
  mono([
    'Precio del encargo                                 $ 4,200',
    '- CAC (mas peso de referidos)                      -$   450',
    '- Costo de entrega (abogado 1 h + paralegal 3.5 h) -$   520',
    '- Overhead asignado                                -$   840',
    '--------------------------------------------------------',
    'Margen de contribucion por caso                    $ 2,390   (57 %)',
    '',
    'Diferencia por caso:  +$460   ->  +24 % de margen',
    'A 45 casos/mes:       +$248,400 al ano, sin subir precios',
  ]),
  spacer(140),
  callout('Este es el argumento central del documento', [
    'No subimos el precio. No conseguimos más clientes. No trabajamos más horas. **Movimos dos números operativos** —el peso del canal de referidos y las horas de entrega— y el margen anual subió casi un cuarto de millón.',
    'En un modelo de hora facturable, reducir las horas de entrega **reduce** el ingreso. En nuestro modelo, lo aumenta. Es literalmente la ventaja estructural del precio cerrado, y es la razón por la que invertir en proceso y automatización tiene aquí un retorno que en una firma de horas no tendría.',
  ]),
  spacer(160),

  h2('12.3 Ejemplo C — El producto de alcance limitado (preparación de habeas)'),
  p('Un producto de servicio limitado, altamente repetible, ejecutado por paralegal con supervisión de abogado:'),
  mono([
    'Precio del encargo                                 $ 2,800',
    '- CAC (mayoritariamente referido y comunidad)      -$   300',
    '- Preparacion (paralegal 8 h a $34/h cargado)      -$   272',
    '- Supervision y revision (abogado 1.5 h)           -$   180',
    '- Overhead asignado                                -$   560',
    '--------------------------------------------------------',
    'Margen de contribucion                             $ 1,488   (53 %)',
    '',
    'Con biblioteca de precedentes madura y automatizacion:',
    'Preparacion baja a 5 h, supervision a 1 h  ->  margen $1,714  (61 %)',
  ]),
  spacer(140),
  bullet('**Por qué este producto es económicamente atractivo:** entregable acotado, sin comparecencias, sin calendario judicial que gestionar, sin la restricción de admisión en el distrito, y con una curva de aprendizaje que se captura en plantillas. Cada caso hace más barato al siguiente.'),
  bullet('**Su límite real no es económico, es de cumplimiento:** ver el punto de verificación de la Parte 4.2. Antes de escalar este producto conviene tener la matriz por distrito resuelta, porque escalar primero y verificar después convierte una casilla pendiente en un problema multiplicado.'),

  h2('12.4 Ejemplo D — La firma completa: punto de equilibrio y palancas'),
  mono([
    'A escala de firma',
    '  Casos nuevos al mes                                     45',
    '  Precio promedio                                    $ 4,200',
    '  Ingreso anual                                      $ 2.27 M',
    '  Margen de contribucion anual (a $1,930/caso)       $ 1.04 M',
    '  Costos fijos anuales                               $ 600,000',
    '  Utilidad operativa                                 $ 442,000',
    '',
    '  Casos necesarios para cubrir los costos fijos:',
    '     $600,000 / $1,930 = 311 casos/ano  ~  26 casos/mes',
  ]),
  spacer(140),
  p('**Las cuatro palancas, ordenadas por impacto real:**'),
  table(
    ['#', 'Palanca', 'Movimiento', 'Efecto', '¿Cuesta dinero?'],
    [
      ['1', 'Conversión de la consulta', '35 % → 45 %', '**+29 % de casos** con el mismo gasto de marketing', 'No — es proceso y disponibilidad'],
      ['2', 'Horas de entrega', '6.5 h → 4.5 h', '+$210 por caso (+11 %)', 'Inversión inicial en plantillas y formación'],
      ['3', 'Precio', '+8 %', '+$336 por caso (+17 %)', 'No, pero tiene riesgo comercial'],
      ['4', 'CAC', '$650 → $450', '+$200 por caso (+10 %)', 'No — es mezcla de canal hacia referidos'],
    ],
    [500, 2100, 1500, 3160, 2100],
  ),
  spacer(140),
  callout('La palanca número 1 es casi siempre la más grande y casi nunca la que se atiende', [
    'Aumentar la conversión de consulta del 35 % al 45 % produce el mismo efecto que aumentar el presupuesto de marketing en un 29 % — y no cuesta nada, porque ese dinero **ya se gastó** en generar la consulta.',
    'Los tres puntos donde se pierde, por orden de frecuencia: **el tiempo de respuesta** (una consulta contestada en una hora convierte mucho mejor que una contestada al día siguiente), **quién atiende** (la persona equivocada entre dos audiencias), y **si se pide el cierre** (muchas consultas terminan en «piénselo y nos llama» en lugar de en una decisión).',
    'Antes de gastar un dólar más en publicidad, medir estos tres.',
  ]),
  pb(),
];

// ============================================================ PARTE 13
const parte13 = [
  h1('Parte 13. Cuadro de mando'),
  h2('13.1 El panel completo'),
  h3('Financieros'),
  table(
    ['Indicador', 'Definición', 'Por qué importa'],
    [
      ['Ingreso por abogado', 'Ingreso ÷ número de abogados', 'Comparabilidad y productividad'],
      ['Utilidad por propietario', 'Utilidad ÷ número de propietarios', 'La métrica de referencia del sector (PEP)'],
      ['Margen operativo', 'Utilidad ÷ ingreso', 'Salud del modelo'],
      ['Realización de cobro', 'Cobrado ÷ facturado o comprometido', 'La fuga más común'],
      ['Lockup', 'Días de trabajo en curso + días por cobrar', 'La caja real'],
      ['Margen por tipo de caso', 'Utilidad del caso ÷ precio del caso', 'Dice qué producto sostiene la firma'],
    ],
    [2200, 3400, 3760],
  ),
  spacer(140),
  h3('Operativos'),
  table(
    ['Indicador', 'Definición'],
    [
      ['Casos activos por persona', 'Carga real de trabajo; predice la calidad antes de que se caiga'],
      ['Horas de entrega por tipo de caso', 'La palanca 2 de la Parte 12'],
      ['Tasa de reproceso', '% de casos con RFE, rechazo por forma o corrección evitable'],
      ['Desbordamiento de alcance', '% de casos que excedieron el trabajo cotizado'],
      ['Ciclo del caso', 'Días desde la firma hasta la presentación (lo que controlamos)'],
    ],
    [3400, 5960],
  ),
  spacer(140),
  h3('Comerciales'),
  table(
    ['Indicador', 'Definición'],
    [
      ['CAC por canal', 'Gasto del canal ÷ casos firmados de ese canal'],
      ['Tasa de conversión de consulta', 'Casos firmados ÷ consultas atendidas'],
      ['Tiempo de primera respuesta', 'Minutos u horas entre contacto y primera respuesta humana'],
      ['% de ingreso por referido', 'La salud del canal más barato'],
      ['Valor de vida del cliente (LTV)', 'Margen acumulado esperado por cliente, incluidos referidos'],
      ['Relación LTV : CAC', 'Referencia sana: superior a 3 : 1'],
    ],
    [3400, 5960],
  ),
  spacer(160),

  callout('Aplicación a nuestra firma — los cinco números del lunes por la mañana', [
    'Un panel de veinte indicadores no se mira. Uno de cinco, sí. Estos cinco explican casi todo lo que puede ir bien o mal:',
    '**1. Casos firmados en el mes** — la máquina de arriba del embudo.',
    '**2. Tasa de conversión de consulta** — la palanca de mayor retorno de la firma.',
    '**3. Caja operativa disponible y semanas de nómina que cubre** — no el saldo total, y nunca incluyendo la IOLTA.',
    '**4. Cobros del mes frente a lo comprometido en planes de pago** — nuestra realización de cobro.',
    '**5. Margen de contribución por tipo de caso** — el número que dice qué producto empujar y cuál revisar.',
    'Media hoja, una vez al mes, misma fecha. La disciplina de mirarlos vale más que la sofisticación de calcularlos.',
    '**Y dos señales de alarma que hay que vigilar aparte:** la **concentración de canal** (si el 70 % de los casos viene de una sola fuente, esa fuente es un punto único de fallo) y el **lockup creciente**, que es el primer síntoma de casi cualquier problema de gestión, mucho antes de que se vea en la utilidad.',
  ]),
  pb(),
];

module.exports = { parte5, parte6, parte7, parte8, parte9, parte10, parte11, parte12, parte13 };

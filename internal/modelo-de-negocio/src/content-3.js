const { Paragraph, TextRun, PageBreak } = require('docx');
const H = require('../../lib/build-helpers');
const { h1, h2, h3, p, bullet, check, numbered, spacer, mono, callout, table, ACCENT } = H;

const pb = () => new Paragraph({ children: [new PageBreak()] });

// ============================================================ PARTE 14
const parte14 = [
  h1('Parte 14. Riesgos y restricciones regulatorias'),
  p('Estas no son notas al pie. **Son las que hacen que este modelo de negocio no pueda copiar el de una empresa de servicios normal.** Un inversor que lea el resto del documento sin esta parte sacará conclusiones equivocadas sobre por qué el sector se comporta como se comporta.'),

  h2('14.1 Las restricciones que definen el sector'),
  table(
    ['Restricción', 'Qué prohíbe o exige', 'Consecuencia para el modelo'],
    [
      ['**Independencia profesional**\n(reparto de honorarios y propiedad por no abogados)', 'Compartir honorarios con no abogados; que un no abogado sea dueño de la firma', '**No hay capital de riesgo, no hay salida a bolsa, no hay inversores externos.** El crecimiento se autofinancia. Es la restricción más determinante de todas'],
      ['**Práctica no autorizada del derecho (UPL)**', 'Que un no abogado dé asesoría legal', 'Limita cuánto se puede delegar en personal y en software. Define el borde del producto'],
      ['**Publicidad y captación**', 'Afirmaciones engañosas; contacto directo no solicitado con ánimo de lucro', 'Condiciona todo el marketing, especialmente al consumidor'],
      ['**Honorarios**', 'Honorarios irrazonables; exige forma escrita en ciertos supuestos', 'El acuerdo de honorarios debe ser escrito, específico y comprensible'],
      ['**Conflictos de interés**', 'Representación adversa; se imputan a toda la firma', 'Cada cliente nuevo **cierra la puerta** a determinados clientes futuros'],
      ['**Confidencialidad**', 'Divulgación de información del cliente', 'Determina qué herramientas de nube y de IA son admisibles y con qué configuración'],
      ['**Bienes del cliente**', 'Mezclar fondos del cliente con los de la firma', 'Cuenta fiduciaria obligatoria; el error contable es materia disciplinaria (Parte 9.3)'],
      ['**Supervisión**', 'Responsabilidad del abogado por el trabajo de asistentes no abogados', 'Se aplica al paralegal — y por analogía, a las salidas de un sistema automatizado'],
      ['**Práctica multijurisdiccional**', 'Ejercer donde no se está admitido', 'Limita la expansión; obliga a co-counsel en corte federal'],
    ],
    [2400, 3100, 3860],
  ),
  spacer(160),

  callout('Nota de precisión sobre la numeración de las reglas', [
    'La mayoría de la literatura sobre firmas legales cita las **ABA Model Rules**, que son un modelo, no derecho vigente en ningún sitio. Lo que nos obliga a nosotros son las **Texas Disciplinary Rules of Professional Conduct**, cuya numeración **no coincide** con la del modelo ABA en varios puntos relevantes: la custodia de bienes del cliente y la confidencialidad, por ejemplo, están numeradas distinto en Texas que en el modelo ABA.',
    'Por eso este documento describe las restricciones **por su contenido y no por su número**. Antes de apoyar cualquier decisión operativa en una de ellas, hay que leer el texto vigente de la regla de Texas correspondiente, más la normativa federal aplicable a la práctica ante EOIR y USCIS. Las reglas cambian; el contenido conceptual de esta tabla cambia mucho más despacio.',
  ], { edge: ACCENT, fill: 'FBF6EC' }),
  spacer(160),

  h2('14.2 Las excepciones que están reescribiendo el sector'),
  p('La prohibición de propiedad externa se ha empezado a agrietar, y ahí es por donde está entrando capital institucional a un sector que llevaba un siglo cerrado:'),
  bullet('**Arizona** eliminó su versión de la regla de independencia profesional y permite **Alternative Business Structures (ABS)** con propiedad de no abogados.'),
  bullet('**Utah** ha operado un *regulatory sandbox* con entidades autorizadas de propiedad mixta.'),
  bullet('**Washington D.C.** admite desde hace décadas una participación limitada de no abogados que trabajen en la firma.'),
  p('**Texas no es una de ellas.** Para nosotros la restricción sigue íntegra, y conviene tenerlo claro antes de plantear cualquier estructura que involucre socios capitalistas no abogados. Estas jurisdicciones importan como lugar donde observar qué modelos funcionan cuando se levanta la restricción, no como algo que podamos aprovechar hoy desde Texas. Verificar el estado actual antes de basar cualquier decisión en ello.'),

  h2('14.3 Riesgos específicos de la práctica de inmigración'),
  bullet('**Competencia ilegal («notarios» y consultores no autorizados).** Es un factor de mercado, no solo un problema ético ajeno: compite por nuestro cliente con precios que un abogado no puede igualar, y deja detrás casos dañados que llegan a nosotros más caros de arreglar. **Implicación de negocio:** parte de nuestro marketing tiene que ser educativo —explicar por qué un abogado y qué se está comprando— porque el cliente muchas veces no distingue las dos ofertas.'),
  bullet('**Exposición a plazos perentorios.** En inmigración un plazo perdido puede ser irreversible para la persona. Es el mayor riesgo de mala praxis de esta práctica y exige un sistema de calendario con doble control, no la memoria de nadie.'),
  bullet('**Volatilidad normativa y política.** Los criterios de elegibilidad, los tiempos de proceso y las prioridades de aplicación cambian con cada administración. **Implicación de negocio:** la cartera de tipos de caso debe estar diversificada deliberadamente; una firma concentrada en un solo tipo de alivio es una firma con un solo cliente.'),
  bullet('**Disciplina ante EOIR y USCIS.** La práctica ante estas agencias tiene su propio régimen disciplinario, adicional al del colegio estatal. Son dos exposiciones, no una.'),
  bullet('**Expectativa del cliente sobre el resultado.** En un área donde el resultado depende de un juez o de un examinador, la gestión de expectativas por escrito es protección tanto del cliente como de la firma. Es también, en la práctica, la principal causa de quejas.'),

  h2('14.4 Riesgos de negocio no regulatorios'),
  bullet('**Concentración** — de canal de captación, de tipo de caso, de personas clave. En una firma pequeña la concentración de personas es la más peligrosa: si una sola persona sabe hacer algo, la firma no sabe hacerlo.'),
  bullet('**Ciclicidad y dependencia política** — a diferencia de una firma multiárea, no tenemos una práctica contracíclica que compense. La línea empresarial es lo más parecido a una cobertura.'),
  bullet('**Sucesión** — la mayoría de las firmas pequeñas no tienen plan. El valor del negocio muere con el titular si no se construye antes: procesos documentados, relaciones institucionalizadas, marca que no dependa de un nombre.'),
  bullet('**Ciberseguridad** — las firmas son objetivo prioritario porque concentran información sensible de muchas personas. En inmigración, esa información es especialmente delicada.'),
  bullet('**Mala praxis** — una reclamación puede exceder la cobertura y alcanzar patrimonio personal.'),
  pb(),
];

// ============================================================ PARTE 15
const parte15 = [
  h1('Parte 15. Palancas de crecimiento y el efecto de la automatización'),

  h2('15.1 Las cinco palancas, ordenadas por retorno'),
  numbered('**Cobro y disciplina de precio.** Cero inversión, retorno inmediato. Empezar siempre aquí.'),
  numbered('**Conversión de la consulta.** La palanca de mayor retorno documentada en la Parte 12. Es proceso, no dinero.'),
  numbered('**Productización del trabajo repetible.** Convertir los casos recurrentes en productos con playbook y precio cerrado. Inversión media, retorno compuesto: cada caso abarata el siguiente.'),
  numbered('**Ingreso recurrente.** Migrar clientes empresariales a retainer. Cambia el perfil financiero completo de la firma.'),
  numbered('**Capacidad y apalancamiento.** Contratar, abrir línea, expandir. La más cara y la más lenta. Hacerla al final, no al principio — contratar para resolver un problema de proceso es la forma más cara de no resolverlo.'),

  h2('15.2 La automatización rompe el vínculo entre horas y valor'),
  p('El modelo tradicional descansa sobre una identidad: **más trabajo = más horas = más ingreso.** La automatización rompe esa identidad, y al romperla reordena el negocio.'),
  spacer(80),
  h3('Lo que se comprime'),
  bullet('**La base de la pirámide.** Investigación jurídica, revisión documental de primer paso, resúmenes, diligencia rutinaria, primeros borradores: el trabajo del asociado júnior y del abogado por contrato.'),
  bullet('**El apalancamiento como fuente principal de margen.** Si una persona con buenas herramientas hace lo que antes hacían tres, la firma necesita menos gente por dueño y **el ingreso por hora facturada cae aunque el valor entregado suba**. Para una firma de horas, eso es una amenaza directa al modelo.'),
  spacer(60),
  h3('Lo que se revaloriza'),
  bullet('**Juicio, estrategia y responsabilidad.** Lo que el cliente no puede automatizar es la decisión y, sobre todo, **quién responde por ella**. Un despacho no vende documentos: vende que alguien con licencia pone su nombre detrás.'),
  bullet('**La relación y la confianza.** El canal de referidos gana peso relativo frente al canal de pago.'),
  bullet('**El diseño de procesos.** La gestión del conocimiento pasa de función de apoyo a fuente directa de margen.'),
  spacer(100),

  callout('La consecuencia estratégica, en una frase', [
    'En un mundo donde el trabajo toma menos horas, **facturar por horas es facturar la propia obsolescencia.**',
    'La firma que automatiza y sigue cobrando por hora se cobra a sí misma el ahorro con signo negativo: hace el trabajo en la mitad de tiempo y factura la mitad. La firma que automatiza y cobra por entregable convierte cada mejora de eficiencia en margen — exactamente la cuenta del Ejemplo B de la Parte 12.',
    '**Nosotros ya estamos del lado correcto de esa línea.** Ese es probablemente el activo estratégico menos reconocido de la firma: el modelo de ingreso que ya usamos es el que el resto del sector va a tener que adoptar a la fuerza.',
  ]),
  spacer(160),

  h2('15.3 Las tres condiciones para capturar esa ventaja'),
  h3('1. El carril de formación hay que rediseñarlo a propósito'),
  p('Si la automatización absorbe el trabajo con el que tradicionalmente se formaban los abogados y paralegales júniors, hay que construir deliberadamente cómo se forman ahora: revisión supervisada de salidas automatizadas, exposición temprana al cliente, rotaciones estructuradas. **Un modelo que no forma a su siguiente generación se queda sin sénior en diez años**, y no lo nota hasta que es tarde.'),

  h3('2. La supervisión tiene que ser real y documentada'),
  p('La responsabilidad del abogado por el trabajo que sale con su nombre no cambia porque una parte la haya preparado un sistema. En términos regulatorios es el mismo deber de supervisión que se aplica al personal no abogado. En términos prácticos significa: **quién revisó qué, cuándo, y qué cambió.** Un registro simple de revisión no es burocracia — es la prueba de que el deber se cumplió.'),

  h3('3. Confidencialidad antes que conveniencia'),
  p('Qué información del cliente entra en qué herramienta, con qué configuración de retención y bajo qué contrato, es una decisión de cumplimiento previa a cualquier decisión de productividad. En inmigración la información es especialmente sensible: estatus, antecedentes, situación familiar, salud. **La regla práctica: si no se puede explicar al cliente qué pasa con sus datos, no se usa la herramienta.**'),

  spacer(140),
  callout('Aplicación a nuestra firma — una ventaja que ya existe y hay que capitalizar', [
    'La firma ya está construyendo herramientas y materiales de práctica: guías de casos de la BIA, biblioteca de habeas, plantillas y automatización. Desde el punto de vista de este documento, eso **no es un proyecto paralelo: es la inversión con mayor retorno del modelo**, porque cada hora que baja el costo de entrega se convierte íntegra en margen (Parte 12.2).',
    '**Tres formas de monetizar ese trabajo, en orden de dificultad:**',
    '**1. Interna** — bajar el costo de entrega por caso. Es la de retorno más seguro y la que ya está en marcha. Empezar por los dos tipos de caso de mayor volumen y medir horas antes y después.',
    '**2. Producto de formación** — las guías y materiales ya producidos tienen valor para otros profesionales. Es inventario de conocimiento que hoy no genera ingreso.',
    '**3. Licencia a otras firmas** — el paso más ambicioso y el que más cuidado requiere en su estructura, por las reglas sobre reparto de honorarios y práctica no autorizada. Viable, pero hay que diseñarlo con esa restricción desde el principio, no adaptarlo después.',
    '**La medida que demuestra que funciona:** horas de entrega por tipo de caso, medidas antes y después. Si no baja, la automatización es entretenimiento caro. Si baja, cada hora ahorrada aparece en la línea de utilidad.',
  ]),
  pb(),
];

// ============================================================ PARTE 16
const parte16 = [
  h1('Parte 16. Hoja de ruta 0–24 meses'),
  p('Ordenada por retorno sobre esfuerzo, no por ambición. Cada fase supone que la anterior está funcionando.'),

  h2('Fase 1 — Instrumentación (meses 0–3)'),
  p('*No se puede gestionar lo que no se mide. Esta fase no mejora nada; hace visible todo lo demás.*'),
  check('Registrar el tiempo real en **todos** los casos, aunque sean de precio cerrado. No para facturarlo: para conocer el costo de entrega por tipo de caso.'),
  check('Calcular la línea base: margen por tipo de caso, tasa de conversión de consulta, CAC por canal, días de cobro.'),
  check('Instalar el panel de cinco números de la Parte 13 y fijar una fecha mensual para revisarlo.'),
  check('Auditar la cuenta fiduciaria: conciliación de tres vías y criterio escrito de devengo (Parte 9.3).'),
  check('Revisar la cobertura del seguro de responsabilidad frente al perfil real de riesgo.'),
  check('Resolver la matriz por distrito federal sobre divulgación en escritos preparados por abogado (Parte 4.2).'),

  h2('Fase 2 — Higiene financiera y de proceso (meses 3–6)'),
  p('*Las ganancias más baratas del documento. Ninguna requiere inversión.*'),
  check('Proceso de intake con responsable único, objetivo de tiempo de primera respuesta y guion de consulta.'),
  check('Medir la conversión de consulta semanalmente. Es la palanca número uno (Parte 12.4).'),
  check('Política escrita de alcance: qué incluye y qué no incluye cada tipo de encargo, con la conversación de ampliación pactada de antemano.'),
  check('Gestión activa de planes de pago: recordatorios automáticos, escalado a 15/30/45 días.'),
  check('Criterio escrito de aceptación y rechazo de casos. Decir que no a tiempo es una decisión de margen.'),
  check('Documento de una página sobre quién decide qué (Parte 1.2).'),

  h2('Fase 3 — Productización (meses 6–12)'),
  p('*Convertir servicio en producto. Aquí empieza el retorno compuesto.*'),
  check('Identificar los cinco tipos de caso más frecuentes y medir sus horas reales de entrega.'),
  check('Construir para cada uno: playbook, plantillas, checklist de documentos y guion de comunicación con el cliente.'),
  check('Recalcular el precio de cada producto con margen objetivo declarado.'),
  check('Automatizar con revisión humana los dos de mayor volumen, con registro de revisión.'),
  check('Medir horas de entrega antes y después. Ese delta es el retorno del trimestre.'),
  check('Mover trabajo hacia el nivel más bajo que pueda hacerlo bien con supervisión adecuada.'),

  h2('Fase 4 — Motor de ingresos (meses 12–18)'),
  p('*De transaccional a recurrente.*'),
  check('Diseñar y lanzar el producto de cumplimiento para empleadores (Parte 4.3).'),
  check('Piloto con tres a cinco empleadores del área, con precio anual.'),
  check('Formalizar el programa de referidos: pedirlo, medirlo, agradecerlo.'),
  check('Reducir el canal con peor CAC y reasignar ese presupuesto al de mejor conversión.'),
  check('Contactar la base de clientes de naturalización cerrados: es la que más habla con su comunidad.'),
  check('Evaluar el producto de formación con los materiales ya existentes.'),

  h2('Fase 5 — Estructura y escala (meses 18–24)'),
  p('*Solo después de que lo anterior funcione. Escalar un proceso roto multiplica el problema.*'),
  check('Revisar y actualizar el Company Agreement: admisión, salida, reparto, sucesión (Parte 8).'),
  check('Decidir explícitamente entre el Camino A y el Camino B de la Parte 10, o la secuencia entre ambos.'),
  check('Contratar según el orden de la Parte 2: apoyo e intake antes que abogado.'),
  check('Evaluar admisiones federales adicionales o acuerdos de co-counsel para los distritos que importen.'),
  check('Plan de sucesión y de continuidad: qué pasa con la firma y con los casos si el titular no está.'),
  check('Revisar el objetivo de mezcla de cartera y ajustar la inversión de marketing en consecuencia.'),
  pb(),
];

// ============================================================ RESUMEN
const resumen = [
  h1('Resumen ejecutivo'),
  h3('Qué es el negocio'),
  p('Una firma legal estadounidense vende **transferencia de riesgo y juicio profesional**, organizada como una entidad regulada cuya propiedad está reservada a abogados. Nosotros somos una PLLC de Texas dedicada a inmigración y a habeas corpus federal, operando a precio cerrado sobre un mercado que —para la práctica ante agencias federales— es nacional, no local.'),

  h3('Cómo gana dinero'),
  p('El modelo tradicional multiplica cinco palancas: tarifa × utilización × apalancamiento × control de gasto × velocidad de cobro. La jerarquía de la Parte 2 no es un organigrama: es la máquina que genera ese margen. En nuestro modelo la ecuación se reescribe como **casos × (precio − costo de entrega) − costos fijos**, y la palanca dominante deja de ser la tarifa y pasa a ser **el costo de entrega por caso**.'),

  h3('Dónde está la restricción'),
  p('No es la demanda. Son tres cosas: el **capital** (la prohibición de propiedad externa y la fiscalidad pass-through impiden capitalizar como una empresa normal), la **caja** (el ciclo entre trabajo entregado y dinero cobrado) y la **capacidad operativa** (cuántos casos podemos entregar bien, no cuántos podemos captar).'),

  h3('Dónde está la oportunidad'),
  p('En dejar de vender tiempo — algo que en buena medida ya hicimos. La productización del trabajo repetible, el ingreso recurrente del segmento empresarial y la automatización bajo precio cerrado convierten eficiencia en margen, en lugar de convertirla, como hace la hora facturable, en pérdida de ingreso. El Ejemplo B de la Parte 12 lo cuantifica: dos números operativos movidos, +24 % de margen, sin subir precios ni captar un cliente más.'),

  h3('Qué medir a partir del lunes'),
  p('**Casos firmados · tasa de conversión de consulta · caja operativa en semanas de nómina · cobros frente a lo comprometido · margen de contribución por tipo de caso.** Cinco números, media hoja, una vez al mes. Explican casi todo lo que puede ir bien o mal en este modelo.'),

  h3('Y la decisión que este documento deja abierta'),
  p('**Camino A o Camino B** (Parte 10): escalar la máquina de volumen, o construir la boutique de defensa y habeas. Probablemente A financiando B. Lo que no funciona es no elegir, porque cada camino pide una contratación distinta, un marketing distinto y una estructura de precios distinta — y hacer las dos cosas a la vez con los recursos de una es la forma más común de hacer ninguna.'),
  pb(),
];

// ============================================================ ANEXO
const anexo = [
  h1('Anexo A. Datos a levantar'),
  p('Este documento está construido sobre supuestos ilustrativos. Sustituirlos por datos reales es el trabajo de la Fase 1. La columna de la derecha es para completar.'),
  spacer(100),
  h2('A.1 Volumen y precio'),
  table(
    ['Dato', 'Periodo', 'Valor real'],
    [
      ['Consultas recibidas', 'Mensual, últimos 12 meses', ''],
      ['Consultas efectivamente atendidas', 'Mensual', ''],
      ['Casos firmados', 'Mensual', ''],
      ['Tasa de conversión (firmados ÷ atendidas)', 'Mensual', ''],
      ['Precio promedio por tipo de caso', 'Por tipo', ''],
      ['Mezcla de cartera (% por tipo de caso)', 'Anual', ''],
    ],
    [4560, 2600, 2200],
  ),
  spacer(160),
  h2('A.2 Costo de entrega'),
  table(
    ['Dato', 'Periodo', 'Valor real'],
    [
      ['Horas de abogado por tipo de caso', 'Promedio', ''],
      ['Horas de paralegal por tipo de caso', 'Promedio', ''],
      ['Costo cargado por hora de cada rol', 'Anual', ''],
      ['% de casos con reproceso (RFE, rechazo, corrección)', 'Trimestral', ''],
      ['% de casos que excedieron el alcance cotizado', 'Trimestral', ''],
    ],
    [4560, 2600, 2200],
  ),
  spacer(160),
  h2('A.3 Adquisición'),
  table(
    ['Dato', 'Periodo', 'Valor real'],
    [
      ['Gasto de marketing por canal', 'Mensual', ''],
      ['Casos firmados atribuidos a cada canal', 'Mensual', ''],
      ['CAC por canal', 'Calculado', ''],
      ['% de casos provenientes de referido', 'Mensual', ''],
      ['Tiempo de primera respuesta a una consulta', 'Promedio', ''],
    ],
    [4560, 2600, 2200],
  ),
  spacer(160),
  h2('A.4 Finanzas'),
  table(
    ['Dato', 'Periodo', 'Valor real'],
    [
      ['Ingreso cobrado', 'Mensual', ''],
      ['Costos fijos mensuales', 'Mensual', ''],
      ['Caja operativa disponible (sin IOLTA)', 'Semanal', ''],
      ['Semanas de nómina que cubre la caja', 'Calculado', ''],
      ['Comprometido en planes de pago frente a cobrado', 'Mensual', ''],
      ['Saldo de la cuenta fiduciaria y conciliación de tres vías', 'Mensual', ''],
      ['Días promedio entre firma del caso y cobro íntegro', 'Calculado', ''],
    ],
    [4560, 2600, 2200],
  ),
  spacer(200),
  callout('Cómo usar este anexo', [
    'No hace falta tenerlo todo para empezar. Con **A.1 completo y A.4 completo** ya se puede recalcular el documento entero con números reales y saber si el negocio está donde creemos que está.',
    'A.2 es el que más trabajo cuesta y el que más cambia las conclusiones, porque es el que revela qué tipo de caso sostiene la firma y cuál la está subsidiando.',
  ]),
];

module.exports = { parte14, parte15, parte16, resumen, anexo };

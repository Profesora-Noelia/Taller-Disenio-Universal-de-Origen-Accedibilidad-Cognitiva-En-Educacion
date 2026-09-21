/**
 * ============================================================================
 * datos.js - Banco de contenidos del Material Educativo Digital (MED)
 * ============================================================================
 */

/**
 * ICONOS_SVG - Banco de íconos SVG vectoriales limpios para reemplazar emojis.
 */
const ICONOS_SVG = {
  libro: '<svg class="icono" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>',
  archivo: '<svg class="icono" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
  graduacion: '<svg class="icono" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>',
  documento: '<svg class="icono" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
  computadora: '<svg class="icono" viewBox="0 0 24 24"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>',
  
  /* CARITAS EMOCIONALES CORREGIDAS PARA LA PANTALLA 0 Y 17 (SAM) */
  sonrisa: '<svg class="icono" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>',
  neutral: '<svg class="icono" viewBox="0 0 24 24"><path d="M9 14h6v1.5H9z"/><circle cx="9" cy="9" r="1.5"/><circle cx="15" cy="9" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>',
  preocupado: '<svg class="icono" viewBox="0 0 24 24"><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"/></svg>'
};

/**
 * Cadena reutilizable para el feedforward de error/reintento.
 */
const TEXTO_REINTENTO = " Al cerrar la ventana emergente de error, podés hacer clic en el botón 'Reintentar' para cambiar tu respuesta y probar de nuevo.";

/**
 * PANTALLAS - Diccionario principal de contenidos.
 */
const PANTALLAS = {

  // ==========================================================================
  // MÓDULO 1
  // ==========================================================================

  0: {
    modulo: 1,
    moduloTitulo: "Módulo 1: El MED como Experiencia Unificada",
    breadcrumbs: "Inicio > Módulo 1 > Pantalla 0: Bienvenida y Encuadre",
    titulo: "Bienvenida al Taller: La Pantalla como Espacio de Mediación Cognitiva",
    tiempoMinuto: 0,
    progreso: 0,
    textoIzquierda: "¡Hola! Te damos la bienvenida a este taller intensivo donde aprenderás a diseñar Materiales Educativos Digitales (MED) desde adentro. Un MED no es una carpeta de archivos sueltos, sino un entorno interactivo en 16:9 diseñado para guiar tu aprendizaje de forma autónoma. En esta pantalla inicial calibraremos nuestro punto de partida, cuidando tu disponibilidad atencional y confort emocional.",
    instruccion: "Lee el texto de la izquierda y luego responde la autoevaluación afectiva de la derecha. Tu respuesta no tiene respuesta correcta o incorrecta: es un registro de tu estado emocional de entrada.",
    nodoGuia: "La pantalla debe ser un espacio de contención afectiva donde la estructura prevenga la frustración comunicacional.",
    actividad: {
      tipo: "sam",
      enunciado: "¿Cómo te sentís frente al desafío de diseñar pantallas accesibles en este taller?",
      opciones: [
        { texto: "Siento control y motivación", icono: "sonrisa", feedback: "¡Excelente! La arquitectura del MED está diseñada para reducir la fricción tecnológica y darte Seguridad Espacial Cognitiva paso a paso." },
        { texto: "Siento curiosidad, pero me abruma la tecnología", icono: "neutral", feedback: "Tranquilo. El MED te guía con una estructura fija de tres bandas. Nunca tendrás que adivinar dónde estás ni cómo avanzar." },
        { texto: "Siento sobrecarga atencional o ansiedad por el tiempo", icono: "preocupado", feedback: "El taller respeta tu ritmo. Cada pantalla tiene menos de 90 palabras y podés pausar y retomar cuando quieras: el sistema recuerda dónde quedaste." }
      ]
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje B (Usabilidad Afectiva)", tipo: "consulta" },
      { icono: "archivo", texto: "Ficha Técnica del Taller-MED (PDF)", tipo: "obligatorio" }
    ]
  },

  1: {
    modulo: 1,
    moduloTitulo: "Módulo 1: El MED como Experiencia Unificada",
    breadcrumbs: "Inicio > Módulo 1 > Pantalla 1: Ontología del MED",
    titulo: "Superar el Archipiélago de Recursos: Hacia la Experiencia del MED Unificado",
    tiempoMinuto: 7,
    progreso: 12,
    textoIzquierda: "Recapitulando: Acumular archivos PDF densos, videos largos y cuestionarios aislados en un aula virtual genera lo que Rocío Rodríguez define como archipiélago de recursos inconexos. Esta dispersión obliga al estudiante a adivinar cómo se conectan las piezas, agotando su memoria de trabajo con carga cognitiva extraña. Diseñar un MED unificado en 16:9 significa integrar explicación, apoyos visuales y práctica activa en una única pantalla continua.",
    instruccion: "Lee el saber necesario de la izquierda y luego respondé la pregunta de opción múltiple de la derecha." + TEXTO_REINTENTO,
    nodoGuia: "Definir el propósito didáctico específico del MED evitando atribuirle funciones que corresponden al aula virtual en su conjunto.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un docente sube a su aula virtual 5 archivos PDF de 20 páginas y un enlace a un video de 40 minutos sin guía de análisis. ¿Qué efecto cognitivo produce en el estudiante según Sweller y Rodríguez?",
      opciones: [
        { texto: "A) Incrementa la carga germana y favorece la autonomía.", correcta: false },
        { texto: "B) Genera dispersión atencional y sobrecarga cognitiva extraña por desorientación.", correcta: true },
        { texto: "C) Cumple los requisitos del Diseño Universal sin requerir apoyos.", correcta: false },
        { texto: "D) Facilita la conversión semiótica entre registros.", correcta: false }
      ],
      retroalimentacion: "Acumular recursos desarticulados sin un andamiaje unificado provoca dispersión atencional y sobrecarga en la memoria de trabajo por incremento de carga extraña (Sweller, 2020; Rodríguez, 2024). El MED unificado en 16:9 resuelve esta barrera integrando texto, gráfico y práctica en una sola pantalla."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje E (Diseño Pedagógico)", tipo: "consulta" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 1: El MED como Experiencia)", tipo: "lectura" },
      { icono: "graduacion", texto: "DEF_RocioRodriguez_Proyecto de Tesis.docx (Marco Ontológico)", tipo: "profundizacion" }
    ]
  },

  2: {
    modulo: 1,
    moduloTitulo: "Módulo 1: El MED como Experiencia Unificada",
    breadcrumbs: "Inicio > Módulo 1 > Pantalla 2: Modelo Social",
    titulo: "Marco Ético-Político: Modelo Social, Accesibilidad y Variación Humana",
    tiempoMinuto: 14,
    progreso: 18,
    textoIzquierda: "Recapitulando: En la pantalla anterior vimos que el MED unificado elimina la dispersión del archipiélago de recursos. ¿Pero por qué diseñamos accesiblemente? Gian Maria Greco y el Modelo Social de la Discapacidad demuestran que la inaccesibilidad no es un déficit individual, sino una barrera impuesta por entornos rígidos. Desde el Human Variation Paradigm, la diversidad humana es la norma. El Diseño Universal de Origen es un derecho.",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Incorporar apoyos de accesibilidad desde la planificación inicial y no como parches o correcciones posteriores.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un docente afirma: No necesito hacer mi aula accesible porque en mi lista no tengo ningún alumno con certificado de discapacidad. ¿Cómo se califica esta postura desde el marco de la Accesibilidad Social (Greco)?",
      opciones: [
        { texto: "A) Correcta, porque la accesibilidad solo se aplica ante diagnósticos clínicos.", correcta: false },
        { texto: "B) Inadecuada y capacitista, porque la variabilidad cognitiva afecta a cualquier persona por fatiga, sobrecarga atencional o entornos desfavorables.", correcta: true },
        { texto: "C) Adecuada, porque el Diseño Universal exige evaluaciones previas individuales.", correcta: false },
        { texto: "D) Válida únicamente si se ofrecen videos subtitulados.", correcta: false }
      ],
      retroalimentacion: "El marco de la Accesibilidad Social y el Human Variation Paradigm (Greco, 2019) sostienen que la variabilidad en la disponibilidad cognitiva afecta a todas las personas bajo diversas circunstancias (fatiga, sobrecarga, estrés, conectividad lenta), por lo que la accesibilidad es un estándar universal de equidad desde el origen y no una respuesta clínica individual reactiva."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje B (Accesibilidad Cognitiva)", tipo: "consulta" },
      { icono: "documento", texto: "Towards_a_pedagogy_of_accessibility_The.pdf (Gian Maria Greco)", tipo: "lectura" },
      { icono: "documento", texto: "1. Eliminar el ciclo de invisibilidad...pdf (Rodríguez)", tipo: "caso" }
    ]
  },

  3: {
    modulo: 1,
    moduloTitulo: "Módulo 1: El MED como Experiencia Unificada",
    breadcrumbs: "Inicio > Módulo 1 > Pantalla 3: Planificación Inversa",
    titulo: "Planificación Inversa: Traducir Intenciones en Desempeños Observables",
    tiempoMinuto: 21,
    progreso: 24,
    textoIzquierda: "Recapitulando: Ya definimos la ontología del MED y su marco ético de accesibilidad. Pero ¿cómo se planifica? John Biggs y Robert Mager enseñan que debemos aplicar la Planificación Inversa: en lugar de empezar eligiendo contenidos o videos, definimos primero el desempeño observable que el estudiante ejecutará sobre la pantalla. Formular una meta operacional exige precisar la acción física, las condiciones de interfaz y el criterio de logro.",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Enunciar desempeños expresados en acciones observables y verificables sobre la interfaz, evitando formularlos únicamente como saberes.",
    actividad: {
      tipo: "opciones",
      enunciado: "¿Cuál de los siguientes enunciados representa una meta de aprendizaje formulada de manera operacional para un MED, siguiendo a Mager, Biggs y Rodríguez?",
      opciones: [
        { texto: "A) El estudiante comprenderá la importancia de la accesibilidad cognitiva en la web.", correcta: false },
        { texto: "B) El alumno reflexionará sobre los principios del Diseño Universal en Moodle.", correcta: false },
        { texto: "C) El cursante clasificará 3 barreras de una interfaz en un cuadro comparativo.", correcta: true },
        { texto: "D) Adquirir conocimientos sobre la microtipografía y el ancho de columna.", correcta: false }
      ],
      retroalimentacion: "La opción C formula una acción observable medible sobre la interfaz (clasificar en un cuadro comparativo), mientras que las opciones A, B y D utilizan verbos no observables o centran la meta en la adquisición pasiva de conocimientos (Mager, 1962; Biggs, 2005; Rodríguez, 2026)."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje E (Diseño Pedagógico)", tipo: "consulta" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 2: Definir Metas)", tipo: "lectura" },
      { icono: "documento", texto: "Matriz de Interacción Funcional...docx", tipo: "apoyo" }
    ]
  },

  // ==========================================================================
  // MÓDULO 2
  // ==========================================================================

  4: {
    modulo: 2,
    moduloTitulo: "Módulo 2: Transposición Didáctica y Microtipografía",
    breadcrumbs: "Inicio > Módulo 2 > Pantalla 4: Transposición Didáctica",
    titulo: "Transposición Didáctica y Recorte de Saberes: El Filtro de la Mancha Principal",
    tiempoMinuto: 30,
    progreso: 29,
    textoIzquierda: "Recapitulando: En el Módulo 1 definimos las metas observables del MED. Ahora debemos transformar el saber académico mediante la Transposición Didáctica (Chevallard). Para evitar la saturación en pantalla, aplicamos el Filtro Tripartito: 1) Saberes Necesarios (mancha principal en Lenguaje Claro con menos de 90 palabras); 2) Saberes Secundarios (desplegables en modales o acordeones); y 3) Saberes Prescindibles (eliminados).",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Definir la enseñanza de cada pantalla limitando el texto principal para evitar que flote en anchos infinitos.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un docente debe adaptar un capítulo de 8 páginas sobre accesibilidad web para una pantalla de MED. ¿Cuál es la estrategia correcta según Chevallard y la Guía de Toma de Decisiones?",
      opciones: [
        { texto: "A) Copiar el texto completo y agregar un scroll vertical infinito.", correcta: false },
        { texto: "B) Extraer la idea fuerza (<90 palabras) para la columna izquierda y derivar lo secundario a ventanas modales.", correcta: true },
        { texto: "C) Colocar todo el texto en una ventana modal emergente de lectura obligatoria.", correcta: false },
        { texto: "D) Reemplazar todo el texto por un video animado de 15 minutos sin transcripción.", correcta: false }
      ],
      retroalimentacion: "La opción B aplica correctamente la Transposición Didáctica (Chevallard, 1985) y el Filtro Tripartito (Rodríguez, 2026), resguardando la mancha principal en menos de 90 palabras y derivando lo secundario a modales para evitar la sobrecarga atencional."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje B (Accesibilidad Cognitiva)", tipo: "consulta" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 3: Transposición)", tipo: "lectura" },
      { icono: "documento", texto: "Guía de Toma de Decisiones", tipo: "metodologico" }
    ]
  },

  5: {
    modulo: 2,
    moduloTitulo: "Módulo 2: Transposición Didáctica y Microtipografía",
    breadcrumbs: "Inicio > Módulo 2 > Pantalla 5: Carga Cognitiva",
    titulo: "Memoria de Trabajo y Carga Cognitiva: Reducción de Ruido Visual en Pantalla",
    tiempoMinuto: 40,
    progreso: 35,
    textoIzquierda: "Recapitulando: En la pantalla anterior filtramos el contenido a menos de 90 palabras. John Sweller demuestra que la memoria de trabajo es extremadamente limitada y se satura fácilmente. En el MED debemos eliminar la carga cognitiva extraña (ruido visual, bordes recargados, tipografías fantasía) para liberar ancho de banda mental. Así, la energía atencional se enfoca en la carga germana: la construcción de esquemas de conocimiento duraderos.",
    instruccion: "Pulsá el botón Depurar interfaz para ver cómo cambia la distribución de carga cognitiva. Luego respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Agrupar elementos en contenedores neutros con bordes suaves eliminando la ornamentación innecesaria.",
    actividad: {
      tipo: "simulador",
      enunciado: "Simulador de Carga Cognitiva",
      simuladorTipo: "carga",
      pregunta: "Un diseñador agrega GIFs animados decorativos, tres fuentes distintas y bordes de colores brillantes a una pantalla explicativa. ¿Qué impacto tiene según la Teoría de Sweller y Frascara?",
      opciones: [
        { texto: "A) Estimula la motivación del estudiante incrementando la carga germana.", correcta: false },
        { texto: "B) Introduce ruido visual y eleva la carga extraña, saturando la memoria de trabajo.", correcta: true },
        { texto: "C) Mejora la usabilidad afectiva según el modelo de Norman.", correcta: false },
        { texto: "D) Facilita la conversión semiótica de Raymond Duval.", correcta: false }
      ],
      retroalimentacion: "Agregar elementos decorativos sin función pedagógica introduce ruido visual que dispara la carga extraña y satura el ancho de banda de la memoria de trabajo (Sweller, 2020; Frascara, 2006; Rodríguez, 2026)."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje C (Diseño Visual)", tipo: "consulta" },
      { icono: "graduacion", texto: "DEF_RocioRodriguez_Proyecto de Tesis.docx (Cap. Carga Cognitiva)", tipo: "lectura" },
      { icono: "documento", texto: "PROGRAMA - Taller de Diseño Tecnopedagógico...docx", tipo: "programa" }
    ]
  },

  6: {
    modulo: 2,
    moduloTitulo: "Módulo 2: Transposición Didáctica y Microtipografía",
    breadcrumbs: "Inicio > Módulo 2 > Pantalla 6: Microtipografía Web",
    titulo: "Microtipografía Web y Legibilidad: Reglas para la Maquetación Transparente",
    tiempoMinuto: 50,
    progreso: 41,
    textoIzquierda: "Recapitulando: Eliminamos la carga extraña en la pantalla previa. Para garantizar una lectura sin fatiga, aplicamos tres reglas microtipográficas (Lupton, Müller-Brockmann): 1) Alineación estricta a la izquierda (jamás justificar para evitar ríos blancos); 2) Mancha de 60 a 80 caracteres por línea con interlineado de 1.5; 3) Negritas estratégicas para destacar solo 3 o 4 conceptos clave, prohibiendo bloques en mayúsculas sostenidas.",
    instruccion: "Pulsá los botones Justificar y Alinear a la izquierda para comparar el efecto visual. Luego respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Alinear texto a la izquierda, limitar renglones y usar jerarquías tipográficas claras sin cursivas sostenidas.",
    actividad: {
      tipo: "simulador",
      enunciado: "Editor Microtipográfico Interactivo",
      simuladorTipo: "tipografia",
      pregunta: "¿Por qué está estrictamente prohibido justificar los bloques de texto en una interfaz web accesible según Ellen Lupton y el Eje C de la Guía de Accesibilidad?",
      opciones: [
        { texto: "A) Porque reduce el contraste cromático de las fuentes.", correcta: false },
        { texto: "B) Porque genera espacios desproporcionados (ríos blancos) que rompen el rastreo ocular.", correcta: true },
        { texto: "C) Porque incrementa el número de palabras por renglón a más de 200.", correcta: false },
        { texto: "D) Porque impide la conversión de texto a audio mediante lectores de pantalla.", correcta: false }
      ],
      retroalimentacion: "Justificar texto en pantalla genera ríos blancos (espaciados desiguales entre palabras) que rompen el ritmo de las sacadas oculares y desorientan el salto de línea, afectando gravemente la legibilidad en usuarios con dislexia o fatiga atencional (Lupton, 2011; Rodríguez, 2026; Eje C de la Guía)."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje C (Maquetación Tipográfica)", tipo: "consulta" },
      { icono: "computadora", texto: "Template-MED-ppt.pptx (Muestrario Tipográfico 16:9)", tipo: "diseno" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. Microtipografía)", tipo: "lectura" }
    ]
  },

  // ==========================================================================
  // MÓDULO 3
  // ==========================================================================

  7: {
    modulo: 3,
    moduloTitulo: "Módulo 3: Canal Dual y Situaciones Adidácticas",
    breadcrumbs: "Inicio > Módulo 3 > Pantalla 7: Canal Dual y Multimedia",
    titulo: "Procesamiento por Canal Dual: Integración Multimedia sin Redundancia",
    tiempoMinuto: 60,
    progreso: 47,
    textoIzquierda: "Recapitulando: En el Módulo 2 dominamos el recorte microtipográfico de la pantalla. Ahora estudiaremos el procesamiento sensorial. Richard Mayer y Ruth Clark demuestran que el cerebro procesa información mediante dos canales independientes: visual y auditivo (Modelo SOI). Cuando agregamos una locución de audio que lee exactamente el mismo texto impreso en pantalla, violamos el Principio de Redundancia, saturando el canal visual y colapsando la memoria.",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Utilizar el canal auditivo únicamente para complementar gráficos complejos o brindar narraciones explicativas no redundantes.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un docente incluye en su pantalla un texto extenso y añade un reproductor de audio que lee exactamente ese mismo texto palabra por palabra. ¿Qué consecuencia cognitiva genera (Mayer)?",
      opciones: [
        { texto: "A) Favorece el aprendizaje auditivo en estudiantes con dislexia.", correcta: false },
        { texto: "B) Produce sobrecarga cognitiva en el canal de procesamiento por violación de redundancia.", correcta: true },
        { texto: "C) Mejora la conversión semiótica entre registros.", correcta: false },
        { texto: "D) Garantiza el cumplimiento estricto de las pautas WCAG 2.2 AA.", correcta: false }
      ],
      retroalimentacion: "Presentar simultáneamente texto impreso y narración hablada idéntica recarga la memoria de trabajo por violación del principio de redundancia (Mayer, 2020; Clark y Mayer, 2016). La voz debe complementar la imagen visual, no duplicar la lectura del texto."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje A (Contenidos Multimodales)", tipo: "consulta" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 3: Aprendizaje Multimedia)", tipo: "lectura" },
      { icono: "computadora", texto: "Template-MED-ppt.pptx (Plantillas de Video y Transcripción)", tipo: "tecnico" }
    ]
  },

  8: {
    modulo: 3,
    moduloTitulo: "Módulo 3: Canal Dual y Situaciones Adidácticas",
    breadcrumbs: "Inicio > Módulo 3 > Pantalla 8: Registros Semióticos",
    titulo: "Representación Semiótica y Conversión Sincrónica en Doble Columna",
    tiempoMinuto: 70,
    progreso: 53,
    textoIzquierda: "Recapitulando: Comprendimos cómo funciona el canal dual sin redundancia. Ahora veremos cómo se estructuran los lenguajes en pantalla. Raymond Duval demuestra que no hay comprensión profunda sin articular al menos dos registros de representación semiótica. La maquetación en doble columna paralela permite la conversión semiótica sincrónica: relacionar el texto verbal de la izquierda con la infografía o esquema de la derecha en un único plano.",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Garantizar la contigüidad espacial colocando el texto explicativo y el gráfico correspondiente en la misma pantalla sin requerir desplazamiento.",
    actividad: {
      tipo: "opciones",
      enunciado: "En un MED, un texto explica las fases de un proceso pedagógico y la infografía aclaratoria se coloca en la pantalla siguiente. ¿Qué dificultad semiótica y cognitiva acarrea esta decisión?",
      opciones: [
        { texto: "A) Incrementa la conversión semiótica espontánea por lectura secuencial.", correcta: false },
        { texto: "B) Quiebra la contigüidad espacial y temporal, impidiendo la conversión sincrónica (Duval).", correcta: true },
        { texto: "C) Facilita la accesibilidad motriz según la Ley de Fitts.", correcta: false },
        { texto: "D) Elimina las BAP de comunicación de acuerdo a la Accesibilidad Social.", correcta: false }
      ],
      retroalimentacion: "Separar el texto y su representación gráfica en pantallas distintas quiebra el principio de contigüidad espacial y temporal, impidiendo que el estudiante realice la conversión semiótica sincrónica entre registros en su memoria de trabajo (Duval, 1993; Mayer, 2020; Rodríguez, 2026)."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje C (Visual Layout)", tipo: "consulta" },
      { icono: "graduacion", texto: "DEF_RocioRodriguez_Proyecto de Tesis.docx (Cap. Registros Semióticos)", tipo: "lectura" },
      { icono: "computadora", texto: "Template-MED-ppt.pptx (Maquetas de Doble Columna)", tipo: "tecnico" }
    ]
  },

  9: {
    modulo: 3,
    moduloTitulo: "Módulo 3: Canal Dual y Situaciones Adidácticas",
    breadcrumbs: "Inicio > Módulo 3 > Pantalla 9: Situaciones Adidácticas",
    titulo: "Situaciones Adidácticas: Respuesta Intrínseca del Milieu y Práctica Libre",
    tiempoMinuto: 80,
    progreso: 60,
    textoIzquierda: "Recapitulando: Diseñamos la doble columna para articular texto y gráfico. Ahora veremos cómo se aprende mediante la acción. Guy Brousseau demuestra que el aprendizaje duradero ocurre en situaciones adidácticas: momentos donde el estudiante interactúa con un entorno (milieu) que devuelve respuestas intrínsecas inmediatas a sus decisiones, sin que el docente intervenga con sanciones o notas punitivas. En el MED, el error es un insumo de aprendizaje.",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Ubicar las actividades en relación directa con el contenido de la pantalla, garantizando retroalimentaciones explicativas inmediatas.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un estudiante comete un error al seleccionar una opción en un cuestionario del MED. ¿Cuál de las siguientes respuestas del sistema responde al concepto de respuesta intrínseca del milieu?",
      opciones: [
        { texto: "A) Mostrar una alerta roja con el texto ¡Error! Calificación: 0/10.", correcta: false },
        { texto: "B) Desplegar una ventana modal que explica la consecuencia lógica del error y permite reintentar.", correcta: true },
        { texto: "C) Bloquear la navegación y obligar a releer todo el módulo desde la pantalla 0.", correcta: false },
        { texto: "D) Ocultar la respuesta correcta sin ofrecer ninguna pista teórica.", correcta: false }
      ],
      retroalimentacion: "Una respuesta intrínseca del milieu (Brousseau, 2007) muestra las consecuencias objetivas del error y despliega una retroalimentación explicativa que permite la autorregulación y el reintento, a diferencia de las alertas punitivas que generan ansiedad y bloquean el aprendizaje."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje E (Diseño Pedagógico)", tipo: "consulta" },
      { icono: "documento", texto: "Matriz de Interacción Funcional...docx (Taxonomía de Errores y Apoyos)", tipo: "lectura" },
      { icono: "computadora", texto: "Template-MED-ppt.pptx (Modales de Feedback Explicativo)", tipo: "tecnico" }
    ]
  },

  // ==========================================================================
  // MÓDULO 4
  // ==========================================================================

  10: {
    modulo: 4,
    moduloTitulo: "Módulo 4: Arquitectura SEC y Usabilidad",
    breadcrumbs: "Inicio > Módulo 4 > Pantalla 10: Arquitectura SEC",
    titulo: "Seguridad Espacial Cognitiva: Estabilidad Espacial en Tres Bandas Fijas",
    tiempoMinuto: 90,
    progreso: 65,
    textoIzquierda: "Recapitulando: En el Módulo 3 vimos cómo la interacción adidáctica permite aprender mediante respuestas intrínsecas del entorno. Para que esa exploración sea segura, Rocío Rodríguez postula la Seguridad Espacial Cognitiva (SEC): una arquitectura inalterable de tres bandas fijas en 16:9 (Origen, Continuidad y Destino). Esta estabilidad elimina la desorientación navegacional, garantizando que el estudiante nunca gaste energía en averiguar dónde está o cómo avanzar.",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Diseñar la interfaz sobre un marco inalterable de tres bandas fijas para sostener la consistencia espacial y predecir la interacción.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un estudiante navega un recurso web donde la barra de menú desaparece al hacer scroll y los botones de avance cambian de posición en cada pantalla. ¿Qué falla de usabilidad ocurre?",
      opciones: [
        { texto: "A) Violación de la Seguridad Espacial Cognitiva e incremento de la carga extraña.", correcta: true },
        { texto: "B) Correcta aplicación del principio de redundancia mínima de Mayer.", correcta: false },
        { texto: "C) Transposición didáctica en Lenguaje Sencillo de Chevallard.", correcta: false },
        { texto: "D) Ausencia de conversión semiótica entre registros gráficos.", correcta: false }
      ],
      retroalimentacion: "Ocultar menús mediante scroll o mover los botones de posición destruye la Seguridad Espacial Cognitiva (Rodríguez, 2024, 2026) y viola la primera regla de usabilidad de Krug (2014) (Don't make me think), forzando al estudiante a consumir recursos finitos de su memoria de trabajo en descifrar la interfaz."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje D (Arquitectura de la Información)", tipo: "consulta" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 4: Arquitectura SEC)", tipo: "lectura" },
      { icono: "graduacion", texto: "DEF_RocioRodriguez_Proyecto de Tesis.docx (Seguridad Espacial)", tipo: "profundizacion" }
    ]
  },

  11: {
    modulo: 4,
    moduloTitulo: "Módulo 4: Arquitectura SEC y Usabilidad",
    breadcrumbs: "Inicio > Módulo 4 > Pantalla 11: Usabilidad Motriz",
    titulo: "Usabilidad Motriz: Ley de Fitts, Ergonomía y Disminución de Golfos",
    tiempoMinuto: 100,
    progreso: 71,
    textoIzquierda: "Recapitulando: La estabilidad de las tres bandas fijas garantiza que el usuario no se pierda. Pero además debe poder operar la interfaz sin fatiga física. Donald Norman explica que debemos reducir los Golfos de Ejecución y Evaluación. Apoyándonos en la Ley de Fitts, los botones interactivos deben tener un tamaño amplio (mínimo 48px x 48px) y una separación mayor a 32px, garantizando clics precisos y sin esfuerzo.",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Dimensionar los elementos accionables garantizando áreas de toque amplias que eviten deslices o errores de precisión motriz.",
    actividad: {
      tipo: "opciones",
      enunciado: "En un MED diseñado para tabletas y computadoras, dos botones de confirmación de 18px están ubicados a 4px de distancia. ¿Qué principio ergonómico y de usabilidad se está vulnerando?",
      opciones: [
        { texto: "A) La Ley de Fitts y el control de los Golfos de Ejecución de Norman.", correcta: true },
        { texto: "B) El principio de doble canal de procesamiento auditivo/visual de Mayer.", correcta: false },
        { texto: "C) El principio de transposición didáctica de saberes sabios de Chevallard.", correcta: false },
        { texto: "D) La regla de conversión semiótica entre registros de Duval.", correcta: false }
      ],
      retroalimentacion: "Disponer botones hiperpequeños (18px) y pegados entre sí (4px) viola la Ley de Fitts (1954) y amplía el Golfo de Ejecución de Norman (2013), provocando deslices motrices, clics erróneos y frustración en el estudiante."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje D (Usabilidad Motriz)", tipo: "consulta" },
      { icono: "documento", texto: "Matriz de Interacción Funcional...docx (Barreras Motrices)", tipo: "lectura" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 4: Ergonomía)", tipo: "profundizacion" }
    ]
  },

  12: {
    modulo: 4,
    moduloTitulo: "Módulo 4: Arquitectura SEC y Usabilidad",
    breadcrumbs: "Inicio > Módulo 4 > Pantalla 12: Sludge y Taxonomía del Error",
    titulo: "Erradicación del Sludge: Navegación Transparente y Tolerancia al Error",
    tiempoMinuto: 110,
    progreso: 76,
    textoIzquierda: "Recapitulando: La ergonomía de botones previene fallas motrices. Ahora debemos eliminar la fricción interactiva innecesaria. Cass Sunstein denomina sludge (lodo) a los obstáculos digitales que complican la navegación. Alan Cooper exige eliminar el excise (impuesto de navegación). Una interfaz debe ser operada de forma transparente por el Sistema 1 (intuitivo) de Kahneman, e incluir siempre mecanismos de reversibilidad (Deshacer / Undo) según Reason.",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Auditar la interfaz para eliminar clics innecesarios y garantizar que toda acción sea reversible sin penalización.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un estudiante presiona por error el botón de enviar respuesta en una actividad interactiva y el sistema bloquea su pantalla emitiendo una alerta roja irreversible. ¿Cómo se califica este diseño según James Reason, Alan Cooper y Rocío Rodríguez?",
      opciones: [
        { texto: "A) Punitivo e intolerante al error humano, por generar sludge y carecer de Undo.", correcta: true },
        { texto: "B) Adecuado, porque entrena la disciplina atencional del estudiante.", correcta: false },
        { texto: "C) Correcto según el principio de redundancia multimedia de Mayer.", correcta: false },
        { texto: "D) Un ejemplo de alineación constructiva de metas operacionales de Biggs.", correcta: false }
      ],
      retroalimentacion: "Bloquear la pantalla y emitir alertas punitivas irreversibles ante un deslice motriz viola la tolerancia al error humano (Reason, 1990), genera sludge (Sunstein, 2021) e incrementa el impuesto de navegación (Cooper, 2014; Rodríguez, 2024). Las interfaces accesibles deben ofrecer siempre mecanismos de reversibilidad (Undo)."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje D (Erradicación de Fricción)", tipo: "consulta" },
      { icono: "documento", texto: "Matriz de Interacción Funcional...docx (Barreras de Interacción)", tipo: "lectura" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 4: Usabilidad y Error)", tipo: "profundizacion" }
    ]
  },

  // ==========================================================================
  // MÓDULO 5
  // ==========================================================================

  13: {
    modulo: 5,
    moduloTitulo: "Módulo 5: Usabilidad Afectiva y Accesibilidad Universal",
    breadcrumbs: "Inicio > Módulo 5 > Pantalla 13: Usabilidad Afectiva",
    titulo: "Usabilidad Afectiva: Diseño Emocional y Medición del Confort Atencional",
    tiempoMinuto: 95,
    progreso: 82,
    textoIzquierda: "Recapitulando: En el Módulo 4 erradicamos la fricción motriz y el lodo interactivo. Pero la cognición es inseparable del afecto. Donald Norman define el Diseño Emocional en tres niveles: visceral, conductual y reflexivo. Una interfaz confusa o punitiva genera ansiedad, bloqueando la memoria de trabajo. Para cuidar el confort atencional del estudiante, medimos la valencia y la activación mediante el Affect Grid (Russell) y el SAM (Bradley).",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Estructurar la pantalla para transmitir contención emocional y prevenir el abandono por frustración comunicacional.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un recurso digital emite un sonido estridente de alarma roja cada vez que el estudiante se equivoca en una pregunta. ¿Qué impacto afectivo-cognitivo genera según Norman y Russell?",
      opciones: [
        { texto: "A) Incrementa la motivación germana al alertar el error.", correcta: false },
        { texto: "B) Dispara alta activación negativa y displacer, bloqueando la memoria de trabajo.", correcta: true },
        { texto: "C) Satisface las pautas de accesibilidad comunicacional DUA.", correcta: false },
        { texto: "D) Promueve la conversión semiótica entre registros.", correcta: false }
      ],
      retroalimentacion: "Las alarmas punitivas o restrictivas generan alta activación negativa y displacer (Russell, 1989; Norman, 2004), disparando respuestas defensivas en el nivel visceral que bloquean la memoria de trabajo (Sweller, 2020; Rodríguez, 2026)."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje B (Usabilidad Afectiva)", tipo: "consulta" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 5: Dimensión Afectiva)", tipo: "lectura" },
      { icono: "computadora", texto: "Template-MED-ppt.pptx (Plantillas Afectivas 16:9)", tipo: "diseno" }
    ]
  },

  14: {
    modulo: 5,
    moduloTitulo: "Módulo 5: Usabilidad Afectiva y Accesibilidad Universal",
    breadcrumbs: "Inicio > Módulo 5 > Pantalla 14: Accesibilidad Universal (WCAG)",
    titulo: "Accesibilidad Universal: Estándares WCAG 2.2 AA y Diseño Universal (DUA)",
    tiempoMinuto: 102,
    progreso: 88,
    textoIzquierda: "Recapitulando: Cuidar el confort afecto exige garantizar que nadie quede excluido por barreras técnicas. La Accesibilidad Universal no es optativa. El estándar WCAG 2.2 AA del W3C y el Diseño Universal para el Aprendizaje (DUA) establecen cuatro principios: Perceptible (contraste >= 4.5:1, texto alternativo), Operable (100% teclado, Fitts > 48px), Comprensible (Lenguaje Claro, SEC) y Robusto (lectores de pantalla NVDA/JAWS).",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Diseñar apoyos de accesibilidad integrados desde el origen para no requerir adaptaciones individuales posteriores.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un MED utiliza texto gris claro sobre fondo blanco (#999999 sobre #FFFFFF) y requiere arrastrar elementos únicamente con el mouse. ¿Qué principios WCAG 2.2 AA vulnera?",
      opciones: [
        { texto: "A) Únicamente el principio de Robustez.", correcta: false },
        { texto: "B) Principios de Perceptibilidad (contraste insuficiente) y Operabilidad (falta de teclado).", correcta: true },
        { texto: "C) Ninguno, si el contenido está en Lenguaje Sencillo.", correcta: false },
        { texto: "D) Violación exclusiva del principio de Comprensibilidad.", correcta: false }
      ],
      retroalimentacion: "El texto gris sobre blanco no alcanza la relación de contraste 4.5:1 exigida por el Criterio de Conformidad 1.4.3 (Perceptible), y exigir el uso exclusivo de mouse viola el Criterio 2.1.1 (Operable por teclado) de las WCAG 2.2 AA (W3C, 2023; Rodríguez, 2026)."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Integración Ejes A, B, C, D y E", tipo: "consulta" },
      { icono: "documento", texto: "1. Eliminar el ciclo de invisibilidad...pdf (W3C/WCAG)", tipo: "lectura" },
      { icono: "documento", texto: "Towards_a_pedagogy_of_accessibility_The.pdf (Greco)", tipo: "marco" }
    ]
  },

  15: {
    modulo: 5,
    moduloTitulo: "Módulo 5: Usabilidad Afectiva y Accesibilidad Universal",
    breadcrumbs: "Inicio > Módulo 5 > Pantalla 15: Prototipado y Matriz Relacional",
    titulo: "Prototipado de Experiencia y Matriz Relacional de Coherencia Multidimensional",
    tiempoMinuto: 110,
    progreso: 94,
    textoIzquierda: "Recapitulando: Ya integramos la usabilidad afectiva y las pautas WCAG. Antes de publicar el MED, debemos auditar su sintonía integral. El Experience Prototyping (Buchenau y Suri) permite vivenciar la navegación. La Matriz Relacional de Coherencia (Biggs, Rodríguez) es el instrumento de control de calidad que verifica la alineación entre meta de desempeño, recorte de saberes, interfaz SEC y evaluación formativa.",
    instruccion: "Lee el saber necesario y respondé la pregunta de opción múltiple." + TEXTO_REINTENTO,
    nodoGuia: "Realizar la prueba de coherencia relacional antes de la exportación final del recurso educacional.",
    actividad: {
      tipo: "opciones",
      enunciado: "Un docente formula una meta operacional de diseño de interfaz, pero en la pantalla coloca un texto largo de 500 palabras y evalúa con un cuestionario de opción múltiple memorístico. ¿Qué falla se detecta en la Matriz Relacional?",
      opciones: [
        { texto: "A) Falla de accesibilidad técnica exclusivamente.", correcta: false },
        { texto: "B) Ruptura de la alineación constructiva y falta de coherencia relacional multidimensional.", correcta: true },
        { texto: "C) Correcta aplicación del modelo de transposición didáctica.", correcta: false },
        { texto: "D) Adecuada implementación del canal dual de Mayer.", correcta: false }
      ],
      retroalimentacion: "Evaluar datos memorísticos tras declarar una meta de diseño rompe la Alineación Constructiva (Biggs, 2005; Rodríguez, 2026) e invalida la coherencia relacional entre la meta, el medio y la evaluación."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje E (Diseño Pedagógico)", tipo: "consulta" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 6: Matriz Relacional)", tipo: "lectura" },
      { icono: "graduacion", texto: "DEF_RocioRodriguez_Proyecto de Tesis.docx (Control de Calidad)", tipo: "profundizacion" }
    ]
  },

  // ==========================================================================
  // MÓDULO 6
  // ==========================================================================

  16: {
    modulo: 6,
    moduloTitulo: "Módulo 6: Acreditación y Cierre",
    breadcrumbs: "Inicio > Módulo 6 > Pantalla 16: Acreditación de Desempeño",
    titulo: "Acreditación de Desempeño: Toma de Decisiones Tecnopedagógicas en Contexto Inédito",
    tiempoMinuto: 112,
    progreso: 97,
    textoIzquierda: "Recapitulando: Auditamos la coherencia de nuestro prototipo en la pantalla anterior. Llegó el momento de la acreditación. Siguiendo a John Biggs y Robert Mager, la evaluación verdadera no pide repetir definiciones de memoria, sino demostrar la capacidad de tomar decisiones tecnopedagógicas autónomas en un contexto inédito. Resolverás 5 casos críticos aplicando los principios de usabilidad, accesibilidad DUA y arquitectura SEC.",
    instruccion: "Respondé los 5 casos críticos seleccionando una opción en cada uno. Cuando tengas todas las respuestas, pulsá Validar acreditación. Podés reintentar libremente." + TEXTO_REINTENTO,
    nodoGuia: "Evaluar mediante desempeño observable en interfaz, retirando andamios para verificar la autonomía real alcanzada.",
    actividad: {
      tipo: "acreditacion",
      enunciado: "Desafío Inédito de Acreditación",
      casos: [
        {
          titulo: "Caso 1: Sobrecarga Cognitiva",
          enunciado: "Un docente diseña una pantalla con 6 animaciones GIF simultáneas, texto parpadeante y tres columnas de contenido. ¿Qué principio se vulnera?",
          opciones: [
            { texto: "A) Se vulnera la reducción de carga extraña de Sweller.", correcta: true },
            { texto: "B) Se aplica correctamente el canal dual de Mayer.", correcta: false },
            { texto: "C) Se cumple la Ley de Fitts.", correcta: false },
            { texto: "D) Se respeta la SEC de Rodríguez.", correcta: false }
          ]
        },
        {
          titulo: "Caso 2: Contraste WCAG",
          enunciado: "Una pantalla usa texto color #CCCCCC sobre fondo #FFFFFF. ¿Qué principio WCAG 2.2 AA se vulnera?",
          opciones: [
            { texto: "A) Robustez.", correcta: false },
            { texto: "B) Perceptibilidad (contraste insuficiente < 4.5:1).", correcta: true },
            { texto: "C) Comprensibilidad.", correcta: false },
            { texto: "D) Operabilidad.", correcta: false }
          ]
        },
        {
          titulo: "Caso 3: Desorientación SEC",
          enunciado: "En un MED, los botones de navegación cambian de posición en cada pantalla y el menú desaparece al hacer scroll. ¿Qué falla ocurre?",
          opciones: [
            { texto: "A) Violación del principio de redundancia de Mayer.", correcta: false },
            { texto: "B) Violación de la Seguridad Espacial Cognitiva (SEC).", correcta: true },
            { texto: "C) Correcta aplicación de la transposición didáctica.", correcta: false },
            { texto: "D) Falla en la conversión semiótica de Duval.", correcta: false }
          ]
        },
        {
          titulo: "Caso 4: Canal Dual",
          enunciado: "Un docente coloca en su pantalla un párrafo de texto y un audio que lee exactamente las mismas palabras. ¿Qué principio de Mayer se vulnera?",
          opciones: [
            { texto: "A) Principio de contigüidad espacial.", correcta: false },
            { texto: "B) Principio de redundancia.", correcta: true },
            { texto: "C) Principio de coherencia.", correcta: false },
            { texto: "D) Principio de señalización.", correcta: false }
          ]
        },
        {
          titulo: "Caso 5: Metas Operacionales",
          enunciado: "¿Cuál de las siguientes metas está formulada de manera operacional para un MED?",
          opciones: [
            { texto: "A) Comprender los principios de accesibilidad.", correcta: false },
            { texto: "B) Reflexionar sobre el diseño universal.", correcta: false },
            { texto: "C) Clasificar 3 barreras BAP en un cuadro comparativo.", correcta: true },
            { texto: "D) Conocer los aportes de Sweller.", correcta: false }
          ]
        }
      ],
      retroalimentacion: "La resolución correcta de los 5 casos de simulación acredita la capacidad del profesional para identificar barreras para el aprendizaje y la participación (BAP/BAPC) y resolverlas mediante el diseño universal de origen (Greco, 2019; Rodríguez, 2026)."
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social - Eje E (Evaluación Alineada)", tipo: "consulta" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Cap. 7: Acreditación)", tipo: "lectura" },
      { icono: "graduacion", texto: "DEF_RocioRodriguez_Proyecto de Tesis.docx (Evaluación de Desempeño)", tipo: "profundizacion" }
    ]
  },

  17: {
    modulo: 6,
    moduloTitulo: "Módulo 6: Acreditación y Cierre",
    breadcrumbs: "Inicio > Módulo 6 > Pantalla 17: Cierre y Certificación",
    titulo: "Cierre del Taller: Autoevaluación Afectiva Final y Descarga del MED",
    tiempoMinuto: 120,
    progreso: 100,
    textoIzquierda: "Recapitulando: ¡Felicitaciones! Has completado el recorrido de 120 minutos. Transformaste el archipiélago de recursos en un MED unificado, accesible y pedagógicamente alineado en 16:9. Antes de despedirnos, realizaremos la autoevaluación afectiva de salida (SAM / Affect Grid) para registrar tu estado de confort final, y podrás descargar tu paquete de prototipo y tu certificado de acreditación.",
    instruccion: "Registrá tu estado de confort final seleccionando una opción de la autoevaluación afectiva. No hay respuestas correctas o incorrectas.",
    nodoGuia: "El cierre del recurso debe ofrecer un momento de consolidación afectiva y síntesis metacognitiva.",
    actividad: {
      tipo: "sam",
      enunciado: "¿Cómo evaluás tu confort y seguridad al finalizar este taller?",
      opciones: [
        { texto: "Me siento completamente capacitado para diseñar MEDs accesibles autónomamente", icono: "sonrisa", feedback: "¡Felicitaciones! Has demostrado dominio en el diseño de Materiales Educativos Digitales accesibles desde el origen. Te invitamos a descargar tu certificado." },
        { texto: "Valoro las herramientas, aunque requeriré práctica continua", icono: "neutral", feedback: "El aprendizaje es un proceso continuo. Las herramientas y la guía quedan a tu disposición para que sigas practicando. Te invitamos a descargar tu certificado." }
      ]
    },
    materialAmpliatorio: [
      { icono: "libro", texto: "Guía de Accesibilidad Social en la Práctica (Documento Completo)", tipo: "repositorio" },
      { icono: "documento", texto: "DEFINITIVO - libro-completo-med-v19.docx (Obra Completa)", tipo: "descarga" },
      { icono: "computadora", texto: "Repositorio Abierto de Plantillas MED 16:9", tipo: "insumo" }
    ]
  }

};

/**
 * MODULOS - Metadatos de los 6 módulos para el Hub de inicio.
 */
const MODULOS = [
  { numero: 1, titulo: "El MED como Experiencia Unificada", pantallas: [0, 1, 2, 3], descripcion: "Marco ético-político, modelo social de la discapacidad y planificación inversa." },
  { numero: 2, titulo: "Transposición Didáctica y Microtipografía", pantallas: [4, 5, 6], descripcion: "Recorte de saberes, carga cognitiva y maquetación de bajo esfuerzo visual." },
  { numero: 3, titulo: "Canal Dual y Situaciones Adidácticas", pantallas: [7, 8, 9], descripcion: "Procesamiento multimedia, conversión semiótica y práctica libre sin sanción." },
  { numero: 4, titulo: "Arquitectura SEC y Usabilidad", pantallas: [10, 11, 12], descripcion: "Seguridad Espacial Cognitiva, Ley de Fitts y erradicación del sludge." },
  { numero: 5, titulo: "Usabilidad Afectiva y Accesibilidad Universal", pantallas: [13, 14, 15], descripcion: "Diseño emocional, WCAG 2.2 AA, DUA y prototipado de experiencia." },
  { numero: 6, titulo: "Acreditación y Cierre", pantallas: [16, 17], descripcion: "Desafío inédito de acreditación, autoevaluación afectiva y certificación." }
];

/**
 * GLOSARIO - Términos clave del taller para el modal de glosario.
 */
const GLOSARIO = [
  { termino: "MED", definicion: "Material Educativo Digital. Entorno interactivo en formato 16:9 que integra explicación, apoyos visuales y práctica activa en una única pantalla continua." },
  { termino: "Archipiélago de Recursos", definicion: "Metáfora de Rocío Rodríguez para describir la acumulación desarticulada de PDFs, videos y cuestionarios aislados en un aula virtual tradicional." },
  { termino: "Carga Cognitiva Extraña", definicion: "Esfuerzo mental inútil provocado por una interfaz mal diseñada (Sweller). Ruido visual, bordes recargados o tipografías fantasía." },
  { termino: "Carga Germana", definicion: "Procesamiento cognitivo relevante dedicado a integrar nueva información y construir esquemas conceptuales en memoria a largo plazo (Sweller)." },
  { termino: "Transposición Didáctica", definicion: "Trabajo de adaptación mediante el cual un saber sabio se transforma en saber enseñado (Chevallard, 1985)." },
  { termino: "Filtro Tripartito", definicion: "Clasificación de contenidos en Saberes Necesarios (<90 palabras), Saberes Secundarios (modales) y Saberes Prescindibles (eliminados)." },
  { termino: "Seguridad Espacial Cognitiva (SEC)", definicion: "Principio de Rocío Rodríguez que garantiza una arquitectura inalterable de tres bandas fijas (Origen, Continuidad, Destino) para eliminar la desorientación." },
  { termino: "Situación Adidáctica", definicion: "Fase donde el estudiante interactúa con un entorno (milieu) que devuelve respuestas intrínsecas, sin intervención punitiva del docente (Brousseau)." },
  { termino: "Ley de Fitts", definicion: "Modelo psicofísico: el tiempo para posarse sobre un objetivo es función de su distancia y tamaño. En MED: botones >= 48px, separación >= 32px." },
  { termino: "Sludge", definicion: "Lodo digital. Obstáculos de navegación que complican la consecución de una meta (Sunstein, 2021)." },
  { termino: "Planificación Inversa", definicion: "Metodología de Biggs que invierte el orden: primero se define la evidencia de desempeño, luego se seleccionan los contenidos." },
  { termino: "Meta Operacional", definicion: "Enunciado que precisa una acción física observable, condiciones de interfaz y criterio de logro (Mager, 1962)." },
  { termino: "WCAG 2.2 AA", definicion: "Pautas de Accesibilidad para el Contenido Web del W3C. Cuatro principios: Perceptible, Operable, Comprensible y Robusto." },
  { termino: "DUA", definicion: "Diseño Universal para el Aprendizaje (CAST). Marco que promueve múltiples formas de representación, expresión e implicación." },
  { termino: "SAM", definicion: "Self-Assessment Manikin. Instrumento no verbal de medición de valencia y activación emocional (Bradley y Lang, 1994)." },
  { termino: "Canal Dual", definicion: "Teoría de Mayer: el cerebro procesa información por dos canales independientes (visual/pictórico y auditivo/verbal) de capacidad limitada." },
  { termino: "Conversión Semiótica", definicion: "Transformación de una representación de un registro a otro (ej. texto a esquema). Base de la comprensión profunda (Duval, 1993)." },
  { termino: "Golfo de Ejecución", definicion: "Dificultad para descubrir cómo accionar un comando en la interfaz (Norman, 2013)." }
];
/**
 * ==========================================================================
 * MISIÓN: SALVAR LA TIERRA - ESCAPE ROOM EDUCATIVO
 * validation.js - Motor Dinámico de 2 Preguntas por Ronda (Ronda 1/2 y 2/2)
 * con Mecánica de "Volver a Aprender" y Validación Metacognitiva
 * ==========================================================================
 */

const ROOMS_CONFIG = {
  'sala1': {
    code: '312',
    criterion: 'Reto 1: Video Educativo - El Volcán',
    nextPage: 'sala2-tsunami.html',
    badgeText: '¡RETO 1 SUPERADO!',
    successTitle: '¡Felicidades, Explorador/a Científico/a!',
    achievementHeader: '🎯 Has Dominado el Reto 1: El Volcán',
    successExplanation: '<strong>¡Excelente análisis científico!</strong> Has verificado que el video cumple con rigor: presenta información directa del fenómeno natural, tiene alta calidad explicativa, es pertinente para quinto grado y cuenta con una usabilidad clara.',
    btnContinueText: '¡Continuar al Reto 2: El Tsunami! 🌊',
    rounds: [
      {
        roundNumber: '1/2',
        title: 'Ronda 1/2: Relación con el Fenómeno y Criterio de Calidad',
        q1: {
          id: 's1_r1_q1',
          text: '¿El video presenta información relacionada directamente con el fenómeno natural estudiado?',
          options: [
            { label: 'A. Sí', isCorrect: true, feedback: '¡Exacto! El video aborda de forma directa y visual el fenómeno de las erupciones volcánicas, explicando cómo asciende el magma desde el interior de la Tierra.' },
            { label: 'B. No', isCorrect: false, feedback: '💡 Observa con atención el video: describe la estructura de un volcán, la cámara magmática y el proceso real de una erupción, por lo que sí está directamente relacionado con el tema.' }
          ]
        },
        q2: {
          id: 's1_r1_q2',
          text: 'Si el video presenta información clara, organizada y relacionada con el tema, ¿qué criterio estás analizando?',
          options: [
            { label: 'A. Calidad', isCorrect: true, feedback: '¡Correcto! La claridad en las explicaciones, la estructura lógica y la precisión científica son los componentes esenciales del criterio de Calidad.' },
            { label: 'B. Decoración', isCorrect: false, feedback: '💡 La decoración solo abarca adornos visuales secundarios; cuando analizamos la claridad y organización conceptual del tema evaluamos la Calidad.' },
            { label: 'C. Velocidad', isCorrect: false, feedback: '💡 La velocidad mide el tiempo de reproducción o conexión técnica, no la claridad conceptual ni la organización del contenido.' },
            { label: 'D. Entretenimiento', isCorrect: false, feedback: '💡 Aunque un video educativo puede ser entretenido, evaluar la claridad, veracidad y organización de los conceptos corresponde a la Calidad pedagógica.' }
          ]
        }
      },
      {
        roundNumber: '2/2',
        title: 'Ronda 2/2: Pertinencia Curricular y Usabilidad del Video',
        q1: {
          id: 's1_r2_q1',
          text: 'El video explica las erupciones volcánicas y fue seleccionado para apoyar el aprendizaje de este tema en quinto grado. ¿Qué criterio se evidencia?',
          options: [
            { label: 'A. Pertinencia', isCorrect: true, feedback: '¡Excelente! La Pertinencia asegura que el recurso responda con precisión al objetivo formativo y al grado escolar de los estudiantes.' },
            { label: 'B. Tamaño', isCorrect: false, feedback: '💡 El tamaño del archivo o video es una característica técnica de almacenamiento, no define si el tema es adecuado para quinto grado.' },
            { label: 'C. Color', isCorrect: false, feedback: '💡 El color es un componente estético de diseño gráfico, pero no determina si el recurso apoya el objetivo de aprendizaje curricular.' },
            { label: 'D. Duración', isCorrect: false, feedback: '💡 La duración indica cuántos minutos dura el video, pero el criterio que valida si el recurso sirve para el objetivo de aprendizaje de quinto grado es la Pertinencia.' }
          ]
        },
        q2: {
          id: 's1_r2_q2',
          text: 'Si los estudiantes pueden reproducir el video, comprender sus explicaciones y navegar fácilmente por él, ¿qué criterio se está considerando?',
          options: [
            { label: 'A. Calidad', isCorrect: false, feedback: '💡 La calidad evalúa el rigor y exactitud de los datos científicos; la facilidad técnica para reproducir, comprender y navegar corresponde a la Usabilidad.' },
            { label: 'B. Usabilidad', isCorrect: true, feedback: '¡Brillante! La Usabilidad evalúa qué tan fácil, cómodo, intuitivo y accesible resulta utilizar y navegar por el recurso digital sin frustraciones.' },
            { label: 'C. Pertinencia', isCorrect: false, feedback: '💡 La pertinencia revisa la adecuación al tema del currículo; la facilidad con la que los estudiantes controlan y navegan por el video es la Usabilidad.' },
            { label: 'D. Decoración', isCorrect: false, feedback: '💡 La decoración se limita al aspecto estético visual, no a la facilidad de uso e interacción técnica del reproductor.' }
          ]
        }
      }
    ]
  },
  'sala2': {
    code: '741',
    criterion: 'Reto 2: Simulador Interactivo - El Tsunami',
    nextPage: 'sala3-terremoto.html',
    badgeText: '¡RETO 2 SUPERADO!',
    successTitle: '¡Felicidades, Navegante Científico/a!',
    achievementHeader: '🎯 Has Dominado el Reto 2: El Tsunami',
    successExplanation: '<strong>¡Gran criterio tecnológico!</strong> Comprobaste las características clave de un simulador: permite interactuar y observar cambios en tiempo real, demuestra una alta interactividad, es pertinente para el tema y ofrece una usabilidad intuitiva.',
    btnContinueText: '¡Continuar al Reto 3: El Terremoto! 🏢',
    rounds: [
      {
        roundNumber: '1/2',
        title: 'Ronda 1/2: Naturaleza del Simulador e Interactividad',
        q1: {
          id: 's2_r1_q1',
          text: '¿Qué característica diferencia a un simulador interactivo de un recurso que solamente presenta información?',
          options: [
            { label: 'A. Permite al estudiante interactuar y observar cambios.', isCorrect: true, feedback: '¡Exacto! El simulador va más allá de la lectura pasiva: permite manipular variables activas (como la altura de la ola) y ver en tiempo real qué sucede en la costa.' },
            { label: 'B. Tiene más imágenes.', isCorrect: false, feedback: '💡 Un libro o infografía estática también puede tener muchas imágenes, pero no te permite modificar variables ni experimentar activamente.' },
            { label: 'C. Utiliza letras grandes.', isCorrect: false, feedback: '💡 El tamaño de letra es una pauta de diseño tipográfico y legibilidad, no una característica que defina la simulación interactiva.' },
            { label: 'D. Tiene música.', isCorrect: false, feedback: '💡 La música es un componente sonoro multimedia; puede estar en cualquier medio y no convierte a un recurso en un simulador activo.' }
          ]
        },
        q2: {
          id: 's2_r1_q2',
          text: 'Si el simulador permite modificar variables y observar los resultados, ¿qué característica está demostrando?',
          options: [
            { label: 'A. Interactividad', isCorrect: true, feedback: '¡Muy bien! La Interactividad es la capacidad del software de responder a las acciones y decisiones del usuario modificando el entorno en tiempo real.' },
            { label: 'B. Decoración', isCorrect: false, feedback: '💡 La decoración solo adorna el aspecto gráfico externo; no permite al usuario intervenir ni alterar las variables del fenómeno.' },
            { label: 'C. Publicidad', isCorrect: false, feedback: '💡 La publicidad corresponde a anuncios comerciales ajenos a la experimentación científica y formativa.' },
            { label: 'D. Tamaño', isCorrect: false, feedback: '💡 El tamaño mide dimensiones o peso digital, no la capacidad interactiva de respuesta y manipulación de variables.' }
          ]
        }
      },
      {
        roundNumber: '2/2',
        title: 'Ronda 2/2: Pertinencia del Simulador y Evaluación de Usabilidad',
        q1: {
          id: 's2_r2_q1',
          text: 'El simulador fue diseñado para comprender cómo se producen los tsunamis. ¿Es pertinente?',
          options: [
            { label: 'A. Sí', isCorrect: true, feedback: '¡Totalmente correcto! Es pertinente porque sus herramientas y escenarios están específicamente concebidos para lograr el objetivo de comprender la física y prevención de tsunamis.' },
            { label: 'B. No', isCorrect: false, feedback: '💡 Reflexiona sobre la meta: si estamos aprendiendo sobre la formación de tsunamis y evacuación costera, y el simulador recrea ese proceso con exactitud, ¡sí es plenamente pertinente!' }
          ]
        },
        q2: {
          id: 's2_r2_q2',
          text: 'Para evaluar la usabilidad debemos preguntarnos principalmente:',
          options: [
            { label: 'A. ¿Tiene muchos colores?', isCorrect: false, feedback: '💡 La paleta de colores corresponde al diseño estético. La Usabilidad se pregunta si el usuario puede operar y navegar la herramienta sin enredos.' },
            { label: 'B. ¿Es fácil de utilizar y comprender?', isCorrect: true, feedback: '¡Respuesta impecable! La Usabilidad evalúa fundamentalmente que la interfaz sea fácil de manejar, intuitiva y que cualquier estudiante pueda comprenderla con rapidez.' },
            { label: 'C. ¿Tiene música?', isCorrect: false, feedback: '💡 La música es un recurso auditivo que puede ser agradable, pero no determina si la interfaz se maneja y comprende con facilidad.' },
            { label: 'D. ¿Tiene muchas imágenes?', isCorrect: false, feedback: '💡 Llenar una pantalla de imágenes no significa que sea fácil de usar; al contrario, demasiados elementos pueden sobrecargar la interfaz.' }
          ]
        }
      }
    ]
  },
  'sala3': {
    code: '985',
    criterion: 'Reto 3: Aplicación Móvil - Terremotos',
    nextPage: 'sala4-calor.html',
    badgeText: '¡RETO 3 SUPERADO!',
    successTitle: '¡Felicidades, Experto/a en Prevención!',
    achievementHeader: '🎯 Has Dominado el Reto 3: El Terremoto',
    successExplanation: '<strong>¡Análisis riguroso completado!</strong> Comprobaste que la aplicación sobre terremotos favorece la calidad por su información correcta y actualizada, cumple pertinencia curricular con el tema de estudio, ofrece alta usabilidad y aprendiste que los buenos gráficos no reemplazan la pertinencia.',
    btnContinueText: '¡Continuar al Reto 4: Ola de Calor! ☀️',
    rounds: [
      {
        roundNumber: '1/2',
        title: 'Ronda 1/2: Calidad Informativa y Pertinencia Temática',
        q1: {
          id: 's3_r1_q1',
          text: 'Una aplicación presenta información correcta y actualizada sobre los terremotos. ¿Qué criterio favorece?',
          options: [
            { label: 'A. Calidad', isCorrect: true, feedback: '¡Excelente! La veracidad, el rigor científico y la actualización permanente de los datos son los indicadores fundamentales del criterio de Calidad del contenido.' },
            { label: 'B. Usabilidad', isCorrect: false, feedback: '💡 La usabilidad evalúa qué tan simple es pulsar botones y navegar, mientras que la exactitud y veracidad de la información corresponden a la Calidad.' },
            { label: 'C. Decoración', isCorrect: false, feedback: '💡 La decoración abarca la apariencia visual exterior, no la exactitud ni el sustento científico de los datos sobre sismos.' },
            { label: 'D. Velocidad', isCorrect: false, feedback: '💡 La velocidad se relaciona con el rendimiento técnico del dispositivo, pero no garantiza que los conceptos explicados sean correctos ni actualizados.' }
          ]
        },
        q2: {
          id: 's3_r1_q2',
          text: 'La aplicación permite aprender sobre terremotos, que es precisamente el tema que estamos estudiando. ¿Qué criterio cumple?',
          options: [
            { label: 'A. Pertinencia', isCorrect: true, feedback: '¡Así se hace! La Pertinencia significa que el recurso se ajusta con exactitud al tema de estudio y a los objetivos formativos que se quieren alcanzar.' },
            { label: 'B. Usabilidad', isCorrect: false, feedback: '💡 La usabilidad mide la facilidad de manejo de la app; la coincidencia directa entre el tema de clase y la aplicación es la Pertinencia.' },
            { label: 'C. Tamaño', isCorrect: false, feedback: '💡 El tamaño de almacenamiento de la aplicación no define si su tema coincide con nuestro plan de estudio.' },
            { label: 'D. Calidad', isCorrect: false, feedback: '💡 La calidad asegura que los datos sean rigurosos, pero el hecho de que apoye justo el tema curricular que estamos abordando es la Pertinencia.' }
          ]
        }
      },
      {
        roundNumber: '2/2',
        title: 'Ronda 2/2: Usabilidad de la Interfaz y Criterio Pedagógico',
        q1: {
          id: 's3_r2_q1',
          text: 'La aplicación tiene botones claros, instrucciones sencillas y permite navegar sin dificultad. ¿Qué criterio cumple?',
          options: [
            { label: 'A. Usabilidad', isCorrect: true, feedback: '¡Totalmente acertado! Una interfaz con botones visibles, instrucciones comprensibles y navegación sin tropiezos es el ejemplo perfecto de una alta Usabilidad.' },
            { label: 'B. Pertinencia', isCorrect: false, feedback: '💡 La pertinencia revisa si el tema es el adecuado; la facilidad con la que el alumno navega y presiona botones sin enredos es la Usabilidad.' },
            { label: 'C. Calidad', isCorrect: false, feedback: '💡 La calidad analiza la veracidad científica de la información; la sencillez de los controles e instrucciones pertenece a la Usabilidad.' },
            { label: 'D. Decoración', isCorrect: false, feedback: '💡 La decoración solo embellece los gráficos; el diseño accesible, intuitivo y fácil de operar es la Usabilidad del software.' }
          ]
        },
        q2: {
          id: 's3_r2_q2',
          text: 'Una aplicación tiene excelentes gráficos, pero la información no tiene relación con el objetivo de aprendizaje. ¿Es pertinente?',
          options: [
            { label: 'A. Sí', isCorrect: false, feedback: '💡 ¡Cuidado! Que una aplicación tenga gráficos espectaculares no sirve de nada si no enseña lo que necesitamos aprender. Por eso NO es pertinente.' },
            { label: 'B. No', isCorrect: true, feedback: '¡Pensamiento crítico formidable! Por más bonitos o avanzados que sean los gráficos, si el recurso no guarda relación con el objetivo de aprendizaje, NO es pertinente.' }
          ]
        }
      }
    ]
  },
  'sala4': {
    code: '624',
    criterion: 'Reto 4: Multimedia Interactivo - Ola de Calor',
    nextPage: 'final.html',
    badgeText: '¡RETO 4 SUPERADO!',
    successTitle: '¡Misión Cumplida, Guardián del Planeta!',
    achievementHeader: '🎯 Has Dominado el Reto 4: La Ola de Calor',
    successExplanation: '<strong>¡Pensamiento crítico ejemplar!</strong> Demostraste un dominio integral reconociendo la calidad sustentada en fuentes confiables, la pertinencia con las metas de aprendizaje, la usabilidad accesible y el juicio crítico frente a contenidos sin respaldo.',
    btnContinueText: '¡Ir al Registro de Evidencias y Código Final! 🚨',
    rounds: [
      {
        roundNumber: '1/2',
        title: 'Ronda 1/2: Calidad por Fuentes Confiables y Pertinencia',
        q1: {
          id: 's4_r1_q1',
          text: 'Después de explorar el recurso: ¿Cuál de las siguientes características permite reconocer que un recurso presenta información de calidad?',
          options: [
            { label: 'A. Utiliza muchos colores y animaciones.', isCorrect: false, feedback: '💡 Los colores y animaciones atraen la vista, pero no garantizan que los datos sobre las olas de calor sean verdaderos ni respaldados por la ciencia.' },
            { label: 'B. Presenta información clara, organizada y basada en fuentes confiables.', isCorrect: true, feedback: '¡Extraordinario! La Calidad informativa se sustenta en la claridad de las explicaciones, una organización coherente y el respaldo en fuentes científicas u oficiales verificables.' },
            { label: 'C. Tiene música llamativa.', isCorrect: false, feedback: '💡 La música llamativa es un accesorio auditivo que incluso puede distraer; en ningún caso asegura la veracidad ni la calidad del contenido.' },
            { label: 'D. Tiene muchas imágenes.', isCorrect: false, feedback: '💡 Incluir abundantes imágenes no avala la exactitud ni el valor educativo del contenido; la calidad reside en el rigor y respaldo de la información.' }
          ]
        },
        q2: {
          id: 's4_r1_q2',
          text: 'El objetivo de aprendizaje es comprender qué es una ola de calor y conocer algunas medidas de prevención. El recurso explica estos aspectos. ¿Es pertinente para el propósito de aprendizaje?',
          options: [
            { label: 'A. Sí.', isCorrect: true, feedback: '¡Correcto! Cumple con total Pertinencia porque su contenido se alinea directamente con la definición del fenómeno y las pautas de prevención que se buscaban aprender.' },
            { label: 'B. No.', isCorrect: false, feedback: '💡 Analiza la relación: la meta era comprender las olas de calor y medidas de autocuidado, y el recurso explica precisamente esos dos temas. ¡Por lo tanto sí es pertinente!' }
          ]
        }
      },
      {
        roundNumber: '2/2',
        title: 'Ronda 2/2: Usabilidad de la Interfaz y Pensamiento Crítico',
        q1: {
          id: 's4_r2_q1',
          text: 'Para utilizar el recurso, los estudiantes deben navegar por diferentes apartados. Los botones son visibles, las instrucciones son claras y la información se puede consultar fácilmente. ¿Qué criterio se está evaluando?',
          options: [
            { label: 'A. Calidad', isCorrect: false, feedback: '💡 La calidad analiza la veracidad y rigor científico del texto; la visibilidad de los botones y la facilidad para recorrer apartados evalúan la Usabilidad.' },
            { label: 'B. Pertinencia', isCorrect: false, feedback: '💡 La pertinencia evalúa la correspondencia con el plan de estudios; la fluidez y sencillez para interactuar con la interfaz es la Usabilidad.' },
            { label: 'C. Usabilidad', isCorrect: true, feedback: '¡Excelente precisión! Botones claros, instrucciones transparentes y una navegación ágil y sin complicaciones son las características definitivas de la Usabilidad.' },
            { label: 'D. Decoración', isCorrect: false, feedback: '💡 La decoración abarca únicamente los elementos decorativos, mientras que la facilidad de uso y exploración funcional es la Usabilidad.' }
          ]
        },
        q2: {
          id: 's4_r2_q2',
          text: 'Una página presenta imágenes muy llamativas sobre las olas de calor, pero la información no tiene autor, no indica sus fuentes y contiene datos que no pueden comprobarse. ¿Considerarías que este recurso tiene una calidad adecuada?',
          options: [
            { label: 'A. Sí, porque tiene imágenes bonitas.', isCorrect: false, feedback: '💡 ¡Cuidado! Las imágenes atractivas no convierten una información dudosa en verdadera. Sin fuentes ni autor comprobable, carece de calidad.' },
            { label: 'B. Sí, porque es interactivo.', isCorrect: false, feedback: '💡 Que una página sea interactiva no valida que sus datos sean científicos; la interactividad sin rigor puede transmitir mitos perjudiciales.' },
            { label: 'C. No, porque la información no presenta suficiente respaldo.', isCorrect: true, feedback: '¡Pensamiento crítico sobresaliente! Si una página no cita fuentes, no identifica autores capacitados y muestra datos incomprobables, NO tiene una calidad adecuada y no debemos confiar en ella.' },
            { label: 'D. Sí, porque es digital.', isCorrect: false, feedback: '💡 El soporte digital no es garantía de verdad: en internet abunda información sin sustento. La calidad depende del rigor de los autores y fuentes.' }
          ]
        }
      }
    ]
  }
};

/**
 * Estado actual de la sala
 */
let currentRoomState = {
  roomKey: null,
  roundIndex: 0,
  selectedAnswers: { q1: null, q2: null }
};

/**
 * Inicializa la validación de 2 preguntas por ronda en la sala especificada
 * @param {string} roomKey - 'sala1' | 'sala2' | 'sala3' | 'sala4'
 */
function initRoomValidation(roomKey) {
  const room = ROOMS_CONFIG[roomKey];
  if (!room) return;

  currentRoomState.roomKey = roomKey;
  currentRoomState.roundIndex = 0;
  currentRoomState.selectedAnswers = { q1: null, q2: null };

  // Evitar que botones de simulador interfieran
  document.querySelectorAll('.btn-sim-action').forEach(simBtn => {
    simBtn.addEventListener('click', (e) => e.stopPropagation());
  });

  renderCurrentRound();
}

/**
 * Renderiza la ronda actual en la columna de preguntas
 */
function renderCurrentRound() {
  const room = ROOMS_CONFIG[currentRoomState.roomKey];
  if (!room || !room.rounds) return;

  const roundData = room.rounds[currentRoomState.roundIndex];
  if (!roundData) return;

  currentRoomState.selectedAnswers = { q1: null, q2: null };

  const questionColumn = document.querySelector('.question-column');
  if (!questionColumn) return;

  // Numeración secuencial de preguntas: Ronda 1 -> Preguntas 1 y 2; Ronda 2 -> Preguntas 3 y 4
  const q1Num = currentRoomState.roundIndex === 0 ? '1' : '3';
  const q2Num = currentRoomState.roundIndex === 0 ? '2' : '4';

  // Detección de longitud de opciones para aplicar el diseño idóneo (grilla compacta vs stack vertical)
  const isQ1Long = roundData.q1.options.some(opt => opt.label.length > 22);
  const isQ2Long = roundData.q2.options.some(opt => opt.label.length > 22);

  const q1LayoutClass = isQ1Long ? 'options-vertical-stack' : (roundData.q1.options.length === 2 ? 'options-two-col' : 'options-grid-2x2');
  const q2LayoutClass = isQ2Long ? 'options-vertical-stack' : (roundData.q2.options.length === 2 ? 'options-two-col' : 'options-grid-2x2');

  const startProgressCount = currentRoomState.roundIndex * 2;

  questionColumn.innerHTML = `
    <!-- Cabecera del Criterio y Badges de Ronda y Progreso -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px; margin-bottom: 0.35rem;">
      <div class="question-badge" style="margin-bottom: 0;">
        <i class="fa-solid fa-compass"></i> ${room.criterion}
      </div>
      <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
        <div class="round-indicator-badge">
          <i class="fa-solid fa-flag-checkered"></i>
          <span>Ronda ${roundData.roundNumber}</span>
        </div>
        <div class="progress-questions-badge" id="questionsProgressBadge">
          <i class="fa-solid fa-circle-check"></i>
          <span id="questionsProgressText">${startProgressCount}/4 Preguntas</span>
        </div>
      </div>
    </div>

    <!-- Título de la Ronda -->
    <div style="font-family: var(--font-hand); font-size: 1.12rem; font-weight: bold; color: #1E3A8A; margin-bottom: 0.35rem;">
      ${roundData.title}
    </div>

    <!-- Contenedor de las 2 Preguntas -->
    <div class="questions-round-container">
      
      <!-- PREGUNTA 1 DE LA RONDA -->
      <div class="question-block" id="blockQ1">
        <div class="question-block-header">
          <h3 class="question-block-title">
            ${q1Num}. ${roundData.q1.text}
          </h3>
          <span class="question-mini-status" id="miniStatusQ1" style="display: none;">
            <i class="fa-solid fa-check"></i> Correcta
          </span>
        </div>
        <div class="question-options-horizontal ${q1LayoutClass}" id="optionsQ1">
          ${roundData.q1.options.map((opt, idx) => `
            <button type="button" class="option-pill-btn" data-question="q1" data-index="${idx}" data-correct="${opt.isCorrect}">
              <span>${opt.label}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- PREGUNTA 2 DE LA RONDA -->
      <div class="question-block" id="blockQ2">
        <div class="question-block-header">
          <h3 class="question-block-title">
            ${q2Num}. ${roundData.q2.text}
          </h3>
          <span class="question-mini-status" id="miniStatusQ2" style="display: none;">
            <i class="fa-solid fa-check"></i> Correcta
          </span>
        </div>
        <div class="question-options-horizontal ${q2LayoutClass}" id="optionsQ2">
          ${roundData.q2.options.map((opt, idx) => `
            <button type="button" class="option-pill-btn" data-question="q2" data-index="${idx}" data-correct="${opt.isCorrect}">
              <span>${opt.label}</span>
            </button>
          `).join('')}
        </div>
      </div>

    </div>

    <!-- Contenedor dinámico y responsive de retroalimentación / Verificador (1/4, 2/4, 3/4) -->
    <div id="roundFeedbackZone" class="round-feedback-zone">
      <div class="verification-status-card status-pending" id="verificationCard">
        <span class="verification-status-pill pill-gray">
          <i class="fa-solid fa-hand-pointer"></i> Guía
        </span>
        <span class="verification-status-text">
          Selecciona tu respuesta en ambas preguntas para verificar tu análisis.
        </span>
      </div>
    </div>
  `;

  // Asignar eventos de clic a las opciones
  questionColumn.querySelectorAll('.option-pill-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const qKey = this.getAttribute('data-question'); // 'q1' o 'q2'
      const optIdx = parseInt(this.getAttribute('data-index'), 10);
      const isCorrect = this.getAttribute('data-correct') === 'true';

      handleOptionSelection(qKey, optIdx, isCorrect, this);
    });
  });
}

/**
 * Maneja la selección de una opción en Q1 o Q2 con verificador 1/4, 2/4, 3/4
 */
function handleOptionSelection(qKey, optIdx, isCorrect, clickedBtn) {
  const room = ROOMS_CONFIG[currentRoomState.roomKey];
  const roundData = room.rounds[currentRoomState.roundIndex];
  const qData = qKey === 'q1' ? roundData.q1 : roundData.q2;
  const optData = qData.options[optIdx];

  // Desmarcar hermanos de la misma pregunta
  const parentContainer = clickedBtn.parentElement;
  parentContainer.querySelectorAll('.option-pill-btn').forEach(b => {
    b.classList.remove('selected', 'correct-highlight', 'wrong-highlight');
  });

  currentRoomState.selectedAnswers[qKey] = {
    isCorrect: isCorrect,
    feedback: optData.feedback,
    btn: clickedBtn
  };

  const feedbackZone = document.getElementById('roundFeedbackZone');

  if (!isCorrect) {
    // ==========================================
    // RESPUESTA INCORRECTA: LETRERO EN MEDIO (MODAL CENTRADO)
    // ==========================================
    clickedBtn.classList.add('wrong-highlight');
    if (window.escapeSound) window.escapeSound.playError();

    // Desplegar modal centrado en medio de la pantalla
    showLearnAgainModal(qKey, optData, qData, roundData, clickedBtn);
    return;
  }

  // Si es correcta
  clickedBtn.classList.add('correct-highlight');
  if (window.escapeSound) window.escapeSound.playOptionSelect();

  // Marcar visualmente el bloque de la pregunta resuelta
  const blockId = qKey === 'q1' ? 'blockQ1' : 'blockQ2';
  const miniId = qKey === 'q1' ? 'miniStatusQ1' : 'miniStatusQ2';
  const blockEl = document.getElementById(blockId);
  if (blockEl) blockEl.classList.add('is-answered-correct');
  const miniEl = document.getElementById(miniId);
  if (miniEl) miniEl.style.display = 'inline-flex';

  // Calcular progreso total de preguntas en la sala (1/4, 2/4, 3/4, 4/4)
  const roundBase = currentRoomState.roundIndex * 2;
  let inRound = 0;
  const selQ1 = currentRoomState.selectedAnswers.q1;
  const selQ2 = currentRoomState.selectedAnswers.q2;
  if (selQ1 && selQ1.isCorrect) inRound++;
  if (selQ2 && selQ2.isCorrect) inRound++;
  const totalCorrect = roundBase + inRound;

  // Actualizar indicador de progreso en la cabecera
  const progressText = document.getElementById('questionsProgressText');
  if (progressText) {
    progressText.textContent = `${totalCorrect}/4 Preguntas`;
  }

  if (selQ1 && selQ2 && selQ1.isCorrect && selQ2.isCorrect) {
    // Ambas preguntas de la ronda actual están correctas
    if (currentRoomState.roundIndex < room.rounds.length - 1) {
      // ==========================================
      // RONDA 1/2 COMPLETADA: PROGRESO 2/4
      // ==========================================
      if (window.escapeSound) window.escapeSound.playSuccess();
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.6 },
          colors: ['#2D5A46', '#F2B705', '#3B82F6', '#10B981']
        });
      }

      if (feedbackZone) {
        feedbackZone.innerHTML = `
          <div class="verification-status-card status-round-complete animate__animated animate__fadeIn">
            <span class="verification-status-pill pill-blue">
              <i class="fa-solid fa-trophy"></i> 2/4
            </span>
            <span class="verification-status-text">
              🎉 ¡Ronda 1/2 superada con éxito! Pasando a la Ronda 2/2...
            </span>
          </div>
        `;
      }

      setTimeout(() => {
        currentRoomState.roundIndex++;
        renderCurrentRound();
      }, 550);

    } else {
      // ==========================================
      // RETO TOTAL COMPLETADO (4/4): ALERTA EN MITAD DE PANTALLA
      // (Se mantiene la alerta central como pidió el usuario)
      // ==========================================
      if (window.escapeSound) window.escapeSound.playSuccess();
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#2D5A46', '#F2B705', '#3B82F6', '#10B981', '#EF4444']
        });
      }
      handleRoomCompleted(room);
    }
  } else {
    // Falta una por responder en la ronda actual
    if (feedbackZone) {
      if (totalCorrect === 1) {
        // ==========================================
        // PROGRESO 1/4 (Ronda 1, una respondida)
        // ==========================================
        feedbackZone.innerHTML = `
          <div class="verification-status-card status-correct animate__animated animate__fadeIn">
            <span class="verification-status-pill pill-green">
              <i class="fa-solid fa-circle-check"></i> 1/4
            </span>
            <span class="verification-status-text">
              ¡Respuesta correcta! Ahora responde la otra pregunta de esta ronda.
            </span>
          </div>
        `;
      } else if (totalCorrect === 3) {
        // ==========================================
        // PROGRESO 3/4 (Ronda 2, una respondida)
        // ==========================================
        feedbackZone.innerHTML = `
          <div class="verification-status-card status-correct animate__animated animate__fadeIn">
            <span class="verification-status-pill pill-green">
              <i class="fa-solid fa-circle-check"></i> 3/4
            </span>
            <span class="verification-status-text">
              ¡Gran análisis! Respuesta correcta. Responde la última pregunta para completar el reto.
            </span>
          </div>
        `;
      }
    }
  }
}

/**
 * Muestra el letrero/modal interactivo centrado en medio de la pantalla
 * para guiar al usuario con retroalimentación didáctica y permitirle reintentar
 */
function showLearnAgainModal(qKey, optData, qData, roundData, clickedBtn) {
  let overlay = document.querySelector('.success-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'success-overlay';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div class="success-modal-card animate__animated animate__zoomIn" style="border: 3.5px solid #F59E0B; max-width: 530px; width: 92%;">
      <button class="modal-close-x" id="btnCloseLearnModal" type="button" aria-label="Cerrar"><i class="fa-solid fa-xmark"></i></button>

      <div class="feedback-stamp-circle partial animate__animated animate__bounceIn">
        <i class="fa-solid fa-lightbulb"></i>
      </div>

      <div class="partial-badge-pill" style="margin-bottom: 0.4rem;">
        <i class="fa-solid fa-rotate-left"></i> Ronda ${roundData.roundNumber} - Pista Didáctica
      </div>

      <h3 style="font-family: var(--font-script); font-size: clamp(1.8rem, 2.6vw, 2.2rem); color: #B45309; margin: 0.1rem 0 0.4rem; line-height: 1.15;">
        ¡Vamos a volver a aprender!
      </h3>

      <div style="font-size: 0.95rem; margin-bottom: 0.5rem; color: #991B1B; background: #FEF2F2; padding: 6px 12px; border-radius: 8px; border: 1.5px solid #FECACA; text-align: center;">
        <span>Seleccionaste:</span> <strong style="font-size: 1.05rem;">"${optData.label}"</strong>
      </div>

      <div class="feedback-explanation-box partial-box" style="margin: 0.5rem 0 0.8rem;">
        <div class="feedback-box-header" style="color: #92400E;">
          <i class="fa-solid fa-compass"></i>
          <span>Reevalúa el recurso y reflexiona:</span>
        </div>
        <div class="feedback-box-content" style="font-size: 0.95rem; line-height: 1.45;">
          ${optData.feedback}
        </div>
      </div>

      <div class="success-modal-actions" style="margin-top: 0.8rem;">
        <button id="btnRetryLearnModal" class="btn-modal-retry" type="button" title="Volver a intentar esta pregunta">
          <i class="fa-solid fa-rotate-left"></i>
          <span>🔄 ¡Entendido! Voy a Reintentar</span>
        </button>
      </div>
    </div>
  `;

  overlay.style.display = 'flex';

  function dismissModal() {
    if (window.escapeSound) window.escapeSound.playPop();
    overlay.style.display = 'none';
    if (clickedBtn) {
      clickedBtn.classList.remove('wrong-highlight');
    }
    currentRoomState.selectedAnswers[qKey] = null;

    // Si ninguna pregunta de la ronda está correcta, mantener el estado guía
    const otherQKey = qKey === 'q1' ? 'q2' : 'q1';
    if (!currentRoomState.selectedAnswers[otherQKey] || !currentRoomState.selectedAnswers[otherQKey].isCorrect) {
      const feedbackZone = document.getElementById('roundFeedbackZone');
      if (feedbackZone) {
        feedbackZone.innerHTML = `
          <div class="verification-status-card status-pending" id="verificationCard">
            <span class="verification-status-pill pill-gray">
              <i class="fa-solid fa-hand-pointer"></i> Guía
            </span>
            <span class="verification-status-text">
              Selecciona tu respuesta en ambas preguntas para verificar tu análisis.
            </span>
          </div>
        `;
      }
    }
  }

  const retryBtn = overlay.querySelector('#btnRetryLearnModal');
  if (retryBtn) retryBtn.addEventListener('click', dismissModal);

  const closeX = overlay.querySelector('#btnCloseLearnModal');
  if (closeX) closeX.addEventListener('click', dismissModal);

  overlay.onclick = (e) => {
    if (e.target === overlay) dismissModal();
  };
}



/**
 * Maneja la finalización exitosa de todas las rondas de la sala
 */
function handleRoomCompleted(room) {
  const roomKey = currentRoomState.roomKey;

  // Guardar insignia y progreso
  const badges = JSON.parse(localStorage.getItem('unlocked_badges') || '[]');
  if (!badges.includes(roomKey)) {
    badges.push(roomKey);
    localStorage.setItem('unlocked_badges', JSON.stringify(badges));
  }

  // Guardar clave obtenida
  const roomCodes = JSON.parse(localStorage.getItem('unlocked_room_codes') || '{}');
  roomCodes[roomKey] = room.code;
  localStorage.setItem('unlocked_room_codes', JSON.stringify(roomCodes));

  if (typeof setupEscapeRoomNavigation === 'function') {
    setupEscapeRoomNavigation();
  }

  if (window.escapeSound) {
    window.escapeSound.playSecretUnlock();
  }

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#2D5A46', '#F2B705', '#3B82F6', '#EF4444', '#16A34A', '#8B5CF6']
    });
  }

  const successModal = document.querySelector('.success-overlay');
  if (successModal) {
    const modalContent = successModal.querySelector('.success-modal-card');
    if (modalContent) {
      modalContent.innerHTML = `
        <div class="success-stamp-circle animate__animated animate__heartBeat">
          <i class="fa-solid fa-check"></i>
        </div>
        
        <div class="success-badge-pill">
          <i class="fa-solid fa-key"></i> Clave Obtenida: <strong style="color: #FDE047; font-size: 1.25rem; letter-spacing: 2px;">${room.code}</strong>
        </div>

        <h3 style="font-family: var(--font-script); font-size: clamp(1.8rem, 2.5vw, 2.2rem); color: var(--school-green-title); margin: 0.2rem 0 0.5rem; line-height: 1.15;">
          ${room.successTitle}
        </h3>

        <div class="success-criterion-highlight">
          <div class="success-criterion-header">
            <i class="fa-solid fa-circle-check"></i>
            <span>${room.achievementHeader}</span>
          </div>
          <p class="success-explanation-text">
            ${room.successExplanation}
          </p>
        </div>

        <div class="success-modal-actions">
          <button id="btnContinueNextRoom" class="btn-modal-continue" type="button" title="Avanzar a la siguiente sala">
            <span>${room.btnContinueText}</span>
            <i class="fa-solid fa-circle-arrow-right"></i>
          </button>

          <button id="btnReviewThisRoom" class="btn-modal-review" type="button" title="Quedarse en esta sala para revisar el simulador">
            <i class="fa-solid fa-rotate-left"></i> Seguir explorando esta sala
          </button>
        </div>
      `;

      const continueBtn = modalContent.querySelector('#btnContinueNextRoom');
      if (continueBtn) {
        continueBtn.addEventListener('click', () => {
          if (window.escapeSound) window.escapeSound.playPop();
          continueBtn.innerHTML = '<span>Cargando siguiente misión...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
          window.location.href = room.nextPage;
        });
      }

      const reviewBtn = modalContent.querySelector('#btnReviewThisRoom');
      if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
          if (window.escapeSound) window.escapeSound.playPop();
          successModal.style.display = 'none';
        });
      }
    }

    successModal.style.display = 'flex';
  }
}

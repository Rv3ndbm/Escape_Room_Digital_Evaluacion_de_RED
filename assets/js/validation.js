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
    criterion: 'Pertinencia y Calidad',
    nextPage: 'sala2-tsunami.html',
    badgeText: '¡RETO 1 SUPERADO!',
    successTitle: '¡Felicidades, Explorador/a Científico/a!',
    achievementHeader: '🎯 Has Dominado el Reto 1: El Volcán',
    successExplanation: '<strong>¡Excelente análisis científico!</strong> Has verificado que el video y el simulador de 4 fases cumplen con rigor la explicación geológica de la presión subterránea y el ascenso de lava en la cámara magmática.',
    btnContinueText: '¡Continuar al Reto 2: El Tsunami! 🌊',
    rounds: [
      {
        roundNumber: '1/2',
        title: 'Ronda 1/2: Exploración Inicial del Recurso',
        q1: {
          id: 's1_r1_q1',
          text: '¿El video presenta información relacionada directamente con el fenómeno natural estudiado?',
          options: [
            { label: 'Si', isCorrect: true, feedback: '¡Exacto! El video explica de forma directa cómo y por qué se producen las erupciones volcánicas.' },
            { label: 'No', isCorrect: false, feedback: '💡 Observa el video a la izquierda: describe las partes de un volcán y el movimiento real del magma.' },
            { label: 'Mas o menos', isCorrect: false, feedback: '💡 El video está enfocado 100% en la vulcanología y las etapas de erupción.' }
          ]
        },
        q2: {
          id: 's1_r1_q2',
          text: 'Si el video presenta información clara, organizada y relacionada con el tema, ¿qué criterio estás analizando?',
          options: [
            { label: 'A. Calidad', isCorrect: true, feedback: '¡Correcto! La claridad, exactitud y organización del contenido corresponden al criterio de Calidad.' },
            { label: 'B. Decoración', isCorrect: false, feedback: '💡 La decoración se refiere solo a adornos visuales; cuando analizamos el rigor y la claridad del tema evaluamos la Calidad.' }
          ]
        }
      },
      {
        roundNumber: '2/2',
        title: 'Ronda 2/2: Análisis de Pertinencia y Fases',
        q1: {
          id: 's1_r2_q1',
          text: 'Después de probar el simulador de 4 fases, ¿crees que la información nos sirve de verdad para entender por qué hacen erupción los volcanes?',
          options: [
            { label: 'Si, es totalmente pertinente', isCorrect: true, feedback: '¡Brillante! El simulador muestra cómo la presión de gases impulsa el magma por la chimenea.' },
            { label: 'No, no aporta nada', isCorrect: false, feedback: '💡 Observa las Fases 1 (Presión) y 2 (Ascenso) en el simulador interactivo para ver el proceso.' },
            { label: 'Solo muestra efectos sin explicación', isCorrect: false, feedback: '💡 Cada una de las 4 fases representa un proceso geológico exacto.' }
          ]
        },
        q2: {
          id: 's1_r2_q2',
          text: 'Cuando comprobamos si un recurso digital responde exactamente a nuestro objetivo de aprendizaje, ¿qué criterio evaluamos?',
          options: [
            { label: 'A. Pertinencia', isCorrect: true, feedback: '¡Excelente! La Pertinencia asegura que el recurso sirva justamente para lo que necesitamos aprender.' },
            { label: 'B. Tamaño', isCorrect: false, feedback: '💡 El tamaño de los archivos no define si la lección es adecuada. El criterio correcto es la Pertinencia.' }
          ]
        }
      }
    ]
  },
  'sala2': {
    code: '741',
    criterion: 'Usabilidad y Manejo',
    nextPage: 'sala3-terremoto.html',
    badgeText: '¡RETO 2 SUPERADO!',
    successTitle: '¡Felicidades, Navegante Científico/a!',
    achievementHeader: '🎯 Has Dominado el Reto 2: El Tsunami',
    successExplanation: '<strong>¡Gran criterio tecnológico!</strong> Comprobaste que la combinación del juego Stop Disasters y el simulador de costa ofrece controles intuitivos para entender la evacuación hacia zonas altas.',
    btnContinueText: '¡Continuar al Reto 3: El Terremoto! 🏢',
    rounds: [
      {
        roundNumber: '1/2',
        title: 'Ronda 1/2: Exploración del Juego y la Simulación',
        q1: {
          id: 's2_r1_q1',
          text: '¿El recurso sobre tsunamis te permite experimentar qué sucede cuando cambian las condiciones de la ola en la costa?',
          options: [
            { label: 'Si', isCorrect: true, feedback: '¡Así es! Al ajustar los metros de la ola o jugar a defender la costa puedes ver el impacto inmediato.' },
            { label: 'No', isCorrect: false, feedback: '💡 Prueba el deslizador de altura (5m, 15m, 30m) o el juego interactivo a la izquierda.' },
            { label: 'Mas o menos', isCorrect: false, feedback: '💡 El simulador y el juego muestran claramente cómo reacciona el mar y la población.' }
          ]
        },
        q2: {
          id: 's2_r1_q2',
          text: 'Si los botones, deslizadores y pestañas responden con facilidad y sin confundir al estudiante, ¿qué criterio estás evaluando?',
          options: [
            { label: 'A. Usabilidad', isCorrect: true, feedback: '¡Exacto! La Usabilidad mide qué tan intuitivo, cómodo y fácil de navegar es el recurso.' },
            { label: 'B. Velocidad de internet', isCorrect: false, feedback: '💡 La velocidad de internet depende de la red; la facilidad de manejo de la herramienta es su Usabilidad.' }
          ]
        }
      },
      {
        roundNumber: '2/2',
        title: 'Ronda 2/2: Evaluación de Autonomía de Uso',
        q1: {
          id: 's2_r2_q1',
          text: '¿Un estudiante de 4.º de primaria puede aprender a evacuar hacia la colina alta de forma autónoma usando esta herramienta?',
          options: [
            { label: 'Si, es fácil y comprensible', isCorrect: true, feedback: '¡Totalmente! La señalización visual y la cota segura (+30m) orientan al alumno sin dificultad.' },
            { label: 'No, es demasiado complicado', isCorrect: false, feedback: '💡 Fíjate en las pestañas panorámicas (Mar, Playa, Pueblo, Colina); son muy sencillas de explorar.' },
            { label: 'Requiere ayuda de un programador', isCorrect: false, feedback: '💡 Los controles están diseñados para niños de primaria con botones claros y directos.' }
          ]
        },
        q2: {
          id: 's2_r2_q2',
          text: 'Para decir que un recurso digital tiene "buena usabilidad", ¿qué característica debe cumplir principalmente?',
          options: [
            { label: 'A. Ser intuitivo y fácil de usar', isCorrect: true, feedback: '¡Correcto! Una buena usabilidad permite usar el recurso sin perderse ni frustrarse.' },
            { label: 'B. Tener música muy ruidosa', isCorrect: false, feedback: '💡 El ruido no mejora el manejo; la claridad y sencillez de los controles sí lo hacen.' }
          ]
        }
      }
    ]
  },
  'sala3': {
    code: '985',
    criterion: 'Calidad y Rigor Científico',
    nextPage: 'sala4-calor.html',
    badgeText: '¡RETO 3 SUPERADO!',
    successTitle: '¡Felicidades, Experto/a en Prevención!',
    achievementHeader: '🎯 Has Dominado el Reto 3: El Terremoto',
    successExplanation: '<strong>¡Análisis riguroso completado!</strong> Verificaste que los datos sismológicos y las medidas de la mochila de 72 horas y autoprotección escolar provienen de protocolos oficiales que salvan vidas.',
    btnContinueText: '¡Continuar al Reto 4: Ola de Calor! ☀️',
    rounds: [
      {
        roundNumber: '1/2',
        title: 'Ronda 1/2: Exploración de la App Móvil',
        q1: {
          id: 's3_r1_q1',
          text: '¿La aplicación móvil educativa presenta información real sobre cómo actuar antes y durante un sismo?',
          options: [
            { label: 'Si', isCorrect: true, feedback: '¡Correcto! Muestra el sismógrafo, la mochila de emergencia y las normas de agacharse y cubrirse.' },
            { label: 'No', isCorrect: false, feedback: '💡 Explora la app en el teléfono a la izquierda tocando las pestañas de simulacro y consejos.' },
            { label: 'Mas o menos', isCorrect: false, feedback: '💡 Las 3 secciones de la app cubren protocolos certificados de autoprotección escolar.' }
          ]
        },
        q2: {
          id: 's3_r1_q2',
          text: 'Si las recomendaciones provienen de geofísicos y organismos de Protección Civil certificados, ¿qué criterio garantizamos?',
          options: [
            { label: 'A. Calidad y Rigor', isCorrect: true, feedback: '¡Exacto! El rigor de las fuentes y la veracidad de la información garantizan la Calidad.' },
            { label: 'B. Precio de la app', isCorrect: false, feedback: '💡 El costo no determina si la ciencia es verdadera; la confiabilidad de los datos es la Calidad.' }
          ]
        }
      },
      {
        roundNumber: '2/2',
        title: 'Ronda 2/2: Verificación de Contenido Pedagógico',
        q1: {
          id: 's3_r2_q1',
          text: '¿Crees que los elementos de la mochila de emergencia (linterna, agua, botiquín, silbato, radio) están bien justificados?',
          options: [
            { label: 'Si, son vitales para 72 horas', isCorrect: true, feedback: '¡Excelente! Esos 5 elementos son el estándar internacional de supervivencia básica.' },
            { label: 'No, son objetos innecesarios', isCorrect: false, feedback: '💡 Revisa el minijuego de la mochila en el teléfono para entender la utilidad de cada uno.' },
            { label: 'Faltan juguetes y golosinas', isCorrect: false, feedback: '💡 Una mochila de emergencia prioriza la hidratación, primeros auxilios y comunicación.' }
          ]
        },
        q2: {
          id: 's3_r2_q2',
          text: '¿Por qué es fundamental que un recurso sobre desastres naturales tenga alta Calidad informativa?',
          options: [
            { label: 'A. Porque de ello depende la seguridad y la vida', isCorrect: true, feedback: '¡Brillante! Datos erróneos en una emergencia son peligrosos; la calidad salva vidas.' },
            { label: 'B. Porque tiene colores más bonitos', isCorrect: false, feedback: '💡 El diseño apoya, pero lo crucial es la veracidad y rigor científico del contenido.' }
          ]
        }
      }
    ]
  },
  'sala4': {
    code: '624',
    criterion: 'Accesibilidad e Inclusión',
    nextPage: 'final.html',
    badgeText: '¡RETO 4 SUPERADO!',
    successTitle: '¡Misión Cumplida, Guardián del Planeta!',
    achievementHeader: '🎯 Has Dominado el Reto 4: La Ola de Calor',
    successExplanation: '<strong>¡Inclusión educativa ejemplar!</strong> Aprendiste que todo material didáctico debe diseñarse para que todas las personas, sin importar sus condiciones visuales o auditivas, puedan aprender en igualdad.',
    btnContinueText: '¡Ir a la Graduación y Ver Mi Medalla! 🎓',
    rounds: [
      {
        roundNumber: '1/2',
        title: 'Ronda 1/2: Exploración del Juego y Adaptabilidad',
        q1: {
          id: 's4_r1_q1',
          text: '¿El recurso sobre el calor y las capas de la Tierra ofrece alternativas para ajustar el tamaño de texto o el contraste?',
          options: [
            { label: 'Si', isCorrect: true, feedback: '¡Así es! Cuenta con herramientas de inclusión para facilitar la lectura a cualquier alumno.' },
            { label: 'No', isCorrect: false, feedback: '💡 Observa la barra amarilla sobre el juego a la izquierda con los botones de Letra Grande y Alto Contraste.' },
            { label: 'Mas o menos', isCorrect: false, feedback: '💡 Las opciones de accesibilidad adaptan la interfaz de forma inmediata.' }
          ]
        },
        q2: {
          id: 's4_r1_q2',
          text: 'Cuando aseguramos que niños con dificultades visuales o auditivas puedan aprender sin barreras, ¿qué criterio aplicamos?',
          options: [
            { label: 'A. Accesibilidad', isCorrect: true, feedback: '¡Correcto! La Accesibilidad garantiza la inclusión e igualdad de oportunidades de aprendizaje.' },
            { label: 'B. Competencia', isCorrect: false, feedback: '💡 No se trata de competir, sino de no dejar a ningún estudiante atrás mediante la Accesibilidad.' }
          ]
        }
      },
      {
        roundNumber: '2/2',
        title: 'Ronda 2/2: Inclusión y Diseño Universal',
        q1: {
          id: 's4_r2_q1',
          text: 'Si un recurso tiene letras minúsculas borrosas y fondos con poco contraste, ¿qué problema presenta?',
          options: [
            { label: 'Baja accesibilidad para los alumnos', isCorrect: true, feedback: '¡Muy bien observado! El bajo contraste y textos diminutos crean barreras para aprender.' },
            { label: 'Es un recurso perfecto', isCorrect: false, feedback: '💡 Si los estudiantes no pueden leer cómodamente, el recurso no es inclusivo.' },
            { label: 'Solo le falta más música', isCorrect: false, feedback: '💡 La accesibilidad visual es prioritaria para la comprensión de textos y diagramas.' }
          ]
        },
        q2: {
          id: 's4_r2_q2',
          text: '¿Qué lección final nos enseña la evaluación de Recursos Educativos Digitales?',
          options: [
            { label: 'A. Evaluar calidad, pertinencia y usabilidad', isCorrect: true, feedback: '¡Excelente! Saber evaluar recursos digitales nos convierte en usuarios críticos y conscientes.' },
            { label: 'B. Usar el primer enlace que encontremos', isCorrect: false, feedback: '💡 Siempre debemos analizar con criterio antes de confiar en un recurso digital.' }
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

  questionColumn.innerHTML = `
    <!-- Cabecera del Criterio y Badge de Ronda 1/2 o 2/2 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px; margin-bottom: 0.35rem;">
      <div class="question-badge" style="margin-bottom: 0;">
        <i class="fa-solid fa-compass"></i> ${room.criterion}
      </div>
      <div class="round-indicator-badge">
        <i class="fa-solid fa-flag-checkered"></i>
        <span>Ronda ${roundData.roundNumber}</span>
      </div>
    </div>

    <!-- Título de la Ronda -->
    <div style="font-family: var(--font-hand); font-size: 1.12rem; font-weight: bold; color: #1E3A8A; margin-bottom: 0.4rem;">
      ${roundData.title}
    </div>

    <!-- Contenedor de las 2 Preguntas -->
    <div class="questions-round-container">
      
      <!-- PREGUNTA 1 -->
      <div class="question-block" id="blockQ1">
        <h3 class="question-block-title">
          1. ${roundData.q1.text}
        </h3>
        <div class="question-options-horizontal" id="optionsQ1">
          ${roundData.q1.options.map((opt, idx) => `
            <button type="button" class="option-pill-btn" data-question="q1" data-index="${idx}" data-correct="${opt.isCorrect}">
              <span>${opt.label}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- PREGUNTA 2 -->
      <div class="question-block" id="blockQ2">
        <h3 class="question-block-title">
          2. ${roundData.q2.text}
        </h3>
        <div class="question-options-horizontal" id="optionsQ2">
          ${roundData.q2.options.map((opt, idx) => `
            <button type="button" class="option-pill-btn" data-question="q2" data-index="${idx}" data-correct="${opt.isCorrect}">
              <span>${opt.label}</span>
            </button>
          `).join('')}
        </div>
      </div>

    </div>

    <!-- Contenedor dinámico de retroalimentación / Volver a aprender -->
    <div id="roundFeedbackZone" style="margin-top: 0.5rem; min-height: 28px;"></div>

    <div class="direct-select-hint" style="margin-top: 0.4rem;">
      <i class="fa-solid fa-hand-pointer" style="color: #2563EB;"></i>
      <span>Selecciona tu respuesta en ambas preguntas para completar la ronda</span>
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
 * Maneja la selección de una opción en Q1 o Q2
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

  // Comprobar si ambas preguntas están respondidas
  const selQ1 = currentRoomState.selectedAnswers.q1;
  const selQ2 = currentRoomState.selectedAnswers.q2;

  if (selQ1 && selQ2 && selQ1.isCorrect && selQ2.isCorrect) {
    // ==========================================
    // AMBAS CORRECTAS EN ESTA RONDA
    // ==========================================
    if (window.escapeSound) window.escapeSound.playSuccess();

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2D5A46', '#F2B705', '#3B82F6', '#10B981', '#EF4444']
      });
    }

    if (currentRoomState.roundIndex < room.rounds.length - 1) {
      // Avanzar a la Ronda 2/2
      const feedbackZone = document.getElementById('roundFeedbackZone');
      if (feedbackZone) {
        feedbackZone.innerHTML = `
          <div style="font-family: var(--font-hand); font-size: 1.05rem; font-weight: bold; color: #15803D; background: #DCFCE7; border: 1.5px solid #86EFAC; border-radius: 8px; padding: 6px 12px; text-align: center;" class="animate__animated animate__fadeIn">
            🎉 ¡Ronda 1/2 superada con éxito! Pasando a la Ronda 2/2...
          </div>
        `;
      }

      setTimeout(() => {
        currentRoomState.roundIndex++;
        renderCurrentRound();
      }, 1100);

    } else {
      // COMPLETADO RETO TOTAL (Ronda 2/2 completada)
      handleRoomCompleted(room);
    }
  } else {
    // Falta una por responder correctamente
    const feedbackZone = document.getElementById('roundFeedbackZone');
    if (feedbackZone) {
      feedbackZone.innerHTML = `
        <div style="font-family: var(--font-hand); font-size: 0.92rem; color: #166534; background: #DCFCE7; padding: 3px 10px; border-radius: 8px; border: 1px solid #86EFAC; text-align: center;">
          ✔️ ¡Respuesta correcta! Ahora responde la otra pregunta de la ronda.
        </div>
      `;
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
          setTimeout(() => {
            window.location.href = room.nextPage;
          }, 250);
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

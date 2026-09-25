/**
 * ==========================================================================
 * MISIÓN: SALVAR LA TIERRA - ESCAPE ROOM EDUCATIVO INFANTIL
 * feedback.js - Evaluación Pedagógica de Criterios RED y Retroalimentación
 * Resuelto: Reintentos ilimitados sin bloqueos ni congelamiento de pantalla
 * ==========================================================================
 */

const ROOMS_PEDAGOGY = {
  sala1: {
    roomNumber: 1,
    criterion: 'Calidad',
    nextRoom: 2,
    nextUrl: 'mapa.html',
    question: '¿El video se ve y se escucha de forma clara, sin fallas técnicas en la imagen ni sonidos molestos, y presenta la información de manera ordenada y sin errores?',
    yesFeedback: '¡Muy bien! Has verificado que el recurso es de alta calidad porque la imagen es nítida, el audio es claro y la estructura no tiene errores, el video es confiable y facilita tu aprendizaje.',
    noFeedback: '¡Piénsalo un poco más! Observa si en el video la imagen es nítida, no hay ruidos molestos y la información está bien organizada.',
    hintFeedback: '💡 ¡Pista del Guardián! En este video la animación se ve clarita, la voz es nítida y nos explica paso a paso cómo funciona el volcán sin fallas técnicas. ¡Eso significa que tiene excelente Calidad! Elige la opción SÍ para continuar.',
    continueBtnText: '¡Avanzar a la Siguiente Estación! 🗺️'
  },
  sala2: {
    roomNumber: 2,
    criterion: 'Pertinencia',
    nextRoom: 3,
    nextUrl: 'mapa.html',
    question: '¿El simulador te permite practicar el tema de los tsunamis con actividades explicadas a tu nivel y que puedes realizar sin problemas en los equipos del colegio y de cualquier parte?',
    yesFeedback: '¡Excelente! Has comprobado que el simulador cumple con el criterio de pertinencia. Cuando el recurso se conecta con la lección, está adaptado a tu grado y funciona en tu entorno, es la herramienta correcta para ayudarte a aprender. ¡Avanzas de nivel!',
    noFeedback: '¡Gran análisis! Pero piénsalo bien: el simulador te permite interactuar directamente con la altura de la ola para entender los tsunamis.',
    hintFeedback: '💡 ¡Pista del Guardián! El simulador fue diseñado justo para aprender sobre tsunamis en tu grado escolar y funciona en cualquier pantalla. ¡Es completamente pertinente para nuestra clase! Marca SÍ para avanzar.',
    continueBtnText: '¡Continuar por el Mapa! 🗺️'
  },
  sala3: {
    roomNumber: 3,
    criterion: 'Usabilidad',
    nextRoom: 4,
    nextUrl: 'mapa.html',
    question: '¿La mini-app es fácil de entender y navegar, con botones claros y funciones que puedes usar tú mismo sin necesidad de que un adulto te explique todo el tiempo?',
    yesFeedback: '¡Genial! Has comprobado el criterio de Usabilidad. Cuando una aplicación es intuitiva, tiene botones amigables y cualquier niño puede usarla fácilmente, ¡es una herramienta digital excelente para aprender jugando!',
    noFeedback: '¡Piénsalo de nuevo! Fíjate en los botones grandes, las pestañas con dibujos claros y lo fácil que fue activar la alarma y revisar la mochila de prevención.',
    hintFeedback: '💡 ¡Pista del Guardián! La mini-app es tan amigable y clara que pudiste probar la alarma y empacar la mochila tú mismo sin enredos. ¡Eso demuestra una gran Usabilidad! Selecciona SÍ para superarlo.',
    continueBtnText: '¡Continuar por el Mapa! 🗺️'
  },
  sala4: {
    roomNumber: 4,
    criterion: 'Accesibilidad',
    nextRoom: 5,
    nextUrl: 'final.html',
    question: '¿El juego cuenta con colores contrastados, letras legibles y un diseño que permite que todos tus compañeros de clase puedan participar y aprender juntos sin barreras?',
    yesFeedback: '¡Extraordinario! Has identificado la Accesibilidad. Un buen recurso educativo digital debe estar diseñado para todos, permitiendo que niños con distintas habilidades visuales y auditivas aprendan en igualdad de condiciones. ¡Has completado todos los criterios!',
    noFeedback: '¡Revisa un poco más! Observa que los textos se leen con claridad, los colores tienen buen contraste y no hay barreras que impidan jugar.',
    hintFeedback: '💡 ¡Pista del Guardián! El juego tiene letras grandes, botones visibles y opciones inclusivas para que todos los niños aprendan juntos sin barreras. ¡Tiene total Accesibilidad! Elige SÍ para reclamar tu trofeo.',
    continueBtnText: '¡Ir a la Gran Meta y Recibir mi Trofeo! 🏆'
  }
};

function setupRoomInteractions(roomKey) {
  const config = ROOMS_PEDAGOGY[roomKey];
  if (!config) return;

  const subslideResource = document.getElementById('subslideResource');
  const subslideQuestions = document.getElementById('subslideQuestions');
  const btnGoToQuestions = document.getElementById('btnGoToQuestions');
  const btnBackToResource = document.getElementById('btnBackToResource');

  // Alternar entre Diapositiva de Recurso y Diapositiva de Preguntas (CERO SCROLL)
  if (btnGoToQuestions && subslideResource && subslideQuestions) {
    btnGoToQuestions.addEventListener('click', () => {
      if (window.escapeSound) window.escapeSound.playPop();
      subslideResource.style.display = 'none';
      subslideQuestions.style.display = 'flex';
      subslideQuestions.classList.add('slide-fade-enter');
    });
  }

  // Configurar Botones de Respuesta SÍ / NO
  const btnYes = document.getElementById('btnChoiceYes');
  const btnNo = document.getElementById('btnChoiceNo');
  const choicesContainer = document.getElementById('choicesRow');
  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackDesc = document.getElementById('feedbackDesc');
  const feedbackActionContainer = document.getElementById('feedbackActionContainer');

  if (!btnYes || !btnNo || !feedbackBox) return;

  let wrongAttempts = 0;

  const showChoicesAndHideFeedback = () => {
    feedbackBox.className = 'feedback-box';
    feedbackBox.style.display = 'none';
    if (choicesContainer) {
      choicesContainer.style.display = 'flex';
    }
  };

  if (btnBackToResource && subslideResource && subslideQuestions) {
    btnBackToResource.addEventListener('click', () => {
      if (window.escapeSound) window.escapeSound.playClick();
      subslideQuestions.style.display = 'none';
      subslideResource.style.display = 'flex';
      subslideResource.classList.add('slide-fade-enter');
      showChoicesAndHideFeedback();
    });
  }

  // OPCIÓN SÍ: Respuesta Correcta
  btnYes.addEventListener('click', () => {
    // Sonido de éxito y confeti
    if (window.escapeSound) window.escapeSound.playSuccess();
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    // Desbloquear siguiente sala en localStorage
    if (window.EscapeState) {
      window.EscapeState.unlockRoom(config.nextRoom);
    }

    // Ocultar botones de opción y mostrar feedback de éxito con display flex explícito
    if (choicesContainer) choicesContainer.style.display = 'none';
    feedbackBox.className = 'feedback-box success';
    feedbackBox.style.display = 'flex';
    feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #059669;"></i> ¡Excelente Trabajo!`;
    feedbackDesc.innerHTML = config.yesFeedback;

    // Botón para avanzar
    feedbackActionContainer.innerHTML = `
      <a href="${config.nextUrl}" class="btn-fun btn-fun-success" id="btnContinueMap">
        <span>${config.continueBtnText}</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    `;

    document.getElementById('btnContinueMap')?.addEventListener('click', () => {
      if (window.escapeSound) window.escapeSound.playPop();
    });
  });

  // OPCIÓN NO: Pista y Reintento Infinito (Nunca se bloquea la sala)
  btnNo.addEventListener('click', () => {
    wrongAttempts++;
    if (window.escapeSound) window.escapeSound.playSoftAlert();

    // Ocultar opciones y forzar display: flex en la tarjeta de retroalimentación
    if (choicesContainer) choicesContainer.style.display = 'none';
    feedbackBox.className = 'feedback-box error';
    feedbackBox.style.display = 'flex';

    if (wrongAttempts >= 2 && config.hintFeedback) {
      feedbackTitle.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles" style="color: #D97706;"></i> ¡Pista Especial del Guardián!`;
      feedbackDesc.innerHTML = config.hintFeedback;
    } else {
      feedbackTitle.innerHTML = `<i class="fa-solid fa-lightbulb" style="color: #D97706;"></i> ¡Piénsalo un poco más!`;
      feedbackDesc.innerHTML = config.noFeedback;
    }

    feedbackActionContainer.innerHTML = `
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <button type="button" class="btn-fun btn-fun-warning" id="btnRetryQuestion">
          <i class="fa-solid fa-rotate-left"></i>
          <span>Intentar de nuevo</span>
        </button>
        <button type="button" class="btn-fun btn-fun-secondary" id="btnRetryResource">
          <i class="fa-solid fa-eye"></i>
          <span>Revisar recurso</span>
        </button>
      </div>
    `;

    document.getElementById('btnRetryQuestion')?.addEventListener('click', () => {
      if (window.escapeSound) window.escapeSound.playClick();
      showChoicesAndHideFeedback();
    });

    document.getElementById('btnRetryResource')?.addEventListener('click', () => {
      if (window.escapeSound) window.escapeSound.playClick();
      subslideQuestions.style.display = 'none';
      subslideResource.style.display = 'flex';
      showChoicesAndHideFeedback();
    });
  });
}

window.setupRoomInteractions = setupRoomInteractions;

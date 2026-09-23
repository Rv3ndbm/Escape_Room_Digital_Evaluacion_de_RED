/**
 * ==========================================================================
 * MISIÓN: SALVAR LA TIERRA - ESCAPE ROOM EDUCATIVO
 * validation.js - Lógica Directa de Botones de Opciones y Retroalimentación Formativa
 * ==========================================================================
 */

const ROOMS_CONFIG = {
  'sala1': {
    code: '312',
    alternatives: ['312', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Pertinencia Didáctica',
    nextPage: 'sala2-tsunami.html',
    badgeText: '¡RETO 1 SUPERADO!',
    successTitle: '¡Felicidades, Explorador/a Científico/a!',
    achievementHeader: '🎯 Has Dominado el Criterio: Pertinencia',
    successExplanation: '<strong>¡Excelente trabajo geológico!</strong> Has demostrado que este recurso cumple al 100% el objetivo educativo. Comprobaste con rigor científico cómo la presión subterránea en la cámara magmática, el ascenso por la chimenea y los gases impulsan una erupción volcánica real.',
    btnContinueText: '¡Continuar al Reto 2: El Tsunami! 🌊',
    feedbacks: {
      correct: '✨ ¡Excelente trabajo geológico! Has demostrado que el recurso cumple el objetivo educativo con rigor científico.',
      partial: '💡 <strong>Explicación Científica:</strong> El magma acumula gases calientes bajo tierra como una botella con gas agitada. Si no hay suficiente presión de gases, el magma no puede subir por la chimenea. En el simulador a la izquierda, presiona <strong>Fase 1 (Presión)</strong> y <strong>Fase 2</strong> para ver las burbujas empujando hacia arriba. ¡Revisa cómo asciende la lava y vuelve a responder!',
      help: '🤝 <strong>¡Te ayudamos paso a paso!</strong><br><br>1. Mira el simulador del volcán a la izquierda.<br>2. Haz clic en orden: <strong>Fase 1</strong>, <strong>Fase 2</strong>, <strong>Fase 3</strong> y <strong>Fase 4</strong>.<br>3. Observarás cómo la presión subterránea empuja la lava hasta expulsarla por el cráter.<br><br>¡Prueba esas fases en el simulador y selecciona la opción que describe este fenómeno!'
    }
  },
  'sala2': {
    code: '741',
    alternatives: ['741', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Usabilidad y Manejo',
    nextPage: 'sala3-terremoto.html',
    badgeText: '¡RETO 2 SUPERADO!',
    successTitle: '¡Felicidades, Navegante Científico/a!',
    achievementHeader: '🎯 Has Dominado el Criterio: Usabilidad',
    successExplanation: '<strong>¡Gran criterio tecnológico!</strong> Comprobaste que los controles intuitivos, botones claros y explicaciones accesibles permiten que cualquier estudiante aprenda y experimente de forma autónoma, fácil y sin frustraciones.',
    btnContinueText: '¡Continuar al Reto 3: El Terremoto! 🏢',
    feedbacks: {
      correct: '✨ ¡Gran criterio pedagógico! La interfaz es intuitiva y responde al instante.',
      partial: '💡 <strong>Guía de Usabilidad:</strong> La usabilidad mide qué tan fácil, claro e intuitivo es usar una herramienta digital sin perderse ni frustrarse. En este simulador panorámico, puedes tocar las pestañas superiores (<strong>🌊 Mar</strong>, <strong>🏖️ Playa</strong>, <strong>🏘️ Pueblo</strong>, <strong>⛰️ Colina</strong>) para moverte libremente y cambiar la altura de la ola con un solo toque. ¡Explóralo y vuelve a responder!',
      help: '🤝 <strong>¡Paso a paso para usar el simulador!</strong><br><br>1. En la zona de controles, mueve el deslizador a <strong>15m</strong> o <strong>30m</strong>.<br>2. Haz clic en el botón azul <strong>🌊 ¡Simular Impacto!</strong>.<br>3. Observa cómo la cámara sigue la ola en tiempo real y cómo los habitantes evacúan a la colina alta (+30m).<br><br>¡Haz la prueba en el simulador a la izquierda!'
    }
  },
  'sala3': {
    code: '985',
    alternatives: ['985', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Calidad y Rigor',
    nextPage: 'sala4-calor.html',
    badgeText: '¡RETO 3 SUPERADO!',
    successTitle: '¡Felicidades, Experto/a en Prevención!',
    achievementHeader: '🎯 Has Dominado el Criterio: Calidad',
    successExplanation: '<strong>¡Análisis riguroso completado!</strong> Verificaste que los datos sismológicos y las medidas de autoprotección escolar provienen de organismos oficiales certificados y salvan vidas durante emergencias reales.',
    btnContinueText: '¡Continuar al Reto 4: Ola de Calor! ☀️',
    feedbacks: {
      correct: '✨ ¡Rigor ejemplar! La app utiliza protocolos reales certificados de protección civil.',
      partial: '💡 <strong>Guía de Calidad y Rigor:</strong> La calidad científica asegura que la información es comprobada y no inventada. Los protocolos de agacharse, cubrirse, alejarse de ventanas y tener una mochila de emergencia provienen de geofísicos y brigadas de rescate reales. ¡Comprueba estos consejos y vuelve a responder!',
      help: '🤝 <strong>¡Cómo comprobar la calidad paso a paso!</strong><br><br>1. En el teléfono inteligente a la izquierda, presiona <strong>Activar Alerta Sísmica</strong>.<br>2. Toca las pestañas: <strong>🎒 Mochila</strong>, <strong>🏫 Escuela</strong> y <strong>🏠 En Casa</strong>.<br>3. Verás medidas oficiales de autoprotección que salvan vidas.<br><br>¡Revisa las guías en el simulador y elige la respuesta correcta!'
    }
  },
  'sala4': {
    code: '624',
    alternatives: ['624', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Accesibilidad e Inclusión',
    nextPage: 'final.html',
    badgeText: '¡RETO 4 SUPERADO!',
    successTitle: '¡Misión Cumplida, Guardián del Planeta!',
    achievementHeader: '🎯 Has Dominado el Criterio: Accesibilidad',
    successExplanation: '<strong>¡Inclusión educativa ejemplar!</strong> Aprendiste que todo material didáctico debe diseñarse para que todas las personas, sin importar sus condiciones visuales o auditivas, puedan aprender en igualdad de oportunidades.',
    btnContinueText: '¡Ir a la Graduación y Ver Mi Medalla! 🎓',
    feedbacks: {
      correct: '✨ ¡Inclusión ejemplar! Todo estudiante puede aprender sin barreras.',
      partial: '💡 <strong>Guía de Inclusión:</strong> La accesibilidad garantiza que niños con dificultades visuales o auditivas también disfruten aprendiendo: con buen contraste de colores, textos grandes ampliables y sonidos explicativos claros. ¡Observa estos elementos y vuelve a responder!',
      help: '🤝 <strong>¡Mira cómo se aplica la accesibilidad!</strong><br><br>1. Observa los botones grandes con iconos y textos contrastados.<br>2. Prueba el botón <strong>Tt A++</strong> en la barra superior para cambiar el tamaño de letra.<br>3. Todo el diseño está pensado para no dejar a nadie atrás.<br><br>¡Prueba las opciones de accesibilidad y vuelve a intentarlo!'
    }
  }
};

/**
 * Inicializa la interacción directa en cada sala
 * @param {string} roomKey - 'sala1' | 'sala2' | 'sala3' | 'sala4'
 */
function initRoomValidation(roomKey) {
  const room = ROOMS_CONFIG[roomKey];
  if (!room) return;

  const feedbackEl = document.querySelector('.feedback-msg');
  const optionCards = document.querySelectorAll('.option-card');
  const successModal = document.querySelector('.success-overlay');

  // Salvaguarda: Asegurar que ningún botón de simulación active validación alguna
  document.querySelectorAll('.btn-sim-action').forEach(simBtn => {
    simBtn.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // Cerrar modal al hacer clic en el fondo oscuro (solo en modo reintento/ayuda)
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        const retryBtn = successModal.querySelector('#btnRetryModal');
        if (retryBtn) {
          if (window.escapeSound) window.escapeSound.playPop();
          successModal.style.display = 'none';
        }
      }
    });
  }

  // 1. Manejo Directo de Clics en las Opciones (A, B y C)
  optionCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const isCorrect = this.getAttribute('data-correct') === 'true';
      const feedbackType = this.getAttribute('data-feedback') || (isCorrect ? 'correct' : 'partial');

      optionCards.forEach(c => c.classList.remove('selected-correct', 'selected-incorrect', 'selected'));

      if (isCorrect) {
        // ==========================================
        // OPCIÓN CORRECTA (DOMINIO TOTAL)
        // ==========================================
        this.classList.add('selected-correct');

        if (window.escapeSound) window.escapeSound.playSuccess();

        if (typeof confetti === 'function') {
          confetti({
            particleCount: 130,
            spread: 85,
            origin: { y: 0.55 },
            colors: ['#2D5A46', '#F2B705', '#3B82F6', '#EF4444', '#16A34A', '#F472B6']
          });
        }

        // Guardar insignia y progreso del Escape Room
        const badges = JSON.parse(localStorage.getItem('unlocked_badges') || '[]');
        if (!badges.includes(roomKey)) {
          badges.push(roomKey);
          localStorage.setItem('unlocked_badges', JSON.stringify(badges));
        }
        if (typeof setupEscapeRoomNavigation === 'function') {
          setupEscapeRoomNavigation();
        }

        if (feedbackEl) {
          feedbackEl.className = 'feedback-msg success-text animate__animated animate__fadeIn';
          feedbackEl.innerHTML = '🎉 ¡Excelente análisis! Has superado esta misión.';
        }

        // Mostrar modal de éxito con retroalimentación completa y botón para continuar
        if (successModal) {
          const modalContent = successModal.querySelector('.success-modal-card');
          if (modalContent) {
            modalContent.innerHTML = `
              <div class="success-stamp-circle animate__animated animate__heartBeat">
                <i class="fa-solid fa-check"></i>
              </div>
              
              <div class="success-badge-pill">
                <i class="fa-solid fa-medal"></i> ${room.badgeText}
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

            // Eventos de los botones del modal de éxito
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

      } else if (feedbackType === 'partial') {
        // ==========================================
        // OPCIÓN B: COMPRENSIÓN PARCIAL
        // ==========================================
        this.classList.add('selected-incorrect');
        if (window.escapeSound) window.escapeSound.playPop();

        if (feedbackEl) {
          feedbackEl.className = 'feedback-msg partial-text animate__animated animate__fadeIn';
          feedbackEl.innerHTML = '💡 Comprensión parcial: Lee la explicación en pantalla.';
        }

        if (successModal) {
          const modalContent = successModal.querySelector('.success-modal-card');
          if (modalContent) {
            modalContent.innerHTML = `
              <button class="modal-close-x" type="button" aria-label="Cerrar"><i class="fa-solid fa-xmark"></i></button>

              <div class="feedback-stamp-circle partial animate__animated animate__bounceIn">
                <i class="fa-solid fa-lightbulb"></i>
              </div>

              <div class="partial-badge-pill">
                <i class="fa-solid fa-compass"></i> ${room.criterion}: Comprensión Parcial
              </div>

              <h3 style="font-family: var(--font-script); font-size: clamp(1.7rem, 2.3vw, 2.1rem); color: #B45309; margin: 0.2rem 0 0.5rem; line-height: 1.15;">
                ¡Casi lo logras, Explorador/a!
              </h3>

              <div class="feedback-explanation-box partial-box">
                <div class="feedback-box-header">
                  <i class="fa-solid fa-circle-info"></i>
                  <span>Retroalimentación Científica</span>
                </div>
                <div class="feedback-box-content">
                  ${(room.feedbacks && room.feedbacks.partial) || 'Revisa el simulador para profundizar en este concepto.'}
                </div>
              </div>

              <div class="success-modal-actions">
                <button id="btnRetryModal" class="btn-modal-retry" type="button" title="Cerrar y volver a intentar">
                  <i class="fa-solid fa-rotate-left"></i>
                  <span>🔄 Reintentar y Seguir Investigando</span>
                </button>
              </div>
            `;

            // Botón de reintentar para cerrar la ventanita
            const retryBtn = modalContent.querySelector('#btnRetryModal');
            if (retryBtn) {
              retryBtn.addEventListener('click', () => {
                if (window.escapeSound) window.escapeSound.playPop();
                successModal.style.display = 'none';
              });
            }

            const closeX = modalContent.querySelector('.modal-close-x');
            if (closeX) {
              closeX.addEventListener('click', () => {
                if (window.escapeSound) window.escapeSound.playPop();
                successModal.style.display = 'none';
              });
            }
          }

          successModal.style.display = 'flex';
        }

      } else {
        // ==========================================
        // OPCIÓN C: NO ENTENDÍ NADA / GUÍA PASO A PASO
        // ==========================================
        this.classList.add('selected-incorrect');
        if (window.escapeSound) window.escapeSound.playPop();

        if (feedbackEl) {
          feedbackEl.className = 'feedback-msg help-text animate__animated animate__fadeIn';
          feedbackEl.innerHTML = '🤝 Guía de ayuda: Sigue las instrucciones paso a paso.';
        }

        if (successModal) {
          const modalContent = successModal.querySelector('.success-modal-card');
          if (modalContent) {
            modalContent.innerHTML = `
              <button class="modal-close-x" type="button" aria-label="Cerrar"><i class="fa-solid fa-xmark"></i></button>

              <div class="feedback-stamp-circle help animate__animated animate__bounceIn">
                <i class="fa-solid fa-hand-holding-hand"></i>
              </div>

              <div class="help-badge-pill">
                <i class="fa-solid fa-graduation-cap"></i> Guía Didáctica: ${room.criterion}
              </div>

              <h3 style="font-family: var(--font-script); font-size: clamp(1.7rem, 2.3vw, 2.1rem); color: #1D4ED8; margin: 0.2rem 0 0.5rem; line-height: 1.15;">
                ¡Te explicamos cómo funciona!
              </h3>

              <div class="feedback-explanation-box help-box">
                <div class="feedback-box-header" style="color: #1E40AF;">
                  <i class="fa-solid fa-list-check"></i>
                  <span>Pasos para entender el simulador</span>
                </div>
                <div class="feedback-box-content">
                  ${(room.feedbacks && room.feedbacks.help) || 'Sigue las instrucciones en el simulador a la izquierda.'}
                </div>
              </div>

              <div class="success-modal-actions">
                <button id="btnRetryModal" class="btn-modal-retry help-theme" type="button" title="Cerrar y probar en el simulador">
                  <i class="fa-solid fa-circle-play"></i>
                  <span>🔄 ¡Entendido! Voy a Probarlo</span>
                </button>
              </div>
            `;

            const retryBtn = modalContent.querySelector('#btnRetryModal');
            if (retryBtn) {
              retryBtn.addEventListener('click', () => {
                if (window.escapeSound) window.escapeSound.playPop();
                successModal.style.display = 'none';
              });
            }

            const closeX = modalContent.querySelector('.modal-close-x');
            if (closeX) {
              closeX.addEventListener('click', () => {
                if (window.escapeSound) window.escapeSound.playPop();
                successModal.style.display = 'none';
              });
            }
          }

          successModal.style.display = 'flex';
        }
      }
    });
  });

  // Compatibilidad hacia atrás si aún existe un botón de desbloqueo residual
  const legacyUnlockBtn = document.getElementById('btnUnlockRoom');
  if (legacyUnlockBtn) {
    legacyUnlockBtn.onclick = function(e) {
      e.preventDefault();
      // Simular selección de opción A
      const correctCard = document.querySelector('.option-card[data-correct="true"]');
      if (correctCard) correctCard.click();
    };
  }
}

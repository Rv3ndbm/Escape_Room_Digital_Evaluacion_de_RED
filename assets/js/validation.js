/**
 * ==========================================================================
 * MISIÓN: SALVAR LA TIERRA - ESCAPE ROOM EDUCATIVO
 * validation.js - Lógica Exclusiva del Botón Desbloquear (Completamente Separado de Simuladores)
 * ==========================================================================
 */

const ROOMS_CONFIG = {
  'sala1': {
    code: '312',
    alternatives: ['312', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Pertinencia',
    nextPage: 'sala2-tsunami.html',
    badgeText: '¡RETO 1 SUPERADO!',
    successTitle: '¡Felicidades, Explorador/a Científico/a!',
    achievementHeader: '🎯 Has Dominado el Criterio: Pertinencia',
    successExplanation: '<strong>¡Excelente trabajo geológico!</strong> Has demostrado que este recurso cumple al 100% el objetivo educativo. Comprobaste con rigor científico cómo la presión subterránea en la cámara magmática, el ascenso por la chimenea y los gases impulsan una erupción volcánica real.',
    btnContinueText: '¡Continuar al Reto 2: El Tsunami! 🌊',
    feedbacks: {
      correct: '✨ ¡Excelente análisis científico! La clave <strong>312</strong> está lista en el recuadro. ¡Haz clic en <strong>Desbloquear</strong> para abrir la Sala 2!',
      partial: '💡 <strong>Explicación Científica:</strong> El magma acumula gases calientes bajo tierra como una botella con gas agitada. En el simulador a la izquierda, presiona <strong>Fase 1 (Presión)</strong> para ver las burbujas empujando hacia arriba. ¡Ahora selecciona la <strong>Opción A</strong> para reclamar tu clave secreta!',
      help: '🤝 <strong>¡Te ayudamos paso a paso!</strong><br>1. Mira el simulador del volcán a la izquierda.<br>2. Haz clic en <em>Fase 1</em>, <em>Fase 2</em>, <em>Fase 3</em> y <em>Fase 4</em>.<br>3. Observarás cómo sube la lava hasta el cráter. ¡Eso es pertinencia didáctica! Ahora pulsa la <strong>Opción A</strong> para obtener tu clave.'
    }
  },
  'sala2': {
    code: '741',
    alternatives: ['741', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Usabilidad',
    nextPage: 'sala3-terremoto.html',
    badgeText: '¡RETO 2 SUPERADO!',
    successTitle: '¡Felicidades, Navegante Científico/a!',
    achievementHeader: '🎯 Has Dominado el Criterio: Usabilidad',
    successExplanation: '<strong>¡Gran criterio tecnológico!</strong> Comprobaste que los controles intuitivos, botones claros y explicaciones accesibles permiten que cualquier estudiante aprenda y experimente de forma autónoma, fácil y sin frustraciones.',
    btnContinueText: '¡Continuar al Reto 3: El Terremoto! 🏢',
    feedbacks: {
      correct: '✨ ¡Gran criterio pedagógico! La interfaz es intuitiva y responde al instante. Clave <strong>741</strong> lista. ¡Haz clic en <strong>Desbloquear</strong>!',
      partial: '💡 <strong>Guía de Usabilidad:</strong> La usabilidad mide qué tan fácil es aprender sin frustrarse. En el simulador panorámico, puedes tocar las pestañas superiores (<strong>🌊 Mar</strong>, <strong>🏖️ Playa</strong>, <strong>🏘️ Pueblo</strong>, <strong>⛰️ Colina</strong>) para explorar todo el mapa sin perderte. ¡Ahora elige la <strong>Opción A</strong> para continuar!',
      help: '🤝 <strong>¡Paso a paso para usar el simulador!</strong><br>1. Mueve el deslizador a <em>15m</em> o <em>30m</em>.<br>2. Haz clic en el botón azul <strong>¡Simular Impacto!</strong>.<br>3. Mira cómo la cámara sigue la ola arrasando hasta la colina. ¡Es súper fácil! Ahora pulsa la <strong>Opción A</strong> para tu clave.'
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
      correct: '✨ ¡Rigor ejemplar! La app utiliza protocolos reales certificados de protección civil. Clave <strong>985</strong> lista. ¡Pulsa <strong>Desbloquear</strong>!',
      partial: '💡 <strong>Guía de Calidad:</strong> La calidad científica asegura que la información es verdadera y no inventada. Los protocolos de agacharse, cubrirse y mochila de emergencia provienen de geofísicos oficiales. ¡Selecciona la <strong>Opción A</strong> para obtener tu clave!',
      help: '🤝 <strong>¡Cómo comprobar la calidad paso a paso!</strong><br>1. En el teléfono a la izquierda, presiona <strong>Activar Alerta Sísmica</strong>.<br>2. Toca las pestañas *Mochila*, *Escuela* y *En Casa*.<br>3. Verás consejos oficiales que salvan vidas. ¡Pulsa la <strong>Opción A</strong> para tu clave secreta!'
    }
  },
  'sala4': {
    code: '624',
    alternatives: ['624', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Accesibilidad',
    nextPage: 'final.html',
    badgeText: '¡RETO 4 SUPERADO!',
    successTitle: '¡Misión Cumplida, Guardián del Planeta!',
    achievementHeader: '🎯 Has Dominado el Criterio: Accesibilidad',
    successExplanation: '<strong>¡Inclusión educativa ejemplar!</strong> Aprendiste que todo material didáctico debe diseñarse para que todas las personas, sin importar sus condiciones visuales o auditivas, puedan aprender en igualdad de oportunidades.',
    btnContinueText: '¡Ir a la Graduación y Ver Mi Medalla! 🎓',
    feedbacks: {
      correct: '✨ ¡Inclusión ejemplar! Todo estudiante puede aprender sin barreras. Clave <strong>624</strong> lista. ¡Pulsa <strong>Desbloquear</strong> para tu Diploma!',
      partial: '💡 <strong>Guía de Inclusión:</strong> La accesibilidad garantiza que niños con dificultades visuales o auditivas también disfruten aprendiendo: con buen contraste, letras ampliables y sonidos claros. ¡Selecciona la <strong>Opción A</strong> para tu clave!',
      help: '🤝 <strong>¡Mira cómo se aplica la accesibilidad!</strong><br>1. Observa los botones grandes con iconos y textos claros.<br>2. Prueba el botón <strong>Tt A++</strong> arriba para cambiar el tamaño de letra.<br>3. Todo está hecho para no dejar a nadie atrás. ¡Pulsa la <strong>Opción A</strong> para reclamar tu clave y graduarte!'
    }
  }
};

/**
 * Inicializa la validación en cada sala
 * @param {string} roomKey - 'sala1' | 'sala2' | 'sala3' | 'sala4'
 */
function initRoomValidation(roomKey) {
  const room = ROOMS_CONFIG[roomKey];
  if (!room) return;

  const inputEl = document.querySelector('.passcode-input');
  // SELECCIÓN ESTRICTA DEL BOTÓN DESBLOQUEAR DENTRO DE LA CAJA DE CÓDIGO
  const unlockBtn = document.getElementById('btnUnlockRoom') || document.querySelector('.unlock-box .unlock-btn');
  const feedbackEl = document.querySelector('.feedback-msg');
  const optionCards = document.querySelectorAll('.option-card');
  const successModal = document.querySelector('.success-overlay');

  // Salvaguarda: Asegurar que ningún botón de simulación active validación alguna
  document.querySelectorAll('.btn-sim-action').forEach(simBtn => {
    simBtn.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // 1. Manejo de Selección de Opciones A, B y C
  optionCards.forEach(card => {
    card.addEventListener('click', function() {
      const isCorrect = this.getAttribute('data-correct') === 'true';
      const feedbackType = this.getAttribute('data-feedback') || (isCorrect ? 'correct' : 'partial');

      optionCards.forEach(c => c.classList.remove('selected-correct', 'selected-incorrect', 'selected'));

      if (isCorrect) {
        this.classList.add('selected-correct');
        if (window.escapeSound) window.escapeSound.playPop();

        // Autocompletar la clave en el input inmediatamente
        if (inputEl) {
          inputEl.value = room.code;
          inputEl.classList.remove('error');
          inputEl.classList.add('success');
        }

        if (feedbackEl) {
          feedbackEl.className = 'feedback-msg success-text animate__animated animate__fadeIn';
          const msg = (room.feedbacks && room.feedbacks.correct) || `✨ ¡Excelente análisis! Clave <strong>${room.code}</strong> lista. Pulsa <strong>Desbloquear</strong> abajo.`;
          feedbackEl.innerHTML = msg;
        }
      } else {
        this.classList.add('selected-incorrect');
        if (window.escapeSound) window.escapeSound.playError();

        if (inputEl) {
          inputEl.value = '';
          inputEl.classList.remove('success');
        }

        if (feedbackEl) {
          feedbackEl.className = 'feedback-msg error-text animate__animated animate__shakeX';
          const msg = (room.feedbacks && room.feedbacks[feedbackType]) || `⚠️ Esa opción no cumple el criterio de ${room.criterion}. ¡Elige la Opción A para obtener la clave secreta!`;
          feedbackEl.innerHTML = msg;
        }
      }
    });
  });

  // 2. Función de Desbloqueo Fiable (Sin Bloqueos)
  function unlockRoom() {
    if (!inputEl) return;
    const entered = inputEl.value.trim().toUpperCase();

    // Comprobar si el código ingresado coincide con el código o sus alternativas válidas
    const isCodeValid = (entered === room.code) || room.alternatives.includes(entered);

    if (isCodeValid) {
      // --- ÉXITO GARANTIZADO ---
      inputEl.classList.remove('error');
      inputEl.classList.add('success');

      if (feedbackEl) {
        feedbackEl.className = 'feedback-msg success-text animate__animated animate__fadeIn';
        feedbackEl.innerHTML = '🎉 ¡Clave correcta! Reto desbloqueado con éxito.';
      }

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

      // Mostrar modal de felicitación con retroalimentación completa y botón para continuar
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

          // Eventos de los botones del modal
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

    } else {
      // --- ERROR Y PISTA ---
      if (window.escapeSound) window.escapeSound.playError();

      inputEl.classList.add('error');
      inputEl.classList.remove('animate__animated', 'animate__shakeX');
      void inputEl.offsetWidth;
      inputEl.classList.add('animate__animated', 'animate__shakeX');

      if (feedbackEl) {
        feedbackEl.className = 'feedback-msg error-text animate__animated animate__shakeX';
        feedbackEl.innerHTML = `❌ Clave incorrecta. Selecciona la <strong>Opción A</strong> para obtener el código (<strong>${room.code}</strong>).`;
      }

      setTimeout(() => {
        inputEl.classList.remove('animate__animated', 'animate__shakeX');
      }, 600);
    }
  }

  // Event Listeners directos sobre el botón exclusivo de desbloquear
  if (unlockBtn) {
    unlockBtn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      unlockRoom();
    };
  }

  if (inputEl) {
    inputEl.onkeydown = function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        unlockRoom();
      }
    };
  }
}

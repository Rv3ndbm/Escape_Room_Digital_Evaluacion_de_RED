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
    successTitle: '¡Felicidades, Explorador Científico!',
    successExplanation: '¡Has dominado el criterio de <strong>Pertinencia</strong>! Comprobaste que el video sí responde al objetivo de la clase explicando cómo funciona un volcán.'
  },
  'sala2': {
    code: '741',
    alternatives: ['741', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Usabilidad',
    nextPage: 'sala3-terremoto.html',
    successTitle: '¡Felicidades, Explorador Científico!',
    successExplanation: '¡Has dominado el criterio de <strong>Usabilidad</strong>! Comprobaste que los controles claros y los botones accesibles permiten que cualquier niño juegue y aprenda sin ayuda.'
  },
  'sala3': {
    code: '985',
    alternatives: ['985', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Calidad',
    nextPage: 'sala4-calor.html',
    successTitle: '¡Felicidades, Explorador Científico!',
    successExplanation: '¡Has dominado el criterio de <strong>Calidad</strong>! Verificaste que los datos y los protocolos de autoprotección sísmica son verdaderos y de fuentes oficiales.'
  },
  'sala4': {
    code: '624',
    alternatives: ['624', 'A', 'OPCION A', 'OPCIÓN A'],
    criterion: 'Accesibilidad',
    nextPage: 'final.html',
    successTitle: '¡Felicidades, Explorador Científico!',
    successExplanation: '¡Has dominado el criterio de <strong>Accesibilidad</strong>! Aprendiste que todos los niños merecen aprender con letras grandes y opciones de contraste.'
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

  // 1. Manejo de Selección de Opciones A y B
  optionCards.forEach(card => {
    card.addEventListener('click', function() {
      const isCorrect = this.getAttribute('data-correct') === 'true';

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
          feedbackEl.innerHTML = `✨ ¡Excelente análisis! Clave <strong>${room.code}</strong> lista. Pulsa <strong>Desbloquear</strong> abajo.`;
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
          feedbackEl.innerHTML = `⚠️ Esa opción no cumple el criterio de ${room.criterion}. ¡Elige la Opción A para obtener la clave secreta!`;
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
        feedbackEl.innerHTML = '🎉 ¡Clave correcta! Desbloqueando la siguiente sala...';
      }

      if (window.escapeSound) window.escapeSound.playSuccess();

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#2D5A46', '#F2B705', '#3B82F6', '#EF4444', '#16A34A', '#F472B6']
        });
      }

      // Guardar insignia
      const badges = JSON.parse(localStorage.getItem('unlocked_badges') || '[]');
      if (!badges.includes(roomKey)) {
        badges.push(roomKey);
        localStorage.setItem('unlocked_badges', JSON.stringify(badges));
      }

      // Mostrar modal de felicitación
      if (successModal) {
        const modalTitle = successModal.querySelector('h3');
        const modalDesc = successModal.querySelector('p');
        if (modalTitle) modalTitle.innerHTML = room.successTitle;
        if (modalDesc) modalDesc.innerHTML = room.successExplanation;
        successModal.style.display = 'flex';
      }

      // Redirigir a la siguiente sala
      setTimeout(() => {
        window.location.href = room.nextPage;
      }, 1500);

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

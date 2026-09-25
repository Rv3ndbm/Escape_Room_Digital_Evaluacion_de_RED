/**
 * ==========================================================================
 * MISIÓN: SALVAR LA TIERRA - ESCAPE ROOM EDUCATIVO INFANTIL
 * main.js - Sintetizador Web Audio API, Gestión de Estado del Explorador y HUD
 * ==========================================================================
 */

// 1. SISTEMA DE AUDIO SINTETIZADO (Web Audio API - 100% Funcional sin dependencias externas)
class SoundSystem {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = localStorage.getItem('escape_sound_enabled') !== 'false';
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('escape_sound_enabled', this.soundEnabled);
    this.updateSoundIcons();
    if (this.soundEnabled) {
      this.playPop();
    }
  }

  updateSoundIcons() {
    const btns = document.querySelectorAll('.sound-toggle-btn');
    btns.forEach(btn => {
      const iconHtml = this.soundEnabled 
        ? '<i class="fa-solid fa-volume-high"></i>' 
        : '<i class="fa-solid fa-volume-xmark"></i>';
      const statusText = this.soundEnabled ? 'Sonido: SÍ' : 'Sonido: NO';

      btn.innerHTML = `${iconHtml} <span class="sound-status-text">${statusText}</span>`;
      btn.classList.toggle('is-on', this.soundEnabled);
      btn.classList.toggle('is-off', !this.soundEnabled);

      btn.setAttribute('title', this.soundEnabled 
        ? 'Sonido: Activado (Clic para silenciar)' 
        : 'Sonido: Silenciado (Clic para activar)');
      btn.setAttribute('aria-label', this.soundEnabled 
        ? 'Desactivar sonido' 
        : 'Activar sonido');
    });
  }

  // Pop suave tipo burbuja
  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  // Clic suave de interfaz
  playClick() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // Sonido de acierto / éxito musical alegre
  playSuccess() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // Do, Mi, Sol, Do agudo
    notes.forEach((freq, idx) => {
      const now = this.audioCtx.currentTime + (idx * 0.08);
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.29);
    });
  }

  // Sonido de aviso amigable / reintento suave (sin frustrar)
  playSoftAlert() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const notes = [440, 392]; // La -> Sol suave descendente
    notes.forEach((freq, idx) => {
      const now = this.audioCtx.currentTime + (idx * 0.12);
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.19);
    });
  }

  // Alarma sísmica suave preventiva
  playAlarmPulse(durationSec = 2.5) {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const pulseInterval = 0.35;
    const count = Math.floor(durationSec / pulseInterval);

    for (let i = 0; i < count; i++) {
      const now = this.audioCtx.currentTime + (i * pulseInterval);
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.linearRampToValueAtTime(600, now + 0.22);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.24);
    }
  }
}

// Instancia global de audio
window.escapeSound = new SoundSystem();

// 2. GESTIÓN DEL EXPLORADOR Y ESTADO DE LAS SALAS
const EscapeState = {
  getName() {
    return localStorage.getItem('explorer_name') || 'Explorador Científico';
  },

  setName(name) {
    const cleanName = (name && name.trim()) ? name.trim() : 'Explorador Científico';
    localStorage.setItem('explorer_name', cleanName);
    return cleanName;
  },

  getAvatar() {
    return localStorage.getItem('explorer_avatar') || '🧑‍🔬';
  },

  setAvatar(avatar) {
    localStorage.setItem('explorer_avatar', avatar || '🧑‍🔬');
  },

  getUnlockedRoom() {
    const val = parseInt(localStorage.getItem('escape_unlocked_room'), 10);
    return isNaN(val) || val < 1 ? 1 : val;
  },

  unlockRoom(roomNumber) {
    const current = this.getUnlockedRoom();
    if (roomNumber > current) {
      localStorage.setItem('escape_unlocked_room', roomNumber);
    }
  },

  resetAll() {
    localStorage.removeItem('escape_unlocked_room');
    localStorage.removeItem('escape_completed_rooms');
    // Mantenemos el nombre y avatar para comodidad, o se puede reescribir
  }
};

window.EscapeState = EscapeState;

// 3. INICIALIZACIÓN GLOBAL DEL HUD Y ACCESIBILIDAD
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar audio con la primera interacción
  const handleUserFirstGesture = () => {
    if (window.escapeSound) window.escapeSound.init();
    window.removeEventListener('click', handleUserFirstGesture);
    window.removeEventListener('keydown', handleUserFirstGesture);
  };
  window.addEventListener('click', handleUserFirstGesture);
  window.addEventListener('keydown', handleUserFirstGesture);

  // Botones de sonido
  window.escapeSound.updateSoundIcons();
  document.querySelectorAll('.sound-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.escapeSound.toggleSound();
    });
  });

  // Mostrar nombre y avatar en el HUD si existen elementos
  const hudUserName = document.getElementById('hudUserName');
  const hudUserAvatar = document.getElementById('hudUserAvatar');
  if (hudUserName) {
    hudUserName.textContent = EscapeState.getName();
  }
  if (hudUserAvatar) {
    hudUserAvatar.textContent = EscapeState.getAvatar();
  }

  // Accesibilidad: Stepper y Botón para cambiar tamaño de texto (Reducir / Aumentar)
  let sizeIndex = parseInt(localStorage.getItem('escape_text_size_idx') || '0', 10);
  const fontSizes = ['100%', '114%', '126%'];
  const fontLabels = ['Normal', 'Grande', 'Máx'];

  const applyTextSize = () => {
    document.documentElement.style.fontSize = fontSizes[sizeIndex];

    const textSizeVal = document.getElementById('textSizeVal');
    if (textSizeVal) textSizeVal.textContent = fontLabels[sizeIndex];

    const btnDec = document.getElementById('btnTextSizeDec');
    if (btnDec) btnDec.disabled = (sizeIndex === 0);

    const btnInc = document.getElementById('btnTextSizeInc');
    if (btnInc) btnInc.disabled = (sizeIndex === fontSizes.length - 1);

    const btnLegacy = document.getElementById('btnTextSize');
    if (btnLegacy) {
      const tag = btnLegacy.querySelector('.text-size-tag');
      if (tag) tag.textContent = fontLabels[sizeIndex];
    }

    localStorage.setItem('escape_text_size_idx', sizeIndex);
  };

  applyTextSize();

  const btnDec = document.getElementById('btnTextSizeDec');
  if (btnDec) {
    btnDec.addEventListener('click', () => {
      if (sizeIndex > 0) {
        sizeIndex--;
        applyTextSize();
        if (window.escapeSound) window.escapeSound.playPop();
      }
    });
  }

  const btnInc = document.getElementById('btnTextSizeInc');
  if (btnInc) {
    btnInc.addEventListener('click', () => {
      if (sizeIndex < fontSizes.length - 1) {
        sizeIndex++;
        applyTextSize();
        if (window.escapeSound) window.escapeSound.playPop();
      }
    });
  }

  const btnLegacy = document.getElementById('btnTextSize');
  if (btnLegacy) {
    btnLegacy.addEventListener('click', () => {
      sizeIndex = (sizeIndex + 1) % fontSizes.length;
      applyTextSize();
      if (window.escapeSound) window.escapeSound.playPop();
    });
  }

  // Si existe botón de volver al mapa en home (index.html), mostrarlo si hay partida
  const hudHomeMapBtn = document.getElementById('hudHomeMapBtn');
  if (hudHomeMapBtn) {
    if (localStorage.getItem('explorer_name') || EscapeState.getUnlockedRoom() > 1) {
      hudHomeMapBtn.style.display = 'inline-flex';
    }
  }
});

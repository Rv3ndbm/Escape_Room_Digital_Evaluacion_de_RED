/**
 * ==========================================================================
 * MISIÓN: SALVAR LA TIERRA - ESCAPE ROOM EDUCATIVO
 * main.js - Sintetizador de audio Web Audio API, efectos interactivos y estado
 * ==========================================================================
 */

// 1. SISTEMA DE AUDIO SINTETIZADO (100% Funcional sin archivos externos .mp3)
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
      btn.innerHTML = this.soundEnabled 
        ? '<i class="fa-solid fa-volume-high"></i>' 
        : '<i class="fa-solid fa-volume-xmark"></i>';
    });
  }

  // Sonido alegre de clic / pop
  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(840, this.audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.09);
  }

  // Sonido de error amigable (doble tono suave)
  playError() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.setValueAtTime(190, now + 0.12);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  // Fanfarria o arpegio de victoria infantil
  playSuccess() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // Do, Mi, Sol, Do agudo
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const startTime = this.audioCtx.currentTime + (idx * 0.11);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.36);
    });
  }

  // Sonido de oleaje de agua
  playWave() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    // Buffer de ruido blanco filtrado
    const bufferSize = this.audioCtx.sampleRate * 2;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, this.audioCtx.currentTime);
    filter.frequency.linearRampToValueAtTime(800, this.audioCtx.currentTime + 1.0);
    filter.frequency.linearRampToValueAtTime(200, this.audioCtx.currentTime + 2.0);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, this.audioCtx.currentTime + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 2.2);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start();
    noise.stop(this.audioCtx.currentTime + 2.2);
  }

  // Sonido de rugido / estruendo subterráneo (Volcán y Terremoto)
  playRumble(duration = 2.5) {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;

    // Sub-oscilador grave
    const osc = this.audioCtx.createOscillator();
    const oscGain = this.audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.linearRampToValueAtTime(85, now + duration * 0.5);
    osc.frequency.linearRampToValueAtTime(50, now + duration);

    // Filtro pasa bajos para sonido de temblor telúrico
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(120, now);
    filter.frequency.linearRampToValueAtTime(260, now + duration * 0.4);
    filter.frequency.linearRampToValueAtTime(90, now + duration);

    oscGain.gain.setValueAtTime(0.01, now);
    oscGain.gain.linearRampToValueAtTime(0.3, now + 0.3);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Sirena de emergencia escolar bitonal (App Sísmica y Alerta Tsunami)
  playSiren(repeats = 3) {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sawtooth';

    const step = 0.28;
    for (let i = 0; i < repeats; i++) {
      const t = now + (i * step * 2);
      osc.frequency.setValueAtTime(750, t);
      osc.frequency.setValueAtTime(950, t + step);
    }

    const totalDur = repeats * step * 2;
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.setValueAtTime(0.15, now + totalDur - 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + totalDur);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + totalDur);
  }
}

// Instancia global del sistema de sonido
window.escapeSound = new SoundSystem();

// 2. SISTEMA DE ACCESIBILIDAD Y TAMAÑO DE TEXTO (A / A+ / A++)
class AccessibilitySystem {
  constructor() {
    this.levels = ['normal', 'large', 'xlarge'];
    this.labels = { 'normal': 'A', 'large': 'A+', 'xlarge': 'A++' };
    this.descriptions = {
      'normal': 'Texto: Normal (100%)',
      'large': 'Texto: Grande (115%)',
      'xlarge': 'Texto: Extra Grande (130%)'
    };
    this.currentLevel = localStorage.getItem('escape_text_scale') || 'normal';
    this.toastTimeout = null;
    this.applyLevel(this.currentLevel, false);
  }

  cycle() {
    const idx = this.levels.indexOf(this.currentLevel);
    const nextIdx = (idx + 1) % this.levels.length;
    this.currentLevel = this.levels[nextIdx];
    localStorage.setItem('escape_text_scale', this.currentLevel);
    this.applyLevel(this.currentLevel, true);
  }

  applyLevel(level, showToast = true) {
    document.documentElement.setAttribute('data-text-scale', level);
    
    // Actualizar todos los botones en el DOM
    document.querySelectorAll('.accessibility-toggle-btn').forEach(btn => {
      const tag = btn.querySelector('.text-size-tag');
      if (tag) tag.textContent = this.labels[level];
      btn.setAttribute('title', `Accesibilidad: ${this.descriptions[level]}`);
    });

    if (showToast) {
      this.showToast(`🔍 ${this.descriptions[level]}`);
      if (window.escapeSound) window.escapeSound.playPop();
    }
  }

  showToast(message) {
    let toast = document.getElementById('accessibilityToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'accessibilityToast';
      toast.className = 'accessibility-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('toast-visible');
    void toast.offsetWidth;
    toast.classList.add('toast-visible');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('toast-visible');
    }, 1800);
  }
}

window.escapeAccessibility = new AccessibilitySystem();

// 3. INICIALIZACIÓN GLOBAL DE LA INTERFAZ
document.addEventListener('DOMContentLoaded', () => {
  // Configurar botones de sonido
  window.escapeSound.updateSoundIcons();
  document.querySelectorAll('.sound-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.escapeSound.toggleSound();
    });
  });

  // Configurar botones de accesibilidad (Ajustar texto)
  window.escapeAccessibility.applyLevel(window.escapeAccessibility.currentLevel, false);
  document.querySelectorAll('.accessibility-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.escapeAccessibility.cycle();
    });
  });

  // Efecto de sonido 'pop' en todos los botones y opciones interactivas
  document.querySelectorAll('button, .option-card, .acc-btn, .step-badge').forEach(el => {
    el.addEventListener('click', () => {
      window.escapeSound.playPop();
    });
  });

  // Manejo de Selección de Opciones de Pregunta
  const optionCards = document.querySelectorAll('.option-card');
  optionCards.forEach(card => {
    card.addEventListener('click', function() {
      optionCards.forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');

      // Si la opción tiene un atributo data-code, sugerirlo o auto-rellenar
      const suggestedCode = this.getAttribute('data-suggest-code');
      const passInput = document.querySelector('.passcode-input');
      if (suggestedCode && passInput && !passInput.value) {
        passInput.value = suggestedCode;
        passInput.focus();
      }
    });
  });

  // Recuperar nombre del explorador en pantalla final
  const explorerNameDisplay = document.getElementById('explorer-name-target');
  if (explorerNameDisplay) {
    const savedName = localStorage.getItem('explorer_name') || 'Super Explorador/a';
    explorerNameDisplay.textContent = savedName;
  }
});

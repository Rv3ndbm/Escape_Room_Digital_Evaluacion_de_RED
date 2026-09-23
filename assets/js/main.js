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
    this.bgmEnabled = localStorage.getItem('escape_bgm_enabled') !== 'false';
    this.bgmIsPlaying = false;
    this.bgmGain = null;
    this.bgmMasterVolume = 0.046; // Volumen ambiental muy suave y relajante
    this.bgmTimer = null;
    this.bgmNextNoteTime = 0;
    this.bgmStep = 0;

    // Partitura en bucle relajante (Modo clásico / caja de música escolar)
    // 8 compases con bajo cálido y arpegios danzantes en Do Mayor / La menor
    this.bgmScore = [
      { bass: 48, melody: [64, 67, 72, 67, 64, 67, 72, 76] }, // Do M (C4, E4, G4, C5...)
      { bass: 47, melody: [62, 67, 71, 67, 62, 67, 71, 74] }, // Sol M / Si
      { bass: 45, melody: [60, 64, 69, 64, 60, 64, 69, 72] }, // La m
      { bass: 40, melody: [59, 64, 67, 64, 59, 64, 67, 71] }, // Mi m
      { bass: 41, melody: [57, 60, 65, 60, 57, 60, 65, 69] }, // Fa M
      { bass: 40, melody: [55, 60, 64, 60, 55, 60, 64, 67] }, // Do M / Mi
      { bass: 38, melody: [53, 57, 62, 57, 53, 57, 62, 65] }, // Re m
      { bass: 43, melody: [59, 62, 67, 62, 59, 62, 67, 71] }  // Sol M
    ];
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

  midiToFreq(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  // ==========================================
  // MÚSICA SUAVE DE FONDO (BGM)
  // ==========================================
  startBgmOnFirstInteraction() {
    if (!this.bgmEnabled) return;
    this.init();
    if (this.audioCtx) {
      this.startBgm();
    }
  }

  startBgm() {
    if (this.bgmIsPlaying) return;
    if (!this.bgmEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    if (!this.bgmGain) {
      this.bgmGain = this.audioCtx.createGain();
      this.bgmGain.connect(this.audioCtx.destination);
    }

    // Suave fade-in para que empiece de forma muy delicada
    const now = this.audioCtx.currentTime;
    this.bgmGain.gain.cancelScheduledValues(now);
    this.bgmGain.gain.setValueAtTime(0.0001, now);
    this.bgmGain.gain.linearRampToValueAtTime(this.bgmMasterVolume, now + 1.2);

    this.bgmIsPlaying = true;
    this.bgmNextNoteTime = this.audioCtx.currentTime + 0.1;
    this.bgmStep = 0;

    if (this.bgmTimer) clearInterval(this.bgmTimer);
    this.bgmTimer = setInterval(() => this.scheduleBgmNotes(), 100);

    this.updateBgmIcons();
  }

  stopBgm() {
    if (!this.bgmIsPlaying) return;
    if (this.bgmGain && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      this.bgmGain.gain.cancelScheduledValues(now);
      this.bgmGain.gain.linearRampToValueAtTime(0.0001, now + 0.3);
    }
    setTimeout(() => {
      this.bgmIsPlaying = false;
      if (this.bgmTimer) {
        clearInterval(this.bgmTimer);
        this.bgmTimer = null;
      }
      this.updateBgmIcons();
    }, 320);
  }

  toggleBgm() {
    this.bgmEnabled = !this.bgmEnabled;
    localStorage.setItem('escape_bgm_enabled', this.bgmEnabled);
    if (this.bgmEnabled) {
      this.init();
      this.startBgm();
      this.playClick();
    } else {
      this.stopBgm();
    }
    this.updateBgmIcons();
  }

  updateBgmIcons() {
    document.querySelectorAll('.bgm-toggle-btn').forEach(btn => {
      if (this.bgmEnabled && this.bgmIsPlaying) {
        btn.classList.add('bgm-active');
        btn.classList.remove('bgm-muted');
        btn.setAttribute('title', 'Música de fondo: Sonando relajante (Clic para pausar)');
      } else {
        btn.classList.remove('bgm-active');
        btn.classList.add('bgm-muted');
        btn.setAttribute('title', 'Música de fondo: Pausada (Clic para activar)');
      }
    });
  }

  scheduleBgmNotes() {
    if (!this.audioCtx || !this.bgmIsPlaying || !this.bgmEnabled) return;

    const stepDuration = 0.40; // 0.40s por nota (~75 BPM fluido)
    const lookahead = 0.35;

    while (this.bgmNextNoteTime < this.audioCtx.currentTime + lookahead) {
      const measureIndex = Math.floor(this.bgmStep / 8) % this.bgmScore.length;
      const noteIndex = this.bgmStep % 8;
      const measure = this.bgmScore[measureIndex];

      // Bajo suave en el primer tiempo del compás
      if (noteIndex === 0) {
        this.playBassNote(this.midiToFreq(measure.bass), this.bgmNextNoteTime, 1.8, 0.9);
      }

      // Nota de caja musical / campanita de la melodía
      const midiNote = measure.melody[noteIndex];
      if (midiNote) {
        const vel = (noteIndex === 0 || noteIndex === 4) ? 1.0 : 0.75;
        this.playMusicBoxNote(this.midiToFreq(midiNote), this.bgmNextNoteTime, 0.75, vel);
      }

      this.bgmNextNoteTime += stepDuration;
      this.bgmStep++;
    }
  }

  playMusicBoxNote(freq, time, duration = 0.75, velocity = 1.0) {
    if (!this.audioCtx || !this.bgmGain) return;
    const now = Math.max(time, this.audioCtx.currentTime);

    // Fundamental (senoidal pura cálida)
    const osc1 = this.audioCtx.createOscillator();
    const gain1 = this.audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // Segundo armónico suave para timbre brillante de caja de música
    const osc2 = this.audioCtx.createOscillator();
    const gain2 = this.audioCtx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.01, now);

    const baseVol = 0.85 * velocity;
    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.linearRampToValueAtTime(baseVol, now + 0.015);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.linearRampToValueAtTime(baseVol * 0.3, now + 0.012);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.5);

    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(this.bgmGain);
    gain2.connect(this.bgmGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.05);
    osc2.stop(now + duration + 0.05);
  }

  playBassNote(freq, time, duration = 1.8, velocity = 0.85) {
    if (!this.audioCtx || !this.bgmGain) return;
    const now = Math.max(time, this.audioCtx.currentTime);

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.75 * velocity, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(now);
    osc.stop(now + duration + 0.05);
  }

  // ==========================================
  // EFECTOS DE SONIDO (SFX) PARA INTERACCIÓN
  // ==========================================
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
      btn.setAttribute('title', this.soundEnabled 
        ? 'Efectos de sonido: Activados (Clic para silenciar)' 
        : 'Efectos de sonido: Silenciados (Clic para activar)');
    });
  }

  // Clic táctil de madera / botón limpio
  playClick() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(560, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.045);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Clic muy suave para chips y ajustes pequeños
  playSoftClick() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(720, now);
    osc.frequency.exponentialRampToValueAtTime(450, now + 0.035);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // Tono musical limpio al elegir opción (Sol4 -> Do5 ascendente)
  playOptionSelect() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    [392.00, 523.25].forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const t = now + (i * 0.065);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.23);
    });
  }

  // Sonido de cambio de pestaña o vista (Video <-> Simulador)
  playSwitch() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(460, now);
    osc.frequency.exponentialRampToValueAtTime(680, now + 0.06);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  // Sonido de pase de hoja de papel / transición de diapositiva
  playPageTurn() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const bufferSize = Math.floor(this.audioCtx.sampleRate * 0.2);
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(950, now);
    filter.frequency.exponentialRampToValueAtTime(320, now + 0.18);
    filter.Q.value = 1.6;

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.13, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.19);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(now);
    noise.stop(now + 0.2);
  }

  // Arpegio mágico deslumbrante al desbloquear clave secreta
  playSecretUnlock() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const startTime = this.audioCtx.currentTime + (idx * 0.08);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.46);
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

    const osc = this.audioCtx.createOscillator();
    const oscGain = this.audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.linearRampToValueAtTime(85, now + duration * 0.5);
    osc.frequency.linearRampToValueAtTime(50, now + duration);

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

  // Sirena de emergencia escolar bitonal
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

// 2. SISTEMA DE ACCESIBILIDAD Y TAMAÑO DE TEXTO INFANTIL (A / A+ / A++)
class AccessibilitySystem {
  constructor() {
    this.levels = ['normal', 'large', 'xlarge'];
    this.labels = { 'normal': 'A', 'large': 'A+', 'xlarge': 'A++' };
    this.descriptions = {
      'normal': 'Texto: Tamaño Estándar Equilibrado',
      'large': 'Texto: Grande (+12%)',
      'xlarge': 'Texto: Extra Grande (+25%)'
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

// 3. MOTOR DE PROGRESIÓN SECUENCIAL ESCAPE ROOM (BLOQUEO DE SALAS)
const ESCAPE_ROOMS = {
  'sala1': {
    name: 'Reto 1: El Volcán',
    icon: 'fa-fire',
    file: 'sala1-volcan.html',
    requiredPrev: null // Siempre disponible para comenzar
  },
  'sala2': {
    name: 'Reto 2: El Tsunami',
    icon: 'fa-water',
    file: 'sala2-tsunami.html',
    requiredPrev: 'sala1'
  },
  'sala3': {
    name: 'Reto 3: El Terremoto',
    icon: 'fa-house-crack',
    file: 'sala3-terremoto.html',
    requiredPrev: 'sala2'
  },
  'sala4': {
    name: 'Reto 4: Ola de Calor',
    icon: 'fa-sun',
    file: 'sala4-calor.html',
    requiredPrev: 'sala3'
  },
  'final': {
    name: 'Diploma de Graduación',
    icon: 'fa-trophy',
    file: 'final.html',
    requiredPrev: 'sala4'
  }
};

function getUnlockedBadges() {
  try {
    return JSON.parse(localStorage.getItem('unlocked_badges') || '[]');
  } catch (e) {
    return [];
  }
}

function isRoomUnlocked(roomKey) {
  if (!roomKey || roomKey === 'portada' || roomKey === 'sala1') return true;
  const badges = getUnlockedBadges();
  const room = ESCAPE_ROOMS[roomKey];
  if (!room || !room.requiredPrev) return true;
  return badges.includes(room.requiredPrev);
}

function showEscapeRoomLockedModal(targetRoomKey) {
  const room = ESCAPE_ROOMS[targetRoomKey];
  const prevRoomKey = room ? room.requiredPrev : 'sala1';
  const prevRoom = ESCAPE_ROOMS[prevRoomKey] || ESCAPE_ROOMS['sala1'];
  
  const isInsideHtmlFolder = window.location.pathname.includes('/assets/html/');
  const prevUrl = isInsideHtmlFolder ? prevRoom.file : `assets/html/${prevRoom.file}`;

  if (window.escapeSound) window.escapeSound.playError();

  let modal = document.getElementById('escapeGatekeeperModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'escapeGatekeeperModal';
    modal.className = 'escape-gatekeeper-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="escape-gatekeeper-card animate__animated animate__zoomIn">
      <div class="gatekeeper-lock-icon">
        <i class="fa-solid fa-lock"></i>
      </div>
      <h3 class="gatekeeper-title">¡Habitación Bloqueada!</h3>
      <p class="gatekeeper-msg">
        ¡Alto ahí, querido/a explorador/a científico/a! 🚧<br>
        Esta sala tiene un candado digital secreto. Para abrir la puerta de <strong>${room ? room.name : 'este reto'}</strong>, primero debes superar el <strong>${prevRoom.name}</strong> e ingresar su clave secreta de desbloqueo.
      </p>
      <div class="gatekeeper-actions">
        <a href="${prevUrl}" class="btn-gatekeeper-primary">
          <i class="fa-solid fa-play"></i>
          <span>¡Ir a superar el ${prevRoom.name}!</span>
        </a>
        <button type="button" class="btn-gatekeeper-secondary" id="btnGatekeeperClose">
          <i class="fa-solid fa-xmark"></i>
          <span>Entendido</span>
        </button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
  const closeBtn = modal.querySelector('#btnGatekeeperClose');
  if (closeBtn) {
    closeBtn.onclick = () => {
      if (window.escapeSound) window.escapeSound.playPop();
      modal.style.display = 'none';
    };
  }
}

// Bloqueo de acceso directo por URL si el estudiante intenta saltarse salas
function checkCurrentPageAccess() {
  const currentPath = window.location.pathname;
  let currentKey = null;
  if (currentPath.includes('sala2-tsunami')) currentKey = 'sala2';
  else if (currentPath.includes('sala3-terremoto')) currentKey = 'sala3';
  else if (currentPath.includes('sala4-calor')) currentKey = 'sala4';
  else if (currentPath.includes('final.html')) currentKey = 'final';

  if (currentKey && !isRoomUnlocked(currentKey)) {
    showEscapeRoomLockedModal(currentKey);
    const closeBtn = document.getElementById('btnGatekeeperClose');
    if (closeBtn) {
      closeBtn.innerHTML = '<i class="fa-solid fa-house"></i> <span>Volver a Portada</span>';
      closeBtn.onclick = () => {
        window.location.href = window.location.pathname.includes('/assets/html/') ? '../../index.html' : 'index.html';
      };
    }
  }
}

// Configura el menú superior y las tarjetas de la portada según el avance
function setupEscapeRoomNavigation() {
  const badges = getUnlockedBadges();

  // 1. Barra superior de navegación (.mission-progress)
  document.querySelectorAll('.mission-progress a, .mission-progress .step-badge').forEach(badge => {
    const href = badge.getAttribute('href') || '';
    const text = badge.textContent || '';
    let roomKey = null;

    if (href.includes('sala1-volcan') || text.includes('Reto 1') || text.includes('Volcán')) roomKey = 'sala1';
    else if (href.includes('sala2-tsunami') || text.includes('Reto 2') || text.includes('Tsunami')) roomKey = 'sala2';
    else if (href.includes('sala3-terremoto') || text.includes('Reto 3') || text.includes('Terremoto')) roomKey = 'sala3';
    else if (href.includes('sala4-calor') || text.includes('Reto 4') || text.includes('Calor')) roomKey = 'sala4';
    else if (href.includes('final.html') || text.includes('Diploma')) roomKey = 'final';

    if (!roomKey) return; // Es la portada

    const isUnlocked = isRoomUnlocked(roomKey);
    const isCompleted = badges.includes(roomKey);

    if (!isUnlocked) {
      badge.classList.add('room-locked');
      badge.classList.remove('completed', 'active');
      badge.setAttribute('title', `🔒 Bloqueado: Supera el reto anterior para abrir esta sala`);
      
      const icon = badge.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-lock';
      }

      badge.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showEscapeRoomLockedModal(roomKey);
      });
    } else {
      badge.classList.remove('room-locked');
      if (isCompleted && !badge.classList.contains('active')) {
        badge.classList.add('room-completed');
      }
    }
  });

  // 2. Tarjetas de misión en la Portada (.missions-grid-preview)
  document.querySelectorAll('.missions-grid-preview .mission-mini-card').forEach(card => {
    const roomKey = card.getAttribute('data-room');
    if (!roomKey) return;

    const isUnlocked = isRoomUnlocked(roomKey);
    const tagEl = card.querySelector('.mini-card-tag');

    if (!isUnlocked) {
      card.classList.add('card-locked');
      if (tagEl) {
        tagEl.className = 'card-lock-badge';
        tagEl.innerHTML = '<i class="fa-solid fa-lock"></i> Bloqueado';
      }
      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showEscapeRoomLockedModal(roomKey);
      });
    } else {
      card.classList.remove('card-locked');
      if (badges.includes(roomKey) && tagEl) {
        tagEl.innerHTML = '✔️ ¡Superado!';
        tagEl.style.background = '#DCFCE7';
        tagEl.style.color = '#15803D';
      }
    }
  });
}

// 4. INICIALIZACIÓN GLOBAL DE LA INTERFAZ
document.addEventListener('DOMContentLoaded', () => {
  // Configurar botones de sonido SFX
  window.escapeSound.updateSoundIcons();
  document.querySelectorAll('.sound-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.escapeSound.toggleSound();
    });
  });

  // Configurar e inyectar botón de música relajante de fondo en el HUD
  initHudMusicButton();

  // Configurar botones de accesibilidad (Ajustar texto)
  window.escapeAccessibility.applyLevel(window.escapeAccessibility.currentLevel, false);
  document.querySelectorAll('.accessibility-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.escapeAccessibility.cycle();
    });
  });

  // Sonidos interactivos adaptados por tipo de elemento:
  // 1. Pestañas y selectores de modo (Video <-> Simulador)
  document.querySelectorAll('.tab-btn, .mode-tab-btn, .resource-tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      window.escapeSound.playSwitch();
    });
  });

  // 2. Opciones de preguntas
  document.querySelectorAll('.option-card, .option-pill-btn').forEach(opt => {
    opt.addEventListener('click', () => {
      window.escapeSound.playOptionSelect();
    });
  });

  // 3. Botones generales de acción
  document.querySelectorAll('button:not(.sound-toggle-btn):not(.bgm-toggle-btn):not(.accessibility-toggle-btn):not(.tab-btn), .btn-advance-story, .btn-primary-school, .avatar-chip').forEach(el => {
    el.addEventListener('click', () => {
      window.escapeSound.playClick();
    });
  });

  // Manejo de Selección Visual de Opciones de Pregunta (la validación principal corre en validation.js)
  const optionCards = document.querySelectorAll('.option-card');
  optionCards.forEach(card => {
    card.addEventListener('click', function() {
      optionCards.forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Recuperar nombre del explorador en pantalla final
  const explorerNameDisplay = document.getElementById('explorer-name-target');
  if (explorerNameDisplay) {
    const savedName = localStorage.getItem('explorer_name') || 'Explorador Científico';
    explorerNameDisplay.textContent = savedName;
  }

  // Activar comprobación y navegación protegida de Escape Room
  checkCurrentPageAccess();
  setupEscapeRoomNavigation();

  // Iniciar transiciones de página suaves tipo presentación
  initPageTransitions();

  // Activar efecto de cursor con rayitas y estrellitas al hacer clic
  initCursorSparkEffect();

  // Iniciar música suave en la primera interacción si está activada
  document.addEventListener('pointerdown', () => {
    window.escapeSound.startBgmOnFirstInteraction();
  }, { once: true });
});

/**
 * Inyecta y vincula el botón de música de fondo en el HUD de cualquier página
 */
function initHudMusicButton() {
  document.querySelectorAll('.hud-actions').forEach(hud => {
    if (hud.querySelector('.bgm-toggle-btn')) return;

    const bgmBtn = document.createElement('button');
    bgmBtn.className = 'bgm-toggle-btn';
    bgmBtn.type = 'button';
    bgmBtn.setAttribute('title', 'Música relajante de fondo: Activar / Pausar');
    bgmBtn.setAttribute('aria-label', 'Música de fondo');
    bgmBtn.innerHTML = `
      <i class="fa-solid fa-music"></i>
      <span class="bgm-wave-bars">
        <span></span><span></span><span></span>
      </span>
    `;

    const soundBtn = hud.querySelector('.sound-toggle-btn');
    if (soundBtn) {
      hud.insertBefore(bgmBtn, soundBtn);
    } else {
      hud.appendChild(bgmBtn);
    }

    bgmBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.escapeSound.toggleBgm();
    });
  });

  window.escapeSound.updateBgmIcons();
}

/**
 * Transición suave entre páginas tipo diapositiva de presentación
 */
function initPageTransitions() {
  // Aplicar animación suave de entrada
  const screen = document.querySelector('.escape-room-screen') || document.body;
  screen.classList.add('page-presentation-enter');

  // Interceptar clicks en enlaces internos para hacer transición tipo presentación suave
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Ignorar links externos, anclas o nuevas pestañas
    if (
      href.startsWith('#') ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('javascript:') ||
      link.getAttribute('target') === '_blank' ||
      e.ctrlKey || e.metaKey || e.shiftKey
    ) {
      return;
    }

    // Si es un enlace bloqueado por el gatekeeper, dejar que la lógica de bloqueo actúe
    if (link.classList.contains('room-locked') || link.closest('.card-locked')) {
      return;
    }

    // Interceptar para transición suave
    e.preventDefault();

    if (window.escapeSound) {
      window.escapeSound.playPageTurn();
    }

    // Aplicar animación de salida de diapositiva
    screen.classList.add('page-transition-exit');

    setTimeout(() => {
      window.location.href = href;
    }, 220);
  });
}

/**
 * Efecto interactivo de rayitas, onda expansiva y estrellitas mágicas flotantes al hacer clic
 */
function initCursorSparkEffect() {
  const sparkColors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4'];
  const starSymbols = ['✦', '★', '✧', '•'];

  window.addEventListener('pointerdown', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const burst = document.createElement('div');
    burst.className = 'click-spark-burst';
    burst.style.left = `${x}px`;
    burst.style.top = `${y}px`;

    // 1. Círculo de onda expansiva
    const circle = document.createElement('div');
    circle.className = 'spark-circle';
    circle.style.borderColor = sparkColors[Math.floor(Math.random() * sparkColors.length)];
    burst.appendChild(circle);

    // 2. 8 Rayitas dinámicas en abanico 360 grados
    const count = 8;
    for (let i = 0; i < count; i++) {
      const ray = document.createElement('div');
      ray.className = 'spark-ray';
      const angle = (360 / count) * i + (Math.random() * 14 - 7);
      ray.style.setProperty('--angle', `${angle}deg`);
      ray.style.backgroundColor = sparkColors[i % sparkColors.length];
      ray.style.height = `${12 + Math.floor(Math.random() * 8)}px`;
      ray.style.width = `${2.5 + Math.random() * 1.5}px`;
      burst.appendChild(ray);
    }

    // 3. Estrellitas mágicas flotantes estilo laboratorio/pedagógico
    for (let j = 0; j < 3; j++) {
      const star = document.createElement('span');
      star.className = 'spark-star';
      star.textContent = starSymbols[j % starSymbols.length];
      star.style.color = sparkColors[(j + 2) % sparkColors.length];
      const angle = (Math.PI * 2 / 3) * j + Math.random() * 0.5;
      const dist = 18 + Math.random() * 22;
      star.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
      star.style.setProperty('--ty', `${Math.sin(angle) * dist - 26}px`);
      star.style.setProperty('--rot', `${Math.random() * 60 - 30}deg`);
      burst.appendChild(star);
    }

    document.body.appendChild(burst);

    setTimeout(() => {
      if (burst && burst.parentNode) {
        burst.parentNode.removeChild(burst);
      }
    }, 550);
  }, { passive: true });
}


/**
 * ==========================================================================
 * MISIÓN: SALVAR LA TIERRA - ESCAPE ROOM EDUCATIVO INFANTIL
 * navigation.js - Control del Mapa de Aventura, Bloqueo/Desbloqueo de Estaciones
 * ==========================================================================
 */

const STATIONS_CONFIG = [
  {
    id: 1,
    name: 'Puerta de Fuego',
    sub: 'Volcanes',
    biome: 'Zona Volcán 🔥',
    biomeTheme: 'fire',
    criterion: 'Calidad',
    icon: '🌋',
    url: 'sala1-volcan.html',
    offsetClass: 'station-pos-volcano'
  },
  {
    id: 2,
    name: 'Valle de las Letras',
    sub: 'Tsunamis',
    biome: 'Costa Tsunami 🌊',
    biomeTheme: 'ocean',
    criterion: 'Pertinencia',
    icon: '🌊',
    url: 'sala2-tsunami.html',
    offsetClass: 'station-pos-beach'
  },
  {
    id: 3,
    name: 'Desierto de Sismos',
    sub: 'Sismos',
    biome: 'Cañón Sismos 🏚️',
    biomeTheme: 'quake',
    criterion: 'Usabilidad',
    icon: '🏚️',
    url: 'sala3-sismos.html',
    offsetClass: 'station-pos-canyon'
  },
  {
    id: 4,
    name: 'Paraíso del Calor',
    sub: 'Olas de Calor',
    biome: 'Oasis Calor ☀️',
    biomeTheme: 'heat',
    criterion: 'Accesibilidad',
    icon: '☀️',
    url: 'sala4-calor.html',
    offsetClass: 'station-pos-dunes'
  },
  {
    id: 5,
    name: 'Gran Meta',
    sub: 'Trofeo Final',
    biome: 'Observatorio 🏆',
    biomeTheme: 'victory',
    criterion: '¡Victoria!',
    icon: '🏆',
    url: 'final.html',
    offsetClass: 'station-pos-goal'
  }
];

function initAdventureMap() {
  const container = document.getElementById('mapStationsContainer');
  if (!container) return;

  const unlocked = window.EscapeState ? window.EscapeState.getUnlockedRoom() : 1;
  const avatar = window.EscapeState ? window.EscapeState.getAvatar() : '🧑‍🔬';
  const name = window.EscapeState ? window.EscapeState.getName() : 'Explorador';

  // Actualizar barra de progreso del mapa si existe
  const progressBar = document.getElementById('mapProgressBar');
  const progressText = document.getElementById('mapProgressText');
  if (progressBar) {
    const pct = Math.min(100, Math.round(((unlocked - 1) / 4) * 100));
    progressBar.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `${pct}% Completado`;
  }

  container.innerHTML = '';

  STATIONS_CONFIG.forEach((station) => {
    const isCompleted = station.id < unlocked;
    const isCurrent = station.id === unlocked;
    const isLocked = station.id > unlocked;

    const stationEl = document.createElement('div');
    stationEl.className = `map-station ${station.offsetClass} ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''} theme-${station.biomeTheme}`;
    stationEl.setAttribute('data-id', station.id);

    let statusMarkup = '';
    if (isCompleted) {
      statusMarkup = `<div class="station-check-badge" title="¡Estación completada con éxito!"><i class="fa-solid fa-check"></i></div>`;
    } else if (isLocked) {
      statusMarkup = `<div class="station-lock-overlay" title="Bloqueado: Supera la parada anterior"><i class="fa-solid fa-lock"></i></div>`;
    }

    let avatarPointerMarkup = '';
    let beaconRingMarkup = '';
    if (isCurrent) {
      avatarPointerMarkup = `
        <div class="avatar-pointer" title="¡Aquí estás tú, ${name}!">
          <div class="avatar-balloon">${name}</div>
          <div class="avatar-face">${avatar}</div>
        </div>`;
      beaconRingMarkup = `<div class="station-pulse-ring"></div>`;
    }

    stationEl.innerHTML = `
      ${avatarPointerMarkup}
      <div class="station-node">
        <span class="station-badge-num">${station.id}</span>
        <span class="station-icon-emoji">${station.icon}</span>
        ${statusMarkup}
        ${beaconRingMarkup}
      </div>
      <div class="station-label-card">
        <div class="station-biome-tag">${station.biome}</div>
        <div class="station-name">${station.name}</div>
        <div class="station-criterion-badge">
          <i class="fa-solid fa-medal"></i>
          <span>${station.criterion}</span>
        </div>
      </div>
    `;

    // Interacción al hacer clic
    stationEl.addEventListener('click', (e) => {
      e.preventDefault();

      if (isLocked) {
        if (window.escapeSound) window.escapeSound.playSoftAlert();
        showMapNotice(`¡Paso a paso, explorador! Primero supera la estación ${unlocked} para desbloquear este camino.`);
        stationEl.classList.add('animate__animated', 'animate__shakeX');
        setTimeout(() => stationEl.classList.remove('animate__animated', 'animate__shakeX'), 600);
      } else {
        if (window.escapeSound) window.escapeSound.playPop();
        window.location.href = station.url;
      }
    });

    container.appendChild(stationEl);
  });

  // Hitbox de proximidad inteligente: asegura que ningún clic en el mapa se pierda si se hace clic cerca del nodo
  const trackArea = document.querySelector('.map-track-area');
  if (trackArea && !trackArea.dataset.proximityBound) {
    trackArea.dataset.proximityBound = 'true';
    trackArea.addEventListener('click', (e) => {
      // Si el clic ya cayó directamente dentro de una estación o en sus hijos, no intervenir
      if (e.target.closest('.map-station')) return;

      const clickX = e.clientX;
      const clickY = e.clientY;
      const stations = container.querySelectorAll('.map-station');
      let closestStation = null;
      let minDistance = 125; // Radio generoso de 125px alrededor del centro de cada nodo

      stations.forEach((st) => {
        const node = st.querySelector('.station-node') || st;
        const rect = node.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(clickX - centerX, clickY - centerY);

        if (dist < minDistance) {
          minDistance = dist;
          closestStation = st;
        }
      });

      if (closestStation) {
        closestStation.click();
      }
    });
  }
}

function showMapNotice(message) {
  const noticeBox = document.getElementById('mapNoticePill');
  if (!noticeBox) return;

  noticeBox.textContent = message;
  noticeBox.style.display = 'inline-flex';
  noticeBox.classList.remove('animate__animated', 'animate__fadeIn');
  void noticeBox.offsetWidth; // Trigger reflow
  noticeBox.classList.add('animate__animated', 'animate__fadeIn');

  clearTimeout(window.mapNoticeTimer);
  window.mapNoticeTimer = setTimeout(() => {
    noticeBox.style.display = 'none';
  }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  initAdventureMap();
});

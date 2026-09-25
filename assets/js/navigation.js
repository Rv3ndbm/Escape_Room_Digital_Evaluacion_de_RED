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
    criterion: 'Calidad',
    icon: '🌋',
    url: 'sala1-volcan.html'
  },
  {
    id: 2,
    name: 'Valle de las Letras',
    sub: 'Tsunamis',
    criterion: 'Pertinencia',
    icon: '🌊',
    url: 'sala2-tsunami.html'
  },
  {
    id: 3,
    name: 'Desierto de Sismos',
    sub: 'Sismos',
    criterion: 'Usabilidad',
    icon: '🏚️',
    url: 'sala3-sismos.html'
  },
  {
    id: 4,
    name: 'Paraíso del Calor',
    sub: 'Olas de Calor',
    criterion: 'Accesibilidad',
    icon: '☀️',
    url: 'sala4-calor.html'
  },
  {
    id: 5,
    name: 'Gran Meta',
    sub: 'Trofeo Final',
    criterion: '¡Victoria!',
    icon: '🏆',
    url: 'final.html'
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
    stationEl.className = `map-station ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}`;
    stationEl.setAttribute('data-id', station.id);

    let statusMarkup = '';
    if (isCompleted) {
      statusMarkup = `<div class="station-check-badge" title="¡Estación completada!"><i class="fa-solid fa-check"></i></div>`;
    } else if (isLocked) {
      statusMarkup = `<div class="station-lock-overlay" title="Bloqueado: Completa la estación anterior"><i class="fa-solid fa-lock"></i></div>`;
    }

    let avatarPointerMarkup = '';
    if (isCurrent) {
      avatarPointerMarkup = `<div class="avatar-pointer" title="¡Aquí estás tú, ${name}!">${avatar}</div>`;
    }

    stationEl.innerHTML = `
      ${avatarPointerMarkup}
      <div class="station-node">
        <span class="station-badge-num">${station.id}</span>
        <span>${station.icon}</span>
        ${statusMarkup}
      </div>
      <div class="station-label-card">
        <div class="station-name">${station.name}</div>
        <div class="station-criterion">${station.criterion}</div>
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

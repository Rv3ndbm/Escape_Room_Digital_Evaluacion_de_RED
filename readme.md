# 🌍 Misión: Alerta Planetaria 2050 – Escape Room Digital Educativo

> **Plataforma Interactiva para la Evaluación de Recursos Educativos Digitales (RED) mediante la Gamificación de Fenómenos Naturales Extremos.**  
> *Desarrollado para Educación Básica Primaria (Grado 4.º) y Especialización Docente en TIC aplicadas a la Educación.*

---

## 🚀 ¿En qué consiste este Aplicativo?

**Misión: Alerta Planetaria 2050** es un **Escape Room Digital Educativo** interactivo concebido para transformar la evaluación de Recursos Educativos Digitales (RED) en una aventura inmersiva de ciencia, toma de decisiones y pensamiento crítico.

### 📖 La Historia y la Misión
Nos encontramos en el **año 2050**. La humanidad monitorea el equilibrio ambiental del planeta desde una estación científica de alta tecnología. De repente, una serie de fenómenos naturales extremos simultáneos activa el protocolo de emergencia y bloquea las compuertas de seguridad de la estación.

Para desbloquear las salidas y salvar los datos de la investigación, el estudiante (en el rol de **Científico/a en Jefe**) debe recorrer 4 laboratorios temáticos. En cada sala encontrará un **Recurso Educativo Digital real** (video animado, simulador costero con físicas de agua, aplicación móvil sismológica y juego interactivo ambiental). Su misión consiste en:
1. **Explorar e interactuar directamente con el recurso digital** en el lado izquierdo de la pantalla.
2. **Evaluar críticamente la herramienta** en el lado derecho respondiendo a desafíos de análisis formativo bajo los estándares internacionales de evaluación de RED (**Pertinencia Curricular**, **Usabilidad**, **Calidad Científica** y **Accesibilidad**).
3. **Descifrar las 4 claves secretas** que abren la compuerta final para escapar con éxito y obtener el Certificado Oficial de Científico Experto.

---

## 🧩 Estructura de las Misiones y Recursos Evaluados

La pantalla principal de cada reto implementa el formato pedagógico de **pantalla dividida (Split Screen)**: a la izquierda el recurso interactivo, y a la derecha el motor de evaluación pedagógica.

```
+---------------------------------------------------------------------------------------------------------+
|                                    ESTRUCTURA DE LOS 4 RETOS DEL ESCAPE ROOM                            |
+---------+------------------+-----------------------------------+----------------------------------------+
| Reto    | Fenómeno Natural | Recurso Educativo Digital (RED)   | Criterio Pedagógico Evaluado           |
+---------+------------------+-----------------------------------+----------------------------------------+
| Reto 1  | 🌋 El Volcán     | Video Interactivo de Vulcanología | Pertinencia Curricular y Didáctica     |
|         |                  | con corte transversal de magma.   | (Adecuación a niños de 9-10 años).     |
+---------+------------------+-----------------------------------+----------------------------------------+
| Reto 2  | 🌊 El Tsunami    | Simulador Costero con Cámara      | Usabilidad, Interactividad y Control   |
|         |                  | Continua + Juego Stop Disasters.  | del Usuario (Navegación sin barreras). |
+---------+------------------+-----------------------------------+----------------------------------------+
| Reto 3  | 🏚️ El Terremoto  | App Móvil SismoKids 24/7 con      | Calidad y Rigor de la Información      |
|         |                  | sismógrafo y mochila de 72 horas. | (Fuentes geofísicas sin mitos falsos). |
+---------+------------------+-----------------------------------+----------------------------------------+
| Reto 4  | ☀️ Ola de Calor  | Actividad Gamificada Educaplay    | Accesibilidad y Eficacia Didáctica     |
|         |                  | adaptada a pantalla completa.     | (Diseño universal e inclusión digital).|
+---------+------------------+-----------------------------------+----------------------------------------+
```

---

## 🗺️ Flujo de Navegación del Escape Room

El aplicativo guía al usuario a través de una secuencia pedagógica lineal, fluida y cinematográfica:

1. **`index.html` (Portada de la Misión):**
   * Bienvenida interactiva, ambientación de laboratorio escolar, selector de avatares (4 personajes científicos) y registro del nombre del estudiante.
2. **`assets/html/historia.html` (Contexto y Rol de la Misión):**
   * Alerta de emergencia del año 2050, explicación del bloqueo de seguridad de la estación y presentación visual de los 3 grandes criterios de evaluación de RED.
3. **`assets/html/instrucciones.html` (Guía del Estudiante):**
   * Diagrama explicativo de la pantalla dividida (recurso a la izquierda, preguntas a la derecha) y los 7 pasos de la misión explicados con diseño de cuaderno escolar.
4. **`assets/html/sala1-volcan.html` (Reto 1: Volcán):**
   * Reproductor de video educativo integrado y evaluación de la **Pertinencia Didáctica**.
5. **`assets/html/sala2-tsunami.html` (Reto 2: Tsunami):**
   * Pestaña dual con el juego *Stop Disasters* y el **Simulador Costero con cámara continua en tiempo real**, medidor vertical de metros responsivo y relieve topográfico integrado (+30m cota segura). Evaluación de **Usabilidad**.
6. **`assets/html/sala3-terremoto.html` (Reto 3: Terremoto):**
   * Teléfono inteligente con la **App SismoKids 24/7** como protagonista central: selector de magnitudes (4.0, 6.5, 8.0), aula escolar animada, sismógrafo en tiempo real con ondas P y S, minijuego de la mochila de 72h y guía rápida certificada. Evaluación de **Calidad y Rigor Científico**.
7. **`assets/html/sala4-calor.html` (Reto 4: Ola de Calor):**
   * Visor responsivo de *Educaplay* a pantalla completa sobre cambio climático y termorregulación. Evaluación de **Accesibilidad**.
8. **`assets/html/final.html` (Misión Cumplida y Certificación):**
   * Panel de ingreso de claves secretas, resumen formativo de los 4 criterios dominados, diploma descargable/imprimible de Científico Experto y celebración con confeti.

---

## ✨ Características Técnicas y UI/UX Destacadas

* **🎨 Estética Visual de Alto Impacto:**
  * Diseño tipo cuaderno escolar y laboratorio digital para niños: tipografías limpias (*Outfit*, *Patrick Hand*, *Caveat*), colores pastel equilibrados, bordes redondeados y sombras suaves.
* **🎵 Paisaje Sonoro y Música Clásica Suave:**
  * Música de fondo relajante tipo nana/caja de música clásica generada proceduralmente mediante **Web Audio API** (sin archivos de audio pesados que tarden en cargar).
  * Efectos de sonido dinámicos para clics, selección de respuestas, cambios de página, aciertos y desbloqueo de claves secretas.
* **✨ Efectos Mágicos en el Puntero:**
  * Sistema de partículas de chispas y estrellas de colores estilo videojuego que brotan en las coordenadas del cursor al hacer clic en cualquier punto de la pantalla.
* **🌊 Motor de Físicas de Tsunami con Cámara Continua:**
  * Animación fluida a 60 FPS mediante `requestAnimationFrame` que desplaza la cámara en sincronía exacta con la cresta de la ola a lo largo del mar, playa, malecón y colina de evacuación.
  * Medidor vertical de metros 100% responsivo (orientado naturalmente de 30m arriba a 1m abajo) que se atenúa suavemente durante la simulación para no obstruir el paisaje costero.
* **🔄 Motor de Evaluación Formativa "Volver a Aprender":**
  * Mecánica de 2 rondas de preguntas por sala (`Ronda 1/2` y `Ronda 2/2`). Si el alumno comete un error, el sistema no lo castiga: le brinda retroalimentación explicativa y lo invita a volver a explorar el recurso para reintentar con éxito.

---

## 💻 Requisitos y Cómo Ejecutar la Aplicación

El proyecto está construido íntegramente en tecnologías web estándar (HTML5, Vanilla CSS3 y JavaScript moderno), por lo que **no requiere instalación de servidores complejos, bases de datos ni dependencias de Node.js**:

1. **Opción Recomendada (Live Server en VS Code):**
   * Abrir la carpeta del proyecto en Visual Studio Code.
   * Hacer clic derecho sobre `index.html` y seleccionar **"Open with Live Server"**.
2. **Opción Directa (Navegador Local):**
   * Hacer doble clic en el archivo `index.html` para abrirlo directamente en cualquier navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari o Brave).

---

## 📁 Estructura de Archivos del Proyecto

```text
/ (Raíz del Proyecto)
│
├── index.html                                # Pantalla de bienvenida, selección de avatar e inicio
├── README.md                                 # Guía general del aplicativo y alcance pedagógico
│
└── assets/
    ├── css/
    │   ├── styles.css                        # Hoja de estilos principal (sistema de diseño y componentes)
    │   └── animations.css                    # Keyframes y animaciones fluidas
    │
    ├── html/                                 # Pantallas de la aventura
    │   ├── historia.html                     # Narrativa 2050 y rol del estudiante
    │   ├── instrucciones.html                # Guía visual de la pantalla dividida y pasos
    │   ├── sala1-volcan.html                 # Reto 1: El Volcán (Pertinencia)
    │   ├── sala2-tsunami.html                # Reto 2: El Tsunami (Usabilidad)
    │   ├── sala3-terremoto.html              # Reto 3: El Terremoto (Calidad y Rigor)
    │   ├── sala4-calor.html                  # Reto 4: La Ola de Calor (Accesibilidad)
    │   └── final.html                        # Pantalla de victoria y diploma de certificación
    │
    ├── js/
    │   ├── main.js                           # Control global, audio Web Audio API y partículas de cursor
    │   └── validation.js                     # Motor de preguntas 1/2 y 2/2 con bucle "Volver a aprender"
    │
    ├── media/                                # Iconos SVG vectoriales, mascotas y recursos gráficos
    │
    └── documentacion/                        # Sustentación teórica formal
        └── sustentacion_cientifica_red.md    # Fundamentación científica exhaustiva de cada RED (Normas APA)
```

---

## 📖 Documentación Científica Completa

Para consultar la fundamentación teórica, geofísica y didáctica detallada de cada fenómeno natural y de cada recurso educativo digital, revisa el documento oficial:  
👉 **[assets/documentacion/sustentacion_cientifica_red.md](assets/documentacion/sustentacion_cientifica_red.md)**

---

## 🎓 Créditos y Finalidad Académica

* **Autor:** Equipo de Desarrollo e Innovación Pedagógica.
* **Propósito:** Actividad Formativa de Evaluación de Recursos Educativos Digitales.
* **Licencia:** Material con fines exclusivamente educativos y de divulgación pedagógica.

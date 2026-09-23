# 🌍 Misión: Salvar la Tierra - Escape Room Digital Educativo

## 🎓 Contexto Académico y Alcance del Proyecto

Este proyecto corresponde a la "Actividad 1: Escape Room Digital sobre Evaluación de RED"[cite: 6]. Está concebido como el entregable práctico interactivo para una especialización docente en Tecnologías de la Información y la Comunicación (TICS).

**División de responsabilidades:**

* **Desarrollo Técnico (Este alcance):** Diseño UI/UX, programación frontend (HTML, CSS, JS) y estructuración de la gamificación interactiva basada en pistas y acertijos.
* **Gestión Académica (A cargo del docente):** Redacción del trabajo escrito formal en formato PDF[cite: 7], registro final de justificaciones argumentadas, aplicación de normas APA 7.ª edición y declaración ética de uso de Inteligencia Artificial[cite: 7, 8, 10].

## 🏆 Criterios de Excelencia (Objetivo: Calificación 5.0)

La arquitectura técnica y la narrativa del Escape Room están meticulosamente diseñadas para que el usuario (el estudiante) pueda cumplir con los estrictos criterios de calificación de la asignatura. La plataforma obliga al jugador a:

* Identificar analíticamente los criterios de calidad de cada recurso, demostrando dominio conceptual.
* Realizar un análisis profundo para justificar claramente la pertinencia pedagógica del recurso[cite: 10].
* Evaluar la usabilidad en un sentido amplio, considerando específicamente la experiencia del usuario, la accesibilidad y el diseño inclusivo[cite: 10].
* Superar cada etapa resolviendo todas las pistas de forma precisa, estratégica y reflexiva para lograr "escapar" de la sala virtual[cite: 9, 10].

## 📖 Descripción de la Gamificación

El Escape Room sitúa a estudiantes de 4.º de primaria (9-10 años) en el rol de científicos que deben desbloquear las puertas de una estación de investigación. Cada pista corresponde a un escenario con un tipo de recurso distinto, los cuales deben evaluarse para avanzar.

## 🛠️ Stack Tecnológico y UI/UX

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
* **Librerías:** Animate.css (animaciones de entrada/salida), Anime.js / GSAP (animaciones complejas y microinteracciones), Bootstrap 5 (exclusivamente para el sistema de grid).
* **Diseño UI/UX:** Navegación en pantalla completa (`100vw`, `100vh`) sin scroll vertical. Estética orientada a niños utilizando una paleta de colores pastel (amarillos tenues, azules celestes, verdes menta), interfaces limpias y elementos de *flat design*.

## 📂 Arquitectura del Proyecto

La estructura modular garantiza un despliegue ordenado y una navegación tipo presentación:

```text
/ (Raíz)
├── index.html             # Portada, historia e inicio de la misión
└── assets/
    ├── html/              # Archivos de cada sala y misión final (sala1-volcan.html, etc.)
    ├── css/               # Hojas de estilo (styles.css, animations.css)
    ├── js/                # Lógica de navegación y validación (main.js, validation.js)
    └── media/             # Imágenes, iconos SVG, vectores infantiles y audios.

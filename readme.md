# 🌍 Misión: Salvar la Tierra – Escape Room Digital Educativo

> **Una aventura interactiva para aprender a evaluar Recursos Educativos Digitales (RED) mientras exploramos y comprendemos los fenómenos naturales de nuestro planeta.**  
> *Diseñado con cariño para niñas, niños de primaria (9 a 10 años) y docentes que buscan transformar sus clases en experiencias divertidas e inolvidables.*

---

## 🚀 1. ¿En qué consiste este Proyecto?

¿Alguna vez te has preguntado si todos los videos, juegos y páginas de internet que usamos en la escuela son realmente buenos para aprender? ¡Esa es la gran misión de este proyecto!

**Misión: Salvar la Tierra** es un **Escape Room Digital Educativo** en el que los estudiantes se convierten en **pequeños científicos y exploradores**. En lugar de responder a un examen aburrido con hojas de papel, los niños se sumergen en una historia emocionante:

### 📖 La Historia de la Aventura
En una base científica de monitoreo planetario, han comenzado a ocurrir cuatro eventos naturales extremos al mismo tiempo: un volcán despierta, una gran ola de tsunami se aproxima a la costa, un sismo sacude las aulas y una ola de calor azota la ciudad.

Las compuertas del centro de investigación se han cerrado por seguridad. Para salvar los datos científicos y ganar la aventura, el explorador debe viajar por un mapa interactivo, visitar 4 laboratorios temáticos y superar un reto en cada uno.

En cada sala, la pantalla se divide en dos:
* **A la izquierda:** El estudiante juega, toca y experimenta directamente con un **Recurso Educativo Digital real** (un video animado con corteza terrestre, un simulador de olas con físicas de agua, una app móvil con sismógrafo en vivo o un juego de clima).
* **A la derecha:** Responde retos sencillos en un cuaderno digital donde analiza si esa herramienta es buena, fácil de usar y confiable.

Al responder correctamente, descifra una **clave secreta**. ¡Reuniendo las 4 claves, abre la compuerta final y recibe su **Diploma Oficial de Científico Experto**!

---

## 🧠 2. ¿Qué es un "RED" y qué Criterios usamos para Evaluarlos?

### ¿Qué significa RED?
**RED** significa **Recurso Educativo Digital**. Es cualquier herramienta digital que usamos en el computador, celular o tablet para aprender algo: un video de YouTube para niños, un simulador interactivo de ciencias, un videojuego educativo o una aplicación móvil.

### ¿Por qué debemos aprender a evaluarlos?
En internet hay millones de cosas, pero **no todo lo que brilla educa**:
* A veces un juego es muy bonito, pero no enseña nada del tema de la clase.
* Otras veces la información está equivocada o tiene noticias falsas.
* O tal vez la página es tan difícil de manejar que los niños se cansan y no pueden jugar.

Por eso, en este Escape Room los estudiantes aprenden a ser **críticos y detectives de la tecnología**, usando **4 criterios explicados en palabras de niños**:

---

### 🔍 Los 4 Criterios Explicados de Forma Sencilla

| Criterio | ¿Qué pregunta nos hacemos? | Explicación Fácil para Niños | Ejemplo en la Vida Real |
| :--- | :--- | :--- | :--- |
| **1. Pertinencia** 🎯 | *¿Esto de verdad me sirve para lo que estoy estudiando hoy?* | El recurso debe enseñar exactamente el tema que necesitamos aprender y estar hecho a la medida de nuestra edad. | Si en 4.º grado estamos viendo volcanes, un video con animaciones claras de magma es **pertinente**. En cambio, un documental de universidad lleno de fórmulas químicas complejas no nos servirá. |
| **2. Usabilidad** 🎮 | *¿Es fácil, cómodo y divertido de usar?* | Que los botones respondan rápido, que el juego no se trabe, que las instrucciones sean claras y que no necesitemos a un adulto al lado para saber dónde dar clic. | Un simulador donde mueves una palanca y ves la ola subir de inmediato tiene **gran usabilidad**. Si una página tiene botones escondidos o no deja avanzar, tiene mala usabilidad. |
| **3. Calidad y Rigor** 🔬 | *¿La información es verdadera y de científicos reales?* | Lo que aprendemos debe ser verdad demostrada por la ciencia, sin mitos, supersticiones ni noticias falsas de internet. | Enseñar que durante un temblor debemos *Agacharnos, Cubrirnos y Sujetarnos* bajo un pupitre firme tiene **calidad científica**, mientras que inventar cadenas de WhatsApp sobre el "fin del mundo" no tiene rigor. |
| **4. Accesibilidad** 👁️ | *¿Todos los niños y niñas pueden usarlo sin barreras?* | Que las letras se puedan agrandar si alguien no ve bien, que los colores contrasten bonito, que haya sonidos amigables y que funcione en cualquier pantalla. | Un juego que tiene un botón para agrandar la letra y controles claros es **accesible**. Si la letra es diminuta o solo funciona en computadores caros, deja a muchos niños por fuera. |

---

## 🗺️ 3. ¿Cómo está Formado el Escape Room? (Estructura de Pantallas)

El proyecto está diseñado como una travesía paso a paso, donde la interfaz siempre respeta la **Regla de Oro: Cero Scroll Vertical** (todo cabe perfectamente en la pantalla sin tener que bajar):

```
[ index.html ] -> Portada y Registro de Explorador (Avatar + Nombre)
       ↓
[ introduccion.html ] -> Guía rápida en 3 pasos sencillos
       ↓
[ mapa.html ] -> Mapa interactivo con los 4 Biomas del Planeta
       ↓
 ┌─────────────────────────┬─────────────────────────┬─────────────────────────┬─────────────────────────┐
 │                         │                         │                         │                         │
 ▼                         ▼                         ▼                         ▼                         
[ sala1-volcan.html ]     [ sala2-tsunami.html ]    [ sala3-sismos.html ]     [ sala4-calor.html ]      
Reto 1: El Volcán         Reto 2: El Tsunami        Reto 3: El Terremoto      Reto 4: La Ola de Calor   
(Pertinencia)             (Usabilidad)              (Calidad Científica)      (Accesibilidad)           
 └─────────────────────────┴─────────────────────────┴─────────────────────────┴─────────────────────────┘
       ↓
[ final.html ] -> Panel de Apertura de Compuertas, Fiesta de Confeti y Diploma Personalizado
```

---

### 🔬 Detalle de Cada Sala y su Recurso:

### 1. 🌋 Parada 1: El Volcán Ardiente (`sala1-volcan.html`)
* **Fenómeno:** Erupciones volcánicas y magma del interior de la Tierra.
* **Recurso Embebido:** Video interactivo y animado con corte transversal que muestra la cámara de magma, la chimenea y el cráter.
* **Criterio a Descubrir:** **Pertinencia Didáctica**.
* **Misión:** El estudiante analiza si el video realmente explica cómo funciona un volcán para su nivel escolar o si solo es entretenimiento vacío.

### 2. 🌊 Parada 2: La Bahía del Tsunami (`sala2-tsunami.html`)
* **Fenómeno:** Olas gigantes de tsunami y evacuación costera.
* **Recurso Desarrollado:** Un **Simulador Costero en Tiempo Real** con físicas de agua continua, lecho marino, playa de arena, pueblo con casas y escuela, carretera de evacuación y cumbre segura a +30 metros.
  * *1m (Calma):* Mar tranquilo y niños jugando en la orilla con palas y castillos.
  * *5m (Oleaje Fuerte):* Olas que rompen en la playa; los niños salen rápido hacia la zona baja segura.
  * *15m (Alerta de Tsunami):* Muralla de agua que inunda el pueblo; las personas evacúan hacia la colina.
  * *30m (Mega Tsunami):* Ola colosal que trepa la montaña; todas las familias están 100% protegidas en el campamento de la cima.
  * *Botón "Simular Ola":* Secuencia cinemática donde el mar retrocede (drawback) y la ola embiste con espuma viva y partículas.
* **Criterio a Descubrir:** **Usabilidad e Interactividad**.
* **Misión:** El estudiante descubre cómo manipular variables (metros de altura) en un simulador facilita el aprendizaje activo mucho mejor que mirar una imagen fija.

### 3. 🏚️ Parada 3: El Cañón de los Sismos (`sala3-sismos.html`)
* **Fenómeno:** Terremotos, ondas sísmicas y prevención en la escuela y el hogar.
* **Recurso Desarrollado:** La app interactiva para celular **SismoKids 24/7**, que incluye:
  * Selector de magnitud sísmica (4.0 leve, 6.5 fuerte, 8.0 destructivo).
  * Simulación visual del aula escolar protegiéndose.
  * Sismógrafo en tiempo real con dibujo de ondas primarias (P) y secundarias (S).
  * Mochila de emergencia de 72 horas (agua, botiquín, linterna, silbato, radio).
  * Protocolo internacional: *Agáchate, Cúbrete y Sujétate*.
* **Criterio a Descubrir:** **Calidad y Rigor de la Información**.
* **Misión:** El estudiante aprende a verificar que los datos provengan de científicos reales y a rechazar mitos peligrosos o noticias falsas.

### 4. ☀️ Parada 4: La Llanura del Clima (`sala4-calor.html`)
* **Fenómeno:** Olas de calor extremo y cambio climático.
* **Recurso Embebido:** Actividad gamificada interactiva sobre cómo cuidar nuestro cuerpo (hidratación, ropa fresca, sombra).
* **Criterio a Descubrir:** **Accesibilidad e Inclusión**.
* **Misión:** El estudiante evalúa si los textos, botones y colores de una herramienta digital permiten que cualquier niño del mundo pueda participar sin problemas.

### 5. 🏆 Sala Final: La Compuerta de Escape (`final.html`)
* **Misión:** Introducir las 4 claves secretas descubiertas en cada laboratorio.
* **Recompensa:** Desbloqueo de compuertas con efecto sonoro de triunfo, lluvia de confeti animado y entrega del **Diploma de Científico/a Experto/a en RED**, personalizado con el nombre del niño y su avatar, listo para imprimir o guardar.

---

## 💡 4. Características Especiales que Hacen Único a este Escape Room

1. **Pantalla Dividida (Split Screen):**  
   El alumno no tiene que abrir mil pestañas diferentes ni perderse en internet. En una misma ventana tiene el juego/simulador a la izquierda y su cuaderno de preguntas a la derecha.
2. **Pedagogía de "Volver a Aprender" (Cero Frustración):**  
   Si el estudiante responde mal una pregunta, el juego no lo castiga con un "perdiste". Al contrario, le da una pista cariñosa y le dice: *"¡No te preocupes! Vuelve a probar el simulador a la izquierda y descubre la respuesta correcta"*.
3. **Control de Accesibilidad Integrado:**  
   En la barra superior de cada pantalla hay botones de **Letra (- / +)** para agrandar o achicar el tamaño del texto según la comodidad visual de cada persona.
4. **Música Suave y Paisaje Sonoro sin Descargas:**  
   Cuenta con sonidos alegres para clics, sirenas de alerta en tsunamis, rugidos del mar y una música de fondo relajante, creada directamente con código (*Web Audio API*), lo que hace que cargue de inmediato.
5. **Efecto Mágico de Puntero (Microinteracción Háptica):**  
   Cada vez que el niño hace clic en cualquier lugar de la pantalla, brotan chispas y estrellas de colores pastel que hacen que la navegación se sienta viva y mágica.
6. **Totalmente Adaptado para Niños:**  
   Se eliminaron términos complicados (como "cota", "talud continental" o jerga de ingeniería) y se reemplazaron por conceptos claros: *Zona Baja (+5m)*, *Colina (+15m)*, *Cima Segura (+30m)*, acompañados de personajes con bocadillos de cómic.

---

## 🛠️ 5. ¿Cómo Abrir y Usar este Proyecto?

Este proyecto fue construido con estándares web universales (**HTML5, CSS3 y JavaScript moderno**). No requiere instalar programas difíciles, ni bases de datos, ni servidores pesados:

### Método 1: Doble Clic (El más rápido)
1. Descarga o descomprime la carpeta del proyecto en tu computador.
2. Busca el archivo llamado **`index.html`** en la carpeta principal.
3. Haz doble clic sobre él. ¡Se abrirá de inmediato en tu navegador favorito (Chrome, Edge, Firefox, Safari o Brave)!

### Método 2: Con Visual Studio Code (Para Profesores o Desarrolladores)
1. Abre la carpeta del proyecto en **VS Code**.
2. Si tienes la extensión **Live Server**, haz clic derecho en `index.html` y elige **"Open with Live Server"**.
3. El proyecto se abrirá en `http://localhost:5500`.

---

## 📁 6. Estructura de Carpetas del Proyecto

```text
/ Escape Room Digital Evaluación de RED
│
├── index.html                                # Portada, registro del explorador y selector de avatares
├── readme.md                                 # Esta guía completa del proyecto y criterios RED
│
└── assets/
    ├── css/
    │   ├── styles.css                        # Estilos visuales, sistema de colores, cuaderno y simulador
    │   └── animations.css                    # Efectos de movimiento, flotación y confeti
    │
    ├── html/                                 # Pantallas y laboratorios del viaje
    │   ├── introduccion.html                 # Guía rápida en 3 pasos antes de entrar al mapa
    │   ├── mapa.html                         # Mapa interactivo de biomas con desbloqueo progresivo
    │   ├── sala1-volcan.html                 # Reto 1: Video del Volcán (Pertinencia)
    │   ├── sala2-tsunami.html                # Reto 2: Simulador Costero de Olas (Usabilidad)
    │   ├── sala3-sismos.html                 # Reto 3: App Móvil SismoKids (Calidad y Rigor)
    │   ├── sala4-calor.html                  # Reto 4: Juego del Clima (Accesibilidad)
    │   └── final.html                        # Compuerta final, claves y diploma descargable
    │
    ├── js/
    │   ├── main.js                           # Música Web Audio API, chispas de clic y control global
    │   └── validation.js                     # Sistema de preguntas pedagógicas y retroalimentación
    │
    ├── media/                                # Dibujos vectoriales SVG, mascotas y planetas
    │
    └── documentacion/                        # Documentación académica de soporte
        └── sustentacion_cientifica_red.md    # Fundamentación teórica para docentes (Normas APA)
```

---

## 🎓 7. Respaldo Académico y Documentación Científica

Para los docentes, evaluadores o directivos que deseen consultar la justificación pedagógica formal, las normas internacionales aplicadas (**LORI, COdA, UNE 71362 e ISO/IEC 25010**) y la bibliografía con normas APA, el proyecto cuenta con un documento formal de más de 500 líneas en:  
👉 **[assets/documentacion/sustentacion_cientifica_red.md](assets/documentacion/sustentacion_cientifica_red.md)**

---

## 🌟 8. Créditos y Finalidad

* **Destinatarios:** Niñas y niños de primaria, maestros en formación y docentes de ciencias y tecnología.
* **Objetivo de Aprendizaje:** Aprender a seleccionar y evaluar herramientas digitales con pensamiento crítico mientras se aprende sobre la naturaleza y la prevención de desastres.
* **Licencia:** Proyecto educativo de código abierto para libre uso formativo en las escuelas.

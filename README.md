# 📚 CLEAR - Progressive Web App

**Curriculum Learning & Educational Aligned Resources**

Recursos de inglés alineados al currículo MEDUCA Panamá (Pre-K a Grade 6)

---

## 🎯 ¿Qué es esto?

CLEAR es una PWA (Progressive Web App) que permite a docentes de inglés acceder a recursos educativos curados, organizados por:
- **Grados**: Pre-K, Kinder, Grade 1-6
- **Skills**: Listening, Speaking, Reading, Writing, Mediation
- **Formatos**: Videos, canciones, ebooks, interactivos, worksheets

**Total: 385 recursos** (96 externos + 150 del config + 139 base)

---

## 📦 Estructura de Archivos

```
clear_pwa/
├── index.html                 # App principal (versión PWA)
├── manifest.json              # Configuración PWA
├── service-worker.js          # Service Worker (funcionalidad offline)
├── generate_icons.py          # Script para generar iconos
│
├── js/
│   ├── resources_config.js    # Configuración de recursos externos
│   └── app5.js                # App alternativa (CuVA)
│
├── data/                      # Archivos JSON de datos
│   ├── external_links.json    # Recursos externos curados
│   ├── prek.json
│   ├── kinder.json
│   ├── grade_1.json
│   ├── grade_2.json
│   ├── grade_3.json
│   ├── grade_4.json
│   ├── grade_5.json
│   └── grade_6.json
│
└── icons/                     # Iconos PWA (varios tamaños)
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```

---

## 🚀 Instalación

### Opción 1: Servidor Local (Para pruebas)

1. **Coloca todos los archivos en una carpeta**
2. **Abre terminal en esa carpeta y ejecuta:**

```bash
# Python 3
python3 -m http.server 8080

# O Python 2
python -m SimpleHTTPServer 8080

# O Node.js (si tienes instalado)
npx http-server -p 8080
```

3. **Abre el navegador en:** `http://localhost:8080`

### Opción 2: Deployment en Web

#### GitHub Pages (Gratis)
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings → Pages
4. Selecciona la rama `main` y carpeta `/root`
5. Guarda y espera unos minutos
6. Tu app estará en: `https://tuusuario.github.io/clear-pwa/`

#### Netlify (Gratis)
1. Arrastra la carpeta completa a [netlify.com/drop](https://app.netlify.com/drop)
2. Listo! Obtendrás una URL tipo: `https://random-name.netlify.app`

#### Vercel (Gratis)
```bash
npm i -g vercel
vercel
```

---

## 📱 Instalar como App Móvil

### Android (Chrome)
1. Abre la app en Chrome
2. Toca el menú (⋮) → **"Agregar a pantalla de inicio"**
3. O espera el popup automático **"📲 Instalar App"**
4. Confirma instalación
5. ¡Listo! Icono en tu pantalla de inicio

### iOS (Safari)
1. Abre la app en Safari
2. Toca el botón **Compartir** (cuadro con flecha)
3. Selecciona **"Agregar a pantalla de inicio"**
4. Confirma
5. ¡Listo! Icono en tu pantalla de inicio

### Desktop (Chrome/Edge)
1. Abre la app en el navegador
2. Busca el ícono de instalación (➕) en la barra de direcciones
3. Click en **"Instalar"**
4. La app se abrirá en ventana independiente

---

## ✨ Características PWA

✅ **Instalable** - Como app nativa en tu dispositivo
✅ **Offline** - Funciona sin internet (recursos cacheados)
✅ **Rápida** - Carga instantánea después de la primera visita
✅ **Responsive** - Se adapta a móvil, tablet y desktop
✅ **Auto-actualizable** - Notifica cuando hay nueva versión
✅ **Ligera** - No ocupa mucho espacio

---

## 🔧 Personalización de Iconos

Los iconos generados son simples. Para usar tu logo:

1. **Diseña tu icono** (cuadrado, mínimo 512x512px)
2. **Usa una herramienta online:**
   - [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator)
   - [RealFaviconGenerator](https://realfavicongenerator.net/)
3. **Reemplaza los archivos** en la carpeta `/icons/`

O ejecuta de nuevo el script:
```bash
python3 generate_icons.py
```

---

## 📊 Fuentes de Datos

### Recursos Externos (external_links.json)
- 15 recursos curados manualmente
- Fuentes: YouTube, British Council, Oxford Owl, etc.

### Recursos del Config (resources_config.js)
- 150 recursos organizados por grado y scenario
- Incluye recursos cross-grade
- Actualizable sin modificar JSONs base

### Recursos Base (grade_*.json)
- Datos principales por grado
- 8 escenarios por grado
- 5 skills por escenario

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura
- **CSS3** - Estilos (Custom Properties)
- **JavaScript (ES6+)** - Lógica
- **Service Workers** - Offline y cache
- **Web App Manifest** - Metadata PWA
- **Python** - Generación de iconos

---

## 📝 Mantenimiento

### Agregar nuevos recursos

**Opción 1: Editar `resources_config.js`**
```javascript
pre_k: {
  scenario_1_meeting_new_friends: {
    listening: [
      {
        id: 'ext_nuevo_001',
        title: 'Nuevo Recurso',
        source: 'YouTube',
        url: 'https://...',
        type: 'song',
        standard: '...',
        outcome: '...',
        duration: '2:30'
      }
    ]
  }
}
```

**Opción 2: Editar `external_links.json`**
```json
{
  "id": "ext_016",
  "title": "Nuevo Recurso",
  "description": "...",
  "url": "https://...",
  "source": "...",
  "alignment": {
    "grade": "prek",
    "skill": "listening"
  }
}
```

### Actualizar versión del Service Worker

En `service-worker.js`, cambia:
```javascript
const CACHE_NAME = 'clear-pwa-v2.0.1'; // Incrementa versión
```

Esto forzará una actualización en todos los dispositivos.

---

## 🐛 Troubleshooting

### La app no se instala
- Asegúrate de usar **HTTPS** (excepto en localhost)
- Verifica que `manifest.json` esté accesible
- Revisa la consola del navegador (F12)

### No funciona offline
- Asegúrate que el Service Worker esté registrado
- Ve a DevTools → Application → Service Workers
- Click en "Update" para forzar actualización

### Los recursos no cargan
- Verifica las rutas en el código:
  - ¿Está en `/data/` o `/json/`?
  - ¿El archivo se llama `prek.json` o `grade_prek.json`?
- Abre la consola y busca errores 404

### Limpiar cache
En la consola del navegador:
```javascript
navigator.serviceWorker.getRegistrations()
  .then(regs => regs.forEach(reg => reg.unregister()));

caches.keys()
  .then(keys => keys.forEach(key => caches.delete(key)));

location.reload();
```

---

## 📄 Licencia

**Proyecto Independiente**  
No es contenido oficial de MEDUCA.  
Recursos externos respetan sus licencias originales.

---

## 👨‍💻 Autor

Proyecto educativo independiente para apoyar a docentes de inglés en Panamá.

---

## 🆘 Soporte

Si tienes problemas o sugerencias:
1. Revisa la sección de Troubleshooting
2. Verifica la consola del navegador
3. Asegúrate de tener la última versión

---

## 📈 Versión

**v2.0.0** - PWA Release
- ✅ Funcionalidad offline
- ✅ Instalable como app
- ✅ Auto-actualización
- ✅ 385 recursos totales

---

¡Gracias por usar CLEAR! 📚✨

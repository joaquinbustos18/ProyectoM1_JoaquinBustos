# ProyectoM1_JoaquinBustos# 🎨 Colorfly Studio

> Generador de paletas de colores profesionales en segundos.

---

## 📖 Descripción

**Colorfly Studio** es una aplicación web que permite generar paletas de colores aleatorias de forma rápida y visual. Podés elegir entre paletas de 6, 8 o 9 colores y obtener los valores en formato HEX y HSL para usar en tus proyectos de diseño o desarrollo.

---

## ✨ Características

- 🎲 Generación aleatoria de paletas de colores
- 🔢 Selección de tamaño de paleta: **6, 8 o 9 colores**
- 🎨 Visualización de colores en formato **HEX** y **HSL**
- 🖥️ Interfaz oscura y moderna
- ⚡ Resultados instantáneos con un solo clic

---

## 🚀 Instrucciones de uso

1. **Seleccioná el tamaño de la paleta** usando los botones en la parte superior:
   - `6 colores`
   - `8 colores`
   - `9 colores`

2. **Hacé clic en "Generar Paletas"** para crear una paleta aleatoria.

3. **Explorá los colores generados** — cada tarjeta muestra:
   - Una vista previa visual del color
   - El código **HEX** (ej: `#F46734`)
   - El valor **HSL** (ej: `HSL(17, 90%, 58%)`)

4. **Copiá los valores** que necesitás para tu proyecto directamente desde las tarjetas.

---

## 🛠️ Pasos para ejecutar el proyecto localmente

### Requisitos previos

Asegurate de tener instalado:

- [Node.js](https://nodejs.org/) v16 o superior
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### 1. Clonar el repositorio

```bash
git https://github.com/joaquinbustos18/ProyectoM1_JoaquinBustos.git
cd ProyectoM1_JoaquinBustos
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La app estará disponible en: **http://localhost:3000**

---

## 📦 Despliegue (Deploy)

### GitHub Pages

1. Instalá el paquete necesario:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Agregá este script en tu `package.json`:

   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. Generá el build y desplegá:
   ```bash
   npm run build
   npm run deploy
   ```

---

## 📁 Estructura del proyecto

```
ProyectoM1_JoaquinBustos/
├── css/
│   ├── styles.css
├── img/
│   ├── logo.png
├── js/
│   ├── main.js
├── index.html
└── README.md
```

---

© 2026 Todos los derechos reservados para **Colorfly Studio**.

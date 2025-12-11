1. Crear el proyecto con Vite + React
1.	Node.js instalado

Verifica si ya lo tienes:
node -v
npm -v

Si no aparece versión, instala Node desde la página oficial (nodejs.org) y luego vuelve a probar los comandos.

2.	Terminal
macOS / Linux: Terminal
Windows: PowerShell o Terminal de Windows

2. Crear el proyecto con Vite + React
En tu terminal, ve a la carpeta donde quieras crear el proyecto, por ejemplo Escritorio:
cd ~/Desktop
Ahora crea el proyecto (llamémoslo mi-primera-app):
npm create vite@latest mi-primera-app
Vite te hará algunas preguntas:

Project name:
Presiona Enter para aceptar mi-primera-app (o escribe otro nombre).

Select a framework:
Elige: React

Select a variant:
Para empezar más simple, elige: JavaScript
(Si ya conoces TypeScript, podrías elegir React + TypeScript)
Luego entra a la carpeta del proyecto e instala dependencias:
cd mi-primera-app
npm install
Y para arrancar la app:
npm run dev
La terminal te mostrará algo como:
Local:   http://localhost:5173/
Abre esa URL en tu navegador.

3. Estructura básica del proyecto
Dentro de la carpeta mi-primera-app verás algo como:
index.html → Punto de entrada HTML
src/main.jsx → Punto de entrada de JavaScript
src/App.jsx → Componente principal de la app
src/assets/ → Imágenes u otros recursos
package.json → Info del proyecto y scripts
Para empezar, nos interesan principalmente:
src/main.jsx
src/App.jsx

4. Entendiendo main.jsx
Abre src/main.jsx en tu editor. Verás algo parecido a:
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
¿Qué hace esto?
Importa React y ReactDOM.
Busca en index.html un elemento con id "root".
Renderiza el componente <App /> dentro de ese root.

5. Modificar el componente principal App.jsx
Abre src/App.jsx. Cámbialo por algo muy simple, por ejemplo:
function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Hola, React</h1>
      <p>Esta es mi primera aplicación en React.</p>
    </div>
  )
}

export default App
Guarda el archivo.
La página del navegador se actualizará sola (gracias al hot reload) y verás tu texto.

DESPUES: 

integrar Ionic

Probar integrar componentes de Ionic en la práctica que invoca a un WS Externo. (5).

En base requerimiento:
3.1. Diseñar y construir los WS (CRUD) para MongoDB (PROYECTO /mongodb)
3.2. Diseñar y construir las IU usando Ionic para cada WS construido (PROYECTO /servicios)

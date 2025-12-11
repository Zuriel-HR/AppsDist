# 🇲🇽 México Profundo

> Plataforma de comercialización digital para artesanos, comunidades y cooperativas de México

---

## 📖 Descripción

**México Profundo** es una plataforma web que conecta a oferentes locales (artesanos, comunidades turísticas y cooperativas agrícolas) con compradores interesados en productos y experiencias auténticas. Cada oferente cuenta con un **micrositio personalizable** que refleja su identidad cultural y comercial.

### ✨ Características principales

- 🎨 **Micrositios personalizables** con temas visuales únicos
- 🛍️ **Catálogo de productos y servicios** con sistema de filtrado
- 📱 **Diseño responsive** y accesible
- 📊 **Panel de analíticas** para oferentes
- 🌿 **Enfoque en comercio justo** y sustentabilidad

---

## 🏗️ Estructura del Proyecto

```
proyecto-final-mexico-profundo/
├── ui-micrositios/          # Aplicación Vue 3 + TypeScript
│   ├── src/
│   │   ├── data.ts          # Datos mock de micrositios
│   │   ├── components/      # Componentes Vue
│   │   └── assets/          # Recursos estáticos
│   └── package.json
├── res/                     # Documentación del proyecto
└── README.md               # Este archivo
```

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** v18+ 
- **npm** v9+

### Instalación

```bash
# Navegar al directorio de la UI
cd ui-micrositios

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 🎯 Micrositios de Ejemplo

El archivo [`src/data.ts`](./ui-micrositios/src/data.ts) contiene 3 micrositios de demostración:

| Micrositio | Tipo | Ubicación | Tema |
|------------|------|-----------|------|
| **Textiles Tradicionales Zinacantán** | Artesanía | Chiapas | `earth` |
| **Experiencias Mayas Uxmal** | Turismo | Yucatán | `indigo` |
| **Café Orgánico Sierra de Oaxaca** | Cooperativa | Oaxaca | `light` |

---

## 📦 Tecnologías

- **Frontend**: Vue 3 (Composition API)
- **Lenguaje**: TypeScript
- **Build Tool**: Vite
- **Estilos**: CSS3

---

## 📚 Documentación Adicional

- 📄 **Especificación completa**: [`/res/Plataforma_Mexico_Profundo_Micrositios_Comercializacion_Extendido.docx`](./res/)
- 🗂️ **Estructura de datos**: Ver interfaces TypeScript en [`data.ts`](./ui-micrositios/src/data.ts)

---

## 🤝 Contribuir

Este proyecto es parte del curso de **Aplicaciones Distribuidas** en IPN-UPIITA.

---

## 📄 Licencia

Proyecto académico - IPN UPIITA © 2024

---
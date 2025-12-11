Práctica: UI mínima para consumir los servicios de `/pr-servicios` y (futuro) API HTTP de `/mongodb`.

## Estructura
- `ui-final/`: App Vue 3 + TypeScript + Vite.
  - `src/App.vue`: Tabs para probar endpoints.
  - `src/style.css`: Estilos simples.

## Requisitos
- Node.js 18+

## Configuración rápida
```bash
cd ui-final
npm install
```

### Variables de entorno (opcional)
Define en un `.env` dentro de `ui-final/` si tus servicios no corren en los puertos por defecto:
```
VITE_SERVICIOS_URL=http://localhost:3000
VITE_MONGODB_URL=http://localhost:4000
```

## Ejecutar
```bash
cd ui-final
npm run dev
```
Abre la URL que muestra Vite (por defecto http://localhost:5173).

## Uso de la UI
- Tab **Servicios de cadenas**: Formularios POST para cada endpoint de `/pr-servicios` (`/mascaracteres`, `/menoscaracteres`, `/numcaracteres`, `/palindroma`, `/concat`, `/applysha256`, `/verifysha256`). Ajusta la Base URL si tu backend corre en otro host/puerto.
- Tab **MongoDB API**: Probador genérico de POST (ruta + cuerpo JSON). Úsalo cuando expongas un servicio HTTP para el proyecto `/mongodb`.

## Pendientes / ideas
- Integrar Ionic en la UI.
- Conectar con el CRUD HTTP real de `/mongodb` cuando esté publicado.

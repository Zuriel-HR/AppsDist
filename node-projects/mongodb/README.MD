# INTRO BD NOSQL

COLLECTIONS > DOCUMENTS

Este proyecto muestra cómo conectarse a MongoDB (Atlas o on‑premise) con Node.js, cómo configurar las credenciales vía `.env`, y ofrece:
- CLI para operaciones CRUD genéricas.
- API HTTP ligera para usar desde el frontend `pr-react-ui-servicios/ui-final` (puerto 4000 por defecto).

## Requisitos
- Node.js 18+
- Una cadena de conexión de MongoDB (recomendado usar Atlas)

## Configuración de entorno (.env)
1. Copia el archivo de ejemplo:
   - Windows PowerShell: `Copy-Item .env.example .env`
   - Bash: `cp .env.example .env`
2. Edita `.env` y define:
   - `MONGODB_URI` = tu cadena de conexión completa
   - Opcional para el ejemplo de `app.js`:
     - `MONGODB_DB` (por defecto `sample_mflix`)
     - `MONGODB_COLLECTION` (por defecto `comments`)

Ejemplo de `MONGODB_URI` para Atlas:
`mongodb+srv://<user>:<pass>@<cluster-host>/?retryWrites=true&w=majority&appName=<appname>`

> Notas
> - El archivo `.env` está ignorado por Git. No subas tus credenciales.
> - La app usa `dotenv` para cargar variables de entorno automáticamente.

## Instalación
```
npm install
```

## Uso rápido (CLI)
- Listar bases de datos:
  - `node index.js dbs`
- Listar colecciones de una base:
  - `node index.js cols <db>`
- Buscar documentos:
  - `node index.js find <db> <collection> [filterJSON] [optionsJSON]`
  - Ej.: `node index.js find sample_mflix comments '{"name":"John"}' '{"limit":5}'`
- Insertar un documento:
  - `node index.js insert <db> <collection> <docJSON>`
  - Ej.: `node index.js insert mydb users '{"name":"Ada","role":"admin"}'`
- Actualizar documentos (updateMany):
  - `node index.js update <db> <collection> <filterJSON> <updateJSON> [optionsJSON]`
  - Ej.: `node index.js update mydb users '{"role":"user"}' '{"$set":{"role":"member"}}'`
- Borrar documentos (deleteMany):
  - `node index.js delete <db> <collection> <filterJSON>`

Scripts npm de ayuda:
```
npm run dbs
npm start -- find sample_mflix comments
```

## API HTTP para el frontend
Arranca el servidor:
```
npm run api
```
Por defecto escucha en `http://localhost:4000` (configurable con `PORT`).

Endpoints:
- `GET /health` → estado.
- `GET /dbs` → `{ databases }`.
- `GET /cols?db=sample_mflix` → `{ db, collections }`.
- `POST /find` → body `{ db, collection, filter?, options? }`.
- `POST /insert` → body `{ db, collection, doc }`.
- `POST /update` → body `{ db, collection, filter, update, options? }`.
- `POST /delete` → body `{ db, collection, filter }`.

Usa `VITE_MONGODB_URL` en el frontend si cambias el host/puerto.

## Scripts incluidos
- `index.js`: CLI para CRUD genérico.
- `crud.js`: utilidades genéricas (listDatabases, listCollections, find, insertOne, updateMany, deleteMany).
- `app.js`: ejemplo simple que lee hasta 10 documentos de la colección por defecto definida en `.env`.
- `recoverdbnames.js`: imprime los nombres de las bases usando la misma conexión de `.env`.

## Buenas prácticas de seguridad
- Nunca subas credenciales reales a Git.
- Usa usuarios con permisos mínimos necesarios en MongoDB.
- Rotación de credenciales y uso de IP allowlist en Atlas.

## Tareas sugeridas
- Crear nueva BD y colección con 10 documentos usando la CLI:
  - `node index.js insert mydb mycollection '{"_seed":true,"i":0}'` (repetir cambiando `i`)
  - o con un pequeño script que llame repetidamente a `insert`.

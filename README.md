
# 📦 AppsDist

Colección de prácticas y ejemplos para la materia de Aplicaciones Distribuidas.

## 📁 Arquitectura General
El repositorio está organizado en carpetas, cada una correspondiente a una práctica, ejemplo o recurso:

AppsDist/
├── node-projects/        # Proyectos Node.js (prácticas, ejercicios, repasos)
|       └── results/      # Cada proyecto tiene una carpeta results donde se documentan los resultados obtenidos
├── static-page/          # Pagina estatica
├── LICENSE
└── README.md

- Cada subcarpeta contiene su propio README y código fuente. Consulta cada carpeta para instrucciones y detalles específicos.

## 📁 Proyectos (navega por carpeta)

- **[node-projects/firstapp](node-projects/firstapp/README.md)**: Primer CRUD simple con ejemplos de pruebas (colección Postman).
- **[node-projects/pr-servicios](node-projects/pr-servicios/README.md)**: Servicios web de cadenas y SHA256 (Express). Incluye colección Postman.
- **[node-projects/pr-react-ui-servicios](node-projects/pr-react-ui-servicios/README.md)**: UI Vue + Vite para probar `/pr-servicios` y la API HTTP de `/mongodb` (tabs para servicios y Mongo).
- **[node-projects/mongodb](node-projects/mongodb/README.MD)**: CLI y API HTTP ligera para CRUD sobre MongoDB usando `.env` (`npm run api` expone endpoints).
- **[node-projects/pr-cotizacion](node-projects/pr-cotizacion/README.md)**: Scraper/servicio de cotización con ejemplos de pruebas.
- **[node-projects/pr-repaso](node-projects/pr-repaso/README.md)**: Ejercicios de repaso con colección de pruebas.
- **[node-projects/pr-automatizacion](node-projects/pr-automatizacion/README.md)**: Ejemplo de automatización en Node.
- **[node-projects/proyecto-final-mexico-profundo](node-projects/proyecto-final-mexico-profundo/README.md)**: Micrositios comerciales (frontend en Vite) y documentación.
- **[static-page/](static-page/)**: Página estática de apoyo.

Cada carpeta tiene su propio README con pasos de instalación y uso.

## 🚀 Uso General

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd AppsDist
   ```
2. Entra a la carpeta del proyecto que quieras probar y sigue su README.

## 📚 Licencia

Este proyecto se distribuye bajo los términos definidos en [LICENSE](LICENSE).

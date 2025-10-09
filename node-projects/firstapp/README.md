# firstapp

Ejemplo básico de aplicación Node.js con Express y varios endpoints de prueba.

## Instalación y uso

1. Instala las dependencias:
    ```powershell
    npm install
    ```
2. Ejecuta el servidor:
    ```powershell
    node index.js
    ```
3. Prueba los endpoints:

### Endpoints disponibles

- **GET /**
   - Responde: `{ "message": "Nothing to send" }`

- **GET /serv001**
   - Parámetros en URL: `id`, `token`, `geo`
   - Ejemplo:  
      `http://localhost:3000/serv001?id=Nope&token=2345678dhuj43567fgh&geo=123456789,1234567890`
   - Responde: `{ "user_id": ..., "token": ..., "geo": ... }`

- **GET /serv002**
   - Igual a /serv001 pero con variables diferentes.
   - Ejemplo:  
      `http://localhost:3000/serv002?id=Nope&token=2345678dhuj43567fgh&geo=123456789,1234567890`

- **POST /serv003**
   - Recibe JSON en el body:
      ```json
      {
         "id": "nope",
         "token": "ertydfg456Dfgwerty",
         "geo": "12345678,34567890"
      }
      ```
   - Responde: `{ "user_id": ..., "token": ..., "geo": ... }`

- **POST /serv004/:info**
   - Parámetro en la URL: `info`
   - Ejemplo:  
      `http://localhost:3000/serv004/1234567`
   - Responde: `{ "info": ... }`


## Pruebas con Colección JSON

Para facilitar las pruebas, se incluye una colección JSON (compatible con Postman o Thunder Client) con ejemplos de cada endpoint. Importa la colección en tu cliente de APIs favorito y realiza pruebas fácilmente.

---

Consulta el código fuente para más detalles de los endpoints.

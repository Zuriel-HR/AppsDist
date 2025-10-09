# Práctica de Servicios Web - Aplicaciones Distribuidas

Este proyecto implementa una serie de servicios web en Node.js que reciben y responden en formato JSON, con validación de parámetros y manejo de errores.

## Servicios implementados

- **/mascaracteres**: Devuelve la cadena con más caracteres de dos recibidas.
- **/menoscaracteres**: Devuelve la cadena con menos caracteres de dos recibidas.
- **/numcaracteres**: Devuelve el número de caracteres de una cadena.
- **/palindroma**: Indica si una cadena es palíndroma.
- **/concat**: Concatena dos cadenas.
- **/applysha256**: Aplica SHA256 a una cadena y regresa la original y la encriptada.
- **/verifysha256**: Verifica si una cadena encriptada corresponde a una cadena normal tras aplicar SHA256.

## Uso

1. Instala las dependencias:

```powershell
npm install
```

2. Ejecuta el servidor:

```powershell
node index.js
```

3. Realiza peticiones POST a los endpoints usando JSON.

## Ejemplo de petición

POST a `/mascaracteres`:

```json
{
  "cadena1": "hola",
  "cadena2": "mundo!"
}
```

## Respuesta ejemplo

```json
{
  "resultado": "mundo!"
}
```

## Pruebas con Colección JSON

Para facilitar las pruebas, se incluye una colección JSON (compatible con Postman o Thunder Client) con ejemplos de cada endpoint. Importa la colección en tu cliente de APIs favorito y realiza pruebas fácilmente.

---

Todos los servicios validan parámetros y responden con un campo `resultado` o `error` según corresponda.

# Práctica: Automatización y Monitoreo de Temperaturas

Este proyecto automatiza la consulta de un servicio web de números aleatorios (simulando temperaturas) y notifica por correo y Telegram si se detectan tres temperaturas altas consecutivas.

## Descripción

- Consulta cada 30 segundos un servicio web que genera un número aleatorio entre 15 y 45 (temperatura simulada).
- Si la temperatura es mayor a 39 tres veces seguidas, envía una notificación por correo electrónico y por Telegram.
- Incluye ejemplos de configuración y evidencias de prueba.

## Estructura

```
pr-automatizacion/
├── index.js           # Script principal
├── .env               # Variables de entorno (correo, API keys)
├── README.md          # Este archivo
```

## Configuración

1. Instala dependencias:

```powershell
npm install axios nodemailer dotenv node-telegram-bot-api
```

2. Crea un archivo `.env` en la carpeta con el siguiente contenido (ajusta tus datos):

```
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña
EMAIL_TO=destinatario@gmail.com
TELEGRAM_TOKEN=tu_token_telegram
TELEGRAM_CHAT_ID=tu_chat_id
```

## Uso

```powershell
node index.js
```

## Evidencias de Prueba

Incluye capturas de pantalla de la consola, correos y mensajes de Telegram en la entrega final.

---

> Modifica el script según las necesidades de tu práctica y agrega tus evidencias.

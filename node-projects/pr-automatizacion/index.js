// index.js - Monitoreo de temperaturas con notificación por correo y Telegram
require('dotenv').config();
const axios = require('axios');
const nodemailer = require('nodemailer');
const TelegramBot = require('node-telegram-bot-api');
// Para Discord
const discordWebhook = process.env.DISCORD_WEBHOOK;

// Configuración de correo
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Configuración de Telegram
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
const chatId = process.env.TELEGRAM_CHAT_ID;

// Servicio web de números aleatorios (ajustar si se usa otro)
const RANDOM_API = 'https://www.random.org/integers/?num=1&min=15&max=45&col=1&base=10&format=plain&rnd=new';

let highTempCount = 0;

async function notifyAll(temp) {
    // Notificación por correo
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: 'Alerta de temperatura alta',
        text: `Se detectaron 3 temperaturas consecutivas mayores a 39°C. Última: ${temp}°C.`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error enviando correo:', error);
        } else {
            console.log('Correo enviado:', info.response);
        }
    });
    // Notificación por Telegram
    bot.sendMessage(chatId, `⚠️ Alerta: 3 temperaturas consecutivas > 39°C. Última: ${temp}°C.`)
        .then(() => console.log('Mensaje enviado a Telegram'))
        .catch(err => console.error('Error Telegram:', err));
    // Notificación por Discord
    if (discordWebhook) {
        try {
            await axios.post(discordWebhook, {
                content: `:warning: Alerta: 3 temperaturas consecutivas > 39°C. Última: ${temp}°C.`
            });
            console.log('Mensaje enviado a Discord');
        } catch (err) {
            console.error('Error Discord:', err.response ? err.response.data : err);
        }
    }
}

async function checkTemperature() {
    try {
        const res = await axios.get(RANDOM_API);
        const temp = parseInt(res.data);
        const logMsg = `[${new Date().toLocaleString()}] Temperatura: ${temp}°C`;
        console.log(logMsg);
        // Guardar log
        require('fs').appendFileSync('log.txt', logMsg + '\n');
        if (temp > 39) {
            highTempCount++;
            if (highTempCount >= 3) {
                await notifyAll(temp);
                highTempCount = 0; // Reinicia el contador tras notificar
            }
        } else {
            highTempCount = 0;
        }
    } catch (err) {
        console.error('Error obteniendo temperatura:', err);
    }
}

console.log('Monitoreo iniciado. Presiona Ctrl+C para detener.');
checkTemperature();
setInterval(checkTemperature, 30000);

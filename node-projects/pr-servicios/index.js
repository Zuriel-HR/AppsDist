// index.js - Servicios Web para cadenas y SHA256
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(cors()); // habilita CORS para permitir peticiones desde el frontend
app.use(bodyParser.json());

function error(msg) {
    return { error: msg };
}

app.post('/mascaracteres', (req, res) => {
    const { cadena1, cadena2 } = req.body;
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        return res.json(error('Parámetros inválidos. Se requieren dos cadenas.'));
    }
    if (cadena1.length >= cadena2.length) {
        return res.json({ resultado: cadena1 });
    } else {
        return res.json({ resultado: cadena2 });
    }
});

app.post('/menoscaracteres', (req, res) => {
    const { cadena1, cadena2 } = req.body;
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        return res.json(error('Parámetros inválidos. Se requieren dos cadenas.'));
    }
    if (cadena1.length <= cadena2.length) {
        return res.json({ resultado: cadena1 });
    } else {
        return res.json({ resultado: cadena2 });
    }
});

app.post('/numcaracteres', (req, res) => {
    const { cadena } = req.body;
    if (typeof cadena !== 'string') {
        return res.json(error('Parámetro inválido. Se requiere una cadena.'));
    }
    return res.json({ resultado: cadena.length });
});

app.post('/palindroma', (req, res) => {
    const { cadena } = req.body;
    if (typeof cadena !== 'string') {
        return res.json(error('Parámetro inválido. Se requiere una cadena.'));
    }
    const clean = cadena.replace(/\s+/g, '').toLowerCase();
    const isPal = clean === clean.split('').reverse().join('');
    return res.json({ resultado: isPal });
});

app.post('/concat', (req, res) => {
    const { cadena1, cadena2 } = req.body;
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        return res.json(error('Parámetros inválidos. Se requieren dos cadenas.'));
    }
    return res.json({ resultado: cadena1 + cadena2 });
});

app.post('/applysha256', (req, res) => {
    const { cadena } = req.body;
    if (typeof cadena !== 'string') {
        return res.json(error('Parámetro inválido. Se requiere una cadena.'));
    }
    const hash = crypto.createHash('sha256').update(cadena).digest('hex');
    return res.json({ original: cadena, sha256: hash });
});

app.post('/verifysha256', (req, res) => {
    const { cadena, sha256 } = req.body;
    if (typeof cadena !== 'string' || typeof sha256 !== 'string') {
        return res.json(error('Parámetros inválidos. Se requiere una cadena y su hash.'));
    }
    const hash = crypto.createHash('sha256').update(cadena).digest('hex');
    return res.json({ resultado: hash === sha256 });
});

app.listen(3000, () => {
    console.log('Servidor de servicios web iniciado en puerto 3000');
});

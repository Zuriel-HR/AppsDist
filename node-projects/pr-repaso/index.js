// index.js - Práctica de Repaso de Servicios Web
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

// Ejercicio 1: Servicio de Saludo Básico
app.post('/saludo', (req, res) => {
    const { nombre } = req.body;
    if (typeof nombre !== 'string') return res.json({ error: 'Nombre inválido' });
    res.json({ mensaje: `Hola, ${nombre}` });
});

// Ejercicio 2: Calculadora de Operaciones Básicas
app.post('/calcular', (req, res) => {
    const { a, b, operacion } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number' || typeof operacion !== 'string')
        return res.json({ error: 'Parámetros inválidos' });
    let resultado;
    switch (operacion) {
        case 'suma': resultado = a + b; break;
        case 'resta': resultado = a - b; break;
        case 'multiplicacion': resultado = a * b; break;
        case 'division':
            if (b === 0) return res.json({ error: 'División por cero' });
            resultado = a / b; break;
        default: return res.json({ error: 'Operación no soportada' });
    }
    res.json({ resultado });
});

// Ejercicio 3: Gestor de Tareas (CRUD Básico)
let tareas = [];
app.post('/tareas', (req, res) => {
    const { id, titulo, completada } = req.body;
    if (typeof id !== 'number' || typeof titulo !== 'string' || typeof completada !== 'boolean')
        return res.json({ error: 'Parámetros inválidos' });
    if (tareas.find(t => t.id === id)) return res.json({ error: 'ID ya existe' });
    tareas.push({ id, titulo, completada });
    res.json({ resultado: 'Tarea creada', tarea: { id, titulo, completada } });
});
app.get('/tareas', (req, res) => res.json({ tareas }));
app.put('/tareas/:id', (req, res) => {
    const id = Number(req.params.id);
    const { titulo, completada } = req.body;
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return res.json({ error: 'Tarea no encontrada' });
    if (titulo) tarea.titulo = titulo;
    if (typeof completada === 'boolean') tarea.completada = completada;
    res.json({ resultado: 'Tarea actualizada', tarea });
});
app.delete('/tareas/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = tareas.findIndex(t => t.id === id);
    if (idx === -1) return res.json({ error: 'Tarea no encontrada' });
    tareas.splice(idx, 1);
    res.json({ resultado: 'Tarea eliminada' });
});

// Ejercicio 4: Validador de Contraseñas
app.post('/validar-password', (req, res) => {
    const { password } = req.body;
    let errores = [];
    if (typeof password !== 'string') errores.push('Password inválido');
    if (!password || password.length < 8) errores.push('Mínimo 8 caracteres');
    if (!/[A-Z]/.test(password)) errores.push('Al menos una mayúscula');
    if (!/[a-z]/.test(password)) errores.push('Al menos una minúscula');
    if (!/[0-9]/.test(password)) errores.push('Al menos un número');
    res.json({ esValida: errores.length === 0, errores });
});

// Ejercicio 5: Conversor de Temperatura
function convertirTemp(valor, desde, hacia) {
    if (desde === hacia) return valor;
    let c;
    switch (desde) {
        case 'C': c = valor; break;
        case 'F': c = (valor - 32) * 5/9; break;
        case 'K': c = valor - 273.15; break;
        default: return null;
    }
    switch (hacia) {
        case 'C': return c;
        case 'F': return c * 9/5 + 32;
        case 'K': return c + 273.15;
        default: return null;
    }
}
app.post('/convertir-temperatura', (req, res) => {
    const { valor, desde, hacia } = req.body;
    if (typeof valor !== 'number' || !['C','F','K'].includes(desde) || !['C','F','K'].includes(hacia))
        return res.json({ error: 'Parámetros inválidos' });
    const convertido = convertirTemp(valor, desde, hacia);
    if (convertido === null) return res.json({ error: 'Conversión no soportada' });
    res.json({ valorOriginal: valor, valorConvertido: convertido, escalaOriginal: desde, escalaConvertida: hacia });
});

// Ejercicio 6: Buscador en Array
app.post('/buscar', (req, res) => {
    const { array, elemento } = req.body;
    if (!Array.isArray(array)) return res.json({ error: 'Array inválido' });
    const indice = array.findIndex(e => e === elemento);
    res.json({ encontrado: indice !== -1, indice, tipoElemento: typeof elemento });
});

// Ejercicio 7: Contador de Palabras
app.post('/contar-palabras', (req, res) => {
    const { texto } = req.body;
    if (typeof texto !== 'string') return res.json({ error: 'Texto inválido' });
    const palabras = texto.trim().split(/\s+/).filter(Boolean);
    const unicas = new Set(palabras);
    res.json({ totalPalabras: palabras.length, totalCaracteres: texto.length, palabrasUnicas: unicas.size });
});

// Ejercicio 8: Generador de Perfiles de Usuario
app.post('/generar-perfil', (req, res) => {
    const { nombre, edad, intereses } = req.body;
    if (typeof nombre !== 'string' || typeof edad !== 'number' || !Array.isArray(intereses))
        return res.json({ error: 'Parámetros inválidos' });
    let categoria = 'junior';
    if (edad >= 40) categoria = 'veterano';
    else if (edad >= 25) categoria = 'senior';
    res.json({ usuario: { nombre, edad, intereses }, id: uuidv4(), fechaCreacion: new Date().toISOString(), categoria });
});

// Ejercicio 9: Sistema de Calificaciones
app.post('/calcular-promedio', (req, res) => {
    const { calificaciones } = req.body;
    if (!Array.isArray(calificaciones) || calificaciones.some(c => typeof c !== 'number' || c < 0 || c > 10))
        return res.json({ error: 'Calificaciones inválidas' });
    const promedio = calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length;
    res.json({ promedio, calificacionMasAlta: Math.max(...calificaciones), calificacionMasBaja: Math.min(...calificaciones), estado: promedio >= 6 ? 'aprobado' : 'reprobado' });
});

// Ejercicio 10: API de Productos con Filtros
let productos = [];
app.post('/productos', (req, res) => {
    const { nombre, categoria, precio } = req.body;
    if (typeof nombre !== 'string' || typeof categoria !== 'string' || typeof precio !== 'number')
        return res.json({ error: 'Parámetros inválidos' });
    productos.push({ nombre, categoria, precio });
    res.json({ resultado: 'Producto agregado' });
});
app.get('/productos', (req, res) => {
    let { categoria, precioMin, precioMax } = req.query;
    let filtrados = productos;
    if (categoria) filtrados = filtrados.filter(p => p.categoria === categoria);
    if (precioMin) filtrados = filtrados.filter(p => p.precio >= Number(precioMin));
    if (precioMax) filtrados = filtrados.filter(p => p.precio <= Number(precioMax));
    res.json({ productos: filtrados });
});

app.listen(3000, () => {
    console.log('Servidor de repaso iniciado en puerto 3000');
});

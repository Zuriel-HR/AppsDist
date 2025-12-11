# 📈 LaMejorCotizacion – Web Scraping con Express

Servicio Express que realiza web scraping a **Investing.com** para obtener la cotización GBP/USD, aplica un margen de ±10% para compra/venta y expone endpoints REST. Incluye un frontend sencillo y colección de Postman.

## 🧭 Estructura
```
pr-cotizacion/
├── package.json
├── src/
│   ├── scraper.js       # Lógica de scraping y cálculo de márgenes
│   └── server.js        # Servidor Express + rutas
├── public/
│   └── index.html       # Frontend básico
└── pr-cotizacion_collection.json
```

## 🚀 Puesta en marcha
```bash
cd node-projects/pr-cotizacion
npm install
npm start        # http://localhost:3000
# npm run dev    # con recarga (nodemon)
```

## 🔗 Endpoints
- `GET /api/quote?pair=gbp-usd` → `{ pair, basePrice, buy, sell, source, retrievedAt }`
- `GET /api/buy?pair=gbp-usd`   → `{ basePrice, buyPrice }`
- `GET /api/sell?pair=gbp-usd`  → `{ basePrice, sellPrice }`

`pair` por defecto es `gbp-usd`. Respuestas en JSON.

## 🎨 Frontend
Se sirve en `/` desde `public/index.html`. Permite consultar el par y mostrar precio base, compra (-10%) y venta (+10%).

## 🧪 Pruebas rápidas
1) Levanta el servidor (`npm start`).  
2) Importa `pr-cotizacion_collection.json` en Postman.  
3) Ejecuta las tres requests (Quote, Buy, Sell) apuntando a `http://localhost:3000`.

## 🧠 Scraping y márgenes
- Fuente: `https://www.investing.com/currencies/gbp-usd`
- Selector principal: `[data-test="instrument-price-last"]` (fallbacks incluidos).
- Márgenes: compra = base * 0.9, venta = base * 1.1 (4 decimales).

## ➕ Agregar más divisas
1) En `src/scraper.js`, añade el par en `PAIR_MAP`, por ejemplo:
   ```js
   const PAIR_MAP = {
     'gbp-usd': 'https://www.investing.com/currencies/gbp-usd',
     'eur-usd': 'https://www.investing.com/currencies/eur-usd',
   };
   ```
2) Llama a los endpoints con `?pair=eur-usd`. Si el selector del precio cambia, ajusta el scraping (bloque `priceText`).

## ⚠️ Notas
- Investing.com puede cambiar su DOM; si falla el selector, revisar el HTML y actualizar los selectores en `scraper.js`.
- No se usan APIs oficiales, solo HTML público.

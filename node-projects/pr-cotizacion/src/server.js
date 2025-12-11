const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { getQuote } = require('./scraper');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/quote', async (req, res) => {
  try {
    const quote = await getQuote(req.query.pair);
    res.json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/buy', async (req, res) => {
  try {
    const quote = await getQuote(req.query.pair);
    res.json({
      pair: quote.pair,
      source: quote.source,
      basePrice: quote.basePrice,
      buyPrice: quote.buy,
      retrievedAt: quote.retrievedAt,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/sell', async (req, res) => {
  try {
    const quote = await getQuote(req.query.pair);
    res.json({
      pair: quote.pair,
      source: quote.source,
      basePrice: quote.basePrice,
      sellPrice: quote.sell,
      retrievedAt: quote.retrievedAt,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


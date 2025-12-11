const axios = require('axios');
const cheerio = require('cheerio');

const DEFAULT_PAIR = 'gbp-usd';

const PAIR_MAP = {
  'gbp-usd': 'https://www.investing.com/currencies/gbp-usd',
  'mxn-usd': 'https://www.investing.com/currencies/mxn-usd',
  'eur-usd': 'https://www.investing.com/currencies/eur-usd',
  'jpy-usd': 'https://www.investing.com/currencies/jpy-usd',
  'gbp-usd': 'https://www.investing.com/currencies/gbp-usd',
  'usd-mxn': 'https://www.investing.com/currencies/usd-mxn',
  'usd-eur': 'https://www.investing.com/currencies/usd-eur',
  'usd-jpy': 'https://www.investing.com/currencies/usd-jpy',
  'usd-gbp': 'https://www.investing.com/currencies/usd-gbp',
  'usd-mxn': 'https://www.investing.com/currencies/usd-mxn',
};

const axiosClient = axios.create({
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    Accept: 'text/html,application/xhtml+xml',
  },
  timeout: 10000,
});

function normalizePair(pair) {
  if (!pair) return DEFAULT_PAIR;
  return pair.toLowerCase().replace('_', '-');
}

function applyMargin(basePrice, direction) {
  if (typeof basePrice !== 'number' || Number.isNaN(basePrice)) {
    throw new Error('Invalid base price');
  }
  if (direction === 'buy') return +(basePrice * 0.9).toFixed(4);
  if (direction === 'sell') return +(basePrice * 1.1).toFixed(4);
  return basePrice;
}

async function scrapePrice(pair) {
  const normalizedPair = normalizePair(pair);
  const url = PAIR_MAP[normalizedPair];
  if (!url) {
    throw new Error(`Pair ${normalizedPair} not supported`);
  }

  const response = await axiosClient.get(url);
  const $ = cheerio.load(response.data);

  // Investing.com suele exponer el precio actual en un span con data-test="instrument-price-last"
  const priceText =
    $('[data-test="instrument-price-last"]').first().text().trim() ||
    $('.instrument-price_last__KQzyA').first().text().trim() ||
    $('.text-5xl').first().text().trim();

  const basePrice = parseFloat(priceText.replace(/,/g, ''));
  if (Number.isNaN(basePrice)) {
    throw new Error('No se pudo extraer el precio de la página');
  }

  return {
    pair: normalizedPair,
    basePrice,
    url,
  };
}

async function getQuote(pair) {
  const { pair: resolvedPair, basePrice, url } = await scrapePrice(pair);
  return {
    pair: resolvedPair,
    source: url,
    basePrice,
    buy: applyMargin(basePrice, 'buy'),
    sell: applyMargin(basePrice, 'sell'),
    retrievedAt: new Date().toISOString(),
  };
}

module.exports = {
  getQuote,
  applyMargin,
  normalizePair,
};


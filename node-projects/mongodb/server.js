// server.js - Expose CRUD helpers over HTTP for the frontend tester
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {
  listDatabases,
  listCollections,
  find,
  insertOne,
  updateMany,
  deleteMany,
} = require('./crud');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

function asyncHandler(fn) {
  return (req, res) =>
    Promise.resolve(fn(req, res)).catch((err) => {
      console.error('API error:', err);
      res.status(500).json({ error: err.message || 'Unexpected error' });
    });
}

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'mongodb-api' });
});

app.get(
  '/dbs',
  asyncHandler(async (_req, res) => {
    const databases = await listDatabases();
    res.json({ databases });
  }),
);

app.get(
  '/cols',
  asyncHandler(async (req, res) => {
    const { db } = req.query;
    if (!db) return res.status(400).json({ error: 'db is required' });
    const collections = await listCollections(String(db));
    res.json({ db, collections });
  }),
);

app.post(
  '/find',
  asyncHandler(async (req, res) => {
    const { db, collection, filter = {}, options = {} } = req.body || {};
    if (!db || !collection) {
      return res.status(400).json({ error: 'db and collection are required' });
    }
    const docs = await find(db, collection, filter, options);
    res.json({ db, collection, count: docs.length, docs });
  }),
);

app.post(
  '/insert',
  asyncHandler(async (req, res) => {
    const { db, collection, doc } = req.body || {};
    if (!db || !collection || !doc) {
      return res.status(400).json({ error: 'db, collection and doc are required' });
    }
    const result = await insertOne(db, collection, doc);
    res.json({ insertedId: result.insertedId });
  }),
);

app.post(
  '/update',
  asyncHandler(async (req, res) => {
    const { db, collection, filter, update, options = {} } = req.body || {};
    if (!db || !collection || !filter || !update) {
      return res
        .status(400)
        .json({ error: 'db, collection, filter and update are required' });
    }
    const result = await updateMany(db, collection, filter, update, options);
    res.json({
      matched: result.matchedCount,
      modified: result.modifiedCount,
      upserted: result.upsertedCount || 0,
    });
  }),
);

app.post(
  '/delete',
  asyncHandler(async (req, res) => {
    const { db, collection, filter } = req.body || {};
    if (!db || !collection || !filter) {
      return res.status(400).json({ error: 'db, collection and filter are required' });
    }
    const result = await deleteMany(db, collection, filter);
    res.json({ deleted: result.deletedCount });
  }),
);

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`MongoDB HTTP API listening on http://localhost:${PORT}`);
});


// Generic CRUD utilities for MongoDB using env-based connection

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

function getClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not set. Define it in .env or environment.');
  }
  return new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
}

async function withClient(fn) {
  const client = getClient();
  try {
    await client.connect();
    return await fn(client);
  } finally {
    await client.close();
  }
}

async function listDatabases() {
  return withClient(async (client) => {
    const res = await client.db().admin().listDatabases();
    return res.databases;
  });
}

async function listCollections(dbName) {
  if (!dbName) throw new Error('dbName is required');
  return withClient(async (client) => {
    const items = await client.db(dbName).listCollections().toArray();
    return items.map((c) => c.name);
  });
}

async function insertOne(dbName, collectionName, doc) {
  if (!dbName || !collectionName) throw new Error('dbName and collectionName are required');
  return withClient(async (client) => {
    const res = await client.db(dbName).collection(collectionName).insertOne(doc);
    return res;
  });
}

async function find(dbName, collectionName, filter = {}, options = {}) {
  if (!dbName || !collectionName) throw new Error('dbName and collectionName are required');
  return withClient(async (client) => {
    const cursor = client.db(dbName).collection(collectionName).find(filter, options);
    return cursor.toArray();
  });
}

async function updateMany(dbName, collectionName, filter, update, options = {}) {
  if (!dbName || !collectionName) throw new Error('dbName and collectionName are required');
  return withClient(async (client) => {
    const res = await client.db(dbName).collection(collectionName).updateMany(filter, update, options);
    return res;
  });
}

async function deleteMany(dbName, collectionName, filter) {
  if (!dbName || !collectionName) throw new Error('dbName and collectionName are required');
  return withClient(async (client) => {
    const res = await client.db(dbName).collection(collectionName).deleteMany(filter);
    return res;
  });
}

module.exports = {
  listDatabases,
  listCollections,
  insertOne,
  find,
  updateMany,
  deleteMany,
};


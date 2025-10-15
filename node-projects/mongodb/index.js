require('dotenv').config();
const {
  listDatabases,
  listCollections,
  insertOne,
  find,
  updateMany,
  deleteMany,
} = require('./crud');

function printUsage() {
  console.log(`MongoDB CLI usage:

  Set connection:
    MONGODB_URI must be set in .env or env.

  Commands:
    dbs
      List all databases

    cols <db>
      List collections in database

    find <db> <collection> [filterJSON] [optionsJSON]
      Find documents. Defaults: filter={}, options={}

    insert <db> <collection> <docJSON>
      Insert a single document

    update <db> <collection> <filterJSON> <updateJSON> [optionsJSON]
      Update many documents. Use {"$set":{...}} etc.

    delete <db> <collection> <filterJSON>
      Delete many documents matching filter

  Examples:
    node index.js dbs
    node index.js cols sample_mflix
    node index.js find sample_mflix comments '{"name":"John"}' '{"limit":5}'
    node index.js insert mydb users '{"name":"Ada","role":"admin"}'
    node index.js update mydb users '{"role":"user"}' '{"$set":{"role":"member"}}'
    node index.js delete mydb users '{"inactive":true}'
`);
}

function parseJSON(arg, fallback) {
  if (typeof arg === 'undefined') return fallback;
  try { return JSON.parse(arg); } catch (e) { throw new Error(`Invalid JSON: ${arg}`); }
}

async function main() {
  const [cmd, ...args] = process.argv.slice(2);
  if (!cmd) { printUsage(); return; }
  try {
    switch (cmd) {
      case 'dbs': {
        const dbs = await listDatabases();
        dbs.forEach(d => console.log(d.name));
        break;
      }
      case 'cols': {
        const [db] = args;
        if (!db) throw new Error('Usage: cols <db>');
        const cols = await listCollections(db);
        cols.forEach(c => console.log(c));
        break;
      }
      case 'find': {
        const [db, col, filterArg, optionsArg] = args;
        if (!db || !col) throw new Error('Usage: find <db> <collection> [filterJSON] [optionsJSON]');
        const filter = parseJSON(filterArg, {});
        const options = parseJSON(optionsArg, {});
        const docs = await find(db, col, filter, options);
        console.log(JSON.stringify(docs, null, 2));
        console.log(`Total: ${docs.length}`);
        break;
      }
      case 'insert': {
        const [db, col, docArg] = args;
        if (!db || !col || !docArg) throw new Error('Usage: insert <db> <collection> <docJSON>');
        const doc = parseJSON(docArg);
        const res = await insertOne(db, col, doc);
        console.log(`Inserted id: ${res.insertedId}`);
        break;
      }
      case 'update': {
        const [db, col, filterArg, updateArg, optionsArg] = args;
        if (!db || !col || !filterArg || !updateArg) throw new Error('Usage: update <db> <collection> <filterJSON> <updateJSON> [optionsJSON]');
        const filter = parseJSON(filterArg);
        const updateDoc = parseJSON(updateArg);
        const options = parseJSON(optionsArg, {});
        const res = await updateMany(db, col, filter, updateDoc, options);
        console.log(`Matched: ${res.matchedCount}, Modified: ${res.modifiedCount}, Upserted: ${res.upsertedCount || 0}`);
        break;
      }
      case 'delete': {
        const [db, col, filterArg] = args;
        if (!db || !col || !filterArg) throw new Error('Usage: delete <db> <collection> <filterJSON>');
        const filter = parseJSON(filterArg);
        const res = await deleteMany(db, col, filter);
        console.log(`Deleted: ${res.deletedCount}`);
        break;
      }
      default:
        printUsage();
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exitCode = 1;
  }
}

main();


// "Guerrilla" Workshop - Distributed Applications - UPIITA - IPN

require('dotenv').config();
const { listDatabases } = require('./crud');

async function main() {
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI no está definido. Configúralo en .env.');
    process.exit(1);
  }
  try {
    const dbs = await listDatabases();
    console.log('Databases:');
    dbs.forEach((db) => console.log(` - ${db.name}`));
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }
}

main();

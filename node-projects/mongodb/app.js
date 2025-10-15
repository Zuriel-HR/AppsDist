// app.js (simple example read using env-configured URI)

require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

async function consultarDocumentos() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI no está definido. Configúralo en .env o variables de entorno.');
  }
  const dbName = process.env.MONGODB_DB || 'sample_mflix';
  const collName = process.env.MONGODB_COLLECTION || 'comments';

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    console.log('Conexión a MongoDB exitosa.');

    const collection = client.db(dbName).collection(collName);
    const resultados = await collection.find({}).limit(10).toArray();
    console.log('Documentos encontrados (máx 10):', resultados);
    return resultados;
  } catch (error) {
    console.error('Error al conectar o consultar MongoDB:', error);
  } finally {
    await client.close();
    console.log('Conexión cerrada.');
  }
}

module.exports = { consultarDocumentos };


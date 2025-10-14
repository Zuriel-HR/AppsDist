
const { consultarDocumentos } = require('./app.js');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://test:12345@main.k3etqo9.mongodb.net/?retryWrites=true&w=majority&appName=main";

async function main() {
  console.log("Iniciando la aplicación...");
  
  // Llamamos a la función para obtener los datos de la base de datos
  const datos = await consultarDocumentos();

  if (datos) {
    console.log("\n--- Resultados recibidos en index.js ---");
    console.log("Total de documentos:", datos.length);
  }
  
  console.log("\nLa aplicación ha finalizado su ejecución.");
}

// Ejecutamos la función principal
main();



/*
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});*/
/*
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/

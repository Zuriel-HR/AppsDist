// app.js

const { MongoClient, ServerApiVersion } = require('mongodb');

// ¡IMPORTANTE! Reemplaza <db_password> con tu contraseña real.
// Se recomienda usar variables de entorno para no exponer la contraseña en el código.
const uri = "mongodb+srv://admin:admin@main.k3etqo9.mongodb.net/?retryWrites=true&w=majority&appName=main";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function consultarDocumentos() {
  try {
    // 1. Conectar al servidor
    await client.connect();
    console.log("Conexión a MongoDB exitosa.");

    // 2. Seleccionar la base de datos y la colección
    const database = client.db("sample_mflix"); // <-- Reemplaza con el nombre de tu BD
    const collection = database.collection("sample_mflix.comments"); // <-- Reemplaza con el nombre de tu colección

    // 3. Realizar la consulta (find)
    // Usamos .find({}) sin argumentos para obtener todos los documentos.
    const cursor = collection.find({});
    
    // 4. Convertir los resultados a un array
    const resultados = await cursor.toArray();
    console.log("Documentos encontrados:", resultados);
    
    return resultados;

  } catch (error) {
    console.error("Error al conectar o consultar MongoDB:", error);
  } finally {
    // 5. Asegurarse de que el cliente se cierre al finalizar o en caso de error
    await client.close();
    console.log("Conexión cerrada.");
  }
}

// Exportamos la función para poder usarla en otros archivos
module.exports = { consultarDocumentos };
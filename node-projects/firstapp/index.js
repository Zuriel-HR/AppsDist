// npm install express
var express = require('express');
//Contenedor de Endpoints o WS Restful
var app = express(); 

//Cargamos JSON y Codificación de URL en nuesta app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Definiendo metodo en raiz con metodo Get
app.get("/", async function (request, response) {

    r ={
      'message':'Nothing to send'
    };

    response.json(r);
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});

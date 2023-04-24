//const express = require('express');
//const rutas = require('./rutas');
//const routes = require('./src/rutas');


const express= require('express');
const rutas = require('./rutas');
const routes = require('./src/rutas');
const app = express();

const port= 3000;
app.use('', routes);
rutas(app);

app.listen(port, function(){
    console.log("TAREA 3, app corriendo en el puerto ",port);
})

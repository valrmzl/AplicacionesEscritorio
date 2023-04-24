const path= require('path');
const express = require('express');
const routes = require('./src/rutas');
const app = express();

//handlebars
const {engine} = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
app.use('/assets', express.static(path.join(__dirname,'assets')));
const port = 3000;
app.use('', routes);

app.listen(port, function(){
    console.log("app corriendo en el puerto ", port);
});
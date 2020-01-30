const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

let tem1 = 0;
let tem2 = 0;
let tem3 = 0;
let tem4 = 0;
//############################################################################333

const axios = require('axios');

const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');

// este metodo asincronico nos muestra el clima de quito especificando coordenadas de quito
//el await es para que me de en tiempo real el clima
const getInfo = async() => {
    //Quito

    let clim = await clima.getClima(-0.19, -78.5).then(function(dato) {
        tem1 = dato;
        return dato;
    });
    let cl = await clima.getcl();

}
// este metodo asincronico nos muestra el clima de guayaquil especificando coordenadas de quito
//el await es para que me de en tiempo real el clima
const getInfo2 = async() => {
    //Guayaquil
    var clim = await clima.getClima(-2.1961601, -79.8862076).then(function(dato) {
        tem2 = dato;
        return dato;
    });
    let cl = await clima.getcl();

}
// este metodo asincronico nos muestra el clima de madtrid especificando coordenadas de quito
//el await es para que me de en tiempo real el clima
const getInfo3 = async() => {
    //Madrid
    var clim = await clima.getClima(-3.7025600, 40.4165000).then(function(dato) {
        tem3 = dato;
        return dato;
    });
    let cl = await clima.getcl();

}
// este metodo asincronico nos muestra el clima de paris especificando coordenadas de quito
//el await es para que me de en tiempo real el clima
const getInfo4 = async() => {
    //Paris
    var clim = await clima.getClima(2.3486000, 48.8534000).then(function(dato) {
        tem4 = dato;
        return dato;
    });
    let cl = await clima.getcl();

}

getInfo();
getInfo2();
getInfo3();
getInfo4();

//############################################################################333

//realizamos la busqueda de css y js, en esta carpeta public debemos de guardar todo lo que deseamos mostrar en nuestra pantalla
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// este es nuestra pantalla hom principal la que cuando deployemos el proyectp se mostrara automaticamente
app.get('/', function(req, res) {
    const grQui = tem1;
    const grGua = tem2;
    res.render('home', {
        gradosQui: "Temperatura "+ grQui,
        gradosGua: "Temperatura "+ grGua
    });
});

// nuestra segunda pantalla donde mostraremos el clima de madrid y paris
app.get('/about', (req, res) => {
    const grMad = tem3;
    const grPar = tem4;
    res.render('about', {
        gradosMad: "Temperatura "+grMad,
        gradosPar: "Temperatura "+grPar
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});





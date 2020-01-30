const axios = require('axios');

//este metodo nos ayuda mediante una api obtener la ubicacion geografica de una ciudad que nosotros mandemos como parametro.
const getCiudadLatLon = async(nombre) => {

    const ciudad = encodeURI(nombre);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'X-RapidAPI-Key': '8ac05538ebmsh1d8d2bb9ae49d50p1737a9jsn3064fa337c89' }
    });
//El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${nombre}`);
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        name,
        lat,
        lon
    }

}

//exportamos para poder utilizar en otra clase JS
module.exports = {
    getCiudadLatLon
}
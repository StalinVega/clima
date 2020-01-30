const hbs = require('hbs');

// Helpers son funciones que están a nuestra disposición sin depender de ningún objeto
//metodo que nos retorna el año actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

// metodo que nos retorna una palabra con un formato definido la primera en mayuscula.
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});
'use strict'

// Aqupi guardaremos las funciones que ejecutará la calculadora
// deacuerdo al endpoint solicitado

function sumar (require, response) { // Cada función recibe 2 parametros, los nombres los decides tu
    // el primer valor require nos trae la información que proviene del usuario, así como el navegador, su ip, sus cookies entre otros
    // el valor response se encarga de las respuestas que le enviamos a cada cliente
    if (!require.params.A || !require.params.B) {
        // devolvemos 400 (Lease http codes en wikipedia) para indicarle al usuario que nos faltan datos importantes
        return response.status(400).send({Mensaje: 'Falta que me envies datos'})
    }
    // si no nos faltan datos, respondemos con un 200 (OK) que todo se hizo satisfactoriamente
    return response.status(200).send({Resultado: require.params.A + require.params.B})
}

function restar (require, response) {
    if (!require.params.A || !require.params.B) {
        return response.status(400).send({Mensaje: 'Falta que me envies datos'})
    }
    return response.status(200).send({Resultado: require.params.A - require.params.B})
}

function multiplicar (require, response) {
    if (!require.params.A || !require.params.B) {
        return response.status(400).send({Mensaje: 'Falta que me envies datos'})
    }
    return response.status(200).send({Resultado: require.params.A * require.params.B})
}

function dividir (require, response) {
    if (!require.params.A || !require.params.B) {
        return response.status(400).send({Mensaje: 'Falta que me envies datos'})
    }
    return response.status(200).send({Resultado: require.params.A / require.params.B})
}

// todas las funciones se deberán exportar a través de module.exports para que 
// puedan ser usados en cualquier parte de la aplicación
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
}
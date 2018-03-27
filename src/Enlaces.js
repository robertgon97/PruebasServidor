// para empezar necesitamos de librerias para ahorrarnos un poco el codigo
// express nos sirve para las funciones basicas de un servidor
const Express = require ('express')
// esto nos ayuda a decodificar los datos que provienen del usuario
const BodyParser = require ('body-parser')
// ya no recuerdo para que pero era importante XD
const cors = require ('cors')
// Esto para consumir otras posibles aplicaciones que esten dentro de tu mismo servidor 
const MethodOverride = require ('method-override')

// Aqui corremos el servidor
const App = Express()
// Con estas lineas le añadimos funcionalidad al servidor como lo serian las respuestas de tipo JSON y otras cosas
App.use(BodyParser.urlencoded({extended:false}))
App.use(BodyParser.json())
App.use(MethodOverride())
App.use(cors())
App.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept')
    next()
})

// esto es nuestro primer endpoint
App.get('/api/combo/:ID', (req, res) => {
    if (!req.params.ID) {
        return res.status(400).send({Message: 'Necesitas enviarme un precio para cambiarlo a pesos', Ejemplo: '58000'})
    }
    var descuento = parseFloat(req.params.ID) * 0.44
    var cargo = 760;
    let resultado = parseFloat(req.params.ID) - descuento + cargo;
    return res.status(200).send({
        Total: resultado,
        Descuento: descuento,
        Recibi_de_ti: parseFloat(req.params.ID)
    })
}) 
App.get('/api/sumacombo/:COMBO/:COMB', (req, res) => {
    if (!req.params.COMBO || !req.params.COMB) {
        return res.status(400).send({Message: 'Necesitas enviarme la sumatoria', Ejemplo: 'base/api/sumacombo/COMBO1/COMBO2'})
    }
    var suma = parseFloat(req.params.COMBO) + parseFloat(req.params.COMB);
    let descuento = suma * 0.44
    let cargo = 760;
    let resultado = suma - descuento + cargo;
    return res.status(200).send({
        Total: resultado,
        Descuento: descuento,
        COMBO1: parseFloat(req.params.COMBO),
        COMBO2: parseFloat(req.params.COMB),
        Suma_de_combos: suma
    })
}) 

App.all('/*', (req,res) => {
    console.log(`Rechaze Peticion invalida de ${req.url} a traves del metodo ${req.originalMethod}`)
    res.status(404).send({StatusCode: 404, Data: '', Message: 'Esta página no existe', Results: 0})
})

module.exports = App
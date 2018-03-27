// Importamos el servidor gracias a module.exports que esta al final de la pagina de enlaces.js
const App = require('./src/Enlaces')

// aqui corremos el servidor a través de un puerto, en este caso es el puerto 8010
// El punto . es un señalador, lo que en PHP sería un  ->
App.listen(8010, () =>{
    console.log(`Servidor Corriendo en el Puerto: 8010!`)
})
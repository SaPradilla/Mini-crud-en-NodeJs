
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

require('./db')




// Base de datos mongoDB


 

//Servidor de escucha


app.listen(3000, function(){
    console.log('El servidor iniciado en: 3030')
})


// MIddleware
// Configuracion para recibir peticones 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


//Ruta metodo GET

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})  
 


//Ruta metodo POST
app.post('/formulario', (req, res) =>{
    
})
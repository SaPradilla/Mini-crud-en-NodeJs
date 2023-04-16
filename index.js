const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const sequelize = require('./db')

const Libros = require('./models/libros')


//Servidor de escucha


app.listen(3000, function(){
    console.log('El servidor iniciado en: 3000')

    //conectar bd
    sequelize.sync({ force: false}).then(() => {
        console.log('Te has conectado a la base de datos')
    }).catch(error =>{
        console.log('No te has conectado con la base de datos :C')
    })

})


// MIddleware
// Configuracion para recibir peticones 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


//Ruta metodo GET

app.get('/', (req, res) => {
   Libros.create({
    title: "No se",
    description: "Es un buen libro, genial!",
    autor: "Yo"
   }).then(libros => {
        res.json(libros)
   })

})  
 
    

//Ruta metodo POST
app.post('/formulario', (req, res) =>{
    console.log('Enviado')
})